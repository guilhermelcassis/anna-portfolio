import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-cream">
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 