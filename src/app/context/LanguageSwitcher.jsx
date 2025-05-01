"use client";

import { createContext, useState, useContext } from "react";


const LanguageSwitcher = createContext();


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("da"); 

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "da" ? "en" : "da"));
  };

  return (
    <LanguageSwitcher.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageSwitcher.Provider>
  );
};

export const useLanguage = () => useContext(LanguageSwitcher);
