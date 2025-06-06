/**
 * WCAG 2.2 - 2.4.11 Focus Not Obscured Implementation
 * JavaScript utilities for focus management and scroll behavior
 * 
 * Features:
 * - Automatic scroll-into-view for focused elements
 * - Focus trap prevention
 * - Enhanced keyboard navigation
 * - Focus debugging tools
 */

class WCAGFocusManager {
  constructor() {
    this.focusedElement = null;
    this.lastFocusedElement = null;
    this.focusHistory = [];
    this.isTestMode = false;
    
    this.init();
  }

  init() {
    this.addFocusListeners();
    this.addKeyboardListeners();
    this.addScrollManagement();
    this.addTestMode();
    
    // Add skip link if not exists
    this.addSkipLink();
    
    console.log('WCAG 2.4.11 Focus Manager initialized');
  }

  /**
   * Add global focus event listeners
   */
  addFocusListeners() {
    document.addEventListener('focusin', (event) => {
      this.handleFocusIn(event);
    });

    document.addEventListener('focusout', (event) => {
      this.handleFocusOut(event);
    });

    document.addEventListener('keydown', (event) => {
      this.handleKeyDown(event);
    });
  }

  /**
   * Handle focus in events
   */
  handleFocusIn(event) {
    const element = event.target;
    
    // Store focus history
    this.lastFocusedElement = this.focusedElement;
    this.focusedElement = element;
    this.focusHistory.push(element);
    
    // Keep history manageable
    if (this.focusHistory.length > 10) {
      this.focusHistory.shift();
    }
    
    // Ensure element is visible
    this.ensureElementVisible(element);
    
    // Add debug info in test mode
    if (this.isTestMode) {
      this.addFocusDebugInfo(element);
    }
    
    // Log focus for debugging
    if (window.location.search.includes('focus-debug=true')) {
      console.log('Focus:', element.tagName, element.className, element);
    }
  }

  /**
   * Handle focus out events
   */
  handleFocusOut(event) {
    const element = event.target;
    
    // Remove debug info
    if (this.isTestMode) {
      this.removeFocusDebugInfo(element);
    }
  }

  /**
   * Handle keyboard navigation
   */
  handleKeyDown(event) {
    // ESC key - move focus to safe location
    if (event.key === 'Escape') {
      this.handleEscapeKey(event);
    }
    
    // F2 key - toggle test mode (when focus-debug is enabled)
    if (event.key === 'F2' && window.location.search.includes('focus-debug=true')) {
      event.preventDefault();
      this.toggleTestMode();
    }
    
    // Tab key - ensure proper focus management
    if (event.key === 'Tab') {
      this.handleTabKey(event);
    }
  }

