import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// Function to search for phone links in HTML files
function searchPhoneLinksInFile(filePath) {
    try {
        const content = readFileSync(filePath, 'utf-8');
        const phoneNumber = '0231 9125000';
        const telLinkPattern = new RegExp(`<a[^>]*href="tel:[^"]*${phoneNumber.replace(/\s/g, '')}[^"]*"[^>]*>`, 'gi');
        const plainTextPattern = new RegExp(phoneNumber, 'gi');
        
        const telLinks = content.match(telLinkPattern) || [];
        const plainTextOccurrences = content.match(plainTextPattern) || [];
        
        return {
            file: filePath,
            telLinks: telLinks.length,
            plainText: plainTextOccurrences.length,
            telLinkMatches: telLinks,
            plainTextMatches: plainTextOccurrences
        };
    } catch (error) {
        return {
            file: filePath,
            error: error.message
        };
    }
}

// Function to recursively search directories
function searchDirectory(dirPath, results = []) {
    try {
        const items = readdirSync(dirPath);
        
        for (const item of items) {
            const fullPath = join(dirPath, item);
            const stat = statSync(fullPath);
            
            if (stat.isDirectory()) {
                // Skip node_modules and other build directories
                if (!['node_modules', '.git', '.vercel', 'dist'].includes(item)) {
                    searchDirectory(fullPath, results);
                }
            } else if (extname(item) === '.html') {
                const result = searchPhoneLinksInFile(fullPath);
                if (result.telLinks > 0 || result.plainText > 0) {
                    results.push(result);
                }
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error.message);
    }
    
    return results;
}

// Function to search for phone patterns in .astro files
function searchPhoneInAstroFile(filePath) {
    try {
        const content = readFileSync(filePath, 'utf-8');
        const phoneNumber = '0231 9125000';
        
        // Look for tel: links
        const telLinkPattern = new RegExp(`href=["']tel:[^"']*${phoneNumber.replace(/\s/g, '')}[^"']*["']`, 'gi');
        // Look for ContactText component usage (which should make phone numbers clickable)
        const contactTextPattern = /<ContactText[^>]*>/gi;
        // Look for plain phone number text
        const plainTextPattern = new RegExp(phoneNumber, 'gi');
        
        const telLinks = content.match(telLinkPattern) || [];
        const contactTextUsage = content.match(contactTextPattern) || [];
        const plainTextOccurrences = content.match(plainTextPattern) || [];
        
        return {
            file: filePath,
            telLinks: telLinks.length,
            contactTextUsage: contactTextUsage.length,
            plainText: plainTextOccurrences.length,
            telLinkMatches: telLinks,
            contactTextMatches: contactTextUsage,
            plainTextMatches: plainTextOccurrences
        };
    } catch (error) {
        return {
            file: filePath,
            error: error.message
        };
    }
}

// Function to recursively search directories for .astro files
function searchAstroDirectory(dirPath, results = []) {
    try {
        const items = readdirSync(dirPath);
        
        for (const item of items) {
            const fullPath = join(dirPath, item);
            const stat = statSync(fullPath);
            
            if (stat.isDirectory()) {
                // Skip node_modules and other build directories
                if (!['node_modules', '.git', '.vercel', 'dist'].includes(item)) {
                    searchAstroDirectory(fullPath, results);
                }
            } else if (extname(item) === '.astro') {
                const result = searchPhoneInAstroFile(fullPath);
                if (result.telLinks > 0 || result.plainText > 0 || result.contactTextUsage > 0) {
                    results.push(result);
                }
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error.message);
    }
    
    return results;
}

// Check texts.json for phone number data
function checkTextsJson() {
    try {
        const content = readFileSync('src/utils/texts.json', 'utf-8');
        const texts = JSON.parse(content);
        const phoneNumber = '0231 9125000';
        
        console.log('📋 Checking texts.json for phone number data...');
        
        // Look for phone numbers in the JSON structure
        const jsonString = JSON.stringify(texts, null, 2);
        const phoneOccurrences = (jsonString.match(new RegExp(phoneNumber, 'gi')) || []).length;
        
        if (phoneOccurrences > 0) {
            console.log(`✅ Found ${phoneOccurrences} phone number instances in texts.json`);
            
            // Check specific sections that might contain phone numbers
            if (texts.contact) {
                console.log('📞 Contact section found in texts.json');
                Object.keys(texts.contact).forEach(key => {
                    if (typeof texts.contact[key] === 'string' && texts.contact[key].includes(phoneNumber)) {
                        console.log(`   - ${key}: ${texts.contact[key]}`);
                    }
                });
            }
        } else {
            console.log('⚠️  No phone number found in texts.json');
        }
        
        return phoneOccurrences;
    } catch (error) {
        console.log(`❌ Error reading texts.json: ${error.message}`);
        return 0;
    }
}

// Main execution
console.log('🔍 PHONE LINK VERIFICATION FOR ASTRO PROJECT');
console.log('=============================================\n');

// First check texts.json
const jsonPhoneOccurrences = checkTextsJson();
console.log('');

// Search in src directory for .astro files
console.log('📁 Searching Astro components for phone number usage...\n');
const results = searchAstroDirectory('src');console.log('📊 PHONE LINK VERIFICATION RESULTS:');
console.log('=====================================\n');

let totalTelLinks = 0;
let totalContactText = 0;
let totalPlainText = 0;

results.forEach(result => {
    if (result.error) {
        console.log(`❌ Error in ${result.file}: ${result.error}`);
    } else {
        console.log(`📄 File: ${result.file.replace('src\\', '')}`);
        console.log(`   📞 Direct tel: links: ${result.telLinks}`);
        console.log(`   🧩 ContactText components: ${result.contactTextUsage}`);
        console.log(`   📝 Plain text occurrences: ${result.plainText}`);
        
        if (result.telLinkMatches.length > 0) {
            console.log(`   ✅ Direct tel: link examples:`);
            result.telLinkMatches.slice(0, 2).forEach(match => {
                console.log(`      ${match}`);
            });
        }
        
        if (result.contactTextMatches.length > 0) {
            console.log(`   ✅ ContactText component usage (auto-converts to tel: links):`);
            result.contactTextMatches.slice(0, 2).forEach(match => {
                console.log(`      ${match}`);
            });
        }
        
        if (result.plainTextMatches.length > 0 && result.telLinks === 0 && result.contactTextUsage === 0) {
            console.log(`   ⚠️  Plain text occurrences without tel: links or ContactText component`);
            result.plainTextMatches.forEach(match => {
                console.log(`      "${match}"`);
            });
        }
        
        totalTelLinks += result.telLinks;
        totalContactText += result.contactTextUsage;
        totalPlainText += result.plainText;
        console.log('');
    }
});

console.log('📈 SUMMARY:');
console.log(`   📞 Total direct tel: links found: ${totalTelLinks}`);
console.log(`   🧩 Total ContactText components (auto-converts): ${totalContactText}`);
console.log(`   📝 Total plain text occurrences: ${totalPlainText}`);
console.log(`   📋 Phone numbers in texts.json: ${jsonPhoneOccurrences}`);

const effectiveClickableLinks = totalTelLinks + totalContactText;

if (effectiveClickableLinks > 0 && totalPlainText <= effectiveClickableLinks) {
    console.log('✅ SUCCESS: All or most phone number instances should be clickable!');
    console.log('   - Direct tel: links work immediately');
    console.log('   - ContactText components automatically convert phone numbers to tel: links');
} else if (effectiveClickableLinks > 0) {
    console.log('⚠️  PARTIAL: Some phone numbers are linked, but there may be unhandled plain text instances');
} else {
    console.log('❌ ISSUE: No tel: links or ContactText components found for phone numbers');
}

console.log('\n🔗 RECOMMENDATION:');
if (totalContactText > 0) {
    console.log('✅ ContactText component is being used - this automatically makes phone numbers clickable');
    console.log('   The component detects phone number patterns and wraps them in tel: links');
} else {
    console.log('💡 Consider using the ContactText component for automatic phone number linking');
}
