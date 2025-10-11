import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Authenticated({ children }) {
  const ctx = useContext(AuthContext);
  //   const navigate = useNavigate();

  if (!ctx.user) {
    // return navigate("/login");
    // can't use navigate here, must use <Navigate>
    // in the console, it will show error: you should call navigate() in a useEffect(), not when first rendering
    return <Navigate to="/login" />;
  }
  return children;
}
