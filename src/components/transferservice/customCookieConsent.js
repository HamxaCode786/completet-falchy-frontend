import { px, transform } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FiGlobe, FiX, FiChevronDown } from 'react-icons/fi';

// Translation data
const translations = {
    en: {
      title: "Cookie Policy",
      description1:
        "At Falchy, we strive to provide a refined and tailored digital experience. By selecting 'I Accept', you consent to the use of cookies and similar technologies that help us personalize content, optimize functionality, and display relevant offers.",
      description2:
        "If you prefer to continue with only essential cookies necessary for the website’s operation, you may select 'Reject'.",
      description3:
        "You can adjust your preferences or withdraw consent at any time through the ",
      cookieSettings: "Cookie Settings",
      accept: "I Accept",
      reject: "Reject",
    },
    du: {
      title: "Cookiebeleid",
      description1:
        "Bij Falchy streven we ernaar om een verfijnde en op maat gemaakte digitale ervaring te bieden. Door 'Accepteren' te selecteren, stemt u in met het gebruik van cookies en soortgelijke technologieën die ons helpen inhoud te personaliseren, functionaliteit te optimaliseren en relevante aanbiedingen weer te geven.",
      description2:
        "Als u liever alleen essentiële cookies gebruikt die nodig zijn voor de werking van de website, kunt u 'Weigeren' selecteren.",
      description3:
        "U kunt uw voorkeuren op elk moment aanpassen of uw toestemming intrekken via de ",
      cookieSettings: "Cookie-instellingen",
      accept: "Accepteren",
      reject: "Weigeren",
    },
    it: {
      title: "Politica sui Cookie",
      description1:
        "Su Falchy, ci impegniamo a fornire un'esperienza digitale raffinata e su misura. Selezionando 'Accetta', acconsenti all'uso di cookie e tecnologie simili che ci aiutano a personalizzare i contenuti, ottimizzare la funzionalità e mostrare offerte pertinenti.",
      description2:
        "Se preferisci continuare con solo i cookie essenziali necessari per il funzionamento del sito web, puoi selezionare 'Rifiuta'.",
      description3:
        "Puoi modificare le tue preferenze o revocare il consenso in qualsiasi momento tramite le ",
      cookieSettings: "Impostazioni Cookie",
      accept: "Accetta",
      reject: "Rifiuta",
    },
    fr: {
      title: "Politique de Cookies",
      description1:
        "Chez Falchy, nous nous efforçons d'offrir une expérience numérique raffinée et personnalisée. En sélectionnant 'Accepter', vous consentez à l'utilisation de cookies et de technologies similaires qui nous aident à personnaliser le contenu, optimiser la fonctionnalité et afficher des offres pertinentes.",
      description2:
        "Si vous préférez continuer uniquement avec les cookies essentiels nécessaires au fonctionnement du site Web, vous pouvez sélectionner 'Rejeter'.",
      description3:
        "Vous pouvez ajuster vos préférences ou retirer votre consentement à tout moment via les ",
      cookieSettings: "Paramètres des cookies",
      accept: "Accepter",
      reject: "Rejeter",
    },
  };
  

const CustomCookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven) {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h3 style={titleStyle}>{translations[selectedLanguage].title}</h3>
          <div style={languageSelectorStyle}>
            <button
              style={languageButtonStyle}
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              <FiGlobe style={{ marginRight: 8 }} />
              
              <FiChevronDown style={{ marginLeft: 8 }} />
            </button>
            {showLanguageDropdown && (
              <div style={dropdownStyle}>
                {Object.keys(translations).map((lang) => (
                  <button
                    key={lang}
                    style={dropdownItemStyle}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setShowLanguageDropdown(false);
                    }}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div style={contentStyle}>
          <p>{translations[selectedLanguage].description1}</p>
          <p>{translations[selectedLanguage].description2}</p>
          <p>
            {translations[selectedLanguage].description3}
            <a href="#/cookiepolicy" style={linkStyle}>
              {translations[selectedLanguage].title}
            </a>.
          </p>
        </div>

        {/* Footer Buttons */}
        <div style={buttonContainerStyle}>
          <button style={rejectButtonStyle} onClick={handleReject}>
            {translations[selectedLanguage].reject}
          </button>
          <button style={acceptButtonStyle} onClick={handleAccept}>
            {translations[selectedLanguage].accept}
          </button>
        </div>
      </div>
    </div>
  );
};


// Styles
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: '#1e1e1e',
  borderRadius: '12px',
  padding: '24px',
  maxWidth: '600px',
  width: '100%',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  position: 'relative',
};

const titleStyle = {
  margin: 0,
  fontSize: '1.5rem',
  color: '#ededed',
  transform: 'translate3d(0, 0, 0)',
  fontStyle: 'none',
};

const languageSelectorStyle = {
  position: 'relative',
};

const languageButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: '1px solid #e2e8f0',
  borderRadius: '6px',
  padding: '8px 12px',
  cursor: 'pointer',
  color: 'white',
  fontSize: '14px',
};

const dropdownStyle = {
  position: 'absolute',
  right: 0,
  top: '40px',
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e2e8f0',
  zIndex: 1001,
};

const dropdownItemStyle = {
  width: '100%',
  padding: '10px 16px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#4a5568',
  ':hover': {
    backgroundColor: '#f7fafc',
  },
};

const contentStyle = {
  lineHeight: '1.6',
  color: '#999797',
  marginBottom: '24px',
};

const linkStyle = {
  color: '#4299e1',
  textDecoration: 'none',
  marginLeft: '4px',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end',
};

const baseButtonStyle = {
  padding: '10px 24px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'all 0.2s ease',
};

const rejectButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: '#f7fafc',
  border: '1px solid #e2e8f0',
  color: '#4a5568',
  ':hover': {
    backgroundColor: '#edf2f7',
  },
};

const acceptButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: '#e4a11b',
  border: '1px solid #e4a11b',
  color: '#120e0e',
  ':hover': {
    backgroundColor: '#3182ce',
  },
};

export default CustomCookieConsent;