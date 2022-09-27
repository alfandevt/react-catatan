import React, { useState } from "react";
import { Link } from "react-router-dom";
import { swalAlert } from "../utils/sweetAlert";
import InputField from "../components/UserForms/InputField";
import useInput from "../hooks/useInput";
import useLanguageContext from "../hooks/useLanguageContext";
import useUserContext from "../hooks/useUserContext";
import pathData from "../utils/path-data";

const RegisterPage = () => {
  const { lang } = useLanguageContext();
  const { registerHandler } = useUserContext();
  const [username, setUsername] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");
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
    if (!username) {
      return { isValid: false, message: userFormValidation.usernameEmpty };
    } else if (username.length < 3) {
      return {
        isValid: false,
        message: userFormValidation.usernameLength,
      };
    } else if (!email) {
      return { isValid: false, message: userFormValidation.emailEmpty };
    } else if (!password) {
      return { isValid: false, message: userFormValidation.passwordEmpty };
    } else if (password.length < 6) {
      return {
        isValid: false,
        message: userFormValidation.passwordLength,
      };
    } else if (password !== confirmPassword) {
      return { isValid: false, message: userFormValidation.passwordMismatch };
    } else {
      return { isValid: true, message: userFormValidation.formValid };
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const { isValid, message } = validateForm();
    if (isValid) {
      registerHandler(username, email, password);
    } else {
      swalAlert(message, { icon: "warning" });
    }
  };

  return (
    <section className="note-page login-page">
      <h2 className="note-page__heading">{lang.registerPage.sectionHeading}</h2>
      <div className={`user-form__overlay ${focusClass}`}></div>
      <form onSubmit={onSubmitHandler} className={`user-form ${focusClass}`}>
        <InputField
          label={lang.registerPage.nameLabel}
          type="text"
          placeholder="jono"
          value={username}
          onChange={setUsername}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <InputField
          label={lang.registerPage.emailLabel}
          type="email"
          placeholder="jono@email.com"
          value={email}
          onChange={setEmail}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <InputField
          label={lang.registerPage.passwordLabel}
          type="password"
          placeholder="*****"
          value={password}
          onChange={setPassword}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <InputField
          label={lang.registerPage.passwordConfirmLabel}
          type="password"
          placeholder="*****"
          value={confirmPassword}
          onChange={setConfirmPassword}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <p className="user-form__text">
          {lang.registerPage.infoHintLabel}{" "}
          <Link to={pathData.LOGIN}>{lang.registerPage.infoHintLinkLabel}</Link>
        </p>
        <button type="submit" className="user-form__submit">
          {lang.registerPage.submitButtonLabel}
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
