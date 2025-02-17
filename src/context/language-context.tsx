import { useEffect, useState, createContext, useContext } from "react";

type Language = "EN" | "NE"; // Updated to include "NE" for Nepali

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("EN");

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "NE" : "EN"; // Toggling between "EN" and "NE"
    setLanguage(newLanguage);
    window.localStorage.setItem("language", newLanguage);
    document.documentElement.classList.toggle("NE", newLanguage === "NE");
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language") as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);
      document.documentElement.classList.toggle("NE", localLanguage === "NE");
    } else {
      const systemLanguage = navigator.language.slice(0, 2).toUpperCase();
      if (systemLanguage === "NE") {
        setLanguage("NE");
        document.documentElement.classList.add("NE");
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}
