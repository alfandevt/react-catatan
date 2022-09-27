export const DARK = "dark";
export const LIGHT = "light";
export const THEME_KEY = "theme";

export const getLocalTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (!savedTheme) {
    return LIGHT;
  }
  return savedTheme;
};

export const setLocalTheme = (theme) => {
  return localStorage.setItem(THEME_KEY, theme);
};
