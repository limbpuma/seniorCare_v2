// Test utility to verify backend connectivity
// Run with: node src/utils/test-backend.js

const BACKEND_URL = 'http://localhost/AdminHub-PHP/src/api';

async function testBackend() {
  console.log('🧪 Testing Senior Care PHP Backend Integration\n');
  
  const tests = [
    {
      name: 'Health Check',
      endpoint: '/health.php',
      method: 'GET'
    },
    {
      name: 'Site Texts',
      endpoint: '/texts.php', 
      method: 'GET'
    },
    {
      name: 'SEO Data',
      endpoint: '/seo.php?page=home',
      method: 'GET'
    },
    {
      name: 'Site Config',
      endpoint: '/config.php',
      method: 'GET'
    },
    {
      name: 'Contact Form',
      endpoint: '/contact.php',
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+49 123 456 7890',
        subject: 'Testing',
        message: 'This is a test message from frontend integration.'
      }
    }
  ];

  const results = [];

  for (const test of tests) {
    console.log(`🔍 Testing: ${test.name}`);
    
    try {
      const options = {
        method: test.method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      };

      if (test.body) {
        options.body = JSON.stringify(test.body);
      }

      const response = await fetch(`${BACKEND_URL}${test.endpoint}`, options);
      
      const result = {
        test: test.name,
        status: response.status,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      };

      if (response.ok) {
        try {
          result.data = await response.json();
          console.log(`✅ ${test.name}: SUCCESS`);
          console.log(`   Status: ${response.status}`);
          console.log(`   Response: ${JSON.stringify(result.data).substring(0, 100)}...`);
        } catch (e) {
          result.error = 'Invalid JSON response';
          console.log(`❌ ${test.name}: INVALID JSON`);
        }
      } else {
        result.error = `HTTP ${response.status}: ${response.statusText}`;
        console.log(`❌ ${test.name}: ${result.error}`);
      }

      results.push(result);
      
    } catch (error) {
      const result = {
        test: test.name,
        error: error.message,
        ok: false
      };
      
      results.push(result);
      console.log(`❌ ${test.name}: ${error.message}`);
    }
    
    console.log('');
  }

  // Summary
  console.log('📊 SUMMARY:');
  console.log('='.repeat(50));
  
  const successful = results.filter(r => r.ok).length;
  const total = results.length;
  
  console.log(`✅ Successful: ${successful}/${total}`);
  console.log(`❌ Failed: ${total - successful}/${total}`);
  
  if (successful === total) {
    console.log('\n🎉 ALL TESTS PASSED! Backend is ready for integration.');
  } else {
    console.log('\n⚠️  Some tests failed. Check backend configuration.');
    console.log('\nFailed tests:');
    results
      .filter(r => !r.ok)
      .forEach(r => console.log(`  - ${r.test}: ${r.error}`));
  }

  console.log('\n📋 Next steps:');
  console.log('1. Ensure all endpoints return successful responses');
  console.log('2. Update frontend URLs in .env file');
  console.log('3. Test contact form on demo page: http://localhost:4323/demo-php');
  
  return results;
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testBackend().catch(console.error);
}

export { testBackend };
