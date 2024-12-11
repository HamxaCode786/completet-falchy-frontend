import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Pic = () => {
  const location = useLocation();
  const cardData = location.state;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex (selectedIndex);
  };
  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {cardData.image.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="caraousel_image_size" src={image} alt={`conceirgepic${index}`} />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>


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
