import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../../assets/images/caraoselImage/carouseltransfer/chauffered/ChaufferBanner/Transfer_Service-Banner (7)-min.png";
import secondImage from "../../assets/images/caraoselImage/carouseltransfer/chauffered/ChaufferBanner/2.png";
import thirdImage from "../../assets/images/caraoselImage/carouseltransfer/chauffered/ChaufferBanner/3.png";
import fourthImage from "../../assets/images/caraoselImage/carouseltransfer/chauffered/ChaufferBanner/4.png";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const CarouselComponent = () => {
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
            <Carousel.Caption>
              <h3 className="carousel_custom_text1">
                {language === "en"
                  ? "Transfer Service"
                  : language === "it"
                  ? "Servizio di Trasferimento"
                  : language === "du"
                  ? "Transfer Service" // Dutch translation (same as English)
                  : language === "fr"
                  ? "Service de Transfert"
                  : "Transfer Service"}
              </h3>

              <p className="carousel_custom_text2">
                {language === "en"
                  ? "You sit back. I'll drive it."
                  : language === "it"
                  ? "Rilassati. Guiderò io."
                  : language === "du"
                  ? "Jij leunt achterover. Ik rijd het."
                  : language === "fr"
                  ? "Détendez-vous. Je conduirai."
                  : "You sit back. I'll drive it."}
              </p>
            </Carousel.Caption>
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
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
