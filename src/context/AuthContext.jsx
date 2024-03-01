import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // setCurrentUser({ uid: '0', displayName: 'John Doe', email: 'john@gmail.com', photoURL: '' });
      setLoading(false);
  }, []);

  const currentUser = { uid: '0', displayName: 'John Doe', email: 'john@gmail.com', photoURL: '', lasttime: 'Sun May 5 20:20 AM' };

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
