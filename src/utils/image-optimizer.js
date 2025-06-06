/**
 * Image Performance Optimizer
 * Handles lazy loading, format optimization, responsive images, and WCAG compliance
 */

class ImageOptimizer {
  constructor() {
    this.observer = null;
    this.supportsWebP = null;
    this.supportsAVIF = null;
    this.loadedImages = new Set();
    this.startTime = Date.now();
    this.perfMetrics = { 
      imagesLazyLoaded: 0, 
      imagesBytesOptimized: 0,
      avgLoadTime: 0,
      totalLoadTime: 0
    };
    this.checkFormatSupport();
  }

  /**
   * Check browser support for modern image formats
   */
  async checkFormatSupport() {
    // Check WebP support
    this.supportsWebP = await this.checkImageFormat('data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA');
    
    // Check AVIF support (higher compression, smaller file size)
    this.supportsAVIF = await this.checkImageFormat('data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=');
    
    // Log format support for debugging
    if (window.location.hostname === 'localhost') {
      console.log(`📷 Image format support: WebP=${this.supportsWebP}, AVIF=${this.supportsAVIF}`);
    }
  }

  /**
   * Check if browser supports a specific image format
   */
  checkImageFormat(dataUri) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = dataUri;
    });
  }

  /**
   * Get optimal image format based on browser support
   */
  getOptimalFormat(baseName) {
    if (this.supportsAVIF) {
      return `${baseName}.avif`;
    }
    if (this.supportsWebP) {
      return `${baseName}.webp`;
    }
    return `${baseName}.jpg`; // Fallback
  }

  /**
   * Create optimized image element with lazy loading
   */
  createOptimizedImage(src, alt, className = '', sizes = null) {
    const img = document.createElement('img');
    const baseName = src.replace(/\.[^/.]+$/, ""); // Remove extension
    
    // Set up picture element for format optimization
    const picture = document.createElement('picture');
    
    // AVIF source
    if (this.supportsAVIF) {
      const avifSource = document.createElement('source');
      avifSource.srcset = `${baseName}.avif`;
      avifSource.type = 'image/avif';
      if (sizes) avifSource.sizes = sizes;
      picture.appendChild(avifSource);
    }
    
    // WebP source
    if (this.supportsWebP) {
      const webpSource = document.createElement('source');
      webpSource.srcset = `${baseName}.webp`;
      webpSource.type = 'image/webp';
      if (sizes) webpSource.sizes = sizes;
      picture.appendChild(webpSource);
    }
    
    // Fallback image
    img.src = src;
    img.alt = alt;
    img.className = className;
    img.loading = 'lazy';
    img.decoding = 'async';
    
    if (sizes) {
      img.sizes = sizes;
    }
    
    picture.appendChild(img);
    return picture;
  }
  /**
   * Setup intersection observer for lazy loading with priority
   */
  setupLazyLoading() {
    // Use requestIdleCallback where available for non-critical images
    const scheduleLoad = (callback) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 2000 });
      } else {
        setTimeout(callback, 1);
      }
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const isPriority = img.dataset.priority === 'high';
          
          // Load high priority images immediately
          if (isPriority) {
            this.loadImage(img);
          } else {
            // Load non-critical images during idle time
            scheduleLoad(() => this.loadImage(img));
          }
          
          this.observer.unobserve(img);
        }
      });
    }, {
      threshold: 0.01, // Start loading at just 1% visibility
      rootMargin: '200px' // Increased margin to load earlier
    });

    // Initialize performance tracking for images
    window.performance.mark('lazy-loading-start');

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      // Add appropriate WCAG-compliant attributes
      if (!img.alt) {
        img.alt = img.dataset.alt || ''; // Empty alt for decorative images
      }
      
      // For screen readers during loading
      if (!img.getAttribute('aria-busy')) {
        img.setAttribute('aria-busy', 'true');
      }
      
      this.observer.observe(img);
    });
  }  /**
   * Load image with fallback handling and performance tracking
   */
  loadImage(img) {
    const src = img.dataset.src;
    const fallback = img.dataset.fallback;
    const startTime = performance.now();
    
    if (this.loadedImages.has(src)) return;

    // Create a new image to test loading
    const testImg = new Image();
    
    testImg.onload = () => {
      // Apply image to DOM
      img.src = src;
      img.classList.add('loaded');
      this.loadedImages.add(src);
      
      // Remove loading indicator
      img.removeAttribute('aria-busy');
      
      // Track performance metrics
      const loadTime = performance.now() - startTime;
      this.perfMetrics.imagesLazyLoaded++;
      this.perfMetrics.totalLoadTime += loadTime;
      this.perfMetrics.avgLoadTime = this.perfMetrics.totalLoadTime / this.perfMetrics.imagesLazyLoaded;
      
      // Estimate bytes saved using WebP/AVIF
      if (src.includes('.webp') || src.includes('.avif')) {
        // Assume ~30% savings for WebP and ~50% for AVIF compared to JPEG
        const estimatedOriginalSize = testImg.naturalWidth * testImg.naturalHeight * 0.2; // Rough JPEG size estimate
        const savings = src.includes('.webp') ? estimatedOriginalSize * 0.3 : estimatedOriginalSize * 0.5;
        this.perfMetrics.imagesBytesOptimized += savings;
      }
      
      // Report to performance timeline
      if (window.performance && window.performance.measure) {
        try {
          window.performance.measure(`image-load-${src}`, { 
            start: startTime,
            end: performance.now()
          });
        } catch (e) {
          // Ignore measure errors
        }
      }
    };
    
    testImg.onerror = () => {
      if (fallback) {
        img.src = fallback;
        img.classList.add('loaded', 'fallback');
        img.removeAttribute('aria-busy');
      } else {
        // Add error class for CSS styling
        img.classList.add('error');
        img.removeAttribute('aria-busy');
        img.setAttribute('aria-hidden', 'true');
        
        // Create error indicator for accessibility
        const errorMsg = document.createElement('span');
        errorMsg.className = 'img-error';
        errorMsg.setAttribute('role', 'status');
        errorMsg.textContent = 'Bild konnte nicht geladen werden';
        img.parentNode.insertBefore(errorMsg, img.nextSibling);
      }
    };
    
    testImg.src = src;
  }

  /**
   * Convert existing images to lazy loading
   */
  convertToLazyLoading() {
    const images = document.querySelectorAll('img:not([data-src]):not([loading="lazy"])');
    
    images.forEach(img => {
      // Skip if already processed or is above fold
      if (img.getBoundingClientRect().top < window.innerHeight) {
        return; // Keep above-fold images for immediate loading
      }
      
      // Convert to lazy loading
      const originalSrc = img.src;
      img.dataset.src = originalSrc;
      img.src = this.createPlaceholder(img.width || 400, img.height || 300);
      img.loading = 'lazy';
      
      this.observer.observe(img);
    });
  }
  /**
   * Create SVG placeholder for lazy loading
   */
  createPlaceholder(width, height, color = '#f0f0f0') {
    // Create simple SVG placeholder
    const svgContent = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${color}"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999" font-family="sans-serif" font-size="14">
          Loading...
        </text>
      </svg>    `;
    
    // Use a safer alternative to btoa for base64 encoding
    const encodedSvg = Buffer.from(svgContent).toString('base64');
    return `data:image/svg+xml;base64,${encodedSvg}`;
  }  /**
   * Preload critical images
   */
  preloadCriticalImages() {
    const criticalImages = document.querySelectorAll('img[data-critical="true"]');
    
    criticalImages.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src || img.dataset.src || '';
      document.head.appendChild(link);
    });
  }

  /**
   * Setup responsive images based on viewport
   */
  setupResponsiveImages() {
    const images = document.querySelectorAll('img[data-responsive]');
    
    images.forEach(img => {
      if (!img.dataset.responsive) return;
      
      try {
        const breakpoints = JSON.parse(img.dataset.responsive);
        const currentWidth = window.innerWidth;
        
        let selectedSrc = img.src;
        
        Object.keys(breakpoints).forEach(breakpoint => {
          if (currentWidth >= parseInt(breakpoint)) {
            selectedSrc = breakpoints[breakpoint];
          }
        });
        
        if (selectedSrc !== img.src) {
          img.dataset.src = selectedSrc;
          if (this.observer) {
            this.observer.observe(img);
          }
        }
      } catch (error) {
        console.warn('Error parsing responsive breakpoints:', error);
      }
    });
  }
  /**
   * Initialize image optimization
   */
  init() {
    // Wait for format support detection
    const initAfterFormatCheck = () => {
      if (this.supportsWebP !== null && this.supportsAVIF !== null) {
        this.setupLazyLoading();
        this.convertToLazyLoading();
        this.preloadCriticalImages();
        this.setupResponsiveImages();
      } else {
        setTimeout(initAfterFormatCheck, 10);
      }
    };
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAfterFormatCheck);
    } else {
      initAfterFormatCheck();
    }
  }
  /**
   * Cleanup
   */
  cleanup() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// CSS for image loading states
const imageOptimizerCSS = `
  img {
    transition: opacity 0.3s ease;
  }
  
  img[data-src] {
    opacity: 0.7;
  }
  
  img.loaded {
    opacity: 1;
  }
  
  img.error {
    opacity: 0.5;
    filter: grayscale(100%);
  }
  
  img.fallback {
    opacity: 0.8;
  }
  
  /* Loading animation for placeholders */
  img[src^="data:image/svg+xml"] {
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 0.4; }
  }
`;

// Inject CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = imageOptimizerCSS;
  document.head.appendChild(style);
}

// Create global instance
if (typeof window !== 'undefined') {
  window.imageOptimizer = new ImageOptimizer();
  window.imageOptimizer.init();
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    window.imageOptimizer.cleanup();
  });
}

export default ImageOptimizer;
