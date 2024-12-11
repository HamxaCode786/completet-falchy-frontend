import React from "react";
import Footerimage from "../../src/assets/images/layout/footer_image.jpg";
import Footerlogo from '../../src/assets/logo/FalchyLogo.svg'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_main_container">
    <div className="footer_main_div">
      {/* <div
        className="image_div"
        style={{
          background: `linear-gradient(rgba(39, 47, 59, 0.7), rgba(39, 47, 59, 0.7)), url(${Footerimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="footer_heading">
          Lets Get You Moving <span className="span_1">-</span>{" "}
          <span>Contact Us</span>
        </h1>
      </div> */}
      <div className="footer_main_data">
        <div className="footer_div1">
          <img className="footer_logo1" src={Footerlogo} alt="footer_image" />
          <p>
          Experience unparalleled luxury with our Elegant services, designed for comfort and elegance.
          </p>
          <button>Contact Us</button>
          <div className="icons_div1">
            <ul
              className="footer_social_icons"
              style={{
                listStyle: "none",
                display: "flex",
                gap: "7%",
                padding: 0,
              }}
            >
              <li>
                <i
                  className="fab fa-facebook"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                ></i>
              </li>
              <li>
                <i
                  className="fab fa-instagram"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                ></i>
              </li>
              <li>
                <i
                  className="fab fa-twitter"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                ></i>
              </li>
              <li>
                <i
                  className="fab fa-linkedin"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                ></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_div2">
        <div className="navigation_div">
          <h1>Navigation</h1>
          <Link to="/"><h4>Home</h4></Link>
          <Link to="/aboutus"><h4>About Us</h4></Link>
          <Link to="/conciergeevents"><h4>Services</h4></Link>
          <Link to="/testimonials"><h4>Testimonials</h4></Link>
          
        </div>
        <div className="contact_us_div" style={{ alignItems: "flex-start" }}>
          <h1 style={{ color: "#05021F", fontSize: "24px", fontWeight: "600" }}>Contact Us</h1>
          <div style={{ display: "flex", alignItems: "baseline", gap: "15px" }}>
            <i className="fas fa-map-marker-alt" style={{ fontSize: "20px", color: "#05021F" }}></i>
            <p>123 Business Street, City, Country</p>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "15px" }}>
            <i className="fas fa-envelope" style={{ fontSize: "20px", color: "#05021F" }}></i>
            <p>info@company.com</p>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "15px" }}>
            <i className="fas fa-phone" style={{ fontSize: "20px", color: "#05021F" }}></i>
            <p>+1 234 567 8900</p>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "15px" }}>
            <i className="far fa-clock" style={{ fontSize: "20px", color: "#05021F" }}></i>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
    <div className="footer_copyright">
<h3>Copyright © 2024 FALCHY - All Rights Reserved.</h3>
</div>
    </div>
  );
};

export default Footer;
