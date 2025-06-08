// Test script para verificar la integración Frontend-Backend
// Script para ejecutar desde el navegador o Node.js

console.log('🧪 INICIANDO PRUEBAS DE INTEGRACIÓN FRONTEND-BACKEND');
console.log('='.repeat(60));

const API_BASE_URL = 'http://localhost:8000/api';

// Test 1: Health Check
async function testHealthCheck() {
    console.log('\n1️⃣ Testing Health Check...');
    try {
        const response = await fetch(`${API_BASE_URL}/health.php`);
        const data = await response.json();
        console.log('✅ Health Check:', data.success ? 'PASS' : 'FAIL');
        console.log('📊 Stats:', data.stats);
        return true;
    } catch (error) {
        console.log('❌ Health Check FAILED:', error.message);
        return false;
    }
}

// Test 2: Textos Dinámicos
async function testTexts() {
    console.log('\n2️⃣ Testing Dynamic Texts...');
    try {
        const response = await fetch(`${API_BASE_URL}/texts.php`);
        const data = await response.json();
        console.log('✅ Texts API:', data.header ? 'PASS' : 'FAIL');
        console.log('📱 Header Phone:', data.header?.phone);
        console.log('📧 Header Email:', data.header?.email);
        return true;
    } catch (error) {
        console.log('❌ Texts API FAILED:', error.message);
        return false;
    }
}

// Test 3: SEO Dinámico
async function testSEO() {
    console.log('\n3️⃣ Testing Dynamic SEO...');
    try {
        const response = await fetch(`${API_BASE_URL}/seo.php?page=home`);
        const data = await response.json();
        console.log('✅ SEO API:', data.success ? 'PASS' : 'FAIL');
        console.log('🎯 Page Title:', data.data?.title);
        return true;
    } catch (error) {
        console.log('❌ SEO API FAILED:', error.message);
        return false;
    }
}

// Test 4: Configuración
async function testConfig() {
    console.log('\n4️⃣ Testing Site Config...');
    try {
        const response = await fetch(`${API_BASE_URL}/config.php`);
        const data = await response.json();
        console.log('✅ Config API:', data.success ? 'PASS' : 'FAIL');
        console.log('🏢 Site Name:', data.data?.site_name);
        return true;
    } catch (error) {
        console.log('❌ Config API FAILED:', error.message);
        return false;
    }
}

// Test 5: Formulario de Contacto
async function testContactForm() {
    console.log('\n5️⃣ Testing Contact Form...');
    try {
        const testData = {
            name: 'Frontend Test User',
            email: 'frontend-test@example.com',
            phone: '+49123456789',
            subject: 'Frontend Integration Test',
            message: 'This is an automated test from the frontend integration script.'
        };

        const response = await fetch(`${API_BASE_URL}/contact.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(testData)
        });

        const data = await response.json();
        console.log('✅ Contact Form:', data.success ? 'PASS' : 'FAIL');
        console.log('📨 Message ID:', data.message_id);
        return true;
    } catch (error) {
        console.log('❌ Contact Form FAILED:', error.message);
        return false;
    }
}

// Ejecutar todas las pruebas
async function runAllTests() {
    console.log('\n🚀 EJECUTANDO SUITE COMPLETA DE PRUEBAS...\n');
    
    const results = [];
    results.push(await testHealthCheck());
    results.push(await testTexts());
    results.push(await testSEO());
    results.push(await testConfig());
    results.push(await testContactForm());
    
    const passed = results.filter(Boolean).length;
    const total = results.length;
    
    console.log('\n' + '='.repeat(60));
    console.log(`🎯 RESULTADOS: ${passed}/${total} pruebas exitosas`);
    
    if (passed === total) {
        console.log('🎉 ¡INTEGRACIÓN FRONTEND-BACKEND COMPLETAMENTE FUNCIONAL!');
    } else {
        console.log('⚠️  Algunas pruebas fallaron. Revisar logs arriba.');
    }
    
    return passed === total;
}

// Ejecutar si está en navegador
if (typeof window !== 'undefined') {
    runAllTests();
} else {
    // Exportar para Node.js
    module.exports = { runAllTests, API_BASE_URL };
}
