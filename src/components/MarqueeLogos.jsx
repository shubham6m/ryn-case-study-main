// src/components/MarqueeLogos.jsx
import React from 'react';

import figma from '../assets/figma.png';
import designer from '../assets/designer.png';
import figma1 from '../assets/figma.png';
import designer1 from '../assets/designer.png';
const images = [ figma, designer , figma1 , designer1];

const MarqueeLogos = () => {
  return (
    <div className="marquee-container py-4  ">
      <div className="marquee-track">
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="logo"
            // className="mx-4"
            // style={{ height: '40px', objectFit: 'contain' }}
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeLogos;
