import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setCurrentUser({ uid: '0', displayName: 'John Doe', email: 'john@gmail.com', photoURL: '', lasttime: 'Sun May 5 20:20 AM' });
      setLoading(false);
  }, []);

  const login = (user) => {
    setCurrentUser(user);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
