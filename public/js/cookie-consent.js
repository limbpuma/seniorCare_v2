// Cookie Consent Management for DSGVO Compliance
// Integra Senior Care - Cookie Management System

(function() {
    'use strict';

    // Cookie categories and their settings
    const COOKIE_CATEGORIES = {
        essential: { name: 'essential', enabled: true, required: true },
        analytics: { name: 'analytics', enabled: false, required: false },
        marketing: { name: 'marketing', enabled: false, required: false }
    };

    // Cookie settings storage key
    const COOKIE_CONSENT_KEY = 'integra_cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;

    // Initialize cookie management
    function initCookieConsent() {
        console.log('🍪 Initializing cookie consent system...');
        
        // Check if user has already made a choice
        const existingConsent = getCookieConsent();
        
        if (!existingConsent) {
            // Show banner for first-time visitors
            showCookieBanner();
        } else {
            // Apply existing settings
            applyCookieSettings(existingConsent);
        }

        // Initialize event listeners
        initEventListeners();
        
        console.log('✅ Cookie consent system initialized');
    }

    // Show cookie banner
    function showCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.remove('hidden');
            console.log('📢 Cookie banner displayed');
        }
    }

    // Hide cookie banner
    function hideCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.add('hidden');
            console.log('🙈 Cookie banner hidden');
        }
    }

    // Show cookie settings modal
    function showCookieSettings() {
        const settings = document.getElementById('cookie-settings');
        if (settings) {
            settings.classList.remove('hidden');
            console.log('⚙️ Cookie settings modal opened');
        }
    }

    // Hide cookie settings modal
    function hideCookieSettings() {
        const settings = document.getElementById('cookie-settings');
        if (settings) {
            settings.classList.add('hidden');
            console.log('⚙️ Cookie settings modal closed');
        }
    }

    // Get current cookie consent
    function getCookieConsent() {
        try {
            const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
            return consent ? JSON.parse(consent) : null;
        } catch (error) {
            console.error('Error reading cookie consent:', error);
            return null;
        }
    }

    // Save cookie consent
    function saveCookieConsent(settings) {
        try {
            const consentData = {
                settings: settings,
                timestamp: new Date().toISOString(),
                version: '1.0'
            };
            localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
            console.log('💾 Cookie consent saved:', settings);
            return true;
        } catch (error) {
            console.error('Error saving cookie consent:', error);
            return false;
        }
    }

    // Apply cookie settings
    function applyCookieSettings(consent) {
        if (!consent || !consent.settings) return;

        const settings = consent.settings;
        console.log('🔧 Applying cookie settings:', settings);

        // Handle Analytics cookies (Google Analytics)
        if (settings.analytics) {
            loadGoogleAnalytics();
        } else {
            removeGoogleAnalytics();
        }

        // Handle Marketing cookies
        if (settings.marketing) {
            loadMarketingScripts();
        } else {
            removeMarketingScripts();
        }

        // Essential cookies are always enabled
        console.log('✅ Cookie settings applied');
    }

    // Load Google Analytics
    function loadGoogleAnalytics() {
        // Only load if not already loaded
        if (window.gtag) return;

        const GA_ID = 'G-XXXXXXXXXX'; // Replace with actual GA ID when available
        
        // Create script element for gtag
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(gtagScript);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID, {
            anonymize_ip: true,
            cookie_flags: 'SameSite=Strict;Secure'
        });

        console.log('📊 Google Analytics loaded');
    }

    // Remove Google Analytics
    function removeGoogleAnalytics() {
        // Disable Google Analytics
        if (window.gtag) {
            window.gtag('config', 'GA_ID', {
                'storage': 'none',
                'send_page_view': false
            });
        }
        console.log('🚫 Google Analytics disabled');
    }

    // Load marketing scripts
    function loadMarketingScripts() {
        // Add marketing tracking scripts here if needed
        console.log('📈 Marketing scripts loaded');
    }

    // Remove marketing scripts
    function removeMarketingScripts() {
        // Remove marketing tracking scripts
        console.log('🚫 Marketing scripts disabled');
    }

    // Initialize event listeners
    function initEventListeners() {
        // Accept all cookies
        const acceptAllBtn = document.getElementById('accept-all-cookies');
        if (acceptAllBtn) {
            acceptAllBtn.addEventListener('click', function() {
                const settings = {
                    essential: true,
                    analytics: true,
                    marketing: true
                };
                saveCookieConsent({ settings });
                applyCookieSettings({ settings });
                hideCookieBanner();
                hideCookieSettings();
            });
        }

        // Reject non-essential cookies
        const rejectBtn = document.getElementById('reject-cookies');
        if (rejectBtn) {
            rejectBtn.addEventListener('click', function() {
                const settings = {
                    essential: true,
                    analytics: false,
                    marketing: false
                };
                saveCookieConsent({ settings });
                applyCookieSettings({ settings });
                hideCookieBanner();
                hideCookieSettings();
            });
        }

        // Customize settings
        const customizeBtn = document.getElementById('customize-cookies');
        if (customizeBtn) {
            customizeBtn.addEventListener('click', function() {
                hideCookieBanner();
                showCookieSettings();
            });
        }

        // Save custom settings
        const saveSettingsBtn = document.getElementById('save-cookie-settings');
        if (saveSettingsBtn) {
            saveSettingsBtn.addEventListener('click', function() {
                const settings = {
                    essential: true, // Always enabled
                    analytics: document.getElementById('analytics-cookies')?.checked || false,
                    marketing: document.getElementById('marketing-cookies')?.checked || false
                };
                saveCookieConsent({ settings });
                applyCookieSettings({ settings });
                hideCookieSettings();
            });
        }

        // Close settings modal
        const closeSettingsBtn = document.getElementById('close-cookie-settings');
        if (closeSettingsBtn) {
            closeSettingsBtn.addEventListener('click', hideCookieSettings);
        }

        // Settings button in footer
        const settingsBtn = document.getElementById('cookie-settings-btn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', function() {
                showCookieSettings();
                // Pre-fill current settings
                const consent = getCookieConsent();
                if (consent && consent.settings) {
                    const analyticsToggle = document.getElementById('analytics-cookies');
                    const marketingToggle = document.getElementById('marketing-cookies');
                    
                    if (analyticsToggle) analyticsToggle.checked = consent.settings.analytics;
                    if (marketingToggle) marketingToggle.checked = consent.settings.marketing;
                }
            });
        }

        console.log('🎛️ Event listeners initialized');
    }

    // Make function globally available for footer button
    window.openCookieSettings = function() {
        showCookieSettings();
        // Pre-fill current settings
        const consent = getCookieConsent();
        if (consent && consent.settings) {
            const analyticsToggle = document.getElementById('analytics-cookies');
            const marketingToggle = document.getElementById('marketing-cookies');
            
            if (analyticsToggle) analyticsToggle.checked = consent.settings.analytics;
            if (marketingToggle) marketingToggle.checked = consent.settings.marketing;
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieConsent);
    } else {
        initCookieConsent();
    }

    console.log('🍪 Cookie consent script loaded');
})();
