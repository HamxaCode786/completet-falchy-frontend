import React, { createContext, useState } from "react";
import i18n from "../i18n"; //

export const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language || "en"); // Default to 'en'

  // Change language function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
