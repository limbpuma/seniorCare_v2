/**
 * Navigation Validator
 * Validates that all redirections are working as expected
 */

interface NavigationTest {
  route: string;
  expectedRedirect?: string;
  shouldRedirect: boolean;
}

const navigationTests: NavigationTest[] = [
  // Main pages that should redirect to landing page sections
  { route: '/about', expectedRedirect: '/#about', shouldRedirect: true },
  { route: '/services', expectedRedirect: '/#services', shouldRedirect: true },
  { route: '/contact', expectedRedirect: '/#contact', shouldRedirect: true },
  { route: '/faq', expectedRedirect: '/#faq', shouldRedirect: true },
  
  // Legal pages that should remain independent
  { route: '/legal', shouldRedirect: false },
  { route: '/privacypolicy', shouldRedirect: false },
  { route: '/termsconditions', shouldRedirect: false },
  
  // Home page and landing page
  { route: '/', shouldRedirect: false },
  { route: '/#home', shouldRedirect: false },
];

class NavigationValidator {
  private baseUrl: string;

  constructor(baseUrl: string = 'http://localhost:4323') {
    this.baseUrl = baseUrl;
  }
  async validateAll(): Promise<boolean> {
    console.log('🧪 Starting navigation validation tests...\n');
    let failures = 0;
    let successes = 0;

    for (const test of navigationTests) {
      try {
        const response = await fetch(`${this.baseUrl}${test.route}`);
        const redirected = response.redirected;
        const finalUrl = response.url;
        
        if (test.shouldRedirect) {
          if (!redirected) {
            console.error(`❌ FAILED: ${test.route} should redirect but didn't`);
            failures++;
          } else if (test.expectedRedirect && !finalUrl.endsWith(test.expectedRedirect)) {
            console.error(`❌ FAILED: ${test.route} redirected to wrong destination`);
            console.error(`   Expected: ${test.expectedRedirect}`);
            console.error(`   Got: ${finalUrl}`);
            failures++;
          } else {
            console.log(`✅ PASSED: ${test.route} redirects correctly`);
            successes++;
          }
          } else {
            console.log(`✅ ${test.route} correctly redirects to ${finalUrl}`);
          }
        } else {
          if (redirected) {
            console.error(`❌ ${test.route} shouldn't redirect but did to ${finalUrl}`);
          } else {
            console.log(`✅ ${test.route} correctly remains independent`);
          }
        }
      } catch (error) {
        console.error(`❌ Error testing ${test.route}:`, error);
      }
    }
    
    console.log('\n🏁 Navigation validation complete!');
  }
}

// Initialize and run tests
const validator = new NavigationValidator();
validator.validateAll().catch(console.error);
