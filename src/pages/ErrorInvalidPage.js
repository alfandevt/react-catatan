import "../styles/Pages/ErrorPage.css";
import React from "react";
import { Link } from "react-router-dom";
import ErrorSvg from "../assets/svg/undraw_page_not_found_re_e9o6.svg";
import useLanguageContext from "../hooks/useLanguageContext";

const ErrorInvalidPage = () => {
  const {
    lang: { errorPage },
  } = useLanguageContext();

  return (
    <section className="note-page error-invalid-page">
      <h2 className="note-page__heading">{errorPage.sectionHeading}</h2>
      <div className="note-page__error__container">
        <img
          className="note-page__error__img"
          alt="Error Not Found"
          src={ErrorSvg}
        />
        <Link to="/" className="note-page__error__link">
          {errorPage.actionLink}
        </Link>
      </div>
    </section>
  );
};

export default ErrorInvalidPage;
