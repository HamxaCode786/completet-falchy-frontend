import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Falchylogo from "../../src/assets/logo/Falchy-Text-Notext-SameWidth-Logo2.svg";
import { Dropdown } from "react-bootstrap";
import { TranslationContext } from "../contextapi/translationContext";
import { useContext } from "react";
import Flag from "react-world-flags";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedFlag, setSelectedFlag] = useState("US");
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
        <Link to="/">
          <img
            className="main_logo"
            src={Falchylogo}
            alt="Main Logo"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="custom_language_changer">
        {/* Hamburger Icon */}
        <Dropdown className="language-dropdown custom_hide_for_laptop ">
          <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            <Flag
              code={selectedFlag}
              style={{ width: 20, height: 15, marginRight: 10 }}
            />
            {selectedLanguage === "en"
              ? "En"
              : selectedLanguage === "it"
              ? "It"
              : selectedLanguage === "du"
              ? "Du"
              : "Fr"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLanguageChange("en", "US")}>
              <Flag
                code="US"
                style={{ width: 20, height: 15, marginRight: 10 }}
              />
              En
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange("it", "IT")}>
              <Flag
                code="IT"
                style={{ width: 20, height: 15, marginRight: 10 }}
              />
              It
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange("du", "NL")}>
              <Flag
                code="NL"
                style={{ width: 20, height: 15, marginRight: 10 }}
              />
              Du
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange("fr", "FR")}>
              <Flag
                code="FR"
                style={{ width: 20, height: 15, marginRight: 10 }}
              />
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
              <i
                className="fas fa-times"
                style={{ fontSize: "36px", cursor: "pointer" }}
              ></i>
            </div>
          )}

          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link
                to="/home"
                style={isActivePath("/home") ? { color: "#0dc270" } : {}}
              >
                <strong>Home</strong>
              </Link>
            </p>
          </li>
          {/* <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link to="/aboutus" style={isActivePath('/services') ? {color: '#0dc270'} : {}}><strong>About</strong></Link>
            </p>
          </li> */}
          {/* <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link
                to="/rental"
                style={isActivePath("/services") ? { color: "#0dc270" } : {}}
              >
                <strong>Rent Luxury</strong>
              </Link>
            </p>
          </li> */}
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link
                to="/"
                style={isActivePath("/services") ? { color: "#0dc270" } : {}}
              >
                <strong>Transfer Service</strong>
              </Link>
            </p>
          </li>
          {/* <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link
                to="/luggagetransferform"
                style={isActivePath("/services") ? { color: "#0dc270" } : {}}
              >
                <strong>Luggage Transfer & Deposit</strong>
              </Link>
            </p>
          </li> */}
          {/* <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link
                to="/conciergeevents"
                style={isActivePath("/services") ? { color: "#0dc270" } : {}}
              >
                <strong>Concierge Services</strong>
              </Link>
            </p>
          </li> */}
          
          {/* <li className="list_second_styling testimonials_custom" onClick={closeMenu}>
            <p>
              <Link to="/careers" style={isActivePath('/careers') ? {color: '#0dc270'} : {}}><strong>Testimonials</strong></Link>
            </p>
          </li> */}

          <li
            className="list_second_styling custom_header_1"
            onClick={closeMenu}
          >
            <p>
              <Link
                to="/privacypolicy"
                style={isActivePath("/") ? { color: "#0dc270" } : {}}
              >
                <strong>Privacy Policy</strong>
              </Link>
            </p>
          </li>


          <li
            className="list_second_styling custom_header_1"
            onClick={closeMenu}
          >
            <p>
              <Link
                to="/cookiepolicy"
                style={isActivePath("/") ? { color: "#0dc270" } : {}}
              >
                <strong>Cookie Policy</strong>
              </Link>
            </p>
          </li>


          <li
            className="list_second_styling custom_header_1"
            onClick={closeMenu}
          >
            <p>
              <Link
                to="/termsandconditions"
                style={isActivePath("/") ? { color: "#0dc270" } : {}}
              >
                <strong>Terms & Conditions</strong>
              </Link>
            </p>
          </li>




          <li
            className="list_second_styling custom_header_1"
            onClick={closeMenu}
          >
            <p>
              <Link
                to="/contactus"
                style={isActivePath("/") ? { color: "#0dc270" } : {}}
              >
                <strong>Contact Us</strong>
              </Link>
            </p>
          </li>





          {/* <Dropdown className="dropdown_header">
  <Dropdown.Toggle className="dropdown_header">
    Policies
  </Dropdown.Toggle>

  <Dropdown.Menu className="custom-dropdown-menu1">
    <div className="dropdown-item-wrapper">
      <Dropdown.Item href="/rentluxury">
        <i className="fas fa-user-shield" style={{ marginRight: '8px', color: '#05021F' }}></i>
        Privacy Policy
      </Dropdown.Item>
    </div>
    <div className="dropdown-item-wrapper">
      <Dropdown.Item href="/transferservice">
        <i className="fas fa-cookie-bite" style={{ marginRight: '8px', color: '#05021F' }}></i>
        Cookie Policy
      </Dropdown.Item>
    </div>
    <div className="dropdown-item-wrapper">
      <Dropdown.Item href="/luggagetransferform">
        <i className="fas fa-clipboard-list" style={{ marginRight: '8px', color: '#05021F' }}></i>
        Terms & Conditions
      </Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown> */}












          <li className="list_second_styling" onClick={closeMenu}>
            <Dropdown className="language-dropdown custom_responsiveness">
              <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                <Flag
                  code={selectedFlag}
                  style={{ width: 20, height: 15, marginRight: 10 }}
                />
                {selectedLanguage === "en"
                  ? "En"
                  : selectedLanguage === "it"
                  ? "It"
                  : selectedLanguage === "du"
                  ? "Du"
                  : "Fr"}
              </Dropdown.Toggle>

              <Dropdown.Menu className="mobile_menu_dropdown">
                <Dropdown.Item onClick={() => handleLanguageChange("en", "US")}>
                  <Flag
                    code="US"
                    style={{ width: 20, height: 15, marginRight: 10 }}
                  />
                  EN
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("it", "IT")}>
                  <Flag
                    code="IT"
                    style={{ width: 20, height: 15, marginRight: 10 }}
                  />
                  IT
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("du", "NL")}>
                  <Flag
                    code="NL"
                    style={{ width: 20, height: 15, marginRight: 10 }}
                  />
                  DU
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("fr", "FR")}>
                  <Flag
                    code="FR"
                    style={{ width: 20, height: 15, marginRight: 10 }}
                  />
                  FR
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
