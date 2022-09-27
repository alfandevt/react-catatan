import "../../styles/Header/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import UserAvatar from "./UserAvatar";
import useUserContext from "../../hooks/useUserContext";
import useLanguageContext from "../../hooks/useLanguageContext";
import useThemeContext from "../../hooks/useThemeContext";
import pathData from "../../utils/path-data";

const Header = () => {
  const { user, logoutHandler } = useUserContext();
  const { onSwitchTheme } = useThemeContext();
  const { lang, onSwitchLang } = useLanguageContext();

  return (
    <header className="note-app__header">
      <div className="note-app__header-group">
        <Link to={pathData.BASE} className="note-app__brand">
          {lang.appTitle}
        </Link>
        <UserAvatar
          onSwitchLang={onSwitchLang}
          onSwitchTheme={onSwitchTheme}
          onLogout={logoutHandler}
          lang={lang}
          user={user}
        />
      </div>
      {user && <Navigation lang={lang} />}
    </header>
  );
};

export default Header;
