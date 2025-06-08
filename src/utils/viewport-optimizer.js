/**
 * Dynamic Header Height Calculator for Viewport Optimization
 * This script dynamically measures the actual header height and adjusts
 * the hero section accordingly to ensure header + hero = 100vh exactly
 */

class ViewportOptimizer {
  constructor() {
    this.header = null;
    this.heroSection = null;
    this.isInitialized = false;
    this.resizeTimeout = null;
    this.measurementCache = new Map();
  }

  init() {
    if (this.isInitialized) return;
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupOptimizer());
    } else {
      this.setupOptimizer();
    }
  }

  setupOptimizer() {
    this.header = document.querySelector('header');
    this.heroSection = document.getElementById('hero-parallax-section');
    
    if (!this.header || !this.heroSection) {
      console.warn('ViewportOptimizer: Header or hero section not found');
      return;
    }

    this.isInitialized = true;
    this.optimizeViewport();
    this.setupResizeHandler();
    this.setupObserver();
  }

  measureHeaderHeight() {
    if (!this.header) return 0;
    
    const viewportWidth = window.innerWidth;
    const cacheKey = this.getBreakpointKey(viewportWidth);
    
    // Use cached measurement if available and recent
    if (this.measurementCache.has(cacheKey)) {
      const cached = this.measurementCache.get(cacheKey);
      if (Date.now() - cached.timestamp < 1000) { // 1 second cache
        return cached.height;
      }
    }

    // Force a reflow to get accurate measurements
    this.header.style.height = 'auto';
    const height = this.header.getBoundingClientRect().height;
    
    // Cache the measurement
    this.measurementCache.set(cacheKey, {
      height: height,
      timestamp: Date.now()
    });
    
    return height;
  }

  getBreakpointKey(width) {
    if (width >= 2560) return '4k';
    if (width >= 1920) return 'uhd';
    if (width >= 1536) return '2xl';
    if (width >= 1280) return 'xl';
    if (width >= 1024) return 'lg';
    if (width >= 768) return 'md';
    if (width >= 640) return 'sm';
    return 'xs';
  }

  optimizeViewport() {
    if (!this.heroSection) return;

    const headerHeight = this.measureHeaderHeight();
    const viewportHeight = window.innerHeight;
    const targetHeroHeight = Math.max(viewportHeight - headerHeight, 300); // Minimum 300px
    
    // Apply the calculated height
    this.heroSection.style.minHeight = `${targetHeroHeight}px`;
    this.heroSection.style.height = `${targetHeroHeight}px`;
    
    // Add a CSS custom property for other components to use
    document.documentElement.style.setProperty('--calculated-hero-height', `${targetHeroHeight}px`);
    document.documentElement.style.setProperty('--measured-header-height', `${headerHeight}px`);
    
    // Debug information in development
    if (this.isDevelopment()) {
      this.logOptimization(headerHeight, targetHeroHeight, viewportHeight);
    }
  }

  setupResizeHandler() {
    window.addEventListener('resize', () => {
      // Clear measurement cache on resize
      this.measurementCache.clear();
      
      // Debounce resize handling
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      
      this.resizeTimeout = setTimeout(() => {
        this.optimizeViewport();
      }, 100);
    });
  }

  setupObserver() {
    // Watch for header changes (dynamic content, font loading, etc.)
    if ('ResizeObserver' in window && this.header) {
      const headerObserver = new ResizeObserver(() => {
        this.measurementCache.clear();
        this.optimizeViewport();
      });
      
      headerObserver.observe(this.header);
    }
  }

  isDevelopment() {
    return location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  }

  logOptimization(headerHeight, heroHeight, viewportHeight) {
    const total = headerHeight + heroHeight;
    const percentage = ((total / viewportHeight) * 100).toFixed(1);
    const breakpoint = this.getBreakpointKey(window.innerWidth);
    
    console.log(`🔧 Viewport Optimization [${breakpoint.toUpperCase()}]`);
    console.log(`📏 Viewport: ${window.innerWidth}x${viewportHeight}px`);
    console.log(`📐 Header: ${headerHeight.toFixed(1)}px`);
    console.log(`🎯 Hero: ${heroHeight.toFixed(1)}px`);
    console.log(`📊 Total: ${total.toFixed(1)}px (${percentage}% of viewport)`);
    console.log(`✅ Status: ${percentage <= 100 ? 'OPTIMIZED' : '⚠️ EXCEEDS 100vh'}`);
    console.log('---');
  }

  // Public method to force recalculation
  recalculate() {
    this.measurementCache.clear();
    this.optimizeViewport();
  }

  // Get current measurements for debugging
  getMeasurements() {
    const headerHeight = this.measureHeaderHeight();
    const heroHeight = this.heroSection ? this.heroSection.getBoundingClientRect().height : 0;
    const viewportHeight = window.innerHeight;
    
    return {
      viewport: { width: window.innerWidth, height: viewportHeight },
      header: headerHeight,
      hero: heroHeight,
      total: headerHeight + heroHeight,
      percentage: ((headerHeight + heroHeight) / viewportHeight * 100).toFixed(1),
      breakpoint: this.getBreakpointKey(window.innerWidth)
    };
  }
}

// Auto-initialize on script load
const viewportOptimizer = new ViewportOptimizer();
viewportOptimizer.init();

// Make available globally for debugging
if (typeof window !== 'undefined') {
  window.viewportOptimizer = viewportOptimizer;
}

export default ViewportOptimizer;
