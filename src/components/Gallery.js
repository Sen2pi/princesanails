import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    '/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
    '/images/5.jpeg',
    '/images/6.jpeg'
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Nossa Galeria</h2>
          <p>Veja alguns dos nossos trabalhos mais recentes</p>
        </div>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index}
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`Trabalho ${index + 1}`} />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content">
              <img src={selectedImage} alt="Imagem ampliada" />
              <button className="modal-close" onClick={() => setSelectedImage(null)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
