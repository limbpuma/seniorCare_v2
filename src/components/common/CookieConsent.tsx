import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
    // Here you would disable any non-essential cookies or tracking
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md z-50">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between">
        <p className="text-ag-body-text font-ag-body-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto">
          Diese Website verwendet Cookies, um Ihr Browsererlebnis zu verbessern und Ihnen personalisierte Inhalte anzubieten. 
          Wir respektieren Ihre Privatsphäre und Ihre Rechte gemäß der DSGVO. 
          Für weitere Informationen lesen Sie bitte unsere <a href="/privacypolicy" className="text-blue-600 hover:underline">Datenschutzerklärung</a>.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="text-white bg-deep-blue hover:bg-soft-blue focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none p-4 rounded-full"
          >
            Akzeptieren
          </button>
          <button
            onClick={handleReject}
            className="text-deep-blue bg-white hover:bg-gray-blue focus:ring-2 focus:ring-offset-2 focus:ring-deep-blue focus:outline-none p-4 rounded-full"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;