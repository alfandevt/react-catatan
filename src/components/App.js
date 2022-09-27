import "../styles/App.css";
import "../styles/UserForm/UserForm.css";
import "../styles/Pages/Pages.css";
import "../styles/Themes/light.css";
import "../styles/Themes/dark.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import ActiveNotePage from "../pages/ActiveNotePage";
import AddNotePage from "../pages/AddNotePage";
import ArchivesPage from "../pages/ArchivesPage";
import DetailNotePage from "../pages/DetailNotePage";
import ErrorInvalidPage from "../pages/ErrorInvalidPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthGuard from "../RouteGuards/AuthGuard";
import useUserContext from "../hooks/useUserContext";
import useThemeContext from "../hooks/useThemeContext";
import pathData from "../utils/path-data";

const App = () => {
  const { theme } = useThemeContext();
  const { user } = useUserContext();

  return (
    <div className={`note-app ${theme}`}>
      <div className="note-app__background"></div>
      <Header />
      <main>
        <Routes>
          <Route
            path={pathData.BASE}
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath={pathData.LOGIN}
                element={<Navigate to={pathData.NOTES} />}
              />
            }
          />
          <Route
            path={pathData.NOTES}
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath={pathData.LOGIN}
                element={<ActiveNotePage />}
              />
            }
          />
          <Route
            path={pathData.ARCHIVES}
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath={pathData.LOGIN}
                element={<ArchivesPage />}
              />
            }
          />
          <Route
            path={pathData.CREATE_NOTE}
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath={pathData.LOGIN}
                element={<AddNotePage />}
              />
            }
          />
          <Route
            path={pathData.DETAIL_NOTE}
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath={pathData.LOGIN}
                element={<DetailNotePage />}
              />
            }
          />
          <Route
            path={pathData.LOGIN}
            element={
              <AuthGuard
                isAllowed={!user}
                redirectPath={pathData.BASE}
                element={<LoginPage />}
              />
            }
          />
          <Route
            path={pathData.REGISTER}
            element={
              <AuthGuard
                isAllowed={!user}
                redirectPath={pathData.BASE}
                element={<RegisterPage />}
              />
            }
          />
          <Route
            path={pathData.WILDCARD}
            element={<Navigate to={pathData.NOT_FOUND} />}
          />
          <Route path={pathData.NOT_FOUND} element={<ErrorInvalidPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
