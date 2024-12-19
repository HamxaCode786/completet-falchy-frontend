import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Falchylogo from '../../src/assets/logo/FalchyLogo.svg'
import { Dropdown } from "react-bootstrap";
import { TranslationContext } from '../contextapi/translationContext';
import { useContext } from "react";
import Flag from 'react-world-flags';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedFlag, setSelectedFlag] = useState('US');
  const { changeLanguage } = useContext(TranslationContext);
  const { language } = useContext(TranslationContext);



  const handleLanguageChange = (langCode, flagCode) => {
    setSelectedLanguage(langCode);
    setSelectedFlag(flagCode);
    changeLanguage(langCode); // Calls changeLanguage from context
    // Calls changeLanguage1, your custom function
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="header_div">
      <div className="logo_div">
        <Link to="/"><img className="main_logo" src={Falchylogo} alt="Main Logo" /></Link>
      </div>
      <div className="custom_language_changer">
        {/* Hamburger Icon */}
        <Dropdown className="language-dropdown custom_hide_for_laptop ">
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        <Flag code={selectedFlag} style={{ width: 20, height: 15, marginRight: 10 }} />
        {selectedLanguage === 'en' ? 'En' : 
         selectedLanguage === 'it' ? 'It' : 
         selectedLanguage === 'du' ? 'Du' : 'Fr'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleLanguageChange('en', 'US')}>
          <Flag code="US" style={{ width: 20, height: 15, marginRight: 10 }} />
          En
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('it', 'IT')}>
          <Flag code="IT" style={{ width: 20, height: 15, marginRight: 10 }} />
          It
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('du', 'NL')}>
          <Flag code="NL" style={{ width: 20, height: 15, marginRight: 10 }} />
          Du
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('fr', 'FR')}>
          <Flag code="FR" style={{ width: 20, height: 15, marginRight: 10 }} />
          Fr
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
          <Dropdown className="language-dropdown custom_responsiveness">
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        <Flag code={selectedFlag} style={{ width: 20, height: 15, marginRight: 10 }} />
        {selectedLanguage === 'en' ? 'En' : 
         selectedLanguage === 'it' ? 'It' : 
         selectedLanguage === 'du' ? 'Du' : 'Fr'}
      </Dropdown.Toggle>

      <Dropdown.Menu className="mobile_menu_dropdown">
        <Dropdown.Item onClick={() => handleLanguageChange('en', 'US')}>
          <Flag code="US" style={{ width: 20, height: 15, marginRight: 10 }} />
          En
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('it', 'IT')}>
          <Flag code="IT" style={{ width: 20, height: 15, marginRight: 10 }} />
          It
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('du', 'NL')}>
          <Flag code="NL" style={{ width: 20, height: 15, marginRight: 10 }} />
          Du
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('fr', 'FR')}>
          <Flag code="FR" style={{ width: 20, height: 15, marginRight: 10 }} />
          Fr
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </li>
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/" style={isActivePath('/') ? {color: '#0dc270'} : {}}><strong>{language === 'en' ? 'Home' : language === 'it' ? 'Casa' : language === 'du' ? 'Huis' : language === 'fr' ? 'Accueil' : 'Home'}
              </strong></Link>
            </p>
          </li>
          {/* <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/aboutus" style={isActivePath('/services') ? {color: '#0dc270'} : {}}><strong>About</strong></Link>
            </p>
          </li> */}
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/rentluxury" style={isActivePath('/services') ? {color: '#0dc270'} : {}}><strong>{language === 'en' ? 'Rent Luxury' : language === 'it' ? 'Noleggia Lusso' : language === 'du' ? 'Huur Luxe' : language === 'fr' ? 'Louer du luxe' : 'Rent Luxury'}
              </strong></Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/transferservice" style={isActivePath('/services') ? {color: '#0dc270'} : {}}><strong>{language === 'en' ? 'Transfer Service' : language === 'it' ? 'Servizio di Trasferimento' : language === 'du' ? 'Transfer Service' : language === 'fr' ? 'Service de Transfert' : 'Transfer Service'}
              </strong></Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/luggagetransferform" style={isActivePath('/services') ? {color: '#0dc270'} : {}}><strong>{language === 'en' ? 'Luggage Transfer & Deposit' : language === 'it' ? 'Trasferimento e Deposito Bagagli' : language === 'du' ? 'Bagageoverdracht & Storting' : language === 'fr' ? 'Transfert et Dépôt des Bagages' : 'Luggage Transfer & Deposit'}
              </strong></Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/conciergeevents" style={isActivePath('/services') ? {color: '#0dc270'} : {}}><strong>{language === 'en' ? 'Concierge Services' : language === 'it' ? 'Servizi di Concierge' : language === 'du' ? 'Concierge Services' : language === 'fr' ? 'Services de Conciergerie' : 'Concierge Services'}
              </strong></Link>
            </p>
          </li>
          {/* <Dropdown className="dropdown_header" >
            <Dropdown.Toggle className="dropdown_header">
              Services
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu1">
  <div className="dropdown-item-wrapper">
    <Dropdown.Item href="/rentluxury">
      <i className="fas fa-car" style={{ marginRight: '8px', color: '#05021F' }}></i>
      Rent Luxury
    </Dropdown.Item>
  </div>
  <div className="dropdown-item-wrapper">
    <Dropdown.Item href="/transferservice">
      <i className="fas fa-shuttle-van" style={{ marginRight: '8px', color: '#05021F' }}></i>
      Transfer Service
    </Dropdown.Item>
  </div>
  <div className="dropdown-item-wrapper">
    <Dropdown.Item href="/luggagetransferform">
      <i className="fas fa-suitcase" style={{ marginRight: '8px', color: '#05021F' }}></i>
      Luggage Transfer & Deposit
    </Dropdown.Item>
  </div>
  <div className="dropdown-item-wrapper">
    <Dropdown.Item href="/conciergeevents">
      <i className="fas fa-calendar-check" style={{ marginRight: '8px', color: '#05021F' }}></i>
      Concierge Bookings
    </Dropdown.Item>
  </div>
</Dropdown.Menu>


          </Dropdown> */}
          {/* <li className="list_second_styling testimonials_custom" onClick={closeMenu}>
            <p>
              <Link to="/careers" style={isActivePath('/careers') ? {color: '#0dc270'} : {}}><strong>Testimonials</strong></Link>
            </p>
          </li> */}
          
          <li className="list_second_styling custom_header_1" onClick={closeMenu}>
            <p>
              <Link to="/aboutus" style={isActivePath('/') ? {color: '#0dc270'} : {}}><strong>{language === 'en' ? 'Contact Us' : language === 'it' ? 'Contattaci' : language === 'du' ? 'Contacteer Ons' : language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
              </strong></Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
