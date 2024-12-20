import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TransferContext } from "../../contextapi/transferservicecontext";
import Drivers from "../../assets/images/transferpage/transfercars/E-Class.png";
import Driversv from "../../assets/images/transferpage/transfercars/V-Class.png";
import Driverss from "../../assets/images/transferpage/transfercars/S-class.png";
import { TranslationContext } from "../../contextapi/translationContext";

const Transfercards = () => {
  const { language } = useContext(TranslationContext);

  const { selectedCard, setSelectedCard } = useContext(TransferContext); // Destructure both selectedCard and setSelectedCard from context

  const handleCardSelection = (cardData, cardImage) => {
    console.log("Selected card:", cardData, cardImage);
    setSelectedCard({ ...cardData, image: cardImage });
  };

  const handleSelect = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div>
      <h1 className="transfer_service_heading1">
        {language === "en"
          ? "Arrive With Grace"
          : language === "it"
          ? "Arriva con grazia"
          : language === "du"
          ? "Kom met gratie"
          : language === "fr"
          ? "Arrivez avec grâce"
          : "Arrive With Grace"}
      </h1>
      <h1 className="transfer_service_heading2">
        {language === "en"
          ? "Feel the Thrill of True Elegance with Every Transfer"
          : language === "it"
          ? "Senti il brivido della vera eleganza in ogni trasferimento"
          : language === "du"
          ? "Voel de sensatie van echte elegantie bij elke overdracht"
          : language === "fr"
          ? "Ressentez le frisson de la vraie élégance à chaque transfert"
          : "Feel the Thrill of True Elegance with Every Transfer"}
      </h1>

      <div className="cards_div_transfer">
        <div
          className="card_transfer12"
          onClick={() =>
            handleCardSelection(
              {
                name: "Merceds-Benz E-Class",
                hourlyRate: "$120",
                color: "Super White",
                power: "375 HP",
                milage: "30 MPG",
              },
              Drivers
            )
          }
        >
          <img className="card_transfer1_img1" src={Drivers} alt="cards_1" />
          <div className="location_cards_selectable">
            <button
              className="small_cards_1"
              className={`small_cards_1 ${
                selectedCard === 1 ? "selected" : ""
              }`}
              onClick={() => handleSelect(1)}
            >
              {language === "en"
                ? "Airport To Milan"
                : language === "it"
                ? "Aeroporto a Milano"
                : language === "du"
                ? "Luchthaven naar Milaan"
                : language === "fr"
                ? "Aéroport à Milan"
                : "Airport To Milan"}
            </button>
            <button
              className="small_cards_2"
              className={`small_cards_2 ${
                selectedCard === 2 ? "selected" : ""
              }`}
              onClick={() => handleSelect(2)}
            >
              {language === "en"
                ? "Milan To Airport"
                : language === "it"
                ? "Milano a Aeroporto"
                : language === "du"
                ? "Milaan naar Luchthaven"
                : language === "fr"
                ? "Milan à Aéroport"
                : "Milan To Airport"}
            </button>
            <button
              className="small_cards_3"
              className={`small_cards_3 ${
                selectedCard === 3 ? "selected" : ""
              }`}
              onClick={() => handleSelect(3)}
            >
              {language === "en"
                ? "Airport To Milan"
                : language === "it"
                ? "Aeroporto a Milano"
                : language === "du"
                ? "Luchthaven naar Milaan"
                : language === "fr"
                ? "Aéroport à Milan"
                : "Airport To Milan"}
            </button>
          </div>
          <h4>
            {language === "en"
              ? "Mercedes-Benz E-Class"
              : language === "it"
              ? "Mercedes-Benz E-Class"
              : language === "du"
              ? "Mercedes-Benz E-Klasse"
              : language === "fr"
              ? "Mercedes-Benz Classe E"
              : "Mercedes-Benz E-Class"}
          </h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">
                {language === "en"
                  ? "$120"
                  : language === "it"
                  ? "€120"
                  : language === "du"
                  ? "€120"
                  : language === "fr"
                  ? "120€"
                  : "$120"}
              </p>
              <p>
                {language === "en"
                  ? "Hourly Rate"
                  : language === "it"
                  ? "Tariffa oraria"
                  : language === "du"
                  ? "Uurloon"
                  : language === "fr"
                  ? "Taux horaire"
                  : "Hourly Rate"}
              </p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1">
                {language === "en"
                  ? "$120"
                  : language === "it"
                  ? "€120"
                  : language === "du"
                  ? "€120"
                  : language === "fr"
                  ? "120€"
                  : "$120"}
              </p>
              <p>
                {language === "en"
                  ? "Hourly Rate"
                  : language === "it"
                  ? "Tariffa oraria"
                  : language === "du"
                  ? "Uurloon"
                  : language === "fr"
                  ? "Taux horaire"
                  : "Hourly Rate"}
              </p>
            </div>
          </div>
          <div className="card_specs_div">
            <div className="icon_specs_div" style={{ gap: "15px" }}>
              <div
                className="testing_123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  className="fas fa-palette"
                  style={{ width: "20px", textAlign: "center" }}
                ></i>
                <p style={{ margin: 0 }}>
                  {language === "en"
                    ? "Color"
                    : language === "it"
                    ? "Colore"
                    : language === "du"
                    ? "Kleur"
                    : language === "fr"
                    ? "Couleur"
                    : "Color"}
                </p>
              </div>
              <div
                className="testing_123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  className="fas fa-tachometer-alt"
                  style={{ width: "20px", textAlign: "center" }}
                ></i>
                <p style={{ margin: 0 }}>
                  {language === "en"
                    ? "Power"
                    : language === "it"
                    ? "Potenza"
                    : language === "du"
                    ? "Kracht"
                    : language === "fr"
                    ? "Puissance"
                    : "Power"}
                </p>
              </div>
              <div
                className="testing_123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  className="fas fa-road"
                  style={{ width: "20px", textAlign: "center" }}
                ></i>
                <p style={{ margin: 0 }}>
                  {language === "en"
                    ? "Mileage"
                    : language === "it"
                    ? "Chilometraggio"
                    : language === "du"
                    ? "Kilometerstand"
                    : language === "fr"
                    ? "Kilométrage"
                    : "Mileage"}
                </p>
              </div>
            </div>
            <div className="icon_specs_div" style={{ gap: "15px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <p
                  className="card_specs_p1"
                  style={{ margin: 0, textAlign: "left" }}
                >
                  {language === "en"
                    ? "Super White"
                    : language === "it"
                    ? "Super Bianco"
                    : language === "du"
                    ? "Super Wit"
                    : language === "fr"
                    ? "Super Blanc"
                    : "Super White"}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <p
                  className="card_specs_p1"
                  style={{ margin: 0, textAlign: "left" }}
                >
                  {language === "en"
                    ? "375 HP"
                    : language === "it"
                    ? "375 CV"
                    : language === "du"
                    ? "375 pk"
                    : language === "fr"
                    ? "375 ch"
                    : "375 HP"}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <p
                  className="card_specs_p1"
                  style={{ margin: 0, textAlign: "left" }}
                >
                  30 MPG
                </p>
              </div>
            </div>
          </div>
          <div className="last_rent_now_div">
            <Link to="/transferforward">
              <h4>
                {language === "en"
                  ? "To Where"
                  : language === "it"
                  ? "Dove"
                  : language === "du"
                  ? "Waarheen"
                  : language === "fr"
                  ? "Vers où"
                  : "To Where"}
              </h4>
              <h5>
                {language === "en"
                  ? "Custom Location"
                  : language === "it"
                  ? "Posizione personalizzata"
                  : language === "du"
                  ? "Aangepaste locatie"
                  : language === "fr"
                  ? "Emplacement personnalisé"
                  : "Custom Location"}
              </h5>
            </Link>
          </div>
        </div>
        <div
          className="card_transfer12"
          onClick={() =>
            handleCardSelection(
              {
                name: "Mercedes-Benz V-Class",
                hourlyRate: "$180",
                color: "Super White",
                power: "237 HP",
                milage: "40 MPG",
              },
              Driversv
            )
          }
        >
          <img className="card_transfer1_img1" src={Driversv} alt="cards_1" />
          <div className="location_cards_selectable">
            <button
              className="small_cards_1"
              className={`small_cards_1 ${
                selectedCard === 1 ? "selected" : ""
              }`}
              onClick={() => handleSelect(1)}
            >
              {language === "en"
                ? "Airport To Milan"
                : language === "it"
                ? "Aeroporto a Milano"
                : language === "du"
                ? "Luchthaven naar Milaan"
                : language === "fr"
                ? "Aéroport à Milan"
                : "Airport To Milan"}
            </button>
            <button
              className="small_cards_2"
              className={`small_cards_2 ${
                selectedCard === 2 ? "selected" : ""
              }`}
              onClick={() => handleSelect(2)}
            >
              {language === "en"
                ? "Milan To Airport"
                : language === "it"
                ? "Milano a Aeroporto"
                : language === "du"
                ? "Milaan naar Luchthaven"
                : language === "fr"
                ? "Milan à Aéroport"
                : "Milan To Airport"}
            </button>
            <button
              className="small_cards_3"
              className={`small_cards_3 ${
                selectedCard === 3 ? "selected" : ""
              }`}
              onClick={() => handleSelect(3)}
            >
              {language === "en"
                ? "Airport To Milan"
                : language === "it"
                ? "Aeroporto a Milano"
                : language === "du"
                ? "Luchthaven naar Milaan"
                : language === "fr"
                ? "Aéroport à Milan"
                : "Airport To Milan"}
            </button>
          </div>
          <h4>
            {language === "en"
              ? "Mercedes-Benz V-Class"
              : language === "it"
              ? "Mercedes-Benz V-Class"
              : language === "du"
              ? "Mercedes-Benz V-Klasse"
              : language === "fr"
              ? "Mercedes-Benz Classe V"
              : "Mercedes-Benz V-Class"}
          </h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$180</p>
              <p>
                {language === "en"
                  ? "Hourly Rate"
                  : language === "it"
                  ? "Tariffa oraria"
                  : language === "du"
                  ? "Uurloon"
                  : language === "fr"
                  ? "Taux horaire"
                  : "Hourly Rate"}
              </p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1">$180</p>
              <p>
                {language === "en"
                  ? "Hourly Rate"
                  : language === "it"
                  ? "Tariffa oraria"
                  : language === "du"
                  ? "Uurloon"
                  : language === "fr"
                  ? "Taux horaire"
                  : "Hourly Rate"}
              </p>
            </div>
          </div>
          <div className="card_specs_div">
            <div className="icon_specs_div" style={{ gap: "15px" }}>
              <div
                className="testing_123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  className="fas fa-palette"
                  style={{ width: "20px", textAlign: "center" }}
                ></i>
                <p style={{ margin: 0 }}>
                  {language === "en"
                    ? "Color"
                    : language === "it"
                    ? "Colore"
                    : language === "du"
                    ? "Kleur"
                    : language === "fr"
                    ? "Couleur"
                    : "Color"}
                </p>
              </div>
              <div
                className="testing_123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  className="fas fa-tachometer-alt"
                  style={{ width: "20px", textAlign: "center" }}
                ></i>
                <p style={{ margin: 0 }}>
                  {language === "en"
                    ? "Power"
                    : language === "it"
                    ? "Potenza"
                    : language === "du"
                    ? "Kracht"
                    : language === "fr"
                    ? "Puissance"
                    : "Power"}
                </p>
              </div>
              <div
                className="testing_123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  className="fas fa-road"
                  style={{ width: "20px", textAlign: "center" }}
                ></i>
                <p style={{ margin: 0 }}>
                  {language === "en"
                    ? "Mileage"
                    : language === "it"
                    ? "Chilometraggio"
                    : language === "du"
                    ? "Kilometerstand"
                    : language === "fr"
                    ? "Kilométrage"
                    : "Mileage"}
                </p>
              </div>
            </div>
            <div className="icon_specs_div" style={{ gap: "15px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <p
                  className="card_specs_p1"
                  style={{ margin: 0, textAlign: "left" }}
                >
                  {language === "en"
                    ? "Super White"
                    : language === "it"
                    ? "Super Bianco"
                    : language === "du"
                    ? "Super Wit"
                    : language === "fr"
                    ? "Super Blanc"
                    : "Super White"}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <p
                  className="card_specs_p1"
                  style={{ margin: 0, textAlign: "left" }}
                >
                  237 HP
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <p
                  className="card_specs_p1"
                  style={{ margin: 0, textAlign: "left" }}
                >
                  40 MPG
                </p>
              </div>
            </div>
          </div>
          <div className="last_rent_now_div">
            <Link to="/transferforward">
              <h4>
                {language === "en"
                  ? "To Where"
                  : language === "it"
                  ? "Dove"
                  : language === "du"
                  ? "Waarheen"
                  : language === "fr"
                  ? "Vers où"
                  : "To Where"}
              </h4>
              <h5>
                {language === "en"
                  ? "Custom Location"
                  : language === "it"
                  ? "Posizione personalizzata"
                  : language === "du"
                  ? "Aangepaste locatie"
                  : language === "fr"
                  ? "Emplacement personnalisé"
                  : "Custom Location"}
              </h5>
            </Link>
          </div>
        </div>

        <div
          className="card_transfer12"
          onClick={() =>
            handleCardSelection(
              {
                name: "Mercedes-Benz S-Class",
                hourlyRate: "$150",
                color: "Super white",
                power: "510 HP",
                milage: "32 MPG",
              },
              Driverss
            )
          }
        >
          <img className="card_transfer1_img1" src={Driverss} alt="cards_1" />
          <div className="location_cards_selectable">
            <button
              className="small_cards_1"
              className={`small_cards_1 ${
                selectedCard === 1 ? "selected" : ""
              }`}
              onClick={() => handleSelect(1)}
            >
              {language === "en"
                ? "Airport To Milan"
                : language === "it"
                ? "Aeroporto a Milano"
                : language === "du"
                ? "Luchthaven naar Milaan"
                : language === "fr"
                ? "Aéroport à Milan"
                : "Airport To Milan"}
            </button>
            <button
              className="small_cards_2"
              className={`small_cards_2 ${
                selectedCard === 2 ? "selected" : ""
              }`}
              onClick={() => handleSelect(2)}
            >
              {language === "en"
                ? "Milan To Airport"
                : language === "it"
                ? "Milano a Aeroporto"
                : language === "du"
                ? "Milaan naar Luchthaven"
                : language === "fr"
                ? "Milan à Aéroport"
                : "Milan To Airport"}
            </button>
            <button
              className="small_cards_3"
              className={`small_cards_3 ${
                selectedCard === 3 ? "selected" : ""
              }`}
              onClick={() => handleSelect(3)}
            >
              {language === "en"
                ? "Airport To Milan"
                : language === "it"
                ? "Aeroporto a Milano"
                : language === "du"
                ? "Luchthaven naar Milaan"
                : language === "fr"
                ? "Aéroport à Milan"
                : "Airport To Milan"}
            </button>
          </div>
          <h4>
            {language === "en"
              ? "Mercedes-Benz S-Class"
              : language === "it"
              ? "Mercedes-Benz S-Class"
              : language === "du"
              ? "Mercedes-Benz S-Klasse"
              : language === "fr"
              ? "Mercedes-Benz Classe S"
              : "Mercedes-Benz S-Class"}
          </h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>
                {language === "en"
                  ? "Hourly Rate"
                  : language === "it"
                  ? "Tariffa oraria"
                  : language === "du"
                  ? "Uurloon"
                  : language === "fr"
                  ? "Taux horaire"
                  : "Hourly Rate"}
              </p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>
                {language === "en"
                  ? "Hourly Rate"
                  : language === "it"
                  ? "Tariffa oraria"
                  : language === "du"
                  ? "Uurloon"
                  : language === "fr"
                  ? "Taux horaire"
                  : "Hourly Rate"}
              </p>
            </div>
          </div>
          <div className="card_specs_div">
            <div className="icon_specs_div" style={{ gap: "15px" }}>
              <div
                className="testing_123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  className="fas fa-palette"
                  style={{ width: "20px", textAlign: "center" }}
                ></i>
                <p style={{ margin: 0 }}>
                  {language === "en"
                    ? "Color"
                    : language === "it"
                    ? "Colore"
                    : language === "du"
                    ? "Kleur"
                    : language === "fr"
                    ? "Couleur"
                    : "Color"}
                </p>
              </div>
              <div
                className="testing_123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  className="fas fa-tachometer-alt"
                  style={{ width: "20px", textAlign: "center" }}
                ></i>
                <p style={{ margin: 0 }}>
                  {language === "en"
                    ? "Power"
                    : language === "it"
                    ? "Potenza"
                    : language === "du"
                    ? "Kracht"
                    : language === "fr"
                    ? "Puissance"
                    : "Power"}
                </p>
              </div>
              <div
                className="testing_123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  className="fas fa-road"
                  style={{ width: "20px", textAlign: "center" }}
                ></i>
                <p style={{ margin: 0 }}>
                  {language === "en"
                    ? "Mileage"
                    : language === "it"
                    ? "Chilometraggio"
                    : language === "du"
                    ? "Kilometerstand"
                    : language === "fr"
                    ? "Kilométrage"
                    : "Mileage"}
                </p>
              </div>
            </div>
            <div className="icon_specs_div" style={{ gap: "15px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <p
                  className="card_specs_p1"
                  style={{ margin: 0, textAlign: "left" }}
                >
                  {language === "en"
                    ? "Super white"
                    : language === "it"
                    ? "Super bianco"
                    : language === "du"
                    ? "Super wit"
                    : language === "fr"
                    ? "Super blanc"
                    : "Super white"}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <p
                  className="card_specs_p1"
                  style={{ margin: 0, textAlign: "left" }}
                >
                  510 HP
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <p
                  className="card_specs_p1"
                  style={{ margin: 0, textAlign: "left" }}
                >
                  32 MPG
                </p>
              </div>
            </div>
          </div>
          <div className="last_rent_now_div">
            <Link to="/transferforward">
              <h4>
                {language === "en"
                  ? "To Where"
                  : language === "it"
                  ? "Dove"
                  : language === "du"
                  ? "Waarheen"
                  : language === "fr"
                  ? "Vers où"
                  : "To Where"}
              </h4>
              <h5>
                {language === "en"
                  ? "Custom Location"
                  : language === "it"
                  ? "Posizione personalizzata"
                  : language === "du"
                  ? "Aangepaste locatie"
                  : language === "fr"
                  ? "Emplacement personnalisé"
                  : "Custom Location"}
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfercards;
