import React, { useEffect, useState } from "react";
import { DARK, getLocalTheme, LIGHT, setLocalTheme } from "../utils/theme-data";

const ThemeContext = React.createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getLocalTheme());

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  const onSwitchTheme = () => {
    if (theme === LIGHT) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
  };

  const context = { onSwitchTheme, theme };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
