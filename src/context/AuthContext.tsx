"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: { userId: string; email: string; name: string } | null;
  login: (userData: { userId: string; email: string; name: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ userId: string; email: string; name: string } | null>(null);

  useEffect(() => {
    // Recuperar usuario del localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.userId) { // Asegurar que `userId` existe antes de guardar
        setUser(parsedUser);
      }
    }
  }, []);

  const login = (userData: { userId: string; email: string; name: string }) => {
    console.log("Guardando usuario en contexto:", userData);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Guardar `userId`
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};