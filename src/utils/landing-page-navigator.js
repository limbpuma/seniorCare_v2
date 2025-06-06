/**
 * Enhanced Landing Page Navigation System
 * Provides smooth scrolling with improved accessibility
 * Optimized for performance with IntersectionObserver
 */

class LandingPageNavigator {
  constructor() {
    this.sections = [];
    this.navLinks = [];
    this.activeClass = 'active';
    this.observer = null;
    this.isScrolling = false;
    this.scrollTimeout = null;
    
    this.init();
  }
  
  init() {
    // Initialize after DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
    
    // Reinitialize on Astro page transitions
    document.addEventListener('astro:page-load', () => this.setup());
  }
  
  setup() {
    // Check if we're on the landing page
    if (!document.querySelector('.scroll-section')) {
      return;
    }
    
    console.log('🧭 Landing Page Navigator initialized');
    
    // Get all sections and navigation links
    this.sections = Array.from(document.querySelectorAll('.scroll-section'));
    this.navLinks = Array.from(document.querySelectorAll('a[data-anchor="true"]'));
    
    // Set up smooth scrolling for anchor links
    this.setupSmoothScrolling();
    
    // Set up intersection observer for active section detection
    this.setupIntersectionObserver();
    
    // Handle initial hash navigation if present
    this.handleInitialHash();
    
    // Add scroll listener for manual scrolling
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
  }
  
  setupSmoothScrolling() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (!targetId || targetId.charAt(0) !== '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;
        
        // Set flag to prevent observer from interfering during programmatic scrolling
        this.isScrolling = true;
        clearTimeout(this.scrollTimeout);
          // Scroll to section
        const headerOffset = 80; // Adjust based on header height
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        // Smooth scroll with improved performance
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update active class
        this.updateActiveLink(targetId.substring(1));
        
        // Reset scrolling flag after animation completes
        this.scrollTimeout = setTimeout(() => {
          this.isScrolling = false;
        }, 1000);
        
        // Update URL hash without scrolling
        history.pushState(null, null, targetId);
      });
    });
  }
  
  setupIntersectionObserver() {
    // Clean up existing observer
    if (this.observer) {
      this.observer.disconnect();
    }
    
    // Create a new observer with appropriate threshold and rootMargin
    this.observer = new IntersectionObserver(
      (entries) => {
        // Don't update during programmatic scrolling
        if (this.isScrolling) return;
        
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const id = entry.target.getAttribute('id');
            this.updateActiveLink(id);
            
            // Update URL hash without scrolling for better bookmarking
            if (id && !this.isScrolling) {
              history.replaceState(null, null, `#${id}`);
            }
          }
        });
      },
      {
        threshold: [0.3],
        rootMargin: '-100px 0px -50% 0px' // Adjust based on header height
      }
    );
    
    // Observe all sections
    this.sections.forEach(section => {
      this.observer.observe(section);
    });
  }
  
  updateActiveLink(sectionId) {
    // Remove active class from all links
    this.navLinks.forEach(link => {
      link.classList.remove(this.activeClass);
      link.setAttribute('aria-current', 'false');
    });
    
    // Add active class to current link
    const activeLink = this.navLinks.find(link => {
      return link.getAttribute('href') === `#${sectionId}`;
    });
    
    if (activeLink) {
      activeLink.classList.add(this.activeClass);
      activeLink.setAttribute('aria-current', 'page');
    }
  }
  
  handleInitialHash() {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const targetId = window.location.hash;
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Delay to ensure page is fully loaded
        setTimeout(() => {          const headerOffset = 80; // Adjust based on header height
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          this.updateActiveLink(targetId.substring(1));
        }, 100);
      }
    } else {
      // If no hash, activate first section
      const firstSection = this.sections[0];
      if (firstSection) {
        this.updateActiveLink(firstSection.getAttribute('id'));
      }
    }
  }
  
  handleScroll() {
    // Don't process during programmatic scrolling
    if (this.isScrolling) return;
    
    // Debounce scroll handling for performance
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      // Find the current section in view
      const currentSection = this.getCurrentSection();
      if (currentSection) {
        const id = currentSection.getAttribute('id');
        this.updateActiveLink(id);
        
        // Update URL hash without scrolling
        history.replaceState(null, null, `#${id}`);
      }
    }, 100);
  }
  
  getCurrentSection() {
    // Find the section closest to the top of the viewport
    const viewportHeight = window.innerHeight;
    const headerOffset = 80; // Adjust based on header height
    
    return this.sections.reduce((closest, section) => {
      const rect = section.getBoundingClientRect();
      // Section is considered in view if its top is above the middle of the viewport
      // and its bottom is below the header
      const inView = rect.top < viewportHeight / 2 && rect.bottom > headerOffset;
      
      if (!closest && inView) return section;
      
      if (closest && inView) {
        const closestRect = closest.getBoundingClientRect();
        // Prefer the section that has its top closer to the top of the viewport
        return rect.top > headerOffset && rect.top < closestRect.top ? section : closest;
      }
      
      return closest;
    }, null);
  }
}

// Initialize the landing page navigator
const landingPageNavigator = new LandingPageNavigator();
