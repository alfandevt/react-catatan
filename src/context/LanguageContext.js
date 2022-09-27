import React, { useState, useEffect } from "react";
import {
  getLangById,
  getLocalLang,
  idID,
  enEN,
  setLocalLang,
} from "../utils/language-data";

const LanguageContext = React.createContext(null);

export const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState(getLocalLang());

  useEffect(() => {
    setLocalLang(lang.id);
  }, [lang]);

  const onSwitchLang = () => {
    if (lang.id === idID) {
      setLang(getLangById(enEN));
    } else {
      setLang(getLangById(idID));
    }
  };

  const context = { onSwitchLang, lang };

  return (
    <LanguageContext.Provider value={context}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
