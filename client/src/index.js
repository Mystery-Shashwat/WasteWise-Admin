import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import ThemeState from "./context/Theme/ThemeState";
import AuthState from "./context/Auth/AuthState";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthState>
    <ThemeState>
     
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeState>
    </AuthState>
  </React.StrictMode>
);
