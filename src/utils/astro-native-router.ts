---
/**
 * Astro Native Router Configuration
 * Handles redirections and routing using only Astro 5.9 capabilities
 * No external JavaScript libraries required
 */

// Define route mappings for proper navigation
export const ROUTE_MAPPINGS = {
  // Main pages
  '/': '/',
  '/home': '/',
  '/inicio': '/',
  
  // About page variations
  '/about': '/about',
  '/about-us': '/about',
  '/sobre-nosotros': '/about',
  '/quienes-somos': '/about',
  
  // Services page variations
  '/services': '/services',
  '/servicios': '/services',
  '/our-services': '/services',
  '/nuestros-servicios': '/services',
  
  // Contact page variations
  '/contact': '/contact',
  '/contact-us': '/contact',
  '/contacto': '/contact',
  '/contactanos': '/contact',
  
  // FAQ page variations
  '/faq': '/faq',
  '/faqs': '/faq',
  '/preguntas-frecuentes': '/faq',
  '/help': '/faq',
  '/ayuda': '/faq',
  
  // Legal pages
  '/legal': '/legal',
  '/privacy': '/privacypolicy',
  '/privacy-policy': '/privacypolicy',
  '/terms': '/termsconditions',
  '/terms-conditions': '/termsconditions',
  '/accessibility': '/accessibility',
  '/accesibilidad': '/accessibility',
};

// Helper function to get canonical URL
export function getCanonicalUrl(currentPath: string): string {
  return ROUTE_MAPPINGS[currentPath] || currentPath;
}

// Helper function to check if redirect is needed
export function needsRedirect(currentPath: string): boolean {
  const canonical = ROUTE_MAPPINGS[currentPath];
  return canonical && canonical !== currentPath;
}

// Navigation structure for dynamic menu generation
export const NAVIGATION_STRUCTURE = {
  main: [
    {
      name: 'Home',
      href: '/',
      key: 'home',
      priority: 1
    },
    {
      name: 'About',
      href: '/about',
      key: 'about',
      priority: 2
    },
    {
      name: 'Services',
      href: '/services',
      key: 'services',
      priority: 3
    },
    {
      name: 'Contact',
      href: '/contact',
      key: 'contact',
      priority: 4
    },
    {
      name: 'FAQ',
      href: '/faq',
      key: 'faq',
      priority: 5
    }
  ],
  
  footer: [
    {
      name: 'Legal',
      href: '/legal',
      key: 'legal'
    },
    {
      name: 'Privacy Policy',
      href: '/privacypolicy',
      key: 'privacy'
    },
    {
      name: 'Terms & Conditions',
      href: '/termsconditions',
      key: 'terms'
    },
    {
      name: 'Accessibility',
      href: '/accessibility',
      key: 'accessibility'
    }
  ]
};

// Helper function to generate structured data for navigation
export function getNavigationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": NAVIGATION_STRUCTURE.main.map(item => ({
      "@type": "WebPage",
      "name": item.name,
      "url": item.href
    }))
  };
}

// Helper function to validate internal links
export function isValidInternalLink(href: string): boolean {
  // Check if it's a valid internal route
  const validRoutes = Object.values(ROUTE_MAPPINGS);
  return validRoutes.includes(href) || href.startsWith('/#');
}

// Helper function to get page metadata for routing
export function getPageMetadata(currentPath: string) {
  const routeMap = {
    '/': {
      title: 'Home',
      description: 'Professional senior care services',
      keywords: 'senior care, elderly care, home care'
    },
    '/about': {
      title: 'About Us',
      description: 'Learn about our senior care expertise',
      keywords: 'about, team, experience'
    },
    '/services': {
      title: 'Our Services',
      description: 'Comprehensive senior care services',
      keywords: 'services, care, assistance'
    },
    '/contact': {
      title: 'Contact Us',
      description: 'Get in touch for senior care services',
      keywords: 'contact, phone, address'
    },
    '/faq': {
      title: 'Frequently Asked Questions',
      description: 'Common questions about our services',
      keywords: 'faq, questions, help'
    }
  };
  
  return routeMap[currentPath] || {
    title: 'Page',
    description: 'Integra Senior Care',
    keywords: 'senior care'
  };
}
---
