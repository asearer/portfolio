import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Import FontAwesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<><HeroSection /><About /><Skills /><Projects /><Blog /></>} />
        <Route path="/about" element={<><HeroSection /><About /><Skills /><Projects /><Blog /></>} />
        <Route path="/skills" element={<><HeroSection /><Skills /><Projects /><Blog /></>} />
        <Route path="/projects" element={<><HeroSection /><Projects /><Blog /></>} />
        <Route path="/blog" element={<><HeroSection /><Blog /></>} />
        <Route path="/contact" element={<><HeroSection /><Contact /></>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



