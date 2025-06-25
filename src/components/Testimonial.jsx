// src/components/Testimonial.jsx
import React, { useState } from 'react';
import userImage from '../assets/user.png'; // Replace with your image
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Floyd Miles',
    company: 'eBay',
    message:
      "Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    avatar: userImage
  },
  {
    name: 'Cameron Williamson',
    company: 'Dropbox',
    message:
      "The design workflow is intuitive and fast. I was able to build a full mockup in no time.",
    avatar: userImage
  },
  {
    name: 'Courtney Henry',
    company: 'Spotify',
    message:
      "The UI design and attention to detail are outstanding. This product saved me hours of work.",
    avatar: userImage
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const { name, company, message, avatar } = testimonials[current];

  return (
    <section className="container py-5 text-white">
      <h2 className="mb-4">✴ What they say</h2>
      <div className="p-4 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
        {/* User Info */}
        <div className="d-flex align-items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="rounded-circle"
            width="50"
            height="50"
          />
          <div>
            <strong>{name}</strong>
            <p className="text-muted m-0">{company}</p>
          </div>
        </div>

        {/* Message */}
        <div className="flex-grow-1">
          <p className="mb-0 fs-5 text-light">
            <FaQuoteLeft className="me-2 text-secondary" />
            {message}
          </p>
        </div>

        {/* Controls */}
        <div className="d-flex gap-2">
          <button className="btn btn-light rounded-circle p-2" onClick={prevTestimonial}>
            <FaArrowLeft />
          </button>
          <button className="btn btn-light rounded-circle p-2" onClick={nextTestimonial}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
