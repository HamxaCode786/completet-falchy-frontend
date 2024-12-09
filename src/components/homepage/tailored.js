import React from "react";
import image1 from "../../assets/images/homepageimage/luxury2.jpg";
import image2 from "../../assets/images/homepageimage/transfer2.jpg";
import image3 from "../../assets/images/homepageimage/luggage2.jpg";
import image4 from "../../assets/images/homepageimage/concerge2.jpg";
import { useNavigate } from "react-router-dom";

const Tailored = () => {
  const navigate = useNavigate();

  return (
    <div className="custom_tailored_heading">
      <h3>Tailored Solution For Every Need</h3>
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
            Rent Luxury
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
            Transfer{" "}
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
            Transfers
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
            View more{" "}
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
            Luggage Transfers & Deposit
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
            View more{" "}
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
            Concierge
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
            View more{" "}
            <i className="fas fa-arrow-right" style={{ width: "40px" }}></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tailored;
