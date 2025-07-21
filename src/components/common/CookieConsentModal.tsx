import React, { useState, useEffect } from 'react';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsentModal: React.FC = () => {
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Load current settings from localStorage
    try {
      const savedConsent = localStorage.getItem('integra_cookie_consent');
      if (savedConsent) {
        const consentData = JSON.parse(savedConsent);
        if (consentData.settings) {
          setSettings(consentData.settings);
        }
      }
    } catch (error) {
      console.warn('Could not load cookie settings');
    }
  }, []);

  const handleSaveSettings = () => {
    try {
      const consentData = {
        settings: settings,
        timestamp: new Date().toISOString(),
        version: '1.0'
      };
      localStorage.setItem('integra_cookie_consent', JSON.stringify(consentData));
      
      // Trigger the global cookie application function if available
      if (window.applyCookieSettings) {
        window.applyCookieSettings(consentData);
      }
      
      // Hide modal
      const modal = document.getElementById('cookie-settings');
      if (modal) {
        modal.classList.add('hidden');
      }
    } catch (error) {
      console.error('Error saving cookie settings:', error);
    }
  };

  const handleCloseModal = () => {
    const modal = document.getElementById('cookie-settings');
    if (modal) {
      modal.classList.add('hidden');
    }
  };

  return (
    <div 
      id="cookie-settings" 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden"
      role="dialog"
      aria-labelledby="cookie-settings-title"
      aria-describedby="cookie-settings-description"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 sm:mx-6 md:mx-8 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 id="cookie-settings-title" className="text-xl sm:text-2xl font-bold text-deep-blue">
              Cookie-Einstellungen
            </h2>
            <button
              id="close-cookie-settings"
              onClick={handleCloseModal}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Schliessen"
            >
              ×
            </button>
          </div>

          {/* Description */}
          <p id="cookie-settings-description" className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
            Sie koennen auswaehlen, welche Kategorien von Cookies Sie zulassen moechten.
          </p>

          {/* Cookie Categories */}
          <div className="space-y-4 sm:space-y-6">
            {/* Essential Cookies */}
            <div className="border rounded-lg p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div>
                  <h3 className="font-semibold text-deep-blue mb-2 text-sm sm:text-base">Notwendige Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Diese Cookies sind fuer das Funktionieren der Website erforderlich und koennen nicht deaktiviert werden.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="essential-cookies"
                    checked={settings.essential}
                    disabled={true}
                    className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2 cursor-not-allowed"
                  />
                  <label htmlFor="essential-cookies" className="ml-2 text-sm font-medium text-gray-500">
                    Immer aktiv
                  </label>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border rounded-lg p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div>
                  <h3 className="font-semibold text-deep-blue mb-2 text-sm sm:text-base">Analyse Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                    indem sie Informationen anonym sammeln und melden.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="analytics-cookies"
                    checked={settings.analytics}
                    onChange={(e) => setSettings(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="analytics-cookies" className="ml-2 text-sm font-medium text-gray-900">
                    Aktivieren
                  </label>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border rounded-lg p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div>
                  <h3 className="font-semibold text-deep-blue mb-2 text-sm sm:text-base">Marketing Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Diese Cookies werden verwendet, um Werbeanzeigen zu personalisieren und 
                    die Wirksamkeit von Werbekampagnen zu messen.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="marketing-cookies"
                    checked={settings.marketing}
                    onChange={(e) => setSettings(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="marketing-cookies" className="ml-2 text-sm font-medium text-gray-900">
                    Aktivieren
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              id="save-cookie-settings"
              onClick={handleSaveSettings}
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm sm:text-base"
            >
              Einstellungen speichern
            </button>
            <button
              onClick={() => {
                setSettings({ essential: true, analytics: true, marketing: true });
                handleSaveSettings();
              }}
              className="flex-1 bg-soft-blue hover:bg-soft-blue/90 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-soft-blue focus:ring-offset-2 text-sm sm:text-base"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={() => {
                setSettings({ essential: true, analytics: false, marketing: false });
                handleSaveSettings();
              }}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              Nur notwendige
            </button>
          </div>

          {/* Privacy Policy Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-sm text-gray-600">
              Weitere Informationen finden Sie in unserer{' '}
              <a 
                href="/privacypolicy" 
                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Datenschutzerklaerung
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentModal;