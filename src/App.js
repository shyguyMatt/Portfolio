import React from 'react';
// Import Page Elements
import Navbar from './components/elements/Navbar'
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'

// Import Content Bodies
import Body from './components/pages/Body'
import About from './components/pages/About'
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills'

import './App.css';

export default function App() {
  return (
    <>
      <Header id={'header'} />
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </>
  );
}


