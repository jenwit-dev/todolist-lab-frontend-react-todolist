import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Authenticated({ children }) {
  const ctx = useContext(AuthContext);
  //   const navigate = useNavigate();

  // must log in first to access children components which is <HomePage/>
  // in browser, if you type localhost:5173/ (/ = go to home page that has a create button) directly without logging in first, it will redirect to localhost:5173/login
  if (!ctx.user) {
    // return navigate("/login");
    // can't use navigate here, must use <Navigate>
    // in the console, it will show error: you should call navigate() in a useEffect(), not when first rendering
    return <Navigate to="/login" />;
  }
  return children;
}
