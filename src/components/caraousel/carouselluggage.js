import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstImage from '../../assets/images/caraoselImage/LUGGAGETRANSFER/LuggageTransferBanner/Luggage-Transfer-Deposit (2)-min.png';
import secondImage from '../../assets/images/caraoselImage/LUGGAGETRANSFER/LuggageTransferBanner/american-green-travel--ZYrzZocV4Q-unsplash 1-min.png';
import thirdImage from '../../assets/images/caraoselImage/LUGGAGETRANSFER/LuggageTransferBanner/eminent-luggage-pKLucq2nZYc-unsplash 1-min.png';
import fourthImage from '../../assets/images/caraoselImage/LUGGAGETRANSFER/LuggageTransferBanner/v2-5rnu7-i0u79 1-min.png';
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";



const Carouselluggage = () => {
  const { language } = useContext(TranslationContext);
  
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={firstImage}
            alt="First slide"
          />
          <Carousel.Caption>
  <h3 className="carousel_custom_text1">
    {language === "en" ? "Luggage Transfer & Deposit" :
     language === "it" ? "Trasporto e Deposito Bagagli" :
     language === "du" ? "Bagagevervoer & Deposito" :
     language === "fr" ? "Transfert et Dépôt de Bagages" :
     "Luggage Transfer & Deposit"}
  </h3>
  
  <p className="carousel_custom_text2">
    {language === "en" ? "We'll Carry Your Weight, While You Carry The Moment" :
     language === "it" ? "Porteremo il tuo peso, mentre tu porterai il momento" :
     language === "du" ? "Wij dragen jouw gewicht, terwijl jij het moment draagt" :
     language === "fr" ? "Nous porterons votre poids, pendant que vous portez l'instant" :
     "We'll Carry Your Weight, While You Carry The Moment"}
  </p>
</Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={secondImage}
            alt="Second slide"
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

export default Carouselluggage;
