import React from "react";
import image1 from "../../assets/images/homepageimage/luxury2.jpg";
import image2 from "../../assets/images/homepageimage/transfer2.jpg";
import image3 from "../../assets/images/homepageimage/luggage2.jpg";
import image4 from "../../assets/images/homepageimage/concerge2.jpg";
import { useNavigate } from "react-router-dom";
import { TranslationContext } from '../../contextapi/translationContext';
import { useContext } from "react";


const Tailored = () => {
  const navigate = useNavigate();
  const { language } = useContext(TranslationContext);


  return (
    <div className="custom_tailored_heading">
      <h3>
  {language === 'en' ? (
    'Tailored Solution For Every Need'
  ) : language === 'it' ? (
    'Soluzione su misura per ogni esigenza'
  ) : language === 'du' ? (
    'Op maat gemaakte oplossing voor elke behoefte'
  ) : language === 'fr' ? (
    'Solution sur mesure pour chaque besoin'
  ) : (
    'Tailored Solution For Every Need'
  )}
</h3>

    <div className="tailored_container">
      
      <div className="first_row">
        <div
          className="image_hover_done"
          onClick={() => navigate('/rentluxury')}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px",
            borderRadius: "15px",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(rgba(5, 2, 31, 0.8), rgba(5, 2, 31, 0.8)), url(${image1})`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`;
          }}
        >
          <h2 style={{ margin: 0, color: "white", fontSize: "36px" }}>
          {
  language === 'en' ? (
    'Rent Luxury'
  ) : language === 'it' ? (
    'Noleggia lusso'
  ) : language === 'du' ? (
    'Huur luxe'
  ) : language === 'fr' ? (
    'Louer du luxe'
  ) : (
    'Rent Luxury'
  )
}

          </h2>
          <button
            className="image_button_div"
            style={{
              alignSelf: "flex-start",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {
  language === 'en' ? (
    'View More'
  ) : language === 'it' ? (
    'Vedi di più'
  ) : language === 'du' ? (
    'Bekijk meer'
  ) : language === 'fr' ? (
    'Voir plus'
  ) : (
    'View More'
  )
}
{" "}
            <i className="fas fa-arrow-right" style={{ width: "40px" }}></i>
          </button>
        </div>
        <div
          className="image_hover_done"
          onClick={() => navigate('/transferservice')}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px",
            borderRadius: "15px",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(rgba(5, 2, 31, 0.8), rgba(5, 2, 31, 0.8)), url(${image2})`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image2})`;
          }}
        >
          <h2 style={{ margin: 0, color: "white", fontSize: "36px" }}>
          {
  language === 'en' ? (
    'Transfers'
  ) : language === 'it' ? (
    'Trasferimenti'
  ) : language === 'du' ? (
    'Transfers'
  ) : language === 'fr' ? (
    'Transferts'
  ) : (
    'Transfers'
  )
}

          </h2>
          <button
            className="image_button_div"
            style={{
              alignSelf: "flex-start",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {
  language === 'en' ? (
    'View More'
  ) : language === 'it' ? (
    'Vedi di più'
  ) : language === 'du' ? (
    'Bekijk meer'
  ) : language === 'fr' ? (
    'Voir plus'
  ) : (
    'View More'
  )
}
{" "}
            <i className="fas fa-arrow-right" style={{ width: "40px" }}></i>
          </button>
        </div>
      </div>
      <div className="second_row">
        <div
          className="image_hover_done"
          onClick={() => navigate('/luggagetransferform')}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px",
            borderRadius: "15px",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(rgba(5, 2, 31, 0.8), rgba(5, 2, 31, 0.8)), url(${image3})`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image3})`;
          }}
        >
          <h2 style={{ margin: 0, color: "white", fontSize: "36px" }}>
          {
  language === 'en' ? (
    'Luggage Transfers & Deposit'
  ) : language === 'it' ? (
    'Trasferimenti di bagagli e deposito'
  ) : language === 'du' ? (
    'Bagagevervoer & Borg'
  ) : language === 'fr' ? (
    'Transferts de bagages et dépôt'
  ) : (
    'Luggage Transfers & Deposit'
  )
}

          </h2>
          <button
            className="image_button_div"
            style={{
              alignSelf: "flex-start",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {
  language === 'en' ? (
    'View More'
  ) : language === 'it' ? (
    'Vedi di più'
  ) : language === 'du' ? (
    'Bekijk meer'
  ) : language === 'fr' ? (
    'Voir plus'
  ) : (
    'View More'
  )
}
{" "}
            <i className="fas fa-arrow-right" style={{ width: "40px" }}></i>
          </button>
        </div>
        <div
          className="image_hover_done"
          onClick={() => navigate('/conciergeevents')}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px",
            borderRadius: "15px",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(rgba(5, 2, 31, 0.8), rgba(5, 2, 31, 0.8)), url(${image4})`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image4})`;
          }}
        >
          <h2 style={{ margin: 0, color: "white", fontSize: "36px" }}>
          {
  language === 'en' ? (
    'Concierge'
  ) : language === 'it' ? (
    'Concierge'  // The same word in Italian
  ) : language === 'du' ? (
    'Concierge'  // The same word in Dutch
  ) : language === 'fr' ? (
    'Concierge'  // The same word in French
  ) : (
    'Concierge'
  )
}

          </h2>
          <button
            className="image_button_div"
            style={{
              alignSelf: "flex-start",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {
  language === 'en' ? (
    'View More'
  ) : language === 'it' ? (
    'Vedi di più'
  ) : language === 'du' ? (
    'Bekijk meer'
  ) : language === 'fr' ? (
    'Voir plus'
  ) : (
    'View More'
  )
}
{" "}
            <i className="fas fa-arrow-right" style={{ width: "40px" }}></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tailored;
