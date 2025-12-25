import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
import Cookies from "js-cookie";

export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("ChatSphere");

  // Parse the user data and storing in state
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
