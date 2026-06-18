import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("accessToken") ? true : false
  );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* value stores an object {user, setUser} like TodoContextProvider P V */}
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
