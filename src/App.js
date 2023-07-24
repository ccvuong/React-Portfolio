import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import React, { useState } from 'react';

import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* navbar will exist on every page */}
        <Navbar />

        <Routes>
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Navigate to='/about' />} />

          <Route path='/contact' element={<Contact />} />

        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;

