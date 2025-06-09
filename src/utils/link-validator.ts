/**
 * Link Validator for Senior Care Website
 * Validates internal links and anchor navigation
 */

export interface LinkValidationResult {
  anchors: {
    id: string;
    exists: boolean;
    element?: HTMLElement;
  }[];
  pages: {
    path: string;
    accessible: boolean;
  }[];
  phoneLinks: {
    href: string;
    isValid: boolean;
  }[];
}

export class LinkValidator {
  private anchors = ['home', 'about', 'services', 'experience', 'contact', 'faq', 'location'];
  private pages = ['/legal', '/privacypolicy', '/termsconditions', '/accessibility', '/404'];
  private expectedPhoneNumbers = ['0231 9125000', '+49 231 9125000'];

  /**
   * Validate all anchor links on the landing page
   */
  validateAnchors(): LinkValidationResult['anchors'] {
    return this.anchors.map(anchorId => {
      const element = document.getElementById(anchorId);
      return {
        id: anchorId,
        exists: !!element,
        element: element || undefined
      };
    });
  }

  /**
   * Validate accessibility of internal pages
   */
  async validatePages(): Promise<LinkValidationResult['pages']> {
    const results = await Promise.allSettled(
      this.pages.map(async (page) => {
        try {
          const response = await fetch(page, { method: 'HEAD' });
          return {
            path: page,
            accessible: response.ok
          };
        } catch {
          return {
            path: page,
            accessible: false
          };
        }
      })
    );

    return results.map((result, index) => 
      result.status === 'fulfilled' 
        ? result.value 
        : { path: this.pages[index], accessible: false }
    );
  }

  /**
   * Validate phone number links
   */
  validatePhoneLinks(): LinkValidationResult['phoneLinks'] {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    return Array.from(phoneLinks).map(link => {
      const href = link.getAttribute('href') || '';
      const phoneNumber = href.replace('tel:', '').replace(/\s+/g, '');
      
      const isValid = this.expectedPhoneNumbers.some(expected => 
        phoneNumber.includes(expected.replace(/[\s-]/g, ''))
      );

      return {
        href,
        isValid
      };
    });
  }

  /**
   * Run complete validation
   */
  async validate(): Promise<LinkValidationResult> {
    const [anchors, pages, phoneLinks] = await Promise.all([
      Promise.resolve(this.validateAnchors()),
      this.validatePages(),
      Promise.resolve(this.validatePhoneLinks())
    ]);

    return { anchors, pages, phoneLinks };
  }

  /**
   * Log validation results to console
   */
  async logValidationResults(): Promise<void> {
    const results = await this.validate();
    
    console.group('🔗 Link Validation Results');
    
    // Anchor validation
    console.group('📍 Anchor Links');
    results.anchors.forEach(anchor => {
      const status = anchor.exists ? '✅' : '❌';
      console.log(`${status} #${anchor.id} - ${anchor.exists ? 'Found' : 'Missing'}`);
    });
    console.groupEnd();

    // Page validation
    console.group('📄 Internal Pages');
    results.pages.forEach(page => {
      const status = page.accessible ? '✅' : '❌';
      console.log(`${status} ${page.path} - ${page.accessible ? 'Accessible' : 'Not Found'}`);
    });
    console.groupEnd();

    // Phone validation
    console.group('📞 Phone Links');
    results.phoneLinks.forEach(phone => {
      const status = phone.isValid ? '✅' : '❌';
      console.log(`${status} ${phone.href} - ${phone.isValid ? 'Valid' : 'Invalid'}`);
    });
    console.groupEnd();

    console.groupEnd();
  }

  /**
   * Fix broken links automatically where possible
   */
  fixBrokenLinks(): void {
    // Fix relative links without leading slash
    const brokenRelativeLinks = document.querySelectorAll('a[href]:not([href^="/"]):not([href^="http"]):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"])');
    
    brokenRelativeLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('/')) {
        link.setAttribute('href', `/${href}`);
        console.log(`🔧 Fixed relative link: ${href} → /${href}`);
      }
    });

    // Fix anchor links to point to landing page
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href !== '/' && !href.startsWith('/#')) {
        link.setAttribute('href', `/${href}`);
        console.log(`🔧 Fixed anchor link: ${href} → /${href}`);
      }
    });
  }
}

// Create global instance
export const linkValidator = new LinkValidator();

// Auto-run validation in development
if (process.env.NODE_ENV === 'development') {
  // Run validation after page load
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => linkValidator.logValidationResults(), 1000);
    });
  }
}

// Export for manual use
declare global {
  interface Window {
    linkValidator: LinkValidator;
  }
}

if (typeof window !== 'undefined') {
  window.linkValidator = linkValidator;
}
