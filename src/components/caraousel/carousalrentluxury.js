import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../../assets/images/caraoselImage/caraouselrentluxury/Group 83-min.png";
import secondImage from "../../assets/images/caraoselImage/caraouselrentluxury/New folder/49e4e48c-6465-4cd3-add1-0afe113761c7 1-min.png";
import thirdImage from "../../assets/images/caraoselImage/caraouselrentluxury/New folder/daniel-lincoln-67HlhGhtl2k-unsplash 1-min.png";
import fourthImage from "../../assets/images/caraoselImage/caraouselrentluxury/New folder/Audi Interior 1-min.png";
import fifthImage from "../../assets/images/caraoselImage/caraouselrentluxury/gabbiistudios-4WNkZhqmGy0-unsplash-min.png";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const Carousalrentluxury = () => {
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
                ? "Rent Luxury"
                : language === "it"
                ? "Noleggia Lusso"
                : language === "du"
                ? "Huur Luxe"
                : language === "fr"
                ? "Louer du Luxe"
                : "Rent Luxury"}
            </h3>

            <p className="carousel_custom_text2">
              {language === "en"
                ? "Why dream it? You Can Drive It."
                : language === "it"
                ? "Perché sognarlo? Puoi guidarlo."
                : language === "du"
                ? "Waarom het dromen? Je kunt het rijden."
                : language === "fr"
                ? "Pourquoi en rêver? Vous pouvez le conduire."
                : "Why dream it? You Can Drive It."}
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

export default Carousalrentluxury;
