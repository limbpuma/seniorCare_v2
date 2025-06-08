#!/usr/bin/env node

/**
 * Automated Link Testing Script
 * Tests all internal links and anchor navigation
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'http://localhost:4325';

class LinkTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = {
      anchors: [],
      internalLinks: [],
      phoneLinks: [],
      ctaButtons: []
    };
  }

  async initialize() {
    console.log('🚀 Initializing Link Tester...');
    this.browser = await puppeteer.launch({ 
      headless: false, // Set to true for CI
      defaultViewport: { width: 1280, height: 720 }
    });
    this.page = await this.browser.newPage();
    
    // Enable console logging from browser
    this.page.on('console', (msg) => {
      if (msg.type() === 'log' && msg.text().includes('Link Validation')) {
        console.log('🔗', msg.text());
      }
    });
  }

  async testLandingPage() {
    console.log('📍 Testing Landing Page...');
    await this.page.goto(BASE_URL);
    await this.page.waitForLoadState('networkidle');

    // Test anchor navigation
    const anchors = ['#about', '#services', '#experience', '#contact', '#faq', '#location'];
    
    for (const anchor of anchors) {
      try {
        console.log(`  Testing anchor: ${anchor}`);
        
        // Find the section
        const section = await this.page.$(`${anchor}, [id="${anchor.slice(1)}"]`);
        const exists = !!section;
        
        if (exists) {
          // Test smooth scroll by clicking nav link
          const navLink = await this.page.$(`a[href="${anchor}"], a[href="/${anchor}"]`);
          if (navLink) {
            await navLink.click();
            await this.page.waitForTimeout(1000); // Wait for scroll animation
            
            // Check if section is in viewport
            const isVisible = await section.isIntersectingViewport();
            console.log(`    ✅ ${anchor} - Navigation works, visible: ${isVisible}`);
          } else {
            console.log(`    ⚠️  ${anchor} - Section exists but no nav link found`);
          }
        } else {
          console.log(`    ❌ ${anchor} - Section not found`);
        }
        
        this.results.anchors.push({ anchor, exists, navigable: !!navLink });
      } catch (error) {
        console.log(`    ❌ ${anchor} - Error: ${error.message}`);
        this.results.anchors.push({ anchor, exists: false, error: error.message });
      }
    }
  }

  async testInternalLinks() {
    console.log('📄 Testing Internal Links...');
    await this.page.goto(BASE_URL);
    
    const internalLinks = ['/legal', '/privacypolicy', '/termsconditions', '/accessibility'];
    
    for (const link of internalLinks) {
      try {
        console.log(`  Testing: ${link}`);
        const response = await this.page.goto(BASE_URL + link);
        const status = response.status();
        const success = status === 200;
        
        console.log(`    ${success ? '✅' : '❌'} ${link} - Status: ${status}`);
        this.results.internalLinks.push({ link, status, success });
        
        // Go back to home for next test
        await this.page.goto(BASE_URL);
      } catch (error) {
        console.log(`    ❌ ${link} - Error: ${error.message}`);
        this.results.internalLinks.push({ link, success: false, error: error.message });
      }
    }
  }

  async testPhoneLinks() {
    console.log('📞 Testing Phone Links...');
    await this.page.goto(BASE_URL);
    
    // Find all phone links
    const phoneLinks = await this.page.$$eval('a[href^="tel:"]', links => 
      links.map(link => ({
        href: link.href,
        text: link.textContent.trim()
      }))
    );

    const expectedPhone = '02319125000'; // Without spaces/dashes
    
    phoneLinks.forEach(phone => {
      const phoneNumber = phone.href.replace('tel:', '').replace(/[\s-]/g, '');
      const isValid = phoneNumber.includes(expectedPhone);
      
      console.log(`  ${isValid ? '✅' : '❌'} ${phone.href} - "${phone.text}"`);
      this.results.phoneLinks.push({ ...phone, isValid });
    });
  }

  async testCTAButtons() {
    console.log('🔘 Testing CTA Buttons...');
    await this.page.goto(BASE_URL);
    
    // Find CTA buttons and test their targets
    const ctaButtons = await this.page.$$eval('a[class*="primary"], button[class*="primary"]', buttons =>
      buttons.map(btn => ({
        text: btn.textContent.trim(),
        href: btn.href || btn.getAttribute('href'),
        tag: btn.tagName.toLowerCase()
      }))
    );

    for (const button of ctaButtons) {
      if (button.href) {
        const isAnchor = button.href.includes('#');
        const isPhone = button.href.startsWith('tel:');
        const isExternal = button.href.startsWith('http') && !button.href.includes('localhost');
        
        let result = 'Unknown';
        
        if (isPhone) {
          result = '📞 Phone link';
        } else if (isAnchor) {
          const anchor = button.href.split('#')[1];
          const targetExists = await this.page.$(`#${anchor}`) !== null;
          result = targetExists ? '✅ Anchor target exists' : '❌ Anchor target missing';
        } else if (isExternal) {
          result = '🔗 External link';
        } else {
          // Test internal link
          try {
            const response = await fetch(button.href);
            result = response.ok ? '✅ Internal page OK' : '❌ Internal page broken';
          } catch {
            result = '❌ Internal page unreachable';
          }
        }
        
        console.log(`  "${button.text}" → ${button.href} - ${result}`);
        this.results.ctaButtons.push({ ...button, result });
      }
    }
  }

  async generateReport() {
    console.log('\n📊 LINK TESTING REPORT');
    console.log('='.repeat(50));
    
    // Anchor links summary
    const anchorSuccess = this.results.anchors.filter(a => a.exists && a.navigable).length;
    const anchorTotal = this.results.anchors.length;
    console.log(`📍 Anchor Links: ${anchorSuccess}/${anchorTotal} working`);
    
    // Internal links summary
    const internalSuccess = this.results.internalLinks.filter(l => l.success).length;
    const internalTotal = this.results.internalLinks.length;
    console.log(`📄 Internal Links: ${internalSuccess}/${internalTotal} working`);
    
    // Phone links summary
    const phoneSuccess = this.results.phoneLinks.filter(p => p.isValid).length;
    const phoneTotal = this.results.phoneLinks.length;
    console.log(`📞 Phone Links: ${phoneSuccess}/${phoneTotal} valid`);
    
    // CTA buttons summary
    const ctaWorking = this.results.ctaButtons.filter(c => c.result.includes('✅')).length;
    const ctaTotal = this.results.ctaButtons.length;
    console.log(`🔘 CTA Buttons: ${ctaWorking}/${ctaTotal} working`);
    
    // Overall score
    const totalSuccess = anchorSuccess + internalSuccess + phoneSuccess + ctaWorking;
    const totalTests = anchorTotal + internalTotal + phoneTotal + ctaTotal;
    const score = ((totalSuccess / totalTests) * 100).toFixed(1);
    
    console.log(`\n🎯 Overall Score: ${score}% (${totalSuccess}/${totalTests})`);
    
    if (score >= 90) {
      console.log('🎉 Excellent! Links are well structured.');
    } else if (score >= 75) {
      console.log('🔧 Good, but some improvements needed.');
    } else {
      console.log('⚠️  Significant link issues detected.');
    }
  }

  async run() {
    try {
      await this.initialize();
      await this.testLandingPage();
      await this.testInternalLinks();
      await this.testPhoneLinks();
      await this.testCTAButtons();
      await this.generateReport();
    } catch (error) {
      console.error('❌ Test failed:', error);
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

// Run tests if this file is executed directly
if (process.argv[1] === __filename) {
  const tester = new LinkTester();
  tester.run().catch(console.error);
}

export default LinkTester;
