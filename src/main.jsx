import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { AuthContext } from "./contexts/AuthContext.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthContext.Provider> */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    {/* </AuthContext.Provider> */}
  </StrictMode>
);
