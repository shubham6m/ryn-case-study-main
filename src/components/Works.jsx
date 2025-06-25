// src/components/Works.jsx
import React from 'react';
import analysisImg from '../assets/analysis.png';
import fortknoxImg from '../assets/fortknox.png';
import zenocideImg from '../assets/zenocide.png';

const worksData = [
  {
    title: 'Analysis Application',
    desc: 'A fully featured UI design for financial management. Analysis visuals, app mockups, and layout.',
    image: analysisImg
  },
  {
    title: 'Fortknox Application',
    desc: 'Modern responsive design for Fortknox digital vault platform. Sleek and intuitive.',
    image: fortknoxImg
  },
  {
    title: 'Zenocide Application',
    desc: 'Creative branding + UI/UX for a concept startup app. Bold layout & interactive views.',
    image: zenocideImg
  }
];

const Works = () => {
  return (
    <section className="container py-5">
      <h2 className="mb-4 text-white">
        ✴ Works <span className="float-end text-muted fs-6">view all</span>
      </h2>
      {worksData.map((work, index) => (
        <div key={index} className="card  text-white border-0 mb-4 rounded-4 overflow-hidden shadow">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={work.image}
                className="img-fluid h-100 w-100 object-fit-cover"
                alt={work.title}
              />
            </div>
            <div className="col-md-7 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title">{work.title}</h5>
                <p className="card-text">{work.desc}</p>
                <button className="btn btn-outline-light rounded-pill">Case Study</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Works;
