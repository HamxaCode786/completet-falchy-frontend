import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Falchylogo from '../../src/assets/logo/FalchyLogo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="header_div">
      <div className="logo_div">
        <img className="main_logo" src={Falchylogo} alt="Main Logo" />
      </div>
      <div>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        {/* Navigation Menu */}
        <ul className={`list_right_side ${isMenuOpen ? "active" : ""}`}>
          {isMenuOpen && (
            <div className="close-menu" onClick={closeMenu}>
              <i className="fas fa-times" style={{ fontSize: '36px', cursor: 'pointer' }}></i>
            </div>
          )}
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/" style={isActivePath('/') ? {color: '#0dc270'} : {}}><strong>Home</strong></Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/services" style={isActivePath('/services') ? {color: '#0dc270'} : {}}><strong>About</strong></Link>
            </p>
          </li>
          
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/conciergeevents" style={isActivePath('/company') ? {color: '#0dc270'} : {}}><strong>Services</strong></Link>
            </p>
          </li>
          <li className="list_second_styling testimonials_custom" onClick={closeMenu}>
            <p>
              <Link to="/careers" style={isActivePath('/careers') ? {color: '#0dc270'} : {}}><strong>Testimonials</strong></Link>
            </p>
          </li>
          
          <li className="list_second_styling custom_header_1" onClick={closeMenu}>
            <p>
              <Link to="/contact-us" style={isActivePath('/contact-us') ? {color: '#0dc270'} : {}}><strong>Contact Us</strong></Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
