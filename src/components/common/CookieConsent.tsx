import React, { useState, useEffect, useCallback } from 'react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Optimized localStorage check with error handling
  const checkConsentStatus = useCallback(() => {
    try {
      const consentGiven = localStorage.getItem('cookieConsent');
      if (!consentGiven) {
        setShowConsent(true);
        // Delay visibility for smooth animation
        setTimeout(() => setIsVisible(true), 100);
      }
    } catch (error) {
      console.warn('localStorage not available, showing consent anyway');
      setShowConsent(true);
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    // Check consent status after a short delay to avoid blocking initial render
    const timeoutId = setTimeout(checkConsentStatus, 1000);
    return () => clearTimeout(timeoutId);
  }, [checkConsentStatus]);

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem('cookieConsent', 'true');
    } catch (error) {
      console.warn('Could not save consent to localStorage');
    }
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300); // Match animation duration
  }, []);

  const handleReject = useCallback(() => {
    try {
      localStorage.setItem('cookieConsent', 'false');
    } catch (error) {
      console.warn('Could not save consent to localStorage');
    }
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300); // Match animation duration
    // Here you would disable any non-essential cookies or tracking
  }, []);

  if (!showConsent) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="banner"
      aria-label="Cookie consent banner"
    >
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between">
        <p className="text-ag-body-text font-ag-body-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto">
          Diese Website verwendet Cookies, um Ihr Browsererlebnis zu verbessern und Ihnen personalisierte Inhalte anzubieten. 
          Wir respektieren Ihre Privatsphäre und Ihre Rechte gemäß der DSGVO. 
          Für weitere Informationen lesen Sie bitte unsere{' '}
          <a 
            href="/privacypolicy" 
            className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
          >
            Datenschutzerklärung
          </a>.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="text-white bg-deep-blue hover:bg-soft-blue focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none p-4 rounded-full transition-colors duration-200"
            aria-label="Cookies akzeptieren"
          >
            Akzeptieren
          </button>
          <button
            onClick={handleReject}
            className="text-deep-blue bg-white hover:bg-gray-blue focus:ring-2 focus:ring-offset-2 focus:ring-deep-blue focus:outline-none p-4 rounded-full transition-colors duration-200"
            aria-label="Cookies ablehnen"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;