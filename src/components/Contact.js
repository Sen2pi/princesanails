import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Contacte-nos</h2>
          <p>Estamos aqui para responder às suas questões</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Localização</h4>
                <p>Rua Dom João de Castro , 4705 Lomar, Braga</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Telefone</h4>
                <p>+351 926 703 934</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>stedilanda@gmail.com</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://instagram.com/princesanails" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/share/16NKxWKZn3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://wa.me/351926703934" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form" data-aos="fade-left">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Seu Nome" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Seu Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Seu Telefone" />
              </div>
              <div className="form-group">
                <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
