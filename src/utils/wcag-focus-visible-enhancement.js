/**
 * WCAG 2.2 - Criterion 2.4.7: Focus Visible (AA) - Enhancement
 * 
 * JavaScript utilities for enhanced focus visibility and management.
 * Provides programmatic control over focus indicators and user preferences.
 */

class WCAGFocusVisibleEnhancement {
  constructor() {
    this.focusMethod = null;
    this.focusHistory = [];
    this.preferredFocusStyle = 'enhanced';
    this.debugMode = false;
    this.init();
  }

  /**
   * Initialize the enhanced focus visibility system
   */
  init() {
    this.detectFocusMethod();
    this.setupUserPreferences();
    this.setupEventListeners();
    this.addTestingControls();
    this.enhanceExistingElements();
    console.log('🎯 WCAG 2.4.7 Focus Visible Enhancement - Initialized');
  }

  /**
   * Detect how user is focusing (mouse vs keyboard)
   */
  detectFocusMethod() {
    // Track mouse usage
    document.addEventListener('mousedown', () => {
      this.focusMethod = 'mouse';
      document.body.setAttribute('data-focus-method', 'mouse');
    });

    // Track keyboard usage
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' || e.key === 'Enter' || e.key === ' ') {
        this.focusMethod = 'keyboard';
        document.body.setAttribute('data-focus-method', 'keyboard');
      }
    });

    // Enhanced focus for keyboard users
    document.addEventListener('focusin', (e) => {
      if (this.focusMethod === 'keyboard') {
        this.enhanceFocusForElement(e.target);
      }
      this.trackFocusHistory(e.target);
    });
  }

  /**
   * Set up user preference detection and respect
   */
  setupUserPreferences() {
    // Detect user preferences
    this.detectHighContrast();
    this.detectReducedMotion();
    this.detectColorScheme();
    this.detectForcedColors();

    // Apply appropriate focus enhancements
    this.applyFocusEnhancements();

    // Listen for preference changes
    this.setupPreferenceListeners();
  }

  /**
   * Detect high contrast preference
   */
  detectHighContrast() {
    const highContrast = window.matchMedia('(prefers-contrast: high)').matches ||
                        window.matchMedia('(-ms-high-contrast: active)').matches;
    
    if (highContrast) {
      document.body.setAttribute('data-high-contrast', 'true');
      this.preferredFocusStyle = 'high-contrast';
    }
  }

  /**
   * Detect reduced motion preference
   */
  detectReducedMotion() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (reducedMotion) {
      document.body.setAttribute('data-reduced-motion', 'true');
    }
  }

  /**
   * Detect color scheme preference
   */
  detectColorScheme() {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (darkMode) {
      document.body.setAttribute('data-color-scheme', 'dark');
    }
  }

  /**
   * Detect forced colors mode (Windows high contrast)
   */
  detectForcedColors() {
    const forcedColors = window.matchMedia('(forced-colors: active)').matches;
    
    if (forcedColors) {
      document.body.setAttribute('data-forced-colors', 'true');
      this.preferredFocusStyle = 'forced-colors';
    }
  }

  /**
   * Set up event listeners
   */
  setupEventListeners() {
    // F4 key for focus debugging
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F4') {
        e.preventDefault();
        this.toggleDebugMode();
      }
    });

    // Alt+F for focus enhancement cycling
    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.key === 'f') {
        e.preventDefault();
        this.cycleFocusStyle();
      }
    });

    // Enhanced focus management for complex widgets
    document.addEventListener('focusin', this.handleComplexFocus.bind(this));
    document.addEventListener('focusout', this.handleFocusOut.bind(this));
  }

  /**
   * Set up preference change listeners
   */
  setupPreferenceListeners() {
    // High contrast changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.setAttribute('data-high-contrast', 'true');
        this.preferredFocusStyle = 'high-contrast';
      } else {
        document.body.removeAttribute('data-high-contrast');
        this.preferredFocusStyle = 'enhanced';
      }
      this.applyFocusEnhancements();
    });

    // Reduced motion changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.setAttribute('data-reduced-motion', 'true');
      } else {
        document.body.removeAttribute('data-reduced-motion');
      }
    });

    // Color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.setAttribute('data-color-scheme', 'dark');
      } else {
        document.body.removeAttribute('data-color-scheme');
      }
    });
  }

  /**
   * Apply focus enhancements based on user preferences
   */
  applyFocusEnhancements() {
    document.body.setAttribute('data-focus-style', this.preferredFocusStyle);
    
    // Log preference for debugging
    console.log(`🎯 Focus style applied: ${this.preferredFocusStyle}`);
  }

  /**
   * Enhance focus for specific element
   */
  enhanceFocusForElement(element) {
    if (!element) return;

    // Add temporary enhancement class
    element.classList.add('wcag-focus-enhanced');
    
    // Remove after animation
    setTimeout(() => {
      element.classList.remove('wcag-focus-enhanced');
    }, 300);

    // Ensure element is visible
    this.ensureFocusVisible(element);

    // Add ARIA live announcement for screen readers
    this.announceElementFocus(element);
  }

  /**
   * Ensure focused element is visible in viewport
   */
  ensureFocusVisible(element) {
    const rect = element.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    if (!isVisible) {
      element.scrollIntoView({
        behavior: this.getScrollBehavior(),
        block: 'center',
        inline: 'nearest'
      });
    }
  }

  /**
   * Get appropriate scroll behavior based on user preferences
   */
  getScrollBehavior() {
    const reducedMotion = document.body.hasAttribute('data-reduced-motion');
    return reducedMotion ? 'auto' : 'smooth';
  }

  /**
   * Announce element focus to screen readers
   */
  announceElementFocus(element) {
    const announcement = this.getFocusAnnouncement(element);
    if (announcement) {
      this.announceToScreenReader(announcement);
    }
  }

  /**
   * Get appropriate focus announcement for element
   */
  getFocusAnnouncement(element) {
    const tagName = element.tagName.toLowerCase();
    const role = element.getAttribute('role');
    const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledby = element.getAttribute('aria-labelledby');
    
    if (ariaLabel) return ariaLabel;
    
    if (ariaLabelledby) {
      const labelElement = document.getElementById(ariaLabelledby);
      if (labelElement) return labelElement.textContent;
    }

    switch (tagName) {
      case 'button':
        return `Button: ${element.textContent || 'unlabeled button'}`;
      case 'a':
        return `Link: ${element.textContent || element.href || 'unlabeled link'}`;
      case 'input':
        const type = element.type;
        const placeholder = element.placeholder;
        return `${type} input${placeholder ? ': ' + placeholder : ''}`;
      case 'select':
        return `Select menu: ${element.options[element.selectedIndex]?.text || 'no selection'}`;
      default:
        if (role) return `${role}: ${element.textContent || 'interactive element'}`;
        return null;
    }
  }

  /**
   * Announce text to screen readers
   */
  announceToScreenReader(text) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = text;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  /**
   * Handle complex focus scenarios
   */
  handleComplexFocus(e) {
    const element = e.target;

    // Handle dropdown/menu focus
    if (element.matches('[aria-haspopup], .dropdown-trigger')) {
      this.handleDropdownFocus(element);
    }

    // Handle modal/dialog focus
    if (element.matches('[data-modal-target], [aria-controls*="modal"]')) {
      this.handleModalTriggerFocus(element);
    }

    // Handle accordion focus
    if (element.matches('[aria-expanded]')) {
      this.handleAccordionFocus(element);
    }

    // Handle tab navigation focus
    if (element.matches('[role="tab"]')) {
      this.handleTabFocus(element);
    }
  }

  /**
   * Handle dropdown focus
   */
  handleDropdownFocus(element) {
    const expanded = element.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      const menu = document.getElementById(element.getAttribute('aria-controls'));
      if (menu) {
        // Ensure menu is visible when trigger is focused
        this.ensureFocusVisible(menu);
      }
    }
  }

  /**
   * Handle modal trigger focus
   */
  handleModalTriggerFocus(element) {
    const modalId = element.getAttribute('data-modal-target') || 
                   element.getAttribute('aria-controls');
    
    if (modalId) {
      // Pre-announce that this will open a modal
      this.announceToScreenReader(`Button will open ${modalId.replace('modal', 'dialog')}`);
    }
  }

  /**
   * Handle accordion focus
   */
  handleAccordionFocus(element) {
    const expanded = element.getAttribute('aria-expanded') === 'true';
    const controls = element.getAttribute('aria-controls');
    
    if (expanded && controls) {
      const content = document.getElementById(controls);
      if (content) {
        this.ensureFocusVisible(content);
      }
    }
  }

  /**
   * Handle tab navigation focus
   */
  handleTabFocus(element) {
    const selected = element.getAttribute('aria-selected') === 'true';
    if (selected) {
      const controls = element.getAttribute('aria-controls');
      if (controls) {
        const panel = document.getElementById(controls);
        if (panel) {
          this.ensureFocusVisible(panel);
        }
      }
    }
  }

  /**
   * Handle focus out events
   */
  handleFocusOut(e) {
    const element = e.target;
    
    // Remove temporary enhancements
    element.classList.remove('wcag-focus-enhanced');
  }

  /**
   * Track focus history for better navigation
   */
  trackFocusHistory(element) {
    this.focusHistory.push({
      element: element,
      timestamp: Date.now(),
      method: this.focusMethod
    });

    // Keep only last 10 focus events
    if (this.focusHistory.length > 10) {
      this.focusHistory.shift();
    }
  }

  /**
   * Enhance existing elements that need better focus indicators
   */
  enhanceExistingElements() {
    // Find elements that might need enhancement
    const elementsToEnhance = document.querySelectorAll(`
      button:not([tabindex="-1"]),
      a[href]:not([tabindex="-1"]),
      input:not([type="hidden"]):not([tabindex="-1"]),
      select:not([tabindex="-1"]),
      textarea:not([tabindex="-1"]),
      [tabindex]:not([tabindex="-1"]),
      [role="button"]:not([tabindex="-1"]),
      [role="link"]:not([tabindex="-1"])
    `);

    elementsToEnhance.forEach(element => {
      // Ensure element has proper focus indicators
      this.ensureElementFocusability(element);
    });
  }

  /**
   * Ensure element has proper focus indicators
   */
  ensureElementFocusability(element) {
    // Add class for enhanced focus if needed
    if (!element.classList.contains('wcag-focus-enhanced-element')) {
      element.classList.add('wcag-focus-enhanced-element');
    }

    // Ensure proper ARIA attributes
    this.ensureProperARIA(element);
  }

  /**
   * Ensure element has proper ARIA attributes for focus
   */
  ensureProperARIA(element) {
    const tagName = element.tagName.toLowerCase();
    const role = element.getAttribute('role');

    // Ensure buttons have proper role
    if (tagName === 'div' && element.onclick && !role) {
      element.setAttribute('role', 'button');
      element.setAttribute('tabindex', '0');
    }

    // Ensure links have proper attributes
    if (tagName === 'a' && !element.hasAttribute('href') && !role) {
      element.setAttribute('role', 'button');
      element.setAttribute('tabindex', '0');
    }
  }

  /**
   * Cycle through different focus styles
   */
  cycleFocusStyle() {
    const styles = ['enhanced', 'high-contrast', 'minimal', 'debug'];
    const currentIndex = styles.indexOf(this.preferredFocusStyle);
    const nextIndex = (currentIndex + 1) % styles.length;
    
    this.preferredFocusStyle = styles[nextIndex];
    this.applyFocusEnhancements();
    
    this.announceToScreenReader(`Focus style changed to ${this.preferredFocusStyle}`);
  }

  /**
   * Toggle debug mode for focus visualization
   */
  toggleDebugMode() {
    this.debugMode = !this.debugMode;
    document.body.setAttribute('data-focus-debug', this.debugMode.toString());
    
    if (this.debugMode) {
      console.log('🧪 Focus Debug Mode: ENABLED');
      console.log('- Focus indicators have orange dashed borders');
      console.log('- Focus labels show element roles');
      console.log('- Press F4 to toggle debug mode');
      console.log('- Press Alt+F to cycle focus styles');
    } else {
      console.log('🧪 Focus Debug Mode: DISABLED');
    }
  }

  /**
   * Add testing controls for development
   */
  addTestingControls() {
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('focus-debug') === 'true') {
      this.debugMode = true;
      document.body.setAttribute('data-focus-debug', 'true');
    }

    // Only add visual controls in development
    if (window.location.hostname === 'localhost' || urlParams.get('focus-test') === 'true') {
      this.createTestingPanel();
    }
  }

  /**
   * Create testing panel for development
   */
  createTestingPanel() {
    const panel = document.createElement('div');
    panel.innerHTML = `
      <div style="
        position: fixed; 
        top: 120px; 
        right: 20px; 
        background: #2d3748; 
        color: white; 
        padding: 12px; 
        border-radius: 8px; 
        font-family: 'Segoe UI', sans-serif; 
        font-size: 12px; 
        z-index: 10002;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        max-width: 220px;
      ">
        <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #63b3ed;">
          🎯 WCAG 2.4.7 Testing
        </h4>
        <button id="wcag-focus-debug-toggle" style="
          background: #4299e1; 
          color: white; 
          border: none; 
          padding: 6px 10px; 
          border-radius: 4px; 
          cursor: pointer;
          width: 100%;
          margin-bottom: 6px;
        ">
          Toggle Debug (F4)
        </button>
        <button id="wcag-focus-style-cycle" style="
          background: #38b2ac; 
          color: white; 
          border: none; 
          padding: 6px 10px; 
          border-radius: 4px; 
          cursor: pointer;
          width: 100%;
          margin-bottom: 6px;
        ">
          Cycle Style (Alt+F)
        </button>
        <div style="font-size: 10px; opacity: 0.8; line-height: 1.4;">
          Current style: <span id="current-focus-style">${this.preferredFocusStyle}</span>
        </div>
        <div style="font-size: 10px; opacity: 0.6; margin-top: 4px;">
          Focus method: <span id="focus-method">unknown</span>
        </div>
      </div>
    `;
    
    document.body.appendChild(panel);
    
    // Add click handlers
    document.getElementById('wcag-focus-debug-toggle').addEventListener('click', () => {
      this.toggleDebugMode();
    });

    document.getElementById('wcag-focus-style-cycle').addEventListener('click', () => {
      this.cycleFocusStyle();
    });

    // Update status periodically
    setInterval(() => {
      const styleElement = document.getElementById('current-focus-style');
      const methodElement = document.getElementById('focus-method');
      
      if (styleElement) {
        styleElement.textContent = this.preferredFocusStyle;
      }
      if (methodElement) {
        methodElement.textContent = this.focusMethod || 'unknown';
      }
    }, 500);
  }

  /**
   * Get focus history for debugging
   */
  getFocusHistory() {
    return this.focusHistory;
  }

  /**
   * Return to previous focus position
   */
  returnToPreviousFocus() {
    if (this.focusHistory.length > 1) {
      const previous = this.focusHistory[this.focusHistory.length - 2];
      if (previous.element && document.contains(previous.element)) {
        previous.element.focus();
        return true;
      }
    }
    return false;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.testFocusVisibleEnhancement = new WCAGFocusVisibleEnhancement();
  });
} else {
  window.testFocusVisibleEnhancement = new WCAGFocusVisibleEnhancement();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WCAGFocusVisibleEnhancement;
}
