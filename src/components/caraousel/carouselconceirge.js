import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../../assets/images/caraoselImage/CONCEIRGECARAOUSEL/ConciergeBannerImage (1)-min.png";
import secondImage from "../../assets/images/caraoselImage/CONCEIRGECARAOUSEL/na.png";
import thirdImage from "../../assets/images/caraoselImage/CONCEIRGECARAOUSEL/nb.png";
import fourthImage from "../../assets/images/caraoselImage/CONCEIRGECARAOUSEL/nc.png";
import fifthImage from "../../assets/images/caraoselImage/CONCEIRGECARAOUSEL/Adventures-min.png";

import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const Carouselconceirge = () => {
  const { language } = useContext(TranslationContext);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={firstImage}
            alt="First slide"
            loading="lazy"
          />
          <Carousel.Caption>
            <h3 className="carousel_custom_text1">
              {language === "en"
                ? "Concierge Services"
                : language === "it"
                ? "Servizi di concierge"
                : language === "du"
                ? "Conciërge diensten"
                : language === "fr"
                ? "Services de conciergerie"
                : "Concierge Services"}
            </h3>

            <p className="carousel_custom_text2">
              {language === "en"
                ? "Adventure's Out There"
                : language === "it"
                ? "L'avventura è là fuori"
                : language === "du"
                ? "Avontuur is daarbuiten"
                : language === "fr"
                ? "L'aventure est là-bas"
                : "Adventure's Out There"}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={secondImage}
            alt="Second slide"
            loading="lazy"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={thirdImage}
            alt="Third slide"
            loading="lazy"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={fourthImage}
            alt="Third slide"
            loading="lazy"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={fifthImage}
            alt="Third slide"
            loading="lazy"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouselconceirge;
