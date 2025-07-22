// Cookie Consent Management for DSGVO Compliance
// Integra Senior Care - Cookie Management System

(function() {
    'use strict';

    // Cookie categories and their settings - GDPR Compliant
    const COOKIE_CATEGORIES = {
        essential: { 
            name: 'essential', 
            enabled: true, 
            required: true,
            description: 'Notwendige Cookies für Grundfunktionen'
        },
        analytics: { 
            name: 'analytics', 
            enabled: false, 
            required: false,
            description: 'Analyse-Cookies für Website-Verbesserung'
        },
        marketing: { 
            name: 'marketing', 
            enabled: false, 
            required: false,
            description: 'Marketing-Cookies für personalisierte Werbung'
        }
    };

    // Cookie settings storage key - GDPR compliant storage
    const COOKIE_CONSENT_KEY = 'integra_cookie_consent_v2';
    const COOKIE_EXPIRY_DAYS = 365; // Max 13 months as per GDPR
    const CONSENT_VERSION = '2.0'; // Version tracking for GDPR compliance

    // Initialize cookie management - Enhanced for better first-visit detection
    function initCookieConsent() {
        console.log('🍪 Initializing cookie consent system...');
        
        // Clear any old consent data with different keys
        const oldKeys = ['integra_cookie_consent', 'cookie_consent'];
        oldKeys.forEach(key => {
            if (localStorage.getItem(key) && key !== COOKIE_CONSENT_KEY) {
                localStorage.removeItem(key);
                console.log(`🧹 Removed old consent data: ${key}`);
            }
        });
        
        // Check if user has already made a choice
        const existingConsent = getCookieConsent();
        
        if (!existingConsent) {
            // Show banner for first-time visitors or expired consent
            console.log('👋 First visit or expired consent detected');
            // Delay slightly to ensure DOM elements are ready
            setTimeout(() => {
                showCookieBanner();
            }, 100);
        } else {
            // Apply existing settings
            console.log('✅ Existing consent found, applying settings');
            applyCookieSettings(existingConsent);
        }

        // Initialize event listeners with better DOM readiness check
        setTimeout(() => {
            initEventListeners();
        }, 200);
        
        console.log('✅ Cookie consent system initialized');
    }

    // Show cookie banner - Enhanced with better error handling
    function showCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.display = 'block';
            banner.classList.remove('hidden');
            console.log('📢 Cookie banner displayed');
            
            // Ensure banner is visible above other elements
            banner.style.zIndex = '9999';
            
            // Add smooth animation
            banner.style.opacity = '0';
            banner.style.transform = 'translateY(100%)';
            
            setTimeout(() => {
                banner.style.transition = 'all 0.3s ease-in-out';
                banner.style.opacity = '1';
                banner.style.transform = 'translateY(0)';
            }, 10);
            
        } else {
            console.warn('⚠️ Cookie banner element not found');
            // Try to inject it if it doesn't exist
            if (typeof window.injectCookieElements === 'function') {
                window.injectCookieElements();
                setTimeout(showCookieBanner, 100);
            }
        }
    }

    // Hide cookie banner
    function hideCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.display = 'none';
            banner.classList.add('hidden');
            console.log('🙈 Cookie banner hidden');
        }
    }

    // Show cookie settings modal - Enhanced
    function showCookieSettings() {
        const settings = document.getElementById('cookie-settings');
        if (settings) {
            settings.style.display = 'flex';
            settings.classList.remove('hidden');
            
            // Pre-fill current settings
            const consent = getCookieConsent();
            if (consent && consent.settings) {
                const analyticsToggle = document.getElementById('analytics-cookies');
                const marketingToggle = document.getElementById('marketing-cookies');
                
                if (analyticsToggle) analyticsToggle.checked = consent.settings.analytics;
                if (marketingToggle) marketingToggle.checked = consent.settings.marketing;
            }
            
            console.log('⚙️ Cookie settings modal opened');
        } else {
            console.warn('⚠️ Cookie settings modal not found');
        }
    }

    // Hide cookie settings modal
    function hideCookieSettings() {
        const settings = document.getElementById('cookie-settings');
        if (settings) {
            settings.style.display = 'none';
            settings.classList.add('hidden');
            console.log('⚙️ Cookie settings modal closed');
        }
    }

    // Get current cookie consent - Check for expiry and version compatibility
    function getCookieConsent() {
        try {
            const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
            if (!consent) return null;
            
            const consentData = JSON.parse(consent);
            
            // Check if consent has expired (GDPR requirement)
            if (consentData.expires && new Date() > new Date(consentData.expires)) {
                console.log('⏰ Cookie consent has expired, requiring new consent');
                localStorage.removeItem(COOKIE_CONSENT_KEY);
                return null;
            }
            
            // Check version compatibility
            if (consentData.version !== CONSENT_VERSION) {
                console.log('🔄 Cookie consent version outdated, requiring new consent');
                localStorage.removeItem(COOKIE_CONSENT_KEY);
                return null;
            }
            
            return consentData;
        } catch (error) {
            console.error('❌ Error reading cookie consent:', error);
            localStorage.removeItem(COOKIE_CONSENT_KEY);
            return null;
        }
    }

    // Save cookie consent - GDPR compliant with detailed logging
    function saveCookieConsent(settings) {
        try {
            const consentData = {
                settings: settings,
                timestamp: new Date().toISOString(),
                version: CONSENT_VERSION,
                userAgent: navigator.userAgent,
                language: navigator.language,
                expires: new Date(Date.now() + (COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000)).toISOString()
            };
            
            localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
            
            // Set expiry cookie for server-side checking
            document.cookie = `integra_consent_given=true; max-age=${COOKIE_EXPIRY_DAYS * 24 * 60 * 60}; path=/; SameSite=Strict; Secure=${location.protocol === 'https:'}`;
            
            console.log('💾 GDPR Cookie consent saved:', settings);
            console.log('📅 Consent expires:', consentData.expires);
            return true;
        } catch (error) {
            console.error('❌ Error saving cookie consent:', error);
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

    // Revoke all consent - GDPR Right to withdraw consent
    function revokeAllConsent() {
        try {
            // Clear localStorage
            localStorage.removeItem(COOKIE_CONSENT_KEY);
            
            // Clear consent cookie
            document.cookie = 'integra_consent_given=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; SameSite=Strict';
            
            // Remove all non-essential cookies
            removeGoogleAnalytics();
            removeMarketingScripts();
            
            // Clear other cookies except essential ones
            const cookies = document.cookie.split(";");
            const essentialCookies = ['integra_cookie_consent', 'session', 'csrf_token'];
            
            cookies.forEach(cookie => {
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
                if (!essentialCookies.includes(name)) {
                    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; SameSite=Strict`;
                    console.log(`🗑️ Removed cookie: ${name}`);
                }
            });
            
            console.log('🔄 All consent revoked, showing banner again');
            showCookieBanner();
            
        } catch (error) {
            console.error('❌ Error revoking consent:', error);
        }
    }

    // Make revoke function globally available
    window.revokeAllConsent = revokeAllConsent;

    // Initialize event listeners - Enhanced with better element checking
    function initEventListeners() {
        console.log('🎛️ Initializing event listeners...');
        
        // Check if DOM elements exist first
        const banner = document.getElementById('cookie-banner');
        const settings = document.getElementById('cookie-settings');
        
        if (!banner || !settings) {
            console.warn('⚠️ Cookie DOM elements not found, retrying in 100ms...');
            setTimeout(initEventListeners, 100);
            return;
        }
        
        // Accept all cookies
        const acceptAllBtn = document.getElementById('accept-all-cookies');
        if (acceptAllBtn) {
            console.log('✅ Found accept-all button, adding listener');
            acceptAllBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🎯 Accept all cookies clicked');
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
        } else {
            console.warn('❌ Accept all button not found');
        }

        // Reject non-essential cookies
        const rejectBtn = document.getElementById('reject-cookies');
        if (rejectBtn) {
            console.log('✅ Found reject button, adding listener');
            rejectBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🎯 Reject cookies clicked');
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
        } else {
            console.warn('❌ Reject button not found');
        }

        // Customize settings
        const customizeBtn = document.getElementById('customize-cookies');
        if (customizeBtn) {
            console.log('✅ Found customize button, adding listener');
            customizeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🎯 Customize cookies clicked');
                hideCookieBanner();
                showCookieSettings();
            });
        } else {
            console.warn('❌ Customize button not found');
        }
        
        console.log('🎛️ Event listeners initialized successfully');

        // Save custom settings
        const saveSettingsBtn = document.getElementById('save-cookie-settings');
        if (saveSettingsBtn) {
            console.log('✅ Found save settings button, adding listener');
            saveSettingsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🎯 Save cookie settings clicked');
                const settings = {
                    essential: true, // Always enabled
                    analytics: document.getElementById('analytics-cookies')?.checked || false,
                    marketing: document.getElementById('marketing-cookies')?.checked || false
                };
                console.log('💾 Saving settings:', settings);
                saveCookieConsent({ settings });
                applyCookieSettings({ settings });
                hideCookieSettings();
            });
        } else {
            console.warn('❌ Save settings button not found');
        }

        // Close settings modal
        const closeSettingsBtn = document.getElementById('close-cookie-settings');
        if (closeSettingsBtn) {
            console.log('✅ Found close settings button, adding listener');
            closeSettingsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🎯 Close settings clicked');
                hideCookieSettings();
            });
        } else {
            console.warn('❌ Close settings button not found');
        }

        // Modal accept all button
        const modalAcceptAllBtn = document.getElementById('modal-accept-all');
        if (modalAcceptAllBtn) {
            console.log('✅ Found modal accept all button, adding listener');
            modalAcceptAllBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🎯 Modal accept all clicked');
                const settings = {
                    essential: true,
                    analytics: true,
                    marketing: true
                };
                saveCookieConsent({ settings });
                applyCookieSettings({ settings });
                hideCookieSettings();
                hideCookieBanner();
            });
        } else {
            console.warn('❌ Modal accept all button not found');
        }

        // Modal reject button
        const modalRejectBtn = document.getElementById('modal-reject-cookies');
        if (modalRejectBtn) {
            modalRejectBtn.addEventListener('click', function() {
                const settings = {
                    essential: true,
                    analytics: false,
                    marketing: false
                };
                saveCookieConsent({ settings });
                applyCookieSettings({ settings });
                hideCookieSettings();
                hideCookieBanner();
            });
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
