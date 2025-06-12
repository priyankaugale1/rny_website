import React from "react";
import "../styles/Footer.css"; 
import marquee from "../assets/marquee.svg"; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="tags">
          <img src={marquee} alt="Flow Icon" className="icon" />
        </div>

        <div className="contact">
          <h2>LET’S TALK!</h2>
          <a
            href="mailto=rehanurraihan@gmail.com"
            className="email"
            target="_blank"
            rel="noopener noreferrer"
          >
            rehanurraihan@gmail.com ↗
          </a>
        </div>

        <div className="footer-bottom">
          <p>© Rehan Raihan – 2023</p>
          <div className="links">
            <a href="#">Dribbble</a>
            <a href="#">Behance</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
