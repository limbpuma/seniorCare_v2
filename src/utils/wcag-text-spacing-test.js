// WCAG 2.2 Text Spacing Testing Script
// Allows toggling text spacing to test 1.4.12 compliance

class WCAGTextSpacingTester {
  constructor() {
    this.isEnabled = false;
    this.testClass = 'wcag-test-spacing';
    this.init();
  }

  init() {
    // Add testing controls if in development or testing mode
    if (window.location.hostname === 'localhost' || window.location.search.includes('wcag-test')) {
      this.addTestingControls();
    }
    
    // Check for URL parameter to auto-enable
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('text-spacing') === 'test') {
      this.enableTextSpacing();
    }
  }

  addTestingControls() {
    // Create floating test panel
    const panel = document.createElement('div');
    panel.innerHTML = `
      <div style="
        position: fixed; 
        top: 20px; 
        right: 20px; 
        z-index: 9999; 
        background: #000; 
        color: #fff; 
        padding: 15px; 
        border-radius: 8px;
        font-family: monospace;
        font-size: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        min-width: 250px;
      ">
        <h4 style="margin: 0 0 10px 0; font-size: 14px;">WCAG 2.2 Testing</h4>
        <button id="wcag-text-spacing-toggle" style="
          background: #4CAF50; 
          color: white; 
          border: none; 
          padding: 8px 12px; 
          border-radius: 4px; 
          cursor: pointer;
          width: 100%;
          margin-bottom: 8px;
        ">
          Toggle Text Spacing (1.4.12)
        </button>
        <div style="font-size: 10px; opacity: 0.8; line-height: 1.4;">
          Tests: Line height 1.5x, Letter spacing 0.12em, Word spacing 0.16em, Paragraph spacing 2em
        </div>
      </div>
    `;
    
    document.body.appendChild(panel);
    
    // Add click handler
    document.getElementById('wcag-text-spacing-toggle').addEventListener('click', () => {
      this.toggle();
    });
  }

  enableTextSpacing() {
    document.documentElement.classList.add(this.testClass);
    this.isEnabled = true;
    console.log('✅ WCAG 2.2 Text Spacing Testing ENABLED');
    this.logTestResults();
  }

  disableTextSpacing() {
    document.documentElement.classList.remove(this.testClass);
    this.isEnabled = false;
    console.log('❌ WCAG 2.2 Text Spacing Testing DISABLED');
  }

  toggle() {
    if (this.isEnabled) {
      this.disableTextSpacing();
    } else {
      this.enableTextSpacing();
    }
  }

  logTestResults() {
    console.group('🔍 WCAG 2.2 - 1.4.12 Text Spacing Test Results');
    
    // Test text elements
    const textElements = document.querySelectorAll('p, div, span, h1, h2, h3, h4, h5, h6, a, button');
    
    let issuesFound = 0;
    
    textElements.forEach((element, index) => {
      const computedStyle = window.getComputedStyle(element);
      const fontSize = parseFloat(computedStyle.fontSize);
      
      // Check line height (should be at least 1.5x font size)
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const lineHeightRatio = lineHeight / fontSize;
      
      // Check letter spacing (should be at least 0.12em)
      const letterSpacing = parseFloat(computedStyle.letterSpacing);
      const letterSpacingEm = letterSpacing / fontSize;
      
      // Check word spacing (should be at least 0.16em)  
      const wordSpacing = parseFloat(computedStyle.wordSpacing);
      const wordSpacingEm = wordSpacing / fontSize;
      
      if (lineHeightRatio < 1.5 || letterSpacingEm < 0.12 || wordSpacingEm < 0.16) {
        console.warn(`⚠️ Element ${index + 1}:`, {
          element: element.tagName,
          text: element.textContent?.substring(0, 50) + '...',
          lineHeight: lineHeightRatio.toFixed(2) + 'x',
          letterSpacing: letterSpacingEm.toFixed(3) + 'em',
          wordSpacing: wordSpacingEm.toFixed(3) + 'em',
          issues: [
            lineHeightRatio < 1.5 ? 'Line height < 1.5x' : null,
            letterSpacingEm < 0.12 ? 'Letter spacing < 0.12em' : null,
            wordSpacingEm < 0.16 ? 'Word spacing < 0.16em' : null
          ].filter(Boolean)
        });
        issuesFound++;
      }
    });
    
    // Check for content overflow
    const overflowElements = document.querySelectorAll('*');
    let overflowIssues = 0;
    
    overflowElements.forEach(element => {
      if (element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight) {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.overflow === 'hidden' || computedStyle.textOverflow === 'ellipsis') {
          console.warn('⚠️ Potential content overflow:', element);
          overflowIssues++;
        }
      }
    });
    
    console.log(`📊 Summary: ${issuesFound} text spacing issues, ${overflowIssues} potential overflow issues found`);
    
    if (issuesFound === 0 && overflowIssues === 0) {
      console.log('✅ All tests passed! Text spacing compliance achieved.');
    } else {
      console.log('❌ Issues found. Review spacing implementation.');
    }
    
    console.groupEnd();
  }

  // Public method to check compliance
  static checkCompliance() {
    const tester = new WCAGTextSpacingTester();
    tester.enableTextSpacing();
    
    setTimeout(() => {
      tester.logTestResults();
    }, 1000);
    
    return tester;
  }
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  new WCAGTextSpacingTester();
});

// Export for manual testing
window.WCAGTextSpacingTester = WCAGTextSpacingTester;
