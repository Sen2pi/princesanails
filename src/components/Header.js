import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <img src="/logo.png" alt="Princesa Nails" className="logo" />
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Início</a>
          <a href="#services" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="#booking" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Marcar</a>
          <a href="#gallery" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Galeria</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Contacto</a>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
