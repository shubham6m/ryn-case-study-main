// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white text-center pt-5">
      {/* Call to Action */}
      <h1 className="display-5 fw-bold">LET’S TALK!</h1>
      <p className="fs-5 text-light">
        <a
          href="mailto:rehanurraihan@gmail.com"
          className="text-light text-decoration-none"
        >
          rehanurraihan@gmail.com ↗
        </a>
      </p>

      {/* Footer Bottom */}
      <div className="container text-center text-md-start">
  <div className="row justify-content-between align-items-center mt-4">
    {/* Left: Copyright */}
    <div className="col-12 col-md-6 mb-3 mb-md-0">
      © Rehan Raihan – 2023
    </div>

    {/* Right: Social Links */}
    <div className="col-12 col-md-6 text-md-end">
      <samp>Dribbble</samp>
      <samp>Behance</samp>
      <samp>Twitter</samp>
      <samp>Instagram</samp>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
