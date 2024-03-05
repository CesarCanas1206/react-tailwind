import React, { useState, useContext } from 'react';
import { AuthContext } from 'src/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);

    login({ uid: '8', displayName: 'Oskar Molander', email: 'oskardev0112@gmail.com', photoURL: '', lasttime: 'Sun May 5 20:20 AM' });
    
    // Navigate to the '/dashboard' route
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>

      <h1>Don't u have a account?</h1><a href='/register'>Sign up</a>
    </div>
  );
};

export default Signin;