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
            path="/"
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath="/login"
                element={<Navigate to="catatan-aktif" />}
              />
            }
          />
          <Route
            path="catatan-aktif"
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath="/login"
                element={<ActiveNotePage />}
              />
            }
          />
          <Route
            path="catatan-arsip"
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath="/login"
                element={<ArchivesPage />}
              />
            }
          />
          <Route
            path="catatan/baru"
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath="/login"
                element={<AddNotePage />}
              />
            }
          />
          <Route
            path="catatan/:noteId"
            element={
              <AuthGuard
                isAllowed={user}
                redirectPath="/login"
                element={<DetailNotePage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <AuthGuard
                isAllowed={!user}
                redirectPath="/"
                element={<LoginPage />}
              />
            }
          />
          <Route
            path="daftar"
            element={
              <AuthGuard
                isAllowed={!user}
                redirectPath="/"
                element={<RegisterPage />}
              />
            }
          />
          <Route path="*" element={<Navigate to="404" />} />
          <Route path="404" element={<ErrorInvalidPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
