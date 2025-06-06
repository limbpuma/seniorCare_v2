// WCAG 2.2 Automated Test Validation Script
// Este script valida que todos los toggles funcionen correctamente

console.log('🧪 STARTING WCAG 2.2 AUTOMATED VALIDATION...');

// Test 1: Verificar que la página se cargó correctamente
function testPageLoad() {
    console.log('\n📋 TEST 1: Page Load Validation');
    
    const requiredElements = [
        '#toggle-text-spacing',
        '#text-content', 
        '#status',
        '#diagnostic-results'
    ];
    
    let allElementsFound = true;
    requiredElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            console.log(`✅ ${selector} - FOUND`);
        } else {
            console.log(`❌ ${selector} - NOT FOUND`);
            allElementsFound = false;
        }
    });
    
    return allElementsFound;
}

// Test 2: Validar funcionalidad de Text Spacing Toggle
function testTextSpacingToggle() {
    console.log('\n🔤 TEST 2: Text Spacing Toggle Validation');
    
    const textContent = document.getElementById('text-content');
    const toggleButton = document.getElementById('toggle-text-spacing');
    
    if (!textContent || !toggleButton) {
        console.log('❌ Required elements not found');
        return false;
    }
    
    // Estado inicial
    const initialHasClass = textContent.classList.contains('wcag-text-spacing');
    console.log(`Initial state: ${initialHasClass ? 'ACTIVE' : 'INACTIVE'}`);
    
    // Simular click en el toggle
    toggleButton.click();
    
    // Verificar cambio
    const afterClickHasClass = textContent.classList.contains('wcag-text-spacing');
    console.log(`After click: ${afterClickHasClass ? 'ACTIVE' : 'INACTIVE'}`);
    
    // Verificar estilos computados si está activo
    if (afterClickHasClass) {
        const computedStyle = window.getComputedStyle(textContent);
        console.log('Computed styles:');
        console.log(`  Line Height: ${computedStyle.lineHeight}`);
        console.log(`  Letter Spacing: ${computedStyle.letterSpacing}`);
        console.log(`  Word Spacing: ${computedStyle.wordSpacing}`);
        console.log(`  Border: ${computedStyle.border}`);
        console.log(`  Background: ${computedStyle.backgroundColor}`);
    }
    
    return initialHasClass !== afterClickHasClass; // Should change state
}

// Test 3: Validar elementos focusables
function testFocusElements() {
    console.log('\n🎯 TEST 3: Focus Elements Validation');
    
    const focusableElements = document.querySelectorAll('button, input, select, a, [tabindex]');
    console.log(`Found ${focusableElements.length} focusable elements`);
    
    if (focusableElements.length === 0) {
        console.log('❌ No focusable elements found');
        return false;
    }
    
    // Test focus on first element
    try {
        focusableElements[0].focus();
        const activeElement = document.activeElement;
        const focusWorking = activeElement === focusableElements[0];
        console.log(`Focus test: ${focusWorking ? '✅ WORKING' : '❌ NOT WORKING'}`);
        return focusWorking;
    } catch (error) {
        console.log(`❌ Focus test failed: ${error.message}`);
        return false;
    }
}

// Test 4: Validar elementos hover/focus
function testHoverFocusElements() {
    console.log('\n🖱️ TEST 4: Hover/Focus Content Validation');
    
    const hoverElements = document.querySelectorAll('.hover-test');
    console.log(`Found ${hoverElements.length} hover test elements`);
    
    if (hoverElements.length === 0) {
        console.log('❌ No hover test elements found');
        return false;
    }
    
    // Test hover content visibility
    let allHoverElementsWorking = true;
    hoverElements.forEach((element, index) => {
        const hoverContent = element.querySelector('.hover-content');
        if (hoverContent) {
            console.log(`✅ Hover element ${index + 1}: Content found`);
        } else {
            console.log(`❌ Hover element ${index + 1}: No content found`);
            allHoverElementsWorking = false;
        }
    });
    
    return allHoverElementsWorking;
}

// Test 5: Ejecutar diagnostic
function testDiagnosticFunction() {
    console.log('\n🔍 TEST 5: Diagnostic Function Validation');
    
    try {
        if (typeof runDiagnostic === 'function') {
            runDiagnostic();
            console.log('✅ Diagnostic function executed successfully');
            return true;
        } else {
            console.log('❌ Diagnostic function not found');
            return false;
        }
    } catch (error) {
        console.log(`❌ Diagnostic function failed: ${error.message}`);
        return false;
    }
}

// Ejecutar todos los tests
function runAllTests() {
    console.log('🚀 RUNNING ALL WCAG 2.2 VALIDATION TESTS...\n');
    
    const tests = [
        { name: 'Page Load', fn: testPageLoad },
        { name: 'Text Spacing Toggle', fn: testTextSpacingToggle },
        { name: 'Focus Elements', fn: testFocusElements },
        { name: 'Hover/Focus Content', fn: testHoverFocusElements },
        { name: 'Diagnostic Function', fn: testDiagnosticFunction }
    ];
    
    let passedTests = 0;
    let totalTests = tests.length;
    
    tests.forEach(test => {
        try {
            const result = test.fn();
            if (result) {
                passedTests++;
                console.log(`\n✅ ${test.name}: PASSED`);
            } else {
                console.log(`\n❌ ${test.name}: FAILED`);
            }
        } catch (error) {
            console.log(`\n💥 ${test.name}: ERROR - ${error.message}`);
        }
    });
    
    console.log('\n' + '='.repeat(50));
    console.log('🏆 WCAG 2.2 VALIDATION RESULTS:');
    console.log(`✅ Passed: ${passedTests}/${totalTests}`);
    console.log(`❌ Failed: ${totalTests - passedTests}/${totalTests}`);
    console.log(`📊 Success Rate: ${Math.round((passedTests/totalTests) * 100)}%`);
    
    if (passedTests === totalTests) {
        console.log('🎉 ALL TESTS PASSED - WCAG 2.2 IMPLEMENTATION WORKING PERFECTLY!');
    } else {
        console.log('⚠️ Some tests failed - Review implementation');
    }
    
    return passedTests === totalTests;
}

// Auto-ejecutar cuando la página esté lista
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAllTests);
} else {
    runAllTests();
}

// Hacer disponible globalmente para ejecución manual
window.wcagValidationTests = {
    runAllTests,
    testPageLoad,
    testTextSpacingToggle,
    testFocusElements,
    testHoverFocusElements,
    testDiagnosticFunction
};
