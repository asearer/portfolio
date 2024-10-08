import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; 
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; 
import './App.css'; 

// Import FontAwesome CSS for icons
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        
        
        
      </Routes>
    </Layout>
  );
}

export default App;
