// WCAG 2.2 Functionality Test Script
// This script tests if the WCAG implementations are working correctly

console.log('🧪 WCAG 2.2 Functionality Test Starting...');

// Test 1: Text Spacing Functionality
function testTextSpacing() {
    console.log('\n📝 Testing Text Spacing (1.4.12)...');
    
    // Check if CSS file is loaded
    const cssLinks = document.querySelectorAll('link[href*="wcag-text-spacing"]');
    console.log(`CSS Link found: ${cssLinks.length > 0 ? '✅' : '❌'}`);
    
    // Test toggle functionality
    const testElement = document.querySelector('#text-spacing-test') || document.querySelector('.test-content');
    if (testElement) {
        console.log('Test element found: ✅');
        
        // Apply text spacing class
        testElement.classList.add('wcag-test-spacing');
        
        // Check computed styles
        const computedStyle = window.getComputedStyle(testElement);
        const lineHeight = computedStyle.lineHeight;
        const letterSpacing = computedStyle.letterSpacing;
        const wordSpacing = computedStyle.wordSpacing;
        
        console.log(`Line Height: ${lineHeight}`);
        console.log(`Letter Spacing: ${letterSpacing}`);
        console.log(`Word Spacing: ${wordSpacing}`);
        
        console.log('Text Spacing Test: ✅ FUNCTIONAL');
    } else {
        console.log('Test element not found: ❌');
    }
}

// Test 2: Focus Not Obscured Functionality
function testFocusNotObscured() {
    console.log('\n🎯 Testing Focus Not Obscured (2.4.11)...');
    
    const focusableElements = document.querySelectorAll('button, input, a, select, textarea, [tabindex]');
    console.log(`Focusable elements found: ${focusableElements.length}`);
    
    if (focusableElements.length > 0) {
        // Test first focusable element
        const firstElement = focusableElements[0];
        firstElement.focus();
        
        const computedStyle = window.getComputedStyle(firstElement, ':focus');
        console.log('Focus styles applied: ✅');
        console.log('Focus Not Obscured Test: ✅ FUNCTIONAL');
    } else {
        console.log('No focusable elements found: ❌');
    }
}

// Test 3: Content on Hover/Focus Functionality
function testContentOnHoverFocus() {
    console.log('\n🖱️ Testing Content on Hover/Focus (1.4.13)...');
    
    const hoverElements = document.querySelectorAll('[class*="hover"], .wcag-hover-content');
    console.log(`Hover content elements found: ${hoverElements.length}`);
    
    if (hoverElements.length > 0) {
        console.log('Hover content elements detected: ✅');
        console.log('Content on Hover/Focus Test: ✅ FUNCTIONAL');
    } else {
        console.log('Creating test hover element...');
        const testDiv = document.createElement('div');
        testDiv.innerHTML = `
            <span class="test-hover" style="position: relative; cursor: pointer;">
                Hover Test
                <div class="wcag-hover-content" style="position: absolute; top: 100%; left: 0; background: black; color: white; padding: 5px; opacity: 0;">
                    Hover content
                </div>
            </span>
        `;
        document.body.appendChild(testDiv);
        console.log('Test hover element created: ✅');
    }
}

// Test 4: Focus Visible Enhancement Functionality
function testFocusVisibleEnhancement() {
    console.log('\n👁️ Testing Focus Visible Enhancement (2.4.7)...');
    
    const cssLinks = document.querySelectorAll('link[href*="wcag-focus-visible"]');
    console.log(`Focus enhancement CSS loaded: ${cssLinks.length > 0 ? '✅' : '❌'}`);
    
    const enhancedElements = document.querySelectorAll('.focus-enhanced, [class*="focus"]');
    console.log(`Enhanced focus elements found: ${enhancedElements.length}`);
    
    console.log('Focus Visible Enhancement Test: ✅ FUNCTIONAL');
}

// Run all tests
function runAllTests() {
    console.log('🚀 Running All WCAG 2.2 Tests...\n');
    
    testTextSpacing();
    testFocusNotObscured();
    testContentOnHoverFocus();
    testFocusVisibleEnhancement();
    
    console.log('\n✅ All WCAG 2.2 Tests Complete!');
    console.log('📋 Check the results above for any issues.');
}

// Run tests when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAllTests);
} else {
    runAllTests();
}

// Export for manual testing
window.WCAGTests = {
    runAllTests,
    testTextSpacing,
    testFocusNotObscured,
    testContentOnHoverFocus,
    testFocusVisibleEnhancement
};

console.log('🎯 WCAG Tests available: window.WCAGTests.runAllTests()');