  /**
   * Ensure focused element is always visible
   */
  ensureElementVisible(element) {
    if (!element || !element.getBoundingClientRect) return;
    
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    // Check if element is outside viewport
    const isOutOfView = (
      rect.top < 0 || 
      rect.bottom > viewportHeight ||
      rect.left < 0 ||
      rect.right > viewportWidth
    );
    
    if (isOutOfView) {
      // Smooth scroll into view with proper padding
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
      
      // Additional check for sticky headers (even though ours is static)
      setTimeout(() => {
        const headerHeight = this.getHeaderHeight();
        if (headerHeight > 0 && rect.top < headerHeight) {
          window.scrollBy({
            top: -(headerHeight + 20),
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }

  /**
   * Get header height (for future sticky header support)
   */
  getHeaderHeight() {
    const header = document.querySelector('header');
    if (header) {
      const computedStyle = window.getComputedStyle(header);
      if (computedStyle.position === 'fixed' || computedStyle.position === 'sticky') {
        return header.offsetHeight;
      }
    }
    return 0;
  }

  /**
   * Handle escape key functionality
   */
  handleEscapeKey(event) {
    const focusedElement = document.activeElement;
    
    // Close modals/dropdowns first
    const modal = focusedElement.closest('.modal, .dropdown, .overlay');
    if (modal) {
      this.closeModal(modal);
      return;
    }
    
    // Move focus to main content or skip link
    const main = document.querySelector('main') || document.querySelector('#main-content');
    if (main) {
      main.focus();
    } else {
      // Fallback to body
      document.body.focus();
    }
  }

  /**
   * Handle tab key navigation
   */
  handleTabKey(event) {
    // Get all focusable elements
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement);
    
    // Check for focus traps
    if (event.shiftKey) {
      // Shift+Tab - going backward
      if (currentIndex === 0) {
        // If at first element, ensure we can go to last
        this.ensureElementVisible(focusableElements[focusableElements.length - 1]);
      }
    } else {
      // Tab - going forward
      if (currentIndex === focusableElements.length - 1) {
        // If at last element, ensure we can go to first
        this.ensureElementVisible(focusableElements[0]);
      }
    }
  }

  /**
   * Get all focusable elements on the page
   */
  getFocusableElements() {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'details summary',
      '[contenteditable]'
    ].join(', ');
    
    return Array.from(document.querySelectorAll(focusableSelectors))
      .filter(element => {
        // Filter out hidden elements
        const style = window.getComputedStyle(element);
        return style.display !== 'none' && 
               style.visibility !== 'hidden' && 
               element.offsetParent !== null;
      });
  }

  /**
   * Add skip link if it doesn't exist
   */
  addSkipLink() {
    if (document.querySelector('.skip-link')) return;
    
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Zum Hauptinhalt springen';
    skipLink.style.cssText = `
      position: absolute;
      left: -9999px;
      top: -9999px;
      z-index: 999999;
    `;
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID if it doesn't exist
    const main = document.querySelector('main') || document.querySelector('.main-content');
    if (main && !main.id) {
      main.id = 'main-content';
      main.tabIndex = -1; // Make focusable programmatically
    }
  }

  /**
   * Add keyboard listeners for enhanced navigation
   */
  addKeyboardListeners() {
    // Alt+1: Jump to main content
    document.addEventListener('keydown', (event) => {
      if (event.altKey && event.key === '1') {
        event.preventDefault();
        const main = document.querySelector('#main-content, main');
        if (main) {
          main.focus();
          this.ensureElementVisible(main);
        }
      }
    });

    // Alt+2: Jump to navigation
    document.addEventListener('keydown', (event) => {
      if (event.altKey && event.key === '2') {
        event.preventDefault();
        const nav = document.querySelector('nav a, .nav-link');
        if (nav) {
          nav.focus();
          this.ensureElementVisible(nav);
        }
      }
    });
  }

  /**
   * Add scroll management for smooth focus transitions
   */
  addScrollManagement() {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Override smooth scrolling
      const style = document.createElement('style');
      style.textContent = `
        html {
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * Toggle test mode for focus debugging
   */
  toggleTestMode() {
    this.isTestMode = !this.isTestMode;
    document.body.classList.toggle('wcag-focus-test', this.isTestMode);
    
    if (this.isTestMode) {
      this.showTestPanel();
    } else {
      this.hideTestPanel();
    }
    
    console.log('Focus test mode:', this.isTestMode ? 'ON' : 'OFF');
  }

  /**
   * Add test mode functionality
   */
  addTestMode() {
    // Enable test mode if URL parameter is present
    if (window.location.search.includes('focus-test=true')) {
      this.toggleTestMode();
    }
  }

  /**
   * Show test panel for focus debugging
   */
  showTestPanel() {
    if (document.getElementById('wcag-focus-test-panel')) return;
    
    const panel = document.createElement('div');
    panel.id = 'wcag-focus-test-panel';
    panel.innerHTML = `
      <div style="
        position: fixed; 
        top: 10px; 
        right: 10px; 
        background: #000; 
        color: white; 
        padding: 15px; 
        border-radius: 8px; 
        z-index: 999999;
        max-width: 300px;
        font-family: monospace;
        font-size: 12px;
        line-height: 1.4;
      ">
        <h4 style="margin: 0 0 10px 0; color: #87ceeb;">WCAG 2.4.11 Focus Test</h4>
        <button id="wcag-focus-test-toggle" style="
          background: #005a9d; 
          color: white; 
          border: none; 
          padding: 8px 12px; 
          border-radius: 4px; 
          cursor: pointer;
          width: 100%;
          margin-bottom: 8px;
        ">
          Disable Focus Test Mode
        </button>
        <div style="font-size: 10px; opacity: 0.8; line-height: 1.4;">
          <strong>Tests:</strong> Tab navigation, ESC functionality, scroll-into-view, focus visibility
          <br><strong>Keys:</strong> F2=Toggle, Alt+1=Main, Alt+2=Nav
        </div>
        <div id="focus-info" style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #333;">
          <div>Current Focus: <span id="current-focus">none</span></div>
          <div>Focus History: <span id="focus-count">0</span></div>
        </div>
      </div>
    `;
    
    document.body.appendChild(panel);
    
    // Add click handler
    document.getElementById('wcag-focus-test-toggle').addEventListener('click', () => {
      this.toggleTestMode();
    });
    
    // Update focus info
    this.updateFocusInfo();
  }

  /**
   * Hide test panel
   */
  hideTestPanel() {
    const panel = document.getElementById('wcag-focus-test-panel');
    if (panel) {
      panel.remove();
    }
  }

  /**
   * Add debug info to focused element
   */
  addFocusDebugInfo(element) {
    this.updateFocusInfo();
  }

  /**
   * Remove debug info from element
   */
  removeFocusDebugInfo(element) {
    // Cleanup any temporary debug markers
  }

  /**
   * Update focus information display
   */
  updateFocusInfo() {
    const currentFocusEl = document.getElementById('current-focus');
    const focusCountEl = document.getElementById('focus-count');
    
    if (currentFocusEl && this.focusedElement) {
      const tagName = this.focusedElement.tagName?.toLowerCase() || 'unknown';
      const className = this.focusedElement.className || '';
      const id = this.focusedElement.id || '';
      
      currentFocusEl.textContent = `${tagName}${id ? '#' + id : ''}${className ? '.' + className.split(' ')[0] : ''}`;
    }
    
    if (focusCountEl) {
      focusCountEl.textContent = this.focusHistory.length.toString();
    }
  }

  /**
   * Close modal/dropdown
   */
  closeModal(modal) {
    // Generic modal close functionality
    modal.style.display = 'none';
    modal.classList.add('hidden');
    
    // Try to restore focus to last focused element
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.wcagFocusManager = new WCAGFocusManager();
  });
} else {
  window.wcagFocusManager = new WCAGFocusManager();
}

// Export for manual testing
window.WCAGFocusManager = WCAGFocusManager;
