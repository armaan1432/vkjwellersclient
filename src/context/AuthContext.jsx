import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthContext({ children }) {
  // Use the correct environment variable for production
  const serverUrl = import.meta.env.VITE_API_URL || "http://localhost:10000";

  return (
    <authDataContext.Provider value={{ serverUrl }}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;
