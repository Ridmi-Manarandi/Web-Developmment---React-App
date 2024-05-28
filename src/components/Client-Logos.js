import React, { useState, useEffect } from 'react';
import ClientLogoStyles from '../Styles/ClientLogos.module.css';
import Logo1 from '../assets/images/companyLogo1.png';
import Logo2 from '../assets/images/companyLogo2.png';
import Logo3 from '../assets/images/companyLogo3.png';
import Logo4 from '../assets/images/companyLogo4.png';
import Logo5 from '../assets/images/companyLogo5.png';

const ClientLogos = () => {
 
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div id="clients" className={ClientLogoStyles.main}>
      <div className={ClientLogoStyles.logoCard}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`${ClientLogoStyles.logos} ${
              index === currentIndex ? ClientLogoStyles.active : ''
            }`}
          >
            <img src={logo} alt={`logo${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
