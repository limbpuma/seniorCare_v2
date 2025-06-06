/**
 * WCAG 2.2 - Criterion 1.4.13: Content on Hover or Focus (AA)
 * 
 * JavaScript utilities for managing hover and focus content behavior.
 * Implements the three key requirements:
 * 1. Dismissible - ESC key closes content
 * 2. Hoverable - Content remains when pointer moves over it
 * 3. Persistent - Content stays until dismissed or focus lost
 */

class WCAGContentHoverFocus {
  constructor() {
    this.activeTooltips = new Set();
    this.dismissibleElements = new Set();
    this.hoverTimeouts = new Map();
    this.init();
  }

  /**
   * Initialize the WCAG 1.4.13 Content on Hover or Focus functionality
   */
  init() {
    this.setupEventListeners();
    this.setupExistingElements();
    this.addTestingControls();
    console.log('🎯 WCAG 1.4.13 Content on Hover or Focus - Initialized');
  }

  /**
   * Set up global event listeners
   */
  setupEventListeners() {
    // ESC key dismissal for all hover/focus content
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.dismissAllContent();
      }
    });

    // Click outside to dismiss
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.wcag-tooltip, .wcag-focus-content, .wcag-dropdown')) {
        this.dismissAllContent();
      }
    });

    // Enhanced tooltip management
    document.addEventListener('mouseenter', this.handleMouseEnter.bind(this), true);
    document.addEventListener('mouseleave', this.handleMouseLeave.bind(this), true);
    document.addEventListener('focusin', this.handleFocusIn.bind(this), true);
    document.addEventListener('focusout', this.handleFocusOut.bind(this), true);

    // F3 key for testing mode
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F3') {
        e.preventDefault();
        this.toggleTestMode();
      }
    });
  }

  /**
   * Set up existing elements in the DOM
   */
  setupExistingElements() {
    // Find all elements with data-tooltip attribute
    document.querySelectorAll('[data-tooltip]').forEach(element => {
      this.setupTooltip(element);
    });

    // Find all aria-describedby relationships
    document.querySelectorAll('[aria-describedby]').forEach(element => {
      this.setupAriaTooltip(element);
    });

    // Find all dropdown menus
    document.querySelectorAll('.wcag-dropdown, [role="menu"]').forEach(element => {
      this.setupDropdown(element);
    });

    // Find all form help content
    document.querySelectorAll('.wcag-help-content').forEach(element => {
      this.setupHelpContent(element);
    });
  }

  /**
   * Handle mouse enter events
   */
  handleMouseEnter(e) {
    const target = e.target;
    
    // Clear any pending hide timeouts for this element
    if (this.hoverTimeouts.has(target)) {
      clearTimeout(this.hoverTimeouts.get(target));
      this.hoverTimeouts.delete(target);
    }

    // Handle tooltip triggers
    if (target.matches('.wcag-tooltip, [data-tooltip]')) {
      this.showTooltip(target);
    }

    // Handle dropdown triggers
    if (target.matches('.wcag-dropdown-trigger')) {
      this.showDropdown(target);
    }
  }

  /**
   * Handle mouse leave events
   */
  handleMouseLeave(e) {
    const target = e.target;
    
    // Add delay before hiding to allow moving to content
    const timeout = setTimeout(() => {
      this.hideTooltip(target);
      this.hideDropdown(target);
    }, 100); // Small delay for moving to hover content
    
    this.hoverTimeouts.set(target, timeout);
  }

  /**
   * Handle focus in events
   */
  handleFocusIn(e) {
    const target = e.target;
    
    // Show focus-triggered content
    if (target.matches('.wcag-focus-trigger, [aria-describedby]')) {
      this.showFocusContent(target);
    }

    // Show form help content
    if (target.matches('input, textarea, select')) {
      this.showFormHelp(target);
    }
  }

  /**
   * Handle focus out events
   */
  handleFocusOut(e) {
    const target = e.target;
    
    // Hide focus content with small delay to allow focus movement
    setTimeout(() => {
      if (!target.matches(':focus') && !this.isFocusWithinContent(target)) {
        this.hideFocusContent(target);
        this.hideFormHelp(target);
      }
    }, 50);
  }

  /**
   * Set up a tooltip for an element
   */
  setupTooltip(element) {
    if (element.hasAttribute('data-tooltip-setup')) return;
    
    const tooltipText = element.getAttribute('data-tooltip');
    if (!tooltipText) return;

    // Create tooltip content element
    const tooltipContent = document.createElement('div');
    tooltipContent.className = 'wcag-tooltip-content';
    tooltipContent.textContent = tooltipText;
    tooltipContent.setAttribute('role', 'tooltip');
    tooltipContent.setAttribute('id', `tooltip-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`);
    
    // Add dismissible indicator
    const dismissIndicator = document.createElement('span');
    dismissIndicator.className = 'wcag-dismissible-indicator';
    tooltipContent.appendChild(dismissIndicator);

    // Set up ARIA relationship
    element.setAttribute('aria-describedby', tooltipContent.id);
    element.classList.add('wcag-tooltip');
    element.appendChild(tooltipContent);
    
    element.setAttribute('data-tooltip-setup', 'true');
    this.dismissibleElements.add(element);
  }

  /**
   * Set up ARIA-described tooltip
   */
  setupAriaTooltip(element) {
    const describedBy = element.getAttribute('aria-describedby');
    const tooltipElement = document.getElementById(describedBy);
    
    if (tooltipElement) {
      tooltipElement.classList.add('wcag-tooltip-content');
      tooltipElement.setAttribute('role', 'tooltip');
      element.classList.add('wcag-tooltip');
      this.dismissibleElements.add(element);
    }
  }

  /**
   * Set up dropdown functionality
   */
  setupDropdown(element) {
    if (element.hasAttribute('data-dropdown-setup')) return;
    
    const content = element.querySelector('.wcag-dropdown-content');
    if (content) {
      content.setAttribute('role', 'menu');
      element.setAttribute('aria-haspopup', 'true');
      element.setAttribute('aria-expanded', 'false');
      
      this.dismissibleElements.add(element);
      element.setAttribute('data-dropdown-setup', 'true');
    }
  }

  /**
   * Set up form help content
   */
  setupHelpContent(helpElement) {
    const formField = helpElement.previousElementSibling;
    if (formField && formField.matches('input, textarea, select')) {
      formField.setAttribute('aria-describedby', helpElement.id || `help-${Date.now()}`);
      this.dismissibleElements.add(formField);
    }
  }

  /**
   * Show tooltip content
   */
  showTooltip(element) {
    const content = element.querySelector('.wcag-tooltip-content');
    if (content) {
      content.style.opacity = '1';
      content.style.visibility = 'visible';
      this.activeTooltips.add(content);
      element.setAttribute('aria-expanded', 'true');
    }
  }

  /**
   * Hide tooltip content
   */
  hideTooltip(element) {
    const content = element.querySelector('.wcag-tooltip-content');
    if (content && !this.isHoveringContent(content)) {
      content.style.opacity = '0';
      content.style.visibility = 'hidden';
      this.activeTooltips.delete(content);
      element.setAttribute('aria-expanded', 'false');
    }
  }

  /**
   * Show focus-triggered content
   */
  showFocusContent(element) {
    const content = element.querySelector('.wcag-focus-content') || 
                   document.getElementById(element.getAttribute('aria-describedby'));
    
    if (content) {
      content.style.opacity = '1';
      content.style.visibility = 'visible';
      content.style.transform = 'scale(1)';
      this.activeTooltips.add(content);
    }
  }

  /**
   * Hide focus-triggered content
   */
  hideFocusContent(element) {
    const content = element.querySelector('.wcag-focus-content') || 
                   document.getElementById(element.getAttribute('aria-describedby'));
    
    if (content) {
      content.style.opacity = '0';
      content.style.visibility = 'hidden';
      content.style.transform = 'scale(0.95)';
      this.activeTooltips.delete(content);
    }
  }

  /**
   * Show dropdown content
   */
  showDropdown(element) {
    const content = element.querySelector('.wcag-dropdown-content');
    if (content) {
      content.style.opacity = '1';
      content.style.visibility = 'visible';
      content.style.transform = 'translateY(0)';
      element.setAttribute('aria-expanded', 'true');
      this.activeTooltips.add(content);
    }
  }

  /**
   * Hide dropdown content
   */
  hideDropdown(element) {
    const content = element.querySelector('.wcag-dropdown-content');
    if (content && !this.isHoveringContent(content)) {
      content.style.opacity = '0';
      content.style.visibility = 'hidden';
      content.style.transform = 'translateY(-8px)';
      element.setAttribute('aria-expanded', 'false');
      this.activeTooltips.delete(content);
    }
  }

  /**
   * Show form help content
   */
  showFormHelp(element) {
    const help = element.parentNode.querySelector('.wcag-help-content') ||
                 element.nextElementSibling;
    
    if (help && help.classList.contains('wcag-help-content')) {
      help.style.opacity = '1';
      help.style.visibility = 'visible';
      help.style.transform = 'translateY(0)';
      this.activeTooltips.add(help);
    }
  }

  /**
   * Hide form help content
   */
  hideFormHelp(element) {
    const help = element.parentNode.querySelector('.wcag-help-content') ||
                 element.nextElementSibling;
    
    if (help && help.classList.contains('wcag-help-content')) {
      help.style.opacity = '0';
      help.style.visibility = 'hidden';
      help.style.transform = 'translateY(-4px)';
      this.activeTooltips.delete(help);
    }
  }

  /**
   * Check if mouse is hovering over content
   */
  isHoveringContent(content) {
    return content.matches(':hover');
  }

  /**
   * Check if focus is within content area
   */
  isFocusWithinContent(element) {
    const content = element.querySelector('.wcag-focus-content, .wcag-tooltip-content');
    return content && content.contains(document.activeElement);
  }

  /**
   * Dismiss all visible content (ESC key functionality)
   */
  dismissAllContent() {
    this.activeTooltips.forEach(content => {
      content.style.opacity = '0';
      content.style.visibility = 'hidden';
      
      // Reset transforms based on content type
      if (content.classList.contains('wcag-focus-content')) {
        content.style.transform = 'scale(0.95)';
      } else if (content.classList.contains('wcag-dropdown-content')) {
        content.style.transform = 'translateY(-8px)';
      } else if (content.classList.contains('wcag-help-content')) {
        content.style.transform = 'translateY(-4px)';
      }
      
      // Update ARIA states
      const trigger = content.closest('.wcag-tooltip, .wcag-dropdown, .wcag-focus-trigger');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
    
    this.activeTooltips.clear();
    console.log('📋 All hover/focus content dismissed');
  }

  /**
   * Toggle test mode for debugging
   */
  toggleTestMode() {
    const isTestMode = document.body.getAttribute('data-wcag-hover-test') === 'true';
    document.body.setAttribute('data-wcag-hover-test', isTestMode ? 'false' : 'true');
    
    if (!isTestMode) {
      console.log('🧪 WCAG 1.4.13 Test Mode: ENABLED');
      console.log('- Tooltips have dashed borders');
      console.log('- Hover areas are highlighted');
      console.log('- Press ESC to dismiss all content');
      console.log('- Press F3 to toggle test mode');
    } else {
      console.log('🧪 WCAG 1.4.13 Test Mode: DISABLED');
    }
  }

  /**
   * Add testing controls for development
   */
  addTestingControls() {
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('hover-test') === 'true') {
      document.body.setAttribute('data-wcag-hover-test', 'true');
    }

    // Only add visual controls in development
    if (window.location.hostname === 'localhost' || urlParams.get('hover-debug') === 'true') {
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
        top: 80px; 
        right: 20px; 
        background: #2c3e50; 
        color: white; 
        padding: 12px; 
        border-radius: 8px; 
        font-family: 'Segoe UI', sans-serif; 
        font-size: 12px; 
        z-index: 10001;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        max-width: 220px;
      ">
        <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #3498db;">
          🎯 WCAG 1.4.13 Testing
        </h4>
        <button id="wcag-hover-test-toggle" style="
          background: #3498db; 
          color: white; 
          border: none; 
          padding: 6px 10px; 
          border-radius: 4px; 
          cursor: pointer;
          width: 100%;
          margin-bottom: 6px;
        ">
          Toggle Test Mode (F3)
        </button>
        <button id="wcag-dismiss-all" style="
          background: #e74c3c; 
          color: white; 
          border: none; 
          padding: 6px 10px; 
          border-radius: 4px; 
          cursor: pointer;
          width: 100%;
          margin-bottom: 6px;
        ">
          Dismiss All (ESC)
        </button>
        <div style="font-size: 10px; opacity: 0.8; line-height: 1.4;">
          Tests: Dismissible (ESC), Hoverable, Persistent display
        </div>
        <div style="font-size: 10px; opacity: 0.6; margin-top: 4px;">
          Active tooltips: <span id="active-count">0</span>
        </div>
      </div>
    `;
    
    document.body.appendChild(panel);
    
    // Add click handlers
    document.getElementById('wcag-hover-test-toggle').addEventListener('click', () => {
      this.toggleTestMode();
    });

    document.getElementById('wcag-dismiss-all').addEventListener('click', () => {
      this.dismissAllContent();
    });

    // Update active count periodically
    setInterval(() => {
      const countElement = document.getElementById('active-count');
      if (countElement) {
        countElement.textContent = this.activeTooltips.size;
      }
    }, 500);
  }

  /**
   * Add a new tooltip dynamically
   */
  addTooltip(element, text, position = 'bottom') {
    element.setAttribute('data-tooltip', text);
    element.classList.add(`wcag-tooltip-${position}`);
    this.setupTooltip(element);
  }

  /**
   * Remove tooltip from element
   */
  removeTooltip(element) {
    const content = element.querySelector('.wcag-tooltip-content');
    if (content) {
      content.remove();
    }
    element.removeAttribute('data-tooltip');
    element.removeAttribute('aria-describedby');
    element.classList.remove('wcag-tooltip');
    this.dismissibleElements.delete(element);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.wcagContentHoverFocus = new WCAGContentHoverFocus();
  });
} else {
  window.wcagContentHoverFocus = new WCAGContentHoverFocus();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WCAGContentHoverFocus;
}
