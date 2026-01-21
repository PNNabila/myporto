import React, { useState, useEffect } from 'react';
import Navigation from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import FloatingBackground from './components/UI/FloatingBackground'; // <--- Import Ini

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Navigation /> {/* Navbar Tetap Di Luar */}

          {/* --- WRAPPER UNTUK KONTEN UTAMA (YANG PAKE BACKGROUND) --- */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>

            {/* Panggil Background Animasi DISINI */}
            <FloatingBackground />

            {/* Section yang kena background */}
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certificates />

          </div>
          {/* -------------------------------------------------------- */}

          <Contact /> {/* Contact Di Luar (Punya bg sendiri) */}
          <Footer />  {/* Footer Di Luar */}
        </div>
      )}
    </>
  );
}

export default App;