import React from "react";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  BiCaretDown,
  BiColorFill,
  BiGlobe,
  BiLogOut,
  BiUserCircle,
} from "react-icons/bi";
import { swalAlert } from "../../utils/sweetAlert";

const UserAvatar = ({ user, lang, onLogout, onSwitchLang, onSwitchTheme }) => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setToggle(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const onLogoutHandler = () => {
    swalAlert(lang.alerts.authAction.logoutLabel, { icon: "success" });
    setToggle(false);
    onLogout();
  };

  return (
    <div
      ref={ref}
      className={`note-app__user-avatar ${toggle ? "toggle" : ""}`}
    >
      <p
        onClick={() => setToggle(!toggle)}
        className="user__menu-label elipsis"
      >
        {user && (
          <span>
            <BiUserCircle />
            <strong>
              &nbsp;
              {user.name}
            </strong>
            <BiCaretDown />
          </span>
        )}
        {!user && (
          <span>
            {lang.appMenu.menuLabel}
            <BiCaretDown />
          </span>
        )}
      </p>
      <div className={`dropdown-menu ${toggle ? "toggle" : ""}`}>
        <button onClick={onSwitchLang} className="item lang">
          <BiGlobe />
          &nbsp;
          <span>{lang.appMenu.langLabel}</span>
        </button>
        <button onClick={onSwitchTheme} className="item theme">
          <BiColorFill />
          &nbsp;
          <span> {lang.appMenu.themeLabel}</span>
        </button>
        {user && (
          <button onClick={onLogoutHandler} className="item logout">
            <BiLogOut />
            &nbsp;
            <span>{lang.appMenu.logoutLabel}</span>
          </button>
        )}
      </div>
    </div>
  );
};

UserAvatar.propTypes = {
  user: PropTypes.object,
  lang: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSwitchLang: PropTypes.func.isRequired,
  onSwitchTheme: PropTypes.func.isRequired,
};

export default UserAvatar;
