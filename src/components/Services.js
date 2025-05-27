import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '💅',
      title: 'Verniz Gel',
      description: 'Manicure com verniz gel duradouro e brilhante',
      duration: '45 min',
      image: '/images/2.jpeg'
    },
    {
      icon: '🔧',
      title: 'Manutenção de Gel/Acrílico',
      description: 'Manutenção profissional das suas unhas',
      duration: '90 min',
      image: '/images/3.jpeg'
    },
    {
      icon: '✨',
      title: 'Extensão de Gel',
      description: 'Alongamento natural com gel de qualidade',
      duration: '120 min',
      image: '/images/4.jpeg'
    },
    {
      icon: '💎',
      title: 'Extensão de Acrílico',
      description: 'Unhas perfeitas com técnica acrílica',
      duration: '120 min',
      image: '/images/5.jpeg'
    },
    {
      icon: '🦶',
      title: 'Spa dos Pés',
      description: 'Pedicure relaxante e revitalizante',
      duration: '75 min',
      image: '/images/6.jpeg'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Nossos Serviços</h2>
          <p>Descubra a nossa gama completa de tratamentos de beleza para unhas</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <span className="service-icon">{service.icon}</span>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-duration">
                  <i className="fas fa-clock"></i>
                  {service.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
