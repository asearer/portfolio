import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AdminPage from './components/AdminPage'; 
import './App.css';

// Import FontAwesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Layout>
  );
}

export default App;






