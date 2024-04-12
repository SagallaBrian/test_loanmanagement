import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const savedUser = localStorage.getItem("user") || "{}";
  const [user, setUser] = useState(JSON.parse(savedUser));

  const setGlobaluser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <AuthContext.Provider value={{ user, setGlobaluser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
