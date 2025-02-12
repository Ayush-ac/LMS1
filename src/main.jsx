import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { UserRoleProvider } from "./context/UserRole.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserRoleProvider>
      <App />
    </UserRoleProvider>
  </StrictMode>
);
