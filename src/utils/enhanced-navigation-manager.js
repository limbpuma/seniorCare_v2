/**
 * Enhanced Navigation Manager
 * Handles all navigation and redirections with accessibility support
 */

class EnhancedNavigationManager {
  constructor() {
    this.isAccessibilityPanelOpen = false;
    this.pendingNavigation = null;
    this.init();
  }

  /**
   * Initialize the navigation manager
   */
  init() {
    this.setupNavigationHandlers();
    this.setupAccessibilityNavigation();
    this.setupTelephoneLinks();
    this.setupExternalLinks();
    
    console.log('📱 Enhanced Navigation Manager initialized');
  }

  /**
   * Handle telephone links with proper accessibility
   */
  setupTelephoneLinks() {
    const telLinks = document.querySelectorAll('a[href^="tel:"]');
    
    telLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Check if accessibility panel is open
        if (this.isAccessibilityPanelOpen) {
          e.preventDefault();
          this.handleConflictedNavigation(link, 'telephone');
          return;
        }

        // Enhanced keyboard navigation
        this.enhanceTelephoneLink(link);
      });

      // Add proper ARIA attributes
      if (!link.getAttribute('aria-label')) {
        const phoneNumber = link.getAttribute('href').replace('tel:', '');
        link.setAttribute('aria-label', `Call us at ${phoneNumber}`);
      }
      
      // Remove target="_blank" for tel: links (not needed)
      link.removeAttribute('target');
      link.removeAttribute('rel');
    });
  }

  /**
   * Handle external links with controlled behavior
   */
  setupExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Check if accessibility panel is open
        if (this.isAccessibilityPanelOpen) {
          e.preventDefault();
          this.handleConflictedNavigation(link, 'external');
          return;
        }

        // Add confirmation for better UX
        if (link.href.includes('maps.') || link.href.includes('google.')) {
          this.confirmExternalNavigation(e, link, 'external map service');
        }
      });

      // Ensure proper attributes for external links
      if (!link.getAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  /**
   * Setup accessibility-aware navigation
   */
  setupAccessibilityNavigation() {
    // Monitor accessibility panel state
    const accessibilityToggle = document.getElementById('toggleAccessibilityPanel');
    if (accessibilityToggle) {
      accessibilityToggle.addEventListener('click', () => {
        this.isAccessibilityPanelOpen = !this.isAccessibilityPanelOpen;
      });
    }    // Close panel on outside click (excluding form elements)
    document.addEventListener('click', (e) => {
      const panel = document.getElementById('accessibilityPanel');
      const toggle = document.getElementById('toggleAccessibilityPanel');
      
      // Exclude form elements and contact form more comprehensively
      const isFormElement = e.target.matches('input, textarea, select, button[type="submit"], label, form, option') ||
                           e.target.closest('form') ||
                           e.target.closest('#contact-form') ||
                           e.target.closest('.accessibility-form-notification') ||
                           e.target.closest('[data-form-element]') ||
                           e.target.classList.contains('form-control') ||
                           e.target.classList.contains('wcag-tooltip');
      
      // Also check if click is within any form-related container
      const isInFormContainer = e.target.closest('.contact-form-container') ||
                               e.target.closest('[class*="form"]') ||
                               e.target.closest('[id*="form"]');
      
      if (panel && toggle && 
          !panel.contains(e.target) && 
          !toggle.contains(e.target) && 
          !isFormElement &&
          !isInFormContainer &&
          this.isAccessibilityPanelOpen) {
        this.isAccessibilityPanelOpen = false;
        this.closeAccessibilityPanel();
      }
    }, { passive: true });
  }

  /**
   * Handle navigation conflicts when accessibility panel is open
   */
  handleConflictedNavigation(link, type) {
    // Store the pending navigation
    this.pendingNavigation = { link, type };

    // Show user-friendly notification
    this.showNavigationNotification(type);

    // Auto-close accessibility panel and execute after delay
    setTimeout(() => {
      this.closeAccessibilityPanel();
      setTimeout(() => {
        this.executePendingNavigation();
      }, 300);
    }, 1500);
  }

  /**
   * Show notification about navigation conflict
   */
  showNavigationNotification(type) {
    const messages = {
      telephone: 'Cerrando panel de accesibilidad para realizar la llamada...',
      external: 'Cerrando panel de accesibilidad para abrir el enlace externo...'
    };

    const notification = document.createElement('div');
    notification.className = 'navigation-notification';
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${type === 'telephone' ? '📞' : '🔗'}</span>
        <span class="notification-message">${messages[type]}</span>
      </div>
    `;

    document.body.appendChild(notification);

    // Style the notification
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #fff;
      border: 2px solid #0057b8;
      border-radius: 8px;
      padding: 12px 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1001;
      font-size: 14px;
      max-width: 300px;
      animation: slideInRight 0.3s ease;
    `;

    // Add CSS animation
    if (!document.getElementById('navigation-notification-styles')) {
      const style = document.createElement('style');
      style.id = 'navigation-notification-styles';
      style.textContent = `
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .notification-icon {
          font-size: 18px;
        }
        .notification-message {
          color: #333;
          font-weight: 500;
        }
      `;
      document.head.appendChild(style);
    }

    // Remove notification after delay
    setTimeout(() => {
      notification.style.animation = 'slideInRight 0.3s ease reverse';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  /**
   * Close accessibility panel
   */
  closeAccessibilityPanel() {
    const panel = document.getElementById('accessibilityPanel');
    const toggle = document.getElementById('toggleAccessibilityPanel');
    
    if (panel && panel.classList.contains('show')) {
      panel.classList.remove('show');
      this.isAccessibilityPanelOpen = false;
      
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Barrierefreiheitsoptionen öffnen');
      }
    }
  }

  /**
   * Execute pending navigation
   */
  executePendingNavigation() {
    if (!this.pendingNavigation) return;

    const { link, type } = this.pendingNavigation;
    
    if (type === 'telephone') {
      // Execute telephone call
      window.location.href = link.href;
    } else if (type === 'external') {
      // Open external link
      window.open(link.href, '_blank', 'noopener,noreferrer');
    }

    // Clear pending navigation
    this.pendingNavigation = null;
  }

  /**
   * Enhance telephone link behavior
   */
  enhanceTelephoneLink(link) {
    // Add visual feedback
    link.style.transition = 'all 0.2s ease';
    
    // Add hover enhancement
    link.addEventListener('mouseenter', () => {
      if (!link.querySelector('.tel-tooltip')) {
        const tooltip = document.createElement('span');
        tooltip.className = 'tel-tooltip';
        tooltip.textContent = 'Click to call';
        tooltip.style.cssText = `
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #333;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          z-index: 1000;
          pointer-events: none;
        `;
        link.style.position = 'relative';
        link.appendChild(tooltip);

        setTimeout(() => tooltip.remove(), 2000);
      }
    });
  }

  /**
   * Confirm external navigation for better UX
   */
  confirmExternalNavigation(event, link, service) {
    // For accessibility users, provide clear indication
    const accessibilityManager = window.accessibilityManager;
    if (accessibilityManager && accessibilityManager.hasActiveFeatures()) {
      event.preventDefault();
      
      const confirmed = confirm(`¿Desea abrir ${service} en una nueva pestaña?`);
      if (confirmed) {
        window.open(link.href, '_blank', 'noopener,noreferrer');
      }
    }
  }

  /**
   * Setup general navigation handlers
   */
  setupNavigationHandlers() {
    // Handle anchor navigation with accessibility support
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Close accessibility panel if open
          if (this.isAccessibilityPanelOpen) {
            this.closeAccessibilityPanel();
          }
          
          // Smooth scroll with accessibility announcement
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Announce navigation for screen readers
          const accessibilityManager = window.accessibilityManager;
          if (accessibilityManager) {
            setTimeout(() => {
              accessibilityManager.announce(`Navegado a la sección ${targetElement.textContent || targetId}`);
            }, 500);
          }
        }
      });
    });
  }

  /**
   * Get current navigation state
   */
  getNavigationState() {
    return {
      isAccessibilityPanelOpen: this.isAccessibilityPanelOpen,
      hasPendingNavigation: !!this.pendingNavigation
    };
  }
}

// Initialize Enhanced Navigation Manager
if (typeof window !== 'undefined') {
  // Ensure it runs after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.enhancedNavigationManager = new EnhancedNavigationManager();
    });
  } else {
    window.enhancedNavigationManager = new EnhancedNavigationManager();
  }
  
  // Reinitialize on Astro page loads
  document.addEventListener('astro:page-load', () => {
    if (window.enhancedNavigationManager) {
      window.enhancedNavigationManager.init();
    } else {
      window.enhancedNavigationManager = new EnhancedNavigationManager();
    }
  });
}

export default EnhancedNavigationManager;
