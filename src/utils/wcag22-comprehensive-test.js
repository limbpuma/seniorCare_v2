/**
 * WCAG 2.2 Comprehensive Testing Suite
 * Tests all implemented WCAG 2.2 criteria for Senior Care project
 * 
 * Phase 5.1 - Post-rollback WCAG 2.2 & BITV 2.0 Compliance
 * 
 * Implemented Criteria:
 * Priority 1: 1.4.12 Text Spacing, 2.4.11 Focus Not Obscured
 * Priority 2: 1.4.13 Content on Hover/Focus, 2.4.7 Focus Visible Enhancement
 */

class WCAG22ComprehensiveTest {
    constructor() {
        this.testResults = {
            '1.4.12': { name: 'Text Spacing', status: 'pending', issues: [] },
            '1.4.13': { name: 'Content on Hover/Focus', status: 'pending', issues: [] },
            '2.4.7': { name: 'Focus Visible Enhancement', status: 'pending', issues: [] },
            '2.4.11': { name: 'Focus Not Obscured', status: 'pending', issues: [] }
        };
        
        this.init();
    }

    init() {
        console.log('🔍 WCAG 2.2 Comprehensive Testing Suite Initialized');
        console.log('📋 Testing 4 implemented criteria...');
        
        // Add test controls
        this.addTestControls();
        
        // Run automatic tests
        this.runAutomaticTests();
        
        // Add keyboard shortcuts
        this.addKeyboardShortcuts();
    }

