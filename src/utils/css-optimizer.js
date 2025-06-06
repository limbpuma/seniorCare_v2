/**
 * Critical CSS Optimizer
 * Separates critical CSS from non-critical for better loading performance
 */

// Critical CSS - Above the fold content only
export const criticalCSS = `
/* Critical layout styles - loaded immediately */
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  background-color: white;
}

/* Critical header and navigation styles */
header {
  position: relative;
  z-index: 50;
}

/* Critical main content styles */
main {
  position: relative;
  min-height: 50vh;
}

/* Critical loading states */
.loading-placeholder {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Essential responsive breakpoints */
@media (max-width: 768px) {
  main { padding: 1rem; }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

// Non-critical CSS - Loaded after page render
export const nonCriticalCSS = `
/* Animation styles - loaded after critical content */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes gridIn {
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
}

.animate-on-scroll {
  opacity: 0;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-on-scroll.show {
  opacity: 1;
}

.fade-in.show { 
  animation: fadeIn 0.8s ease-out forwards;
}

.slide-in.show {
  animation: slideIn 0.8s ease-out forwards;
}

.zoom-in.show {
  animation: zoomIn 0.8s ease-out forwards;
}

.grid-in.show {
  animation: gridIn 0.8s ease-out forwards;
}

/* Parallax styles - non-critical */
.parallax {
  overflow: hidden;
  position: relative;
}

.parallax.show .parallax-bg {
  animation: fadeIn 0.8s ease-out forwards;
}

.parallax.show::before {
  animation: parallaxEffect 0.6s forwards;
}

.parallax-container {
  clip: rect(0, auto, auto, 0);
}

.parallax-image,
.parallax-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  object-fit: cover;
  opacity: 0.7;
}

@supports (-webkit-touch-callout: none) {
  .parallax-image,
  .parallax-video {
    position: absolute;
    height: 100vh;
    height: -webkit-fill-available;
  }
}

/* Component-specific styles that can be loaded later */
.slider-fallback {
  transition: opacity 0.3s ease;
}

.fallback-slide {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
`;

/**
 * CSS Loading Manager - Handles critical vs non-critical CSS loading
 */
export class CSSLoadingManager {
  constructor() {
    this.loadedSheets = new Set();
  }

  /**
   * Inject critical CSS immediately
   */
  injectCriticalCSS() {
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);
  }

  /**
   * Load non-critical CSS after page load
   */
  loadNonCriticalCSS() {
    if (this.loadedSheets.has('non-critical')) return;

    const style = document.createElement('style');
    style.textContent = nonCriticalCSS;
    style.setAttribute('data-non-critical', 'true');
    document.head.appendChild(style);
    
    this.loadedSheets.add('non-critical');
  }

  /**
   * Load CSS file asynchronously
   */
  async loadCSSFile(href, id = null) {
    if (id && this.loadedSheets.has(id)) return;

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      if (id) link.id = id;
      
      link.onload = () => {
        if (id) this.loadedSheets.add(id);
        resolve();
      };
      link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
      
      document.head.appendChild(link);
    });
  }

  /**
   * Preload CSS for better performance
   */
  preloadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'style';
    link.onload = function() {
      this.onload = null;
      this.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  }

  /**
   * Initialize CSS loading strategy
   */
  init() {
    // Inject critical CSS immediately
    this.injectCriticalCSS();

    // Load non-critical CSS after page load
    if (document.readyState === 'complete') {
      this.loadNonCriticalCSS();
    } else {
      window.addEventListener('load', () => {
        // Small delay to ensure critical rendering is complete
        setTimeout(() => this.loadNonCriticalCSS(), 100);
      });
    }
  }
}

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
  const cssManager = new CSSLoadingManager();
  cssManager.init();
}

export default CSSLoadingManager;
