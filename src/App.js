import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
