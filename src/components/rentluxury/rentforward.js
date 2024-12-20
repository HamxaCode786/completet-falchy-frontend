import React from "react";
import Chauffered from "../../assets/images/transferpage/Car1.png";
import Payment from '../../components/rentluxury/paymentcontact'
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import { SelectedCardContext } from '../../contextapi/rentluxurycontext';


const Tranferforward = () => {
  const { language } = useContext(TranslationContext);
  const { selectedCard } = useContext(SelectedCardContext);
  return (
    <div>
  <div className="driver_car_div">
    <img className="chauffer_2enh" src={selectedCard.img} />
    <h2 className="car_name1">
      {selectedCard.title[language]}
    </h2>
    
    <ul className="icons_list_drivers">
      <li>
        <i className="fas fa-wifi fa-1x"></i> 
        {language === "en" ? "Free Wifi" :
         language === "it" ? "Wifi gratuito" :
         language === "du" ? "Gratis Wifi" :
         language === "fr" ? "Wifi gratuit" : "Free Wifi"}
      </li>
      <li>
        <i className="fas fa-mobile-alt fa-1x"></i> 
        {language === "en" ? "Phone Charger" :
         language === "it" ? "Caricabatterie per telefono" :
         language === "du" ? "Telefoonoplader" :
         language === "fr" ? "Chargeur de téléphone" : "Phone Charger"}
      </li>
      <li>
        <i className="fas fa-bottle-water fa-1x"></i> 
        {language === "en" ? "Complementary Water Bottle" :
         language === "it" ? "Bottiglia d'acqua gratuita" :
         language === "du" ? "Gratis waterfles" :
         language === "fr" ? "Bouteille d'eau gratuite" : "Complementary Water Bottle"}
      </li>
    </ul>
  </div>

  <div className="passenger_icons_list">
    <ul className="small_cards_white">
      <li className="box_small_card">
        <h4>
          <i className="fas fa-user-friends"></i> 
          {language === "en" ? "Passengers" :
           language === "it" ? "Passeggeri" :
           language === "du" ? "Passagiers" :
           language === "fr" ? "Passagers" : "Passengers"}
        </h4>
      </li>

      <li className="box_small_card">
        <h4>
          <i className="fas fa-suitcase-rolling"></i> 
          {language === "en" ? "6 Large Suitcases" :
           language === "it" ? "6 valigie grandi" :
           language === "du" ? "6 grote koffers" :
           language === "fr" ? "6 grandes valises" : "6 Large Suitcases"}
        </h4>
      </li>

      <li className="box_small_card">
        <h4>
          <i className="fas fa-wifi"></i> 
          {language === "en" ? "Internet" :
           language === "it" ? "Internet" :
           language === "du" ? "Internet" :
           language === "fr" ? "Internet" : "Internet"}
        </h4>
      </li>

      <li className="box_small_card">
        <h4>
          <i className="fas fa-suitcase"></i> 
          {language === "en" ? "4 Small Suitcases" :
           language === "it" ? "4 valigie piccole" :
           language === "du" ? "4 kleine koffers" :
           language === "fr" ? "4 petites valises" : "4 Small Suitcases"}
        </h4>
      </li>
    </ul>
  </div>

  <div className="car_selected_description">
    <div className="table_left">
      <h5>
        {language === "en" ? "Car Make" :
         language === "it" ? "Marca dell'auto" :
         language === "du" ? "Auto merk" :
         language === "fr" ? "Marque de voiture" : "Car Make"}
      </h5>
      <h5>
        {language === "en" ? "Car Model" :
         language === "it" ? "Modello dell'auto" :
         language === "du" ? "Auto model" :
         language === "fr" ? "Modèle de voiture" : "Car Model"}
      </h5>
      <h5>
        {language === "en" ? "Power" :
         language === "it" ? "Potenza" :
         language === "du" ? "Vermogen" :
         language === "fr" ? "Puissance" : "Power"}
      </h5>
      <h5>
        {language === "en" ? "Color" :
         language === "it" ? "Colore" :
         language === "du" ? "Kleur" :
         language === "fr" ? "Couleur" : "Color"}
      </h5>
      <h5>
        {language === "en" ? "Mileage" :
         language === "it" ? "Chilometraggio" :
         language === "du" ? "Kilometrage" :
         language === "fr" ? "Kilométrage" : "Mileage"}
      </h5>
      <h5>
        {language === "en" ? "Top Speed" :
         language === "it" ? "Velocità massima" :
         language === "du" ? "Top snelheid" :
         language === "fr" ? "Vitesse maximale" : "Top Speed"}
      </h5>
      <h5>
        {language === "en" ? "Fuel Type" :
         language === "it" ? "Tipo di carburante" :
         language === "du" ? "Brandstofsoort" :
         language === "fr" ? "Type de carburant" : "Fuel Type"}
      </h5>
    </div>
    <div className="table_right">
  <h5>
    {language === "en" ? "Mercedes-Benz" :
     language === "it" ? "Mercedes-Benz" :
     language === "du" ? "Mercedes-Benz" :
     language === "fr" ? "Mercedes-Benz" : "Mercedes-Benz"}
  </h5>
  
  <h5>
    {selectedCard.title[language]}
  </h5>

  <h5>
    {selectedCard.horsepower2[language]}
  </h5>

  <h5>
    {selectedCard.obsidianBlack[language]}
  </h5>

  <h5>
    {selectedCard.mpg[language]}
  </h5>

  <h5>
    {language === "en" ? "144 mph" :
     language === "it" ? "144 mph" :
     language === "du" ? "144 mph" :
     language === "fr" ? "144 mph" : "144 mph"}
  </h5>

  <h5>
    {language === "en" ? "Premium Gasoline" :
     language === "it" ? "Benzina Premium" :
     language === "du" ? "Premium Benzine" :
     language === "fr" ? "Essence Premium" : "Premium Gasoline"}
  </h5>
</div>

  </div>

  <div className="payment_div">
    <Payment />
  </div>
</div>

  );
};

export default Tranferforward;
