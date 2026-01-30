
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-nodus-accent/30">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <section id="servicios" className="py-24 px-6 md:px-12 bg-nodus-bg">
          <Services />
        </section>
        <section id="para-quien" className="py-24 px-6 md:px-12 bg-white">
          <TargetAudience />
        </section>
        <section id="como-trabajamos" className="py-24 px-6 md:px-12 bg-nodus-bg">
          <Process />
        </section>
        <section className="py-24 px-6 md:px-12 bg-white">
          <FAQ />
        </section>
        <section id="contacto" className="py-24 px-6 md:px-12 bg-nodus-bg">
          <Contact />
        </section>
        <section className="py-32 px-6 md:px-12 bg-nodus-primary text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-editorial mb-8 leading-tight">
              Hablemos de tu negocio, no de tecnología.
            </h2>
            <a 
              href="#contacto" 
              className="inline-block px-10 py-4 bg-nodus-accent text-nodus-text font-semibold rounded-sm hover:bg-opacity-90 transition-all"
            >
              Comenzar ahora
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
