import React from "react";
import Class1 from '../../assets/images/rentLuxury/RentLuxuryCars/Mercedes-E-Class-Car.png'
import Class2 from '../../assets/images/rentLuxury/RentLuxuryCars/Mercedes-V-Class-Car.png'
import Class3 from '../../assets/images/rentLuxury/RentLuxuryCars/Mercedes-S-Class-Car.png'
import { Link } from "react-router-dom";
import { TranslationContext } from "../../contextapi/translationContext";
import { SelectedCardContext } from "../../contextapi/rentluxurycontext";
import { useContext } from "react";

const Transfercards = () => {
  const { language } = useContext(TranslationContext);
  const { setSelectedCard } = useContext(SelectedCardContext);

  const cardsData = [
    {
      id: 1,
      title: {
        en: "Mercedes-Benz E-Class",
        it: "Mercedes-Benz E-Class",
        du: "Mercedes-Benz E-Klasse",
        fr: "Mercedes-Benz Classe E",
      },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Super White",
        it: "Super Bianco",
        du: "Super Wit",
        fr: "Super Blanc",
      },
      horsepower2: {
        en: "375 HP",
        it: "375 CV",
        du: "375 PK",
        fr: "375 CH",
      },
      mpg: {
        en: "30 MPG",
        it: "30 MPG",
        du: "30 MPG",
        fr: "30 MPG",
      },
      img: Class1,
    },
    {
      id: 2,
      title: {
        en: "Mercedes-Benz V-Class",
        it: "Mercedes-Benz V-Class",
        du: "Mercedes-Benz V-Klasse",
        fr: "Mercedes-Benz Classe V",
      },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Super White",
        it: "Super Bianco",
        du: "Super Wit",
        fr: "Super Blanc",
      },
      horsepower2: {
        en: "237 HP",
        it: "237 CV",
        du: "237 PK",
        fr: "237 CH",
      },
      mpg: {
        en: "40 MPG",
        it: "40 MPG",
        du: "40 MPG",
        fr: "40 MPG",
      },
      img: Class2,
    },
    {
      id: 3,
      title: {
        en: "Mercedes-Benz S-Class",
        it: "Mercedes-Benz S-Class",
        du: "Mercedes-Benz S-Klasse",
        fr: "Mercedes-Benz Classe S",
      },
      color: {
        en: "Color",
        it: "Colore",
        du: "Kleur",
        fr: "Couleur",
      },
      horsepower: {
        en: "Power",
        it: "Potenza",
        du: "Kracht",
        fr: "Puissance",
      },
      miles: {
        en: "Mileage",
        it: "Chilometraggio",
        du: "Kilometerstand",
        fr: "Kilométrage",
      },
      obsidianBlack: {
        en: "Super White",
        it: "Super Bianco",
        du: "Super Wit",
        fr: "Super Blanc",
      },
      horsepower2: {
        en: "510 HP",
        it: "510 CV",
        du: "510 PK",
        fr: "510 CH",
      },
      mpg: {
        en: "32 MPG",
        it: "32 MPG",
        du: "32 MPG",
        fr: "32 MPG",
      },
      img: Class3,
    },
  ];

  const handleCardClick = (card) => {
    console.log('Card clicked:', card);  // Log the clicked card
    setSelectedCard(card); // Set the selected card in context
  };
  



  return (
    <div>
      <h1 className="transfer_service_heading1">
      
  {language === 'en'
    ? 'Experience elegance and comfort'
    : language === 'it'
    ? 'Sperimenta eleganza e comfort'
    : language === 'du'
    ? 'Ervaar elegantie en comfort'
    : language === 'fr'
    ? 'Découvrez l\'élégance et le confort'
    : 'Experience elegance and comfort'}


      </h1>
      <h1 className="transfer_service_heading2">
        {language === "en"
          ? "Sense the Pulse of Perfection on Every Mile You Travel."
          : language === "it"
          ? "Senti il battito della perfezione in ogni miglio che percorri."
          : language === "du"
          ? "Voel de pols van perfectie op elke mijl die je reist."
          : language === "fr"
          ? "Sentez le pouls de la perfection à chaque kilomètre que vous parcourez."
          : "Sense the Pulse of Perfection on Every Mile You Travel."}
      </h1>

      <div className="cards_div_transfer">
        {cardsData.map((card) => (
          <div key={card.id} className="card_transfer12 custom_height_card">
            <img className="card_transfer1_img1" src={card.img} alt="cards_1" />
            <h4>{card.title[language]}</h4> {/* Access title based on the selected language */}
            <div className="card_specs_div">
              <div className="icon_specs_div" style={{ gap: "15px" }}>
                <div
                  className="testing_123"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    justifyContent: "flex-start"
                  }}
                >
                  <i className="fas fa-palette" style={{ width: "20px", textAlign: "center" }}></i>
                  <p style={{ margin: 0 }}>{card.color[language]}</p> {/* Access color based on the selected language */}
                </div>
                <div
                  className="testing_123"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    justifyContent: "flex-start"
                  }}
                >
                  <i className="fas fa-tachometer-alt" style={{ width: "20px", textAlign: "center" }}></i>
                  <p style={{ margin: 0 }}>{card.horsepower[language]}</p> {/* Access horsepower based on the selected language */}
                </div>
                <div
                  className="testing_123"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    justifyContent: "flex-start"
                  }}
                >
                  <i className="fas fa-road" style={{ width: "20px", textAlign: "center" }}></i>
                  <p style={{ margin: 0 }}>{card.miles[language]}</p> {/* Access miles based on the selected language */}
                </div>
              </div>
              <div className="icon_specs_div" style={{ gap: "15px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>
                  <p className="card_specs_p1" style={{ margin: 0, textAlign: "left" }}>
                    {card.obsidianBlack[language]} {/* Access obsidianBlack based on the selected language */}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>
                  <p className="card_specs_p1" style={{ margin: 0, textAlign: "left" }}>
                    {card.horsepower2[language]} {/* Access horsepower2 based on the selected language */}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>
                  <p className="card_specs_p1" style={{ margin: 0, textAlign: "left" }}>
                    {card.mpg[language]} {/* Access mpg based on the selected language */}
                  </p>
                </div>
              </div>
            </div>
            <div className="last_rent_now_div">
              <Link to="/rentluxuryforward">
              <h4 onClick={() => handleCardClick(card)}>
  {language === 'en'
    ? 'Rent Now'
    : language === 'it'
    ? 'Noleggia ora'
    : language === 'du'
    ? 'Huur nu'
    : language === 'fr'
    ? 'Louer maintenant'
    : 'Rent Now'}
</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transfercards;
