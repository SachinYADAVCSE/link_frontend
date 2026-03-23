import { createContext, useContext, useEffect, useState } from "react";
import api from "../lib/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    try {
      const res = await api("/auth/users/${res.}"); // endpoint that returns logged in user --> user info returns...
      console.log("This is the Context of React", res)
      setUser(res);
    } catch (err) {
      console.error("Failed to load user", err);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, reloadUser: loadUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);