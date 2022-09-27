import React, { useState } from "react";
import { Link } from "react-router-dom";
import { swalAlert } from "../utils/sweetAlert";
import useInput from "../hooks/useInput";
import InputField from "../components/UserForms/InputField";
import useUserContext from "../hooks/useUserContext";
import useLanguageContext from "../hooks/useLanguageContext";
import pathData from "../utils/path-data";

const LoginPage = () => {
  const { lang } = useLanguageContext();
  const { loginHandler } = useUserContext();

  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [focusClass, setFocusClass] = useState("");

  const onFocusHandler = () => {
    setFocusClass("focus");
  };
  const onBlurHandler = () => {
    setFocusClass("");
  };

  const validateForm = () => {
    const {
      alerts: { userFormValidation },
    } = lang;

    if (!email) {
      return { isValid: false, message: userFormValidation.emailEmpty };
    } else if (!password) {
      return { isValid: false, message: userFormValidation.passwordEmpty };
    } else {
      return { isValid: true, message: userFormValidation.formValid };
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { isValid, message } = validateForm();
    if (isValid) {
      loginHandler(email, password);
    } else {
      swalAlert(message, { icon: "error" });
    }
  };

  return (
    <section className="note-page login-page">
      <h2 className="note-page__heading">{lang.loginPage.sectionHeading}</h2>
      <div className={`user-form__overlay ${focusClass}`}></div>
      <form onSubmit={onSubmitHandler} className={`user-form ${focusClass}`}>
        <InputField
          label={lang.loginPage.emailLabel}
          type="email"
          placeholder="jono@email.com"
          value={email}
          onChange={setEmail}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <InputField
          label={lang.loginPage.passwordLabel}
          type="password"
          placeholder="*****"
          value={password}
          onChange={setPassword}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <p className="user-form__text">
          {lang.loginPage.infoHintLabel}{" "}
          <Link to={pathData.REGISTER}>{lang.loginPage.infoHintLinkLabel}</Link>
        </p>
        <button type="submit" className="user-form__submit">
          {lang.loginPage.submitButtonLabel}
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
