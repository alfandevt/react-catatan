import "../../styles/Header/Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import pathData from "../../utils/path-data";

const Navigation = ({ lang }) => {
  const navLinkClass = "nav-link";
  const navLinkActiveClass = "nav-link active";

  return (
    <nav className="note-app__navbar">
      <ul className="nav-links">
        <li>
          <NavLink
            to={pathData.NOTES}
            className={({ isActive }) => {
              return isActive ? navLinkActiveClass : navLinkClass;
            }}
          >
            {lang.appNav.noteLink}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={pathData.ARCHIVES}
            className={({ isActive }) => {
              return isActive ? navLinkActiveClass : navLinkClass;
            }}
          >
            {lang.appNav.archiveLink}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  lang: PropTypes.object.isRequired,
};

export default Navigation;
