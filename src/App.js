import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import './App.css';

// Import FontAwesome CSS for icons
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
