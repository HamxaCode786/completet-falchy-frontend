import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './translations/english/translation.json';
import itTranslation from './translations/italian/translation.json';
import duTranslation from './translations/dutch/translation.json';
import frTranslation from './translations/french/translations.json';


i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      it: { translation: itTranslation },
      du: { translation: duTranslation },
      fr: { translation: frTranslation },
      
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback to English if a translation is missing
    interpolation: {
      escapeValue: false // React already escapes strings
    }
  });

export default i18n;
