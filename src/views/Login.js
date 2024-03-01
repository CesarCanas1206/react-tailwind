import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);

    // Perform login logic here (e.g., set user state)
    setUser({ name: 'John Doe' });
    
    // Navigate to the '/dashboard' route
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
    </div>
  );
};

export default Login;