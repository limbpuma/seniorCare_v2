/**
 * Enhanced Landing Page Navigation System
 * Provides smooth scrolling with improved accessibility
 * Optimized for performance with IntersectionObserver
 */

class LandingPageNavigator {  private sections: HTMLElement[] = [];
  private navLinks: HTMLAnchorElement[] = [];
  private activeClass: string = 'active';
  private observer: IntersectionObserver | null = null;
  private isScrolling: boolean = false;
  private scrollTimeout: number | null = null;
  
  constructor() {
    this.init();
  }
  
  private init(): void {
    // Initialize after DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
    
    // Reinitialize on Astro page transitions
    document.addEventListener('astro:page-load', () => this.setup());
  }
  
  private setup(): void {
    // Check if we're on the landing page
    if (!document.querySelector('.scroll-section')) {
      return;
    }
    
    console.log('🧭 Landing Page Navigator initialized');
    
    // Get all sections and navigation links
    this.sections = Array.from(document.querySelectorAll<HTMLElement>('.scroll-section'));
    this.navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[data-anchor="true"]'));
    
    // Set up smooth scrolling for anchor links
    this.setupSmoothScrolling();
    
    // Set up intersection observer for active section detection
    this.setupIntersectionObserver();
    
    // Handle initial hash navigation if present
    this.handleInitialHash();
    
    // Add scroll listener for manual scrolling
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
    
    // Handle video autoplay
    this.handleVideoAutoplay();
  }
    private setupSmoothScrolling(): void {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (!targetId || targetId.charAt(0) !== '#') return;
        
        const targetSection = document.querySelector<HTMLElement>(targetId);
        if (!targetSection) return;
        
        // Use the smoothScrollTo method
        this.smoothScrollTo(targetSection);
        
        // Update active class
        this.updateActiveLink(targetId.substring(1));
        
        // Update URL hash without scrolling
        history.pushState(null, '', targetId);
      });
    });
  }
  
  private setupIntersectionObserver(): void {
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
            if (id) this.updateActiveLink(id);
            
            // Update URL hash without scrolling for better bookmarking
            if (id && !this.isScrolling) {
              history.replaceState(null, '', `#${id}`);
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
    if (this.observer) {
      this.sections.forEach(section => {
        this.observer!.observe(section);
      });
    }
  }
  
  private updateActiveLink(sectionId: string): void {
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
  
  private handleInitialHash(): void {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const targetId = window.location.hash;
      const targetSection = document.querySelector<HTMLElement>(targetId);
      
      if (targetSection) {
        // Delay to ensure page is fully loaded
        setTimeout(() => {
          const headerOffset = 80; // Adjust based on header height
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
        const id = firstSection.getAttribute('id');
        if (id) this.updateActiveLink(id);
      }
    }
  }
  
  private handleScroll = (): void => {
    // Don't process during programmatic scrolling
    if (this.isScrolling) return;
    
    // Debounce scroll handling for performance
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
    
    this.scrollTimeout = window.setTimeout(() => {
      // Find the current section in view
      const currentSection = this.getCurrentSection();
      if (currentSection) {
        const id = currentSection.getAttribute('id');
        if (id) {
          this.updateActiveLink(id);
          
          // Update URL hash without scrolling
          history.replaceState(null, '', `#${id}`);
        }
      }
    }, 100);
  }
  
  private getCurrentSection(): HTMLElement | null {
    // Find which section is most visible in the viewport
    let maxVisibleSection: HTMLElement | null = null;
    let maxVisibility = 0;
    
    this.sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(viewportHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      
      // Calculate visibility ratio (visible height / total height)
      const visibilityRatio = visibleHeight / rect.height;
      
      if (visibilityRatio > maxVisibility) {
        maxVisibility = visibilityRatio;
        maxVisibleSection = section;
      }
    });
    
    return maxVisibleSection;
  }
    private smoothScrollTo(targetElement: HTMLElement): void {
    const headerOffset = 96; // Updated to match optimized header height (~6rem)
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
    // Set flag to prevent observer from interfering during programmatic scrolling
    this.isScrolling = true;
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Reset scrolling flag after animation completes
    this.scrollTimeout = window.setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }
  
  private handleVideoAutoplay(): void {
    const video = document.querySelector<HTMLVideoElement>('.parallax-video');
    if (video) {
      video.play().catch(error => {
        console.error("Auto-play was prevented:", error);
        // Show play button or alternative content if autoplay fails
        this.handleAutoplayFailure(video);
      });
    }
  }
  
  private handleAutoplayFailure(video: HTMLVideoElement): void {
    // Create play button container
    const playButtonContainer = document.createElement('div');
    playButtonContainer.className = 'video-play-button';
    playButtonContainer.innerHTML = `
      <button aria-label="Video abspielen" class="play-button">
        <i class="fas fa-play"></i>
      </button>
    `;
    
    // Style the container
    Object.assign(playButtonContainer.style, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '10',
      cursor: 'pointer'
    });
    
    // Add click handler
    playButtonContainer.onclick = () => {
      video.play().then(() => {
        playButtonContainer.remove();
      }).catch(console.error);
    };
    
    // Add to video parent container
    if (video.parentElement) {
      video.parentElement.style.position = 'relative';
      video.parentElement.appendChild(playButtonContainer);
    }
  }
}

// Initialize the landing page navigator
const landingPageNavigator = new LandingPageNavigator();

export default landingPageNavigator;
