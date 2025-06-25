import "./App.css";
import Works from "./components/Works";

import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import FeedbackFaqContact from "./components/FeedbackFaqContact";
import Blog from "./components/BlogSection";
import Footer from "./components/Footer";
import rectangle from "./assets/rectangle.png";
import rectangle2 from "./assets/rectangle2.png";
import dorodesignLogo from "./assets/dorodesign.png";
import waveLogo from "./assets/wave.png";
import siloulaLogo from "./assets/siloula.png";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <div className=" min-vh-100">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3">
          <div className="container-fluid d-flex justify-content-between align-items-center w-100">
            {/* Left: Logo */}
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" height="35" />
            </a>

            {/* Center: Nav Links */}
            <div className="d-none d-lg-flex mx-auto">
              <ul className="navbar-nav gap-3">
                <li className="nav-item">
                  <a className="nav-link nav-pill" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-pill" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-pill" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-pill" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Hire Me Button */}
            <button className="btn btn-outline-light rounded-pill">
              Hire Me
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-5 px-3">
          <h1 className="hero-heading">
            I AM A <img src={rectangle} alt="design" /> FREELANCE
            <br />
            DESIGNER <img src={rectangle2} alt="computer" /> FROM
            <br />
            SAN FRANCISCO
          </h1>

          {/* Logos */}
          <div className="container my-5">
            <div className="row align-items-center">
              {/* Left: Marquee logos */}
              <div className="col-md-8">
                <div className="logo-marquee">
                  <div className="marquee-track">
                    {[
                      dorodesignLogo,
                      waveLogo,
                      siloulaLogo,
                      dorodesignLogo,
                      waveLogo,
                      siloulaLogo,
                    ].map((logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt={`logo-${index}`}
                        className="mx-4 logo-img"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Intro text */}
              <div className="col-md-4 mt-4 mt-md-0">
                <p className="hero-description">
                  Welcome to my portfolio. Here, artistry meets functionality.
                  Dive into a curated showcase of distinctive branding and web
                  designs, each crafted to captivate and inspire.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Expertise />
        <Works />

        <Experience />
        <Blog />
        <FeedbackFaqContact />
        <Footer />
      </div>
    </>
  );
}

export default App;
