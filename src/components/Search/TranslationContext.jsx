import React, { createContext, useContext, useState } from "react";

const TranslationContext = createContext();

const translations = {
  en: {
    placeholder: "Search a Language...",
    buttonText: "Search",
    // Add more translation keys and values
  }
  // Add translations for more languages
};

export const TranslationProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const translate = (key) => {
    return translations[selectedLanguage][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ selectedLanguage, setSelectedLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};