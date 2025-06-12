
import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="navbar__logo-img" />
      </div>

      {/* Menu Icon for Mobile */}
      <div
        className="navbar__menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
 
      {menuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Nav Links */}
      <nav className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <div
            key={item}
            className={`navbar__link ${active === item ? 'active' : ''}`}
            onClick={() => {
              setActive(item);
              setMenuOpen(false);
            }}
          >
            {item}
          </div>
        ))}
        {/* Hire me inside mobile menu */}
        <button className="navbar__hire mobile-only">HIRE ME</button>
      </nav>

      {/* Hire me desktop */}
      <button className="navbar__hire desktop-only">HIRE ME</button>
    </header>
  );
};

export default Navbar;
