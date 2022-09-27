import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLanguageContext from "../hooks/useLanguageContext";
import {
  getUserLogged,
  login,
  removeAccessToken,
  putAccessToken,
  register,
} from "../utils/network-data";
import pathData from "../utils/path-data";
import { swalAlert } from "../utils/sweetAlert";
import { getUserData, putUserData, removeUserData } from "../utils/user-data";

const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const {
    lang: { alerts },
  } = useLanguageContext();
  const navigate = useNavigate();
  const [user, setUser] = useState(getUserData());

  const getMe = async () => {
    const { error, data } = await getUserLogged();
    if (!error) {
      if (!user) {
        putUserData(data);
        setUser(data);
      }
    } else {
      swalAlert(alerts.authAction.userSession, { icon: "info" });
      logoutHandler();
    }
  };

  const registerHandler = async (name, email, password) => {
    const { error } = await register(name, email, password);
    if (!error) {
      navigate(pathData.LOGIN, { replace: true });
      swalAlert(alerts.authAction.createAccountSuccess, { icon: "success" });
    } else {
      swalAlert(alerts.authAction.createAccountFail, { icon: "error" });
    }
  };

  const loginHandler = async (email, password) => {
    const { error, data } = await login(email, password);
    if (!error) {
      putAccessToken(data.accessToken);
      getMe();
      navigate(pathData.NOTES);
      swalAlert(alerts.authAction.loginSuccess, { icon: "success" });
    } else {
      swalAlert(alerts.authAction.loginFail, { icon: "error" });
    }
  };

  const logoutHandler = () => {
    setUser(null);
    removeAccessToken();
    removeUserData();
    navigate(pathData.LOGIN);
  };

  const context = {
    registerHandler,
    loginHandler,
    logoutHandler,
    getMe,
    user,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
