import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Interview from './views/Interview';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;