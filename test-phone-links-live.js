// Test phone links validation with live server
import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:4326';

console.log('📞 Testing Phone Links on Live Server...\n');

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();

try {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Extract all tel: links
    const telLinks = await page.$$eval('a[href^="tel:"]', links => 
        links.map(link => ({
            href: link.href,
            text: link.textContent.trim()
        }))
    );

    // Expected phone number
    const expectedPhone = '02319125000'; // Without spaces/dashes

    console.log('🔍 Found Phone Links:');
    telLinks.forEach((phone, index) => {
        const cleanPhone = phone.href.replace('tel:', '').replace(/[\s-+]/g, '');
        const isValid = cleanPhone.includes(expectedPhone);
        console.log(`  ${isValid ? '✅' : '❌'} ${phone.href} - "${phone.text}" ${isValid ? '(Valid)' : '(Invalid)'}`);
    });

    // Check for phone numbers that should be links but aren't
    const phoneTexts = await page.$$eval('*', elements => {
        const results = [];
        const phoneRegex = /\b0231\s?9125000\b/g;
        
        elements.forEach(el => {
            if (el.tagName && el.textContent) {
                const matches = el.textContent.match(phoneRegex);
                if (matches) {
                    matches.forEach(match => {
                        const isLinked = el.tagName === 'A' && el.getAttribute('href') && el.getAttribute('href').startsWith('tel:');
                        results.push({
                            text: match,
                            isLinked,
                            tagName: el.tagName
                        });
                    });
                }
            }
        });
        return results;
    });

    console.log('\n🔍 Found Phone Text Instances:');
    phoneTexts.forEach((phoneText, index) => {
        console.log(`  ${phoneText.isLinked ? '✅' : '❌'} "${phoneText.text}" in <${phoneText.tagName}> ${phoneText.isLinked ? '(Linked)' : '(Not Linked)'}`);
    });

    console.log('\n📊 PHONE LINKS REPORT');
    console.log('================================================');
    console.log(`📈 Total tel: links found: ${telLinks.length}`);
    console.log(`📈 Total phone text instances: ${phoneTexts.length}`);
    
    const validTelLinks = telLinks.filter(phone => {
        const cleanPhone = phone.href.replace('tel:', '').replace(/[\s-+]/g, '');
        return cleanPhone.includes(expectedPhone);
    });
    
    console.log(`✅ Valid tel: links: ${validTelLinks.length}`);

    if (telLinks.length > 0 && validTelLinks.length === telLinks.length) {
        console.log('🎉 All phone links are valid and clickable!');
    } else {
        console.log('⚠️ Some phone links need attention.');
    }

} catch (error) {
    console.error('❌ Error testing phone links:', error);
} finally {
    await browser.close();
}
