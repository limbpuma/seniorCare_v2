// Test phone links validation
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📞 Testing Phone Links in Built HTML...\n');

// Read the built index.html file
const buildPath = path.join(__dirname, '.vercel', 'output', 'static', 'index.html');

if (!fs.existsSync(buildPath)) {
    console.log('❌ Build file not found. Please run: npm run build');
    console.log('Looking for:', buildPath);
    process.exit(1);
}

const htmlContent = fs.readFileSync(buildPath, 'utf8');

// Extract all tel: links
const telLinkRegex = /href="tel:([^"]+)"/g;
const telLinks = [];
let match;

while ((match = telLinkRegex.exec(htmlContent)) !== null) {
    telLinks.push(match[1]);
}

// Expected phone number
const expectedPhone = '02319125000'; // Without spaces/dashes

console.log('🔍 Found Phone Links:');
telLinks.forEach((phone, index) => {
    const cleanPhone = phone.replace(/[\s-+]/g, '');
    const isValid = cleanPhone.includes(expectedPhone);
    console.log(`  ${isValid ? '✅' : '❌'} tel:${phone} ${isValid ? '(Valid)' : '(Invalid)'}`);
});

// Check for phone numbers that should be links but aren't
const phoneTextRegex = /\b0231\s?9125000\b/g;
const phoneTexts = [];
let textMatch;

while ((textMatch = phoneTextRegex.exec(htmlContent)) !== null) {
    phoneTexts.push(textMatch[0]);
}

console.log('\n🔍 Found Phone Text Instances:');
phoneTexts.forEach((phoneText, index) => {
    // Check if this phone text is inside a tel: link
    const beforeText = htmlContent.substring(Math.max(0, phoneTextRegex.lastIndex - 100), phoneTextRegex.lastIndex - phoneText.length);
    const isLinked = beforeText.includes('href="tel:');
    console.log(`  ${isLinked ? '✅' : '❌'} "${phoneText}" ${isLinked ? '(Linked)' : '(Not Linked)'}`);
});

console.log('\n📊 PHONE LINKS REPORT');
console.log('================================================');
console.log(`📈 Total tel: links found: ${telLinks.length}`);
console.log(`📈 Total phone text instances: ${phoneTexts.length}`);
console.log(`✅ Valid tel: links: ${telLinks.filter(phone => phone.replace(/[\s-+]/g, '').includes(expectedPhone)).length}`);

if (telLinks.length > 0 && telLinks.every(phone => phone.replace(/[\s-+]/g, '').includes(expectedPhone))) {
    console.log('🎉 All phone links are valid and clickable!');
} else {
    console.log('⚠️ Some phone links need attention.');
}
