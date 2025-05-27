import React, { useEffect } from 'react';

const Booking = () => {
  useEffect(() => {
    // Carregar o script do Setmore
    const script = document.createElement('script');
    script.id = 'setmore_script';
    script.type = 'text/javascript';
    script.src = 'https://assets.setmore.com/integration/static/setmoreIframeLive.js';
    script.async = true;
    
    // Verificar se o script já não foi carregado
    if (!document.getElementById('setmore_script')) {
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup: remover script quando componente for desmontado
      const existingScript = document.getElementById('setmore_script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="booking" className="booking">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Marque o Seu Agendamento</h2>
          <p>Reserve o seu horário de forma rápida e fácil</p>
        </div>
        
        <div className="booking-content" data-aos="fade-up">
          <div className="booking-info">
            <h3>Como Marcar:</h3>
            <div className="booking-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Escolha o Serviço</h4>
                  <p>Selecione o tratamento desejado</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Selecione Data e Hora</h4>
                  <p>Veja os horários disponíveis em tempo real</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Confirme os Dados</h4>
                  <p>Finalize o seu agendamento</p>
                </div>
              </div>
              <div className="step step-payment">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Confirme com Pagamento</h4>
                  <p>Transfira 50% do valor via MBWay para garantir a marcação</p>
                  <div className="mbway-info">
                    <img src="/images/mbway.png" alt="MBWay" className="mbway-logo" />
                    <span className="mbway-number">+351  926 703 934</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-benefits">
              <h4>✨ Vantagens do Agendamento Online:</h4>
              <ul>
                <li>📅 Disponibilidade em tempo real</li>
                <li>⏰ Confirmação imediata</li>
                <li>📱 Lembretes automáticos</li>
                <li>🔄 Fácil reagendamento</li>
              </ul>
            </div>
          </div>
          
          <div className="booking-widget">
            <div className="setmore-container">
              <h3>Reserve Agora</h3>
              <p>Clique no botão abaixo para ver os horários disponíveis:</p>
              
              {/* Widget do Setmore */}
              <div className="setmore-booking-widget">
                <a 
                  id='Setmore_button_iframe' 
                  href='https://princesanails.setmore.com'
                  className="setmore-book-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-calendar-check"></i>
                  Marcar Agendamento
                </a>
              </div>

              <div className="booking-note">
                <p><i className="fas fa-info-circle"></i> 
                Será redirecionada para a nossa agenda online segura onde pode escolher o serviço, data e horário que mais lhe convém.</p>
              </div>

              {/* Informação de Pagamento */}
              <div className="payment-info">
                <h4>💳 Confirmação de Marcação</h4>
                <div className="payment-details">
                  <div className="payment-step">
                    <i className="fas fa-mobile-alt"></i>
                    <div>
                      <strong>Após marcar online:</strong>
                      <p>Transfira 50% do valor do serviço via MBWay para confirmar a sua marcação com o seu bookID como descrição.</p>
                    </div>
                  </div>
                  
                  <div className="mbway-payment">
                    <img src="/images/mbway.png" alt="MBWay" className="mbway-logo-large" />
                    <div className="mbway-details">
                      <span className="mbway-label">Número MBWay:</span>
                      <span className="mbway-number-large">+351  926 703 934</span>
                    </div>
                  </div>

                  <div className="payment-note">
                    <p><i className="fas fa-shield-alt"></i> 
                    <strong>Importante:</strong> A marcação só fica confirmada após o pagamento de 50% do valor. 
                    O restante valor é pago no dia do serviço.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="booking-alternatives" data-aos="fade-up">
          <h3>Outras Formas de Marcar:</h3>
          <div className="contact-methods">
            <a href="https://wa.me/351913267915" className="contact-method whatsapp">
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <a href="tel:+351913267915" className="contact-method phone">
              <i className="fas fa-phone"></i>
              <span>Telefone</span>
            </a>
            <a href="mailto:stedilanda@gmail.com" className="contact-method email">
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
