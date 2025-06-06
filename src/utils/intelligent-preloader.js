/**
 * Intelligent Preloading System
 * Preloads critical resources based on user behavior and page context
 * Optimized for performance and WCAG compliance
 */

class IntelligentPreloader {
  constructor() {
    this.preloadedResources = new Set();
    this.intersectionObserver = null;
    this.userInteracted = false;
    this.connectionType = this.getConnectionType();
    this.prefersReducedData = this.prefersReducedData();
    this.isWCAGTestPage = this.isWCAGTestPage();
    this.browserSupportsModules = this.checkModuleSupport();
    this.startTime = Date.now();
  }

  /**
   * Get user's connection type for adaptive loading
   */  getConnectionType() {
    if ('connection' in navigator) {
      // @ts-ignore: Using non-standard browser properties for compatibility
      const connection = navigator.connection || navigator.webkitConnection;
      return {
        effectiveType: connection?.effectiveType || '4g',
        saveData: connection?.saveData || false,
        downlink: connection?.downlink || 10
      };
    }
    return { effectiveType: '4g', saveData: false, downlink: 10 };
  }

  /**
   * Check if user prefers reduced data usage
   */
  prefersReducedData() {
    return this.connectionType.saveData || 
           this.connectionType.effectiveType === 'slow-2g' || 
           this.connectionType.effectiveType === '2g';
  }

  /**
   * Check if current page is a WCAG test page
   */
  isWCAGTestPage() {
    return window.location.pathname.includes('wcag') || 
           window.location.search.includes('wcag') || 
           window.location.search.includes('a11y') ||
           window.location.pathname.includes('accessibility');
  }

  /**
   * Check if browser supports ES modules
   */
  checkModuleSupport() {
    try {
      new Function('import("")');
      return true;
    } catch (err) {
      return false;
    }
  }
  /**
   * Preload critical CSS files
   */
  preloadCriticalCSS() {
    // Only load the bare minimum CSS files needed for first paint
    const criticalCSSFiles = [
      '/src/styles/main.css'
    ];

    // Add WCAG CSS only if necessary
    if (this.isWCAGTestPage) {
      criticalCSSFiles.push('/src/styles/wcag-text-spacing.css');
      criticalCSSFiles.push('/src/styles/wcag-focus-not-obscured.css');
    }

    criticalCSSFiles.forEach(href => {
      this.preloadResource(href, 'style', 'high');
    });

    // Schedule non-critical CSS to load after page paint
    setTimeout(() => {
      if (!this.isWCAGTestPage) {
        this.preloadResource('/src/styles/wcag-text-spacing.css', 'style', 'low');
        this.preloadResource('/src/styles/wcag-focus-not-obscured.css', 'style', 'low');
      }
      this.preloadResource('/src/styles/wcag-content-hover-focus.css', 'style', 'low');
      this.preloadResource('/src/styles/wcag-focus-visible-enhancement.css', 'style', 'low');
    }, 2000);
  }

  /**
   * Preload resources based on connection quality
   */
  adaptivePreloading() {
    // Always preload critical CSS regardless of connection
    this.preloadCriticalCSS();

    // For good connections, preload more resources
    if (!this.prefersReducedData) {
      const elapsedTime = Date.now() - this.startTime;
      
      // If page loaded quickly, we can preload more
      if (elapsedTime < 1000) {
        this.preloadCommonImages();
        this.preloadCriticalFonts();
      } else {
        // Delay loading of less critical resources
        setTimeout(() => {
          this.preloadCommonImages();
          this.preloadCriticalFonts();
        }, 1000);
      }
    }
  }

  /**
   * Preload common images that appear on multiple pages
   */  preloadCommonImages() {
    const commonImages = [
      '/assets/img/senior_citizen_face.webp',
      '/assets/img/nurse_doctor_senior_care.webp'
    ];

    commonImages.forEach(src => {
      this.preloadResource(src, 'image');
    });
  }

  /**
   * Preload critical fonts
   */
  preloadCriticalFonts() {
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap'
    ];

    criticalFonts.forEach(href => {
      this.preloadResource(href, 'style');
    });
  }

  /**
   * Generic resource preloader
   */
  preloadResource(href, as, crossorigin = null) {
    if (this.preloadedResources.has(href)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    
    if (crossorigin) {
      link.crossOrigin = crossorigin;
    }

    if (as === 'style') {
      link.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
      };
    }

    document.head.appendChild(link);
    this.preloadedResources.add(href);
  }

  /**
   * Preload resources when they come into viewport
   */
  setupIntersectionPreloading() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Preload images
          if (element.dataset.preloadSrc) {
            this.preloadResource(element.dataset.preloadSrc, 'image');
          }
          
          // Preload page resources for internal links
          if (element.tagName === 'A' && element.href && element.href.startsWith(window.location.origin)) {
            this.preloadPage(element.href);
          }

          this.intersectionObserver.unobserve(element);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '100px' // Start preloading 100px before element is visible
    });

    // Observe all images and links
    document.querySelectorAll('img[data-preload-src], a[href^="/"]').forEach(el => {
      this.intersectionObserver.observe(el);
    });
  }

  /**
   * Preload next page resources on link hover
   */
  setupHoverPreloading() {
    let hoverTimeout;

    document.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'A' && e.target.href && e.target.href.startsWith(window.location.origin)) {
        hoverTimeout = setTimeout(() => {
          this.preloadPage(e.target.href);
        }, 100); // Small delay to avoid preloading on quick mouse movements
      }
    });

    document.addEventListener('mouseout', () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    });
  }

  /**
   * Preload page resources
   */
  preloadPage(url) {
    if (this.preloadedResources.has(url)) return;

    // Don't preload on slow connections
    if (this.prefersReducedData) return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
    
    this.preloadedResources.add(url);
  }

  /**
   * Setup user interaction detection
   */
  setupInteractionDetection() {
    const interactionEvents = ['click', 'scroll', 'keydown', 'touchstart'];
    
    const markInteracted = () => {
      this.userInteracted = true;
      interactionEvents.forEach(event => {
        document.removeEventListener(event, markInteracted);
      });
      
      // Start more aggressive preloading after first interaction
      this.setupHoverPreloading();
    };

    interactionEvents.forEach(event => {
      document.addEventListener(event, markInteracted, { 
        once: true, 
        passive: true 
      });
    });
  }

  /**
   * Cleanup resources
   */
  cleanup() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  /**
   * Initialize the preloader
   */
  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.startPreloading();
      });
    } else {
      this.startPreloading();
    }
  }

  /**
   * Start preloading process
   */
  startPreloading() {
    // Start with adaptive preloading immediately
    this.adaptivePreloading();
    
    // Setup interaction-based preloading
    this.setupInteractionDetection();
    
    // Setup intersection-based preloading after a short delay
    setTimeout(() => {
      this.setupIntersectionPreloading();
    }, 1000);
  }
}

// Create global instance
if (typeof window !== 'undefined') {
  window.intelligentPreloader = new IntelligentPreloader();
  window.intelligentPreloader.init();
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    window.intelligentPreloader.cleanup();
  });
}

export default IntelligentPreloader;
