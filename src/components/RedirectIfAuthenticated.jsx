import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
  const ctx = useContext(AuthContext);
  if (ctx.user) {
    // option 1: show a message
    return <div className="bg-white">You are already logged in.</div>;
    // option 2: redirect to home page
    // return <Navigate to="/" />;
    // if already logged in, redirect to home page
    // return <Navigate to="/" replace={true} />;
    // replace: true, the current entry will be replaced in the history stack
    // so that when user click back button, it won't go back to login or register page
    // but go back to the page before login or register page
    // e.g. if user is at home page, then go to login page, then click back button, it will go back to home page instead of login page
  }
  return children;
}
