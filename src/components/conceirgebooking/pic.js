import React from "react";
import { useLocation } from "react-router-dom";

const Pic = () => {
  const location = useLocation();
  const cardData = location.state;
  return (
    <div className="conceirge_pic1_container">
      <div className="conceirge_pic1">
        <img className="conceirge_pic1_img1" src={cardData.image} alt="conceirgepic" />
      </div>

      <div className="conceirge_pic1_text_div">
        <h2>{cardData.title}</h2>
          <h4>
            {cardData.description}
          </h4>
      </div>
    </div>
  );
};

export default Pic;
