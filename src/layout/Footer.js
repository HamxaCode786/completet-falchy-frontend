import React from "react";
import Footerimage from "../../src/assets/images/layout/footer_image.jpg";
import Footerlogo from "../../src/assets/logo/FalchyLogo.svg";
import { Link } from "react-router-dom";
import { TranslationContext } from "../contextapi/translationContext";
import { useContext } from "react";

const Footer = () => {
  const { language } = useContext(TranslationContext);

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
              {language === "en"
                ? "Experience unparalleled luxury with our Elegant services, designed for comfort and elegance."
                : language === "it"
                ? "Vivi un lusso senza pari con i nostri servizi eleganti, progettati per il comfort e l'eleganza."
                : language === "du"
                ? "Ervaar ongeëvenaard luxe met onze elegante diensten, ontworpen voor comfort en elegantie."
                : language === "fr"
                ? "Vivez un luxe inégalé avec nos services élégants, conçus pour le confort et l'élégance."
                : "Experience unparalleled luxury with our Elegant services, designed for comfort and elegance."}
            </p>

            <button>
              {language === "en"
                ? "Contact Us"
                : language === "it"
                ? "Contattaci"
                : language === "du"
                ? "Neem contact met ons op"
                : language === "fr"
                ? "Contactez-nous"
                : "Contact Us"}
            </button>
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
              <h1>
                {language === "en"
                  ? "Navigation"
                  : language === "it"
                  ? "Navigazione"
                  : language === "du"
                  ? "Navigatie"
                  : language === "fr"
                  ? "Navigation"
                  : "Navigation"}
              </h1>
              <Link to="/">
                <h4>
                  {language === "en"
                    ? "Home"
                    : language === "it"
                    ? "Casa"
                    : language === "du"
                    ? "Huis"
                    : language === "fr"
                    ? "Accueil"
                    : "Home"}
                </h4>
              </Link>
              <Link to="/rentluxury">
                <h4>
                  {language === "en"
                    ? "Rent Luxury"
                    : language === "it"
                    ? "Noleggia Lusso"
                    : language === "du"
                    ? "Huur Luxe"
                    : language === "fr"
                    ? "Louer du luxe"
                    : "Rent Luxury"}
                </h4>
              </Link>
              <Link to="/transferservice">
                <h4>
                  {language === "en"
                    ? "Transfer Service"
                    : language === "it"
                    ? "Servizio di Trasferimento"
                    : language === "du"
                    ? "Transfer Service"
                    : language === "fr"
                    ? "Service de Transfert"
                    : "Transfer Service"}
                </h4>
              </Link>
              <Link to="/luggagetransferform">
                <h4>
                  {language === "en"
                    ? "Luggage Transfer & Deposit"
                    : language === "it"
                    ? "Trasferimento e Deposito Bagagli"
                    : language === "du"
                    ? "Bagageoverdracht & Storting"
                    : language === "fr"
                    ? "Transfert et Dépôt des Bagages"
                    : "Luggage Transfer & Deposit"}
                </h4>
              </Link>

              <Link to="/conciergeevents">
                <h4>
                  {language === "en"
                    ? "Concierge Services"
                    : language === "it"
                    ? "Servizi di Concierge"
                    : language === "du"
                    ? "Concierge Services"
                    : language === "fr"
                    ? "Services de Conciergerie"
                    : "Concierge Services"}
                </h4>
              </Link>
            </div>
            <div
              className="contact_us_div"
              style={{ alignItems: "flex-start" }}
            >
              <h1
                style={{
                  color: "#05021F",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                {language === "en"
                  ? "Contact Us"
                  : language === "it"
                  ? "Contattaci"
                  : language === "du"
                  ? "Neem contact met ons op"
                  : language === "fr"
                  ? "Contactez-nous"
                  : "Contact Us"}
              </h1>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "15px" }}
              >
                <i
                  className="fas fa-map-marker-alt"
                  style={{ fontSize: "20px", color: "#05021F" }}
                ></i>
                <p>
                  {language === "en"
                    ? "123 Business Street, City, Country"
                    : language === "it"
                    ? "Via Azienda 123, Città, Paese"
                    : language === "du"
                    ? "Bedrijfstraat 123, Stad, Land"
                    : language === "fr"
                    ? "123 Rue des Affaires, Ville, Pays"
                    : "123 Business Street, City, Country"}
                </p>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "15px" }}
              >
                <i
                  className="fas fa-envelope"
                  style={{ fontSize: "20px", color: "#05021F" }}
                ></i>
                <p>
                  {language === "en"
                    ? "info@company.com"
                    : language === "it"
                    ? "info@azienda.com"
                    : language === "du"
                    ? "info@bedrijf.com"
                    : language === "fr"
                    ? "info@entreprise.com"
                    : "info@company.com"}
                </p>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "15px" }}
              >
                <i
                  className="fas fa-phone"
                  style={{ fontSize: "20px", color: "#05021F" }}
                ></i>
                <p>
                  {language === "en"
                    ? "+1 234 567 8900"
                    : language === "it"
                    ? "+39 234 567 8900"
                    : language === "du"
                    ? "+31 234 567 8900"
                    : language === "fr"
                    ? "+33 234 567 8900"
                    : "+1 234 567 8900"}
                </p>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "15px" }}
              >
                <i
                  className="far fa-clock"
                  style={{ fontSize: "20px", color: "#05021F" }}
                ></i>
                <p>
                  {language === "en"
                    ? "Mon - Fri: 9:00 AM - 6:00 PM"
                    : language === "it"
                    ? "Lun - Ven: 9:00 AM - 6:00 PM"
                    : language === "du"
                    ? "Ma - Vr: 9:00 AM - 18:00"
                    : language === "fr"
                    ? "Lun - Ven: 9h00 - 18h00"
                    : "Mon - Fri: 9:00 AM - 6:00 PM"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        {language === "en" ? (
          <h3>Copyright © 2024 FALCHY - All Rights Reserved.</h3>
        ) : language === "it" ? (
          <h3>Copyright © 2024 FALCHY - Tutti i diritti riservati.</h3>
        ) : language === "du" ? (
          <h3>Copyright © 2024 FALCHY - Alle rechten voorbehouden.</h3>
        ) : language === "fr" ? (
          <h3>Copyright © 2024 FALCHY - Tous droits réservés.</h3>
        ) : (
          <h3>Copyright © 2024 FALCHY - All Rights Reserved.</h3>
        )}
      </div>
    </div>
  );
};

export default Footer;
