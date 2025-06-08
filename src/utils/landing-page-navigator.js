/**
 * Landing Page Navigator
 * Handles mobile menu toggle and smooth anchor navigation
 */

class LandingPageNavigator {
  constructor() {
    this.mobileMenuButton = null;
    this.mobileMenu = null;
    this.isMenuOpen = false;
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
    } else {
      this.setupEventListeners();
    }
  }

  setupEventListeners() {
    // Setup mobile menu toggle
    this.setupMobileMenu();
    
    // Setup smooth scrolling for anchor links
    this.setupSmoothScrolling();
    
    // Close menu when clicking outside
    this.setupOutsideClickHandler();
    
    // Handle window resize
    this.setupResizeHandler();
  }

  setupMobileMenu() {
    this.mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
    this.mobileMenu = document.getElementById('navbar-cta');

    if (!this.mobileMenuButton || !this.mobileMenu) {
      console.warn('Mobile menu elements not found');
      return;
    }

    // Set initial state
    this.mobileMenu.classList.add('hidden');
    this.updateAriaExpanded(false);

    // Add click handler
    this.mobileMenuButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMobileMenu();
    });

    // Close menu when clicking on nav links
    const navLinks = this.mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    if (this.isMenuOpen) {
      this.openMobileMenu();
    } else {
      this.closeMobileMenu();
    }
  }
  openMobileMenu() {
    this.isMenuOpen = true;
    this.mobileMenu.classList.remove('hidden');
    this.updateAriaExpanded(true);
    
    // Add animation class after removing hidden
    requestAnimationFrame(() => {
      this.mobileMenu.classList.add('mobile-menu-open');
    });

    // Prevent body scroll when menu is open on mobile
    if (window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeMobileMenu() {
    this.isMenuOpen = false;
    this.mobileMenu.classList.remove('mobile-menu-open');
    this.updateAriaExpanded(false);
    
    // Hide menu after animation completes
    setTimeout(() => {
      if (!this.isMenuOpen) {
        this.mobileMenu.classList.add('hidden');
      }
    }, 300);

    // Restore body scroll
    document.body.style.overflow = '';
  }

  updateAriaExpanded(isExpanded) {
    if (this.mobileMenuButton) {
      this.mobileMenuButton.setAttribute('aria-expanded', isExpanded.toString());
      this.mobileMenuButton.setAttribute('aria-label', 
        isExpanded ? 'Close navigation menu' : 'Open navigation menu'
      );
    }
  }

  setupSmoothScrolling() {
    // Handle anchor links for smooth scrolling
    const anchorLinks = document.querySelectorAll('a[data-nav-link]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Close mobile menu if open
            if (this.isMenuOpen) {
              this.closeMobileMenu();
            }
            
            // Smooth scroll to target
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            
            // Update URL without triggering scroll
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  setupOutsideClickHandler() {
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && 
          this.mobileMenu && 
          this.mobileMenuButton &&
          !this.mobileMenu.contains(e.target) &&
          !this.mobileMenuButton.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  }

  setupResizeHandler() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Close mobile menu on larger screens
        if (window.innerWidth >= 768 && this.isMenuOpen) {
          this.closeMobileMenu();
        }
      }, 150);
    });
  }
}

// Initialize when DOM is ready
new LandingPageNavigator();