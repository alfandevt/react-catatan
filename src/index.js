import "./styles/index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { UserContextProvider } from "./context/UserContext";
import { LanguageContextProvider } from "./context/LanguageContext";
import { ThemeContextProvider } from "./context/ThemeContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LanguageContextProvider>
      <ThemeContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  </BrowserRouter>
);
