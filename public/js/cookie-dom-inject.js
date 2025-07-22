// Cookie DOM Injection - Ensures cookie elements are always present
// This script injects the cookie banner and modal directly into the DOM

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function injectCookieElements() {
        // Check if elements already exist
        if (document.getElementById('cookie-banner') || document.getElementById('cookie-settings')) {
            console.log('🍪 Cookie elements already exist, skipping injection');
            return;
        }
        
        console.log('🍪 Injecting cookie elements into DOM...');
        
        // Create cookie banner
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.className = 'fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary shadow-2xl z-50';
        banner.style.display = 'none';
        banner.setAttribute('role', 'banner');
        banner.setAttribute('aria-labelledby', 'cookie-banner-title');
        banner.setAttribute('aria-describedby', 'cookie-banner-description');
        
        banner.innerHTML = `
            <div class="max-w-7xl mx-auto p-4 sm:p-6">
                <div class="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                    <div class="flex-1">
                        <h3 id="cookie-banner-title" class="text-lg font-bold text-deep-blue mb-2">
                            Cookie-Einstellungen
                        </h3>
                        <p id="cookie-banner-description" class="text-sm sm:text-base text-gray-600 leading-relaxed">
                            Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. Sie können auswählen, welche Kategorien von Cookies Sie zulassen möchten.
                            <a href="/privacypolicy" class="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded ml-1">
                                Mehr erfahren
                            </a>
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto">
                        <button id="accept-all-cookies" class="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm sm:text-base whitespace-nowrap">
                            Alle akzeptieren
                        </button>
                        <button id="accept-necessary-cookies" class="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2.5 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base whitespace-nowrap">
                            Nur notwendige
                        </button>
                        <button id="customize-cookies" class="bg-soft-blue hover:bg-soft-blue/90 text-white font-medium py-2.5 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-soft-blue focus:ring-offset-2 text-sm sm:text-base whitespace-nowrap">
                            Anpassen
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Create cookie settings modal
        const modal = document.createElement('div');
        modal.id = 'cookie-settings';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50';
        modal.style.display = 'none';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', 'cookie-settings-title');
        modal.setAttribute('aria-describedby', 'cookie-settings-description');
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 sm:mx-6 md:mx-8 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
                <div class="p-4 sm:p-6">
                    <div class="flex justify-between items-center mb-4 sm:mb-6">
                        <h2 id="cookie-settings-title" class="text-xl sm:text-2xl font-bold text-deep-blue">
                            Cookie-Einstellungen
                        </h2>
                        <button id="close-cookie-settings" class="text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded" aria-label="Schließen">
                            ×
                        </button>
                    </div>
                    <p id="cookie-settings-description" class="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                        Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. Sie können auswählen, welche Kategorien von Cookies Sie zulassen möchten.
                    </p>
                    <div class="space-y-4 sm:space-y-6">
                        <div class="border rounded-lg p-3 sm:p-4">
                            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                                <div>
                                    <h3 class="font-semibold text-deep-blue mb-2 text-sm sm:text-base">Notwendige Cookies</h3>
                                    <p class="text-sm text-gray-600">Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.</p>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" id="essential-cookies" checked disabled class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2 cursor-not-allowed" />
                                    <label for="essential-cookies" class="ml-2 text-sm font-medium text-gray-500">Immer aktiv</label>
                                </div>
                            </div>
                        </div>
                        <div class="border rounded-lg p-3 sm:p-4">
                            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                                <div>
                                    <h3 class="font-semibold text-deep-blue mb-2 text-sm sm:text-base">Analyse Cookies</h3>
                                    <p class="text-sm text-gray-600">Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym sammeln und melden.</p>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" id="analytics-cookies" class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2" />
                                    <label for="analytics-cookies" class="ml-2 text-sm font-medium text-gray-900">Aktivieren</label>
                                </div>
                            </div>
                        </div>
                        <div class="border rounded-lg p-3 sm:p-4">
                            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                                <div>
                                    <h3 class="font-semibold text-deep-blue mb-2 text-sm sm:text-base">Marketing Cookies</h3>
                                    <p class="text-sm text-gray-600">Diese Cookies werden verwendet, um Werbeanzeigen zu personalisieren und die Wirksamkeit von Werbekampagnen zu messen.</p>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" id="marketing-cookies" class="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2" />
                                    <label for="marketing-cookies" class="ml-2 text-sm font-medium text-gray-900">Aktivieren</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <button id="save-cookie-settings" class="flex-1 bg-primary hover:bg-primary/90 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm sm:text-base">
                            Einstellungen speichern
                        </button>
                        <button id="modal-accept-all" class="flex-1 bg-soft-blue hover:bg-soft-blue/90 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-soft-blue focus:ring-offset-2 text-sm sm:text-base">
                            Alle akzeptieren
                        </button>
                        <button id="modal-accept-necessary" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base">
                            Nur notwendige
                        </button>
                    </div>
                    <div class="mt-4 sm:mt-6 text-center">
                        <p class="text-sm text-gray-600">
                            Weitere Informationen finden Sie in unserer 
                            <a href="/privacypolicy" class="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                                Datenschutzerklärung
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        // Inject elements into DOM
        document.body.appendChild(banner);
        document.body.appendChild(modal);
        
        console.log('✅ Cookie elements injected successfully');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectCookieElements);
    } else {
        injectCookieElements();
    }
})();
