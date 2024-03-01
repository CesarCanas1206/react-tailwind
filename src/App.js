import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Interview from './views/Interview';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className='flex flex-col'>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/interview" element={<Interview user={user} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;