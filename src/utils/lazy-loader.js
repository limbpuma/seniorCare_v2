/**
 * Lazy Loading System for Performance Optimization
 * Reduces initial JavaScript bundle size by loading components on-demand
 */

class LazyLoader {
  constructor() {
    this.loadedModules = new Set();
    this.pendingLoads = new Map();
    this.observers = new Map();
  }

  /**
   * Load WCAG utilities only when needed
   */
  async loadWCAGUtilities() {
    if (this.loadedModules.has('wcag-utilities')) {
      return;
    }

    const loadPromises = [
      this.loadScript('/src/utils/wcag-text-spacing-test.js'),
      this.loadScript('/src/utils/wcag-focus-not-obscured.js'),
      this.loadScript('/src/utils/wcag-content-hover-focus.js'),
      this.loadScript('/src/utils/wcag-focus-visible-enhancement.js')
    ];

    try {
      await Promise.all(loadPromises);
      this.loadedModules.add('wcag-utilities');
      console.log('✅ WCAG utilities loaded lazily');
    } catch (error) {
      console.error('❌ Error loading WCAG utilities:', error);
    }
  }

  /**
   * Load comprehensive WCAG test suite only when explicitly needed
   */
  async loadWCAGTestSuite() {
    if (this.loadedModules.has('wcag-test-suite')) {
      return;
    }

    try {
      await this.loadScript('/src/utils/wcag22-comprehensive-test.js');
      this.loadedModules.add('wcag-test-suite');
      console.log('✅ WCAG test suite loaded lazily');
    } catch (error) {
      console.error('❌ Error loading WCAG test suite:', error);
    }
  }

  /**
   * Load Flowbite on first user interaction
   */
  async loadFlowbite() {
    if (this.loadedModules.has('flowbite')) {
      return;
    }

    try {
      await this.loadScript('https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js');
      this.loadedModules.add('flowbite');
      console.log('✅ Flowbite loaded lazily');
    } catch (error) {
      console.error('❌ Error loading Flowbite:', error);
    }
  }

  /**
   * Load Swiper only when sliders are present
   */
  async loadSwiper() {
    if (this.loadedModules.has('swiper')) {
      return;
    }

    try {
      // Load CSS first
      await this.loadCSS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
      // Then load JS
      await this.loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
      this.loadedModules.add('swiper');
      console.log('✅ Swiper loaded lazily');
    } catch (error) {
      console.error('❌ Error loading Swiper:', error);
    }
  }

  /**
   * Generic script loader with caching
   */
  loadScript(src) {
    if (this.pendingLoads.has(src)) {
      return this.pendingLoads.get(src);
    }

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'module';
      script.async = true;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      
      document.head.appendChild(script);
    });

    this.pendingLoads.set(src, promise);
    return promise;
  }

  /**
   * Generic CSS loader
   */
  loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
      
      document.head.appendChild(link);
    });
  }

  /**
   * Setup intersection observer for components
   */
  observeComponent(element, loadCallback) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadCallback();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(element);
    return observer;
  }

  /**
   * Setup user interaction listeners for lazy loading
   */
  setupInteractionLoading() {
    const events = ['click', 'scroll', 'keydown', 'touchstart'];
    
    // Load Flowbite on first interaction
    const loadFlowbiteOnce = () => {
      this.loadFlowbite();
      events.forEach(event => {
        document.removeEventListener(event, loadFlowbiteOnce);
      });
    };

    events.forEach(event => {
      document.addEventListener(event, loadFlowbiteOnce, { 
        once: true, 
        passive: true 
      });
    });

    // Load WCAG utilities after a delay or on specific interactions
    setTimeout(() => {
      this.loadWCAGUtilities();
    }, 2000); // Load after 2 seconds for basic functionality
  }

  /**
   * Check for sliders and load Swiper if needed
   */
  checkAndLoadSliders() {
    const swiperElements = document.querySelectorAll('.swiper, [class*="swiper"]');
    if (swiperElements.length > 0) {
      this.loadSwiper();
    }
  }

  /**
   * Initialize lazy loading system
   */
  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupInteractionLoading();
        this.checkAndLoadSliders();
      });
    } else {
      this.setupInteractionLoading();
      this.checkAndLoadSliders();
    }
  }
}

// Create global instance
window.lazyLoader = new LazyLoader();

// Auto-initialize
window.lazyLoader.init();

export default LazyLoader;
