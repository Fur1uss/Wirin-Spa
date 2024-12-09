import React from "react";
import image1 from '../assets/images/sliderImages/AutoPlanet.png';
import image2 from '../assets/images/sliderImages/Castano.png';
import image3 from '../assets/images/sliderImages/Copec.png';
import image4 from '../assets/images/sliderImages/CyK.png';
import image5 from '../assets/images/sliderImages/Hecate.png';
import image6 from '../assets/images/sliderImages/Patagonia.png';
import image7 from '../assets/images/sliderImages/SuperZoo.png';
import "../styles/components/companyBannerStyle.css";

export default function CompanyBanner() {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Imágenes visibles que se desplazan */}
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        ))}
        {/* Imágenes duplicadas para el efecto de bucle continuo */}
        {images.map((src, index) => (
          <img
            key={index + images.length} // Asegura que las claves sean únicas
            src={src}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        ))}        {/* Imágenes duplicadas para el efecto de bucle continuo */}
        {images.map((src, index) => (
          <img
            key={index + images.length} // Asegura que las claves sean únicas
            src={src}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        ))} 
        
        {images.map((src, index) => (
          <img
            key={index + images.length} // Asegura que las claves sean únicas
            src={src}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        ))}

        {images.map((src, index) => (
          <img
            key={index + images.length} // Asegura que las claves sean únicas
            src={src}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        ))}


      </div>
    </div>
  );
}