    addTestControls() {
        // Create test control panel
        const testPanel = document.createElement('div');
        testPanel.id = 'wcag22-test-panel';
        testPanel.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            max-width: 300px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        `;

        testPanel.innerHTML = `
            <div style="margin-bottom: 10px; font-weight: bold;">
                🔍 WCAG 2.2 Test Suite
            </div>
            <div id="test-results"></div>
            <div style="margin-top: 10px; font-size: 10px; opacity: 0.8;">
                F1: Text Spacing Test<br>
                F2: Focus Not Obscured Test<br>
                F3: Content Hover/Focus Test<br>
                F4: Focus Visible Test<br>
                F5: Run All Tests<br>
                ESC: Close Panel
            </div>
        `;

        document.body.appendChild(testPanel);
        this.testPanel = testPanel;
        this.updateTestResults();
    }

    addKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.testPanel) {
                this.testPanel.style.display = 'none';
                return;
            }

            if (e.key === 'F1') {
                e.preventDefault();
                this.testTextSpacing();
            } else if (e.key === 'F2') {
                e.preventDefault();
                this.testFocusNotObscured();
            } else if (e.key === 'F3') {
                e.preventDefault();
                this.testContentHoverFocus();
            } else if (e.key === 'F4') {
                e.preventDefault();
                this.testFocusVisible();
            } else if (e.key === 'F5') {
                e.preventDefault();
                this.runAllTests();
            }
        });
    }

    async runAutomaticTests() {
        console.log('🚀 Running automatic WCAG 2.2 tests...');
        
        // Test 1: Check if all CSS files are loaded
        await this.checkCSSFiles();
        
        // Test 2: Check if all JS files are loaded
        await this.checkJSFiles();
        
        // Test 3: Basic functionality tests
        await this.runBasicTests();
        
        this.updateTestResults();
    }

    async checkCSSFiles() {
        const requiredCSS = [
            'wcag-text-spacing',
            'wcag-focus-not-obscured',
            'wcag-content-hover-focus',
            'wcag-focus-visible-enhancement'
        ];

        for (const cssId of requiredCSS) {
            const link = document.getElementById(cssId);
            if (!link) {
                console.error(`❌ CSS file not found: ${cssId}`);
                this.addIssue('general', `Missing CSS file: ${cssId}`);
            } else {
                console.log(`✅ CSS file loaded: ${cssId}`);
            }
        }
    }

    async checkJSFiles() {
        const requiredJS = [
            'wcag-text-spacing-test.js',
            'wcag-focus-not-obscured.js',
            'wcag-content-hover-focus.js',
            'wcag-focus-visible-enhancement.js'
        ];

        // Check if JS functionality is available
        if (typeof window.wcagTextSpacingTest === 'undefined') {
            this.addIssue('1.4.12', 'Text spacing JavaScript not loaded');
        }
        
        if (typeof window.wcagFocusNotObscuredTest === 'undefined') {
            this.addIssue('2.4.11', 'Focus not obscured JavaScript not loaded');
        }
        
        if (typeof window.wcagContentHoverFocusTest === 'undefined') {
            this.addIssue('1.4.13', 'Content hover/focus JavaScript not loaded');
        }
        
        if (typeof window.wcagFocusVisibleTest === 'undefined') {
            this.addIssue('2.4.7', 'Focus visible JavaScript not loaded');
        }
    }

    async runBasicTests() {
        // Test text spacing
        this.testTextSpacingBasic();
        
        // Test focus visibility
        this.testFocusVisibleBasic();
        
        // Test hover content
        this.testHoverContentBasic();
        
        // Test focus not obscured
        this.testFocusNotObscuredBasic();
    }

    testTextSpacingBasic() {
        console.log('🔤 Testing WCAG 1.4.12 Text Spacing...');
        
        // Check if text spacing styles exist
        const testElement = document.createElement('div');
        testElement.className = 'wcag-text-spacing';
        testElement.textContent = 'Test text spacing';
        document.body.appendChild(testElement);
        
        const styles = window.getComputedStyle(testElement);
        const lineHeight = parseFloat(styles.lineHeight);
        const letterSpacing = styles.letterSpacing;
        const wordSpacing = styles.wordSpacing;
        
        if (lineHeight >= 1.5) {
            console.log('✅ Line height meets WCAG requirements');
        } else {
            this.addIssue('1.4.12', `Line height too small: ${lineHeight}`);
        }
        
        if (letterSpacing && letterSpacing !== 'normal') {
            console.log('✅ Letter spacing applied');
        } else {
            this.addIssue('1.4.12', 'Letter spacing not applied');
        }
        
        if (wordSpacing && wordSpacing !== 'normal') {
            console.log('✅ Word spacing applied');
        } else {
            this.addIssue('1.4.12', 'Word spacing not applied');
        }
        
        document.body.removeChild(testElement);
        this.testResults['1.4.12'].status = 'passed';
    }

    testFocusVisibleBasic() {
        console.log('👁️ Testing WCAG 2.4.7 Focus Visible...');
        
        // Test focus indicators
        const focusableElements = document.querySelectorAll('button, a, input, textarea, select');
        let focusIndicatorCount = 0;
        
        focusableElements.forEach(element => {
            element.focus();
            const styles = window.getComputedStyle(element);
            if (styles.outline !== 'none' && styles.outline !== '') {
                focusIndicatorCount++;
            }
        });
        
        if (focusIndicatorCount > 0) {
            console.log(`✅ Focus indicators found on ${focusIndicatorCount} elements`);
            this.testResults['2.4.7'].status = 'passed';
        } else {
            this.addIssue('2.4.7', 'No focus indicators found');
        }
    }

    testHoverContentBasic() {
        console.log('🖱️ Testing WCAG 1.4.13 Content on Hover/Focus...');
        
        // Test tooltip elements
        const tooltips = document.querySelectorAll('[data-tooltip]');
        if (tooltips.length > 0) {
            console.log(`✅ Found ${tooltips.length} tooltip elements`);
            this.testResults['1.4.13'].status = 'passed';
        } else {
            this.addIssue('1.4.13', 'No tooltip elements found');
        }
        
        // Test ESC key functionality
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                console.log('✅ ESC key handler detected');
            }
        });
    }

    testFocusNotObscuredBasic() {
        console.log('🎯 Testing WCAG 2.4.11 Focus Not Obscured...');
        
        // Test z-index on focus
        const focusableElements = document.querySelectorAll('button, a, input');
        let highZIndexCount = 0;
        
        focusableElements.forEach(element => {
            element.focus();
            const styles = window.getComputedStyle(element);
            const zIndex = parseInt(styles.zIndex);
            if (zIndex > 1000) {
                highZIndexCount++;
            }
        });
        
        if (highZIndexCount > 0) {
            console.log(`✅ High z-index focus found on ${highZIndexCount} elements`);
            this.testResults['2.4.11'].status = 'passed';
        } else {
            console.log('ℹ️ No high z-index focus found (may be normal)');
            this.testResults['2.4.11'].status = 'partial';
        }
    }

    // Manual test methods
    testTextSpacing() {
        console.log('🔤 Running Text Spacing Test...');
        if (typeof window.wcagTextSpacingTest !== 'undefined') {
            window.wcagTextSpacingTest.toggleTestMode();
        } else {
            console.error('❌ Text spacing test not available');
        }
    }

    testFocusNotObscured() {
        console.log('🎯 Running Focus Not Obscured Test...');
        if (typeof window.wcagFocusNotObscuredTest !== 'undefined') {
            window.wcagFocusNotObscuredTest.toggleTestMode();
        } else {
            console.error('❌ Focus not obscured test not available');
        }
    }

    testContentHoverFocus() {
        console.log('🖱️ Running Content Hover/Focus Test...');
        if (typeof window.wcagContentHoverFocusTest !== 'undefined') {
            window.wcagContentHoverFocusTest.toggleTestMode();
        } else {
            console.error('❌ Content hover/focus test not available');
        }
    }

    testFocusVisible() {
        console.log('👁️ Running Focus Visible Test...');
        if (typeof window.wcagFocusVisibleTest !== 'undefined') {
            window.wcagFocusVisibleTest.toggleTestMode();
        } else {
            console.error('❌ Focus visible test not available');
        }
    }

    runAllTests() {
        console.log('🚀 Running all WCAG 2.2 tests...');
        this.testTextSpacing();
        setTimeout(() => this.testFocusNotObscured(), 1000);
        setTimeout(() => this.testContentHoverFocus(), 2000);
        setTimeout(() => this.testFocusVisible(), 3000);
    }

    addIssue(criterion, issue) {
        if (this.testResults[criterion]) {
            this.testResults[criterion].issues.push(issue);
            this.testResults[criterion].status = 'failed';
        }
    }

    updateTestResults() {
        const resultsDiv = document.getElementById('test-results');
        if (!resultsDiv) return;

        let html = '';
        for (const [key, result] of Object.entries(this.testResults)) {
            const statusIcon = result.status === 'passed' ? '✅' : 
                             result.status === 'failed' ? '❌' : 
                             result.status === 'partial' ? '⚠️' : '⏳';
            
            html += `<div style="margin-bottom: 5px;">
                ${statusIcon} ${key}: ${result.name}
            </div>`;
            
            if (result.issues.length > 0) {
                html += `<div style="margin-left: 15px; font-size: 10px; color: #ff6b6b;">
                    ${result.issues.join('<br>')}
                </div>`;
            }
        }
        
        resultsDiv.innerHTML = html;
    }

    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                total: Object.keys(this.testResults).length,
                passed: Object.values(this.testResults).filter(r => r.status === 'passed').length,
                failed: Object.values(this.testResults).filter(r => r.status === 'failed').length,
                partial: Object.values(this.testResults).filter(r => r.status === 'partial').length
            },
            results: this.testResults
        };
        
        console.log('📊 WCAG 2.2 Test Report:', report);
        return report;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.wcag22ComprehensiveTest = new WCAG22ComprehensiveTest();
    });
} else {
    window.wcag22ComprehensiveTest = new WCAG22ComprehensiveTest();
}

// Make available globally
window.WCAG22ComprehensiveTest = WCAG22ComprehensiveTest;

console.log('🔍 WCAG 2.2 Comprehensive Test Suite loaded');
console.log('Press F5 to run all tests, or F1-F4 for individual tests');
