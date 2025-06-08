#!/usr/bin/env node

/**
 * Simplified Link Testing Script
 * Tests critical links without external dependencies
 */

import { request } from 'https';
import { request as httpRequest } from 'http';

const BASE_URL = 'http://localhost:4325';

class SimpleLinkTester {
  constructor() {
    this.results = {
      pages: [],
      summary: {
        total: 0,
        passed: 0,
        failed: 0
      }
    };
  }
  async testPage(path, description) {
    console.log(`🔍 Testing: ${description}...`);
    
    try {
      const url = new URL(path, BASE_URL);
      const isHttps = url.protocol === 'https:';
      const requestModule = isHttps ? request : httpRequest;
      
      const result = await new Promise((resolve, reject) => {
        const req = requestModule(url, { method: 'GET' }, (res) => {
          const success = res.statusCode >= 200 && res.statusCode < 400;
          resolve({
            path,
            description,
            status: res.statusCode,
            success,
            error: null
          });
        });
        
        req.on('error', (error) => {
          reject({
            path,
            description,
            status: 0,
            success: false,
            error: error.message
          });
        });
        
        req.setTimeout(5000, () => {
          req.destroy();
          reject({
            path,
            description,
            status: 0,
            success: false,
            error: 'Request timeout'
          });
        });
        
        req.end();
      });
      
      console.log(`  ${result.success ? '✅' : '❌'} ${path} - Status: ${result.status}`);
      
      this.results.pages.push(result);
      this.results.summary.total++;
      
      if (result.success) {
        this.results.summary.passed++;
      } else {
        this.results.summary.failed++;
      }
      
      return result;
      
    } catch (error) {
      console.log(`  ❌ ${path} - Error: ${error.message || error.error}`);
      
      const result = error.error ? error : {
        path,
        description,
        status: 0,
        success: false,
        error: error.message
      };
      
      this.results.pages.push(result);
      this.results.summary.total++;
      this.results.summary.failed++;
      
      return result;
    }
  }

  async runAllTests() {
    console.log('🚀 Starting Link Tests...\n');
    
    // Test main pages
    await this.testPage('/', 'Landing Page');
    await this.testPage('/legal', 'Legal/Impressum Page');
    await this.testPage('/privacypolicy', 'Privacy Policy Page');
    await this.testPage('/termsconditions', 'Terms & Conditions Page');
    await this.testPage('/accessibility', 'Accessibility Page');
    await this.testPage('/404', '404 Error Page');
    
    // Test demo page
    await this.testPage('/demo-php', 'PHP Demo Page');
    
    this.generateReport();
  }

  generateReport() {
    console.log('\n📊 LINK TESTING REPORT');
    console.log('='.repeat(50));
    
    const { total, passed, failed } = this.results.summary;
    const successRate = ((passed / total) * 100).toFixed(1);
    
    console.log(`📈 Total Tests: ${total}`);
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`🎯 Success Rate: ${successRate}%`);
    
    if (failed > 0) {
      console.log('\n🚨 Failed Tests:');
      this.results.pages
        .filter(page => !page.success)
        .forEach(page => {
          console.log(`  ❌ ${page.path} - ${page.error || `Status ${page.status}`}`);
        });
    }
    
    if (successRate >= 90) {
      console.log('\n🎉 Excellent! All critical links are working.');
    } else if (successRate >= 75) {
      console.log('\n🔧 Good, but some improvements needed.');
    } else {
      console.log('\n⚠️  Significant link issues detected.');
    }
    
    console.log('\n✨ Next: Test anchor navigation and phone links manually in browser');
  }
}

// Run tests
const tester = new SimpleLinkTester();
tester.runAllTests().catch(console.error);
