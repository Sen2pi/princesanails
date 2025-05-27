import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.png" alt="Princesa Nails" className="footer-logo" />
            <h3>Princesa Nails</h3>
            <p>Transformando unhas em obras de arte desde sempre.</p>
          </div>
          
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#booking">Marcar</a></li>
              <li><a href="#gallery">Galeria</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p><i className="fas fa-phone"></i> +351 926 703 934</p>
            <p><i className="fas fa-envelope"></i> stedilanda@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Rua Dom João de Castro , 4705 Lomar, Braga</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Princesa Nails. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
