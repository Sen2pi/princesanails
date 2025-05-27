import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-up">
          <h1>Bem-vinda à <span className="highlight">Princesa Nails</span></h1>
          <p>Transforme as suas unhas numa obra de arte. Serviços premium de manicure e pedicure num ambiente luxuoso e relaxante.</p>
          <div className="hero-buttons">
            <a href="#booking" className="btn btn-primary">
              <i className="fas fa-calendar-alt"></i>
              Marcar Agendamento
            </a>
            <a href="#services" className="btn btn-secondary">
              <i className="fas fa-sparkles"></i>
              Ver Serviços
            </a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src="/images/1.jpeg" alt="Nail Art" className="hero-img" />
          <div className="floating-elements">
            <div className="sparkle sparkle-1">✨</div>
            <div className="sparkle sparkle-2">💅</div>
            <div className="sparkle sparkle-3">✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
