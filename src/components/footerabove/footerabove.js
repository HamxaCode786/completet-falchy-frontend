import React from "react";
import Footerimage from "../../assets/images/layout/footer_image.jpg";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Footerabove = () => {
  const { language } = useContext(TranslationContext);

  return (
    <div>
      <div
        className="image_div"
        style={{
          background: `linear-gradient(rgba(39, 47, 59, 0.7), rgba(39, 47, 59, 0.7)), url(${Footerimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="footer_heading">
          {language === "en" ? (
            <>
              Lets Get You Moving <span className="span_1">-</span>{" "}
              <span>
                <Link to="/contactus" className="hehehehe">
                  Contact Us
                </Link>
              </span>
            </>
          ) : language === "it" ? (
            <>
              Facciamo partire il tuo viaggio <span className="span_1">-</span>{" "}
              <span>
                <Link to="/contactus" className="hehehehe">
                  Contattaci
                </Link>
              </span>
            </>
          ) : language === "du" ? (
            <>
              Laten we je in beweging krijgen <span className="span_1">-</span>{" "}
              <span>
                <Link to="/contactus" className="hehehehe">
                  Neem contact met ons op
                </Link>
              </span>
            </>
          ) : language === "fr" ? (
            <>
              Commençons votre voyage <span className="span_1">-</span>{" "}
              <span>
                <Link to="/contactus" className="hehehehe">
                  Contactez-nous
                </Link>
              </span>
            </>
          ) : (
            <>
              Lets Get You Moving <span className="span_1">-</span>{" "}
              <span>Contact Us</span>
            </>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Footerabove;
