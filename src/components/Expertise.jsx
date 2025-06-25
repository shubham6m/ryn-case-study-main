// src/components/Expertise.jsx
import React from 'react';
import starIcon from '../assets/star.png'; // make sure the image exists in src/assets

const Expertise = () => {
  const items = [
    {
      title: 'Branding',
      desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
      title: 'UI Design',
      desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. Webflow forms the foundation of my approach.'
    },
    {
      title: 'UX Design',
      desc: 'I comprehend and resolve digital product issues using a user-focused methodology. Innovation, compassion, and virtual conveyance are techniques I apply to involve users while fulfilling your business goals.'
    },
    {
      title: 'Development',
      desc: 'I create user-friendly, adapting, and engaging websites. No cookie-cutters. I employ top-notch techniques to build custom, secure, and scalable solutions.'
    }
  ];

  return (
   <section className="container expertise-section">
  <div className="section-title">
    <img src={starIcon} alt="star" width="24" height="24" />
    <h2>Expertise</h2>
  </div>
  <div className="row g-4">
    {items.map((item, index) => (
      <div className="col-md-6 expertise-item" key={index}>
        <h5>• {item.title}</h5>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Expertise;
