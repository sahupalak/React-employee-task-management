import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Clear existing data
    localStorage.clear();

    // Set initial data
    setLocalStorage();

    // Get data
    const { employees } = getLocalStorage();
    setEmployees(employees);
  }, []);

  return (
    <AuthContext.Provider value={{ employees, setEmployees }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
