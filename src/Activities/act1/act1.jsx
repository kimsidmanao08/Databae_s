import React from 'react';
import groupPic from './images/grouppic.jpg';
import databae_frank from './images/databae_frank.jpg';
import databae_gian from './images/databae_gian.jpg';
import databae_kim from './images/databae_kim.jpg';
import databae_joy from './images/databae_joy.jpg';
import databae_minic from './images/databae_minic.jpg'; // Fixed the missing dot here
import './act1.css';

function BatMan() {
  const members = [
    { img: databae_minic, name: "Dominic", role: "Simpleng Tao", desc: "The Databae's Prophet." },
    { img: databae_gian, name: "Gian", role: "Nagbabatak Mag Developer", desc: "Looking Left cause You never Treat me right." },
    { img: databae_frank, name: "Frank", role: "CUTIEPIE Entrepreneur", desc: "Laging nasa hustlin para mabili ka ng mamahalin." },
    { img: databae_kim, name: "Kim", role: "Halimaw Na Engineer", desc: "MAYBE THE NIGHTS." },
    { img: databae_joy, name: "Mary Joy", role: "SYSTEMATIC Analyst", desc: "MAYBE TOMORROW IS ANOTHER DAY BUT TODAY IS NOT TOMORROW" },
  ];

  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <h1 className="logo">databae's</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Landing Page Section */}
      <header id="home" className="hero-section">
        <section className="hero-content">
          <div className="group-img-container">
            <img src={groupPic} alt="asya ine amon group picture" />
          </div>

          <div className="hero-text">
            <h1>We are the Databae's</h1>
            <p>inspired by Mr. Databae himself 1OF1 "DOL"| BS Info Tech - 2B</p>
            <a href="#about" className="btn">About Us</a>
          </div>
        </section>
      </header>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Us</h2>
        <div className="about-card">
          <h3>Hi Everyone Welcome!</h3>
          <p>We are a group of IT students from section 2B. We Love Solving our Own problems.</p>
        </div>

        {/* 5 Column Members Grid */}
        <div className="members-grid">
          {members.map((data, index) => (
            <div className="member-card" key={index}>
              <div className="member-image-wrapper">
                <img src={data.img} alt={data.role} />
                <div className="member-hover-overlay">
                  <p>{data.desc}</p>
                </div>
              </div>
              <div className="member-info">
                <h4>{data.name}</h4>
                <span>{data.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section*/}
      <section id="contact" className="contact-section">
        <h2>Touch With Us </h2>
        <p>Feel free to reach out to us "Wag Kang Matakot" through any of these platforms:</p>
        
        <div className="contact-info-grid">
          <div className="info-item">
            <h4>Email</h4>
            <p>databaes.DominicGianFrankKimMaryJoy@email.com</p>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>Calbayog city Rueda Street. NWSSU CCIS Department - LAB2 </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Databae's | BS Info Tech - 2B</p>
          <div className="footer-links">
            <a href="#">DILG</a>
            <a href="#">BOLDWALLY</a>
            <a href="#">KANTOSIOMAI</a>
            <a href="#">SAMELCO I</a>
            <a href="#">SOUTHSTAR</a>
            <a href="#">REBELITOS</a>
            <a href="#">TAXIKOL</a>
            <a href="#">DLTB.</a>
            <a href="#">PETRON</a>
            <a href="#">GAISANO</a>
            <a href="#">SIR RODOLFO "MR DATABAE HIMSELF"</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default BatMan;