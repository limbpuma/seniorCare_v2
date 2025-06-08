/**
 * Viewport Height Validator
 * Ensures header + hero section fit within 100vh on all devices
 */

class ViewportValidator {
  constructor() {
    this.headerSelector = 'header';
    this.heroSelector = '#hero-parallax-section';
    this.tolerance = 10; // 10px tolerance for measurements
  }

  /**
   * Validate that header + hero fit within viewport
   */
  validateViewportFit() {
    if (typeof window === 'undefined') return { valid: false, reason: 'No window object' };

    const header = document.querySelector(this.headerSelector);
    const hero = document.querySelector(this.heroSelector);
    
    if (!header || !hero) {
      return { 
        valid: false, 
        reason: 'Header or hero section not found',
        elements: { header: !!header, hero: !!hero }
      };
    }

    const viewportHeight = window.innerHeight;
    const headerHeight = header.getBoundingClientRect().height;
    const heroHeight = hero.getBoundingClientRect().height;
    const combinedHeight = headerHeight + heroHeight;

    const isValid = combinedHeight <= (viewportHeight + this.tolerance);
    
    return {
      valid: isValid,
      measurements: {
        viewport: viewportHeight,
        header: headerHeight,
        hero: heroHeight,
        combined: combinedHeight,
        excess: combinedHeight - viewportHeight
      },
      recommendation: isValid ? 'Perfect fit!' : 'Consider reducing header height or hero padding'
    };
  }

  /**
   * Get responsive breakpoint information
   */
  getBreakpointInfo() {
    const width = window.innerWidth;
    
    if (width < 768) return { name: 'mobile', width };
    if (width < 1024) return { name: 'tablet', width };
    return { name: 'desktop', width };
  }

  /**
   * Run comprehensive viewport validation
   */
  runValidation() {
    const breakpoint = this.getBreakpointInfo();
    const validation = this.validateViewportFit();
    
    return {
      timestamp: new Date().toISOString(),
      breakpoint,
      validation,
      userAgent: navigator.userAgent
    };
  }

  /**
   * Monitor viewport changes and validate continuously
   */
  startMonitoring(callback) {
    const monitor = () => {
      const result = this.runValidation();
      if (callback) callback(result);
      
      // Log to console for debugging
      if (!result.validation.valid) {
        console.warn('Viewport validation failed:', result);
      }
    };

    // Initial check
    monitor();
    
    // Monitor resize events
    window.addEventListener('resize', monitor);
    window.addEventListener('orientationchange', monitor);
    
    return () => {
      window.removeEventListener('resize', monitor);
      window.removeEventListener('orientationchange', monitor);
    };
  }
}

// Auto-initialize for debugging
if (typeof window !== 'undefined') {
  window.viewportValidator = new ViewportValidator();
  
  // Auto-validate on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const result = window.viewportValidator.runValidation();
        console.log('Viewport Validation Result:', result);
      }, 1000);
    });
  } else {
    setTimeout(() => {
      const result = window.viewportValidator.runValidation();
      console.log('Viewport Validation Result:', result);
    }, 1000);
  }
}

export default ViewportValidator;
