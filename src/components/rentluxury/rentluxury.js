import React from "react";
import Drivers from "../../assets/images/transferpage/rentluxury.png";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const Transfercards = () => {
  const { language } = useContext(TranslationContext);

  const cardsData = [
    {
      id: 1,
      title: {
        en: "Mercedes-Benz S 580",
        it: "Mercedes-Benz S 580",
        du: "Mercedes-Benz S 580",
        fr: "Mercedes-Benz S 580"
      },
      color: {
        en: "Black",
        it: "Nero",
        du: "Zwart",
        fr: "Noir"
      },
      horsepower: {
        en: "450 HP",
        it: "450 CV",
        du: "450 PK",
        fr: "450 CH"
      },
      miles: {
        en: "0 miles",
        it: "0 km",
        du: "0 mijl",
        fr: "0 km"
      },
      obsidianBlack: {
        en: "Obsidian Black",
        it: "Nero Obsidiano",
        du: "Obsidian Zwart",
        fr: "Noir Obsidien"
      },
      horsepower2: {
        en: "496 HP",
        it: "496 CV",
        du: "496 PK",
        fr: "496 CH"
      },
      mpg: {
        en: "21 MPG",
        it: "21 MPG",
        du: "21 MPG",
        fr: "21 MPG"
      },
      img: Drivers
    },
    {
      id: 2,
      title: {
        en: "Mercedes-Benz S 580",
        it: "Mercedes-Benz S 580",
        du: "Mercedes-Benz S 580",
        fr: "Mercedes-Benz S 580"
      },
      color: {
        en: "Black",
        it: "Nero",
        du: "Zwart",
        fr: "Noir"
      },
      horsepower: {
        en: "450 HP",
        it: "450 CV",
        du: "450 PK",
        fr: "450 CH"
      },
      miles: {
        en: "0 miles",
        it: "0 km",
        du: "0 mijl",
        fr: "0 km"
      },
      obsidianBlack: {
        en: "Obsidian Black",
        it: "Nero Obsidiano",
        du: "Obsidian Zwart",
        fr: "Noir Obsidien"
      },
      horsepower2: {
        en: "496 HP",
        it: "496 CV",
        du: "496 PK",
        fr: "496 CH"
      },
      mpg: {
        en: "21 MPG",
        it: "21 MPG",
        du: "21 MPG",
        fr: "21 MPG"
      },
      img: Drivers
    },
    {
      id: 3,
      title: {
        en: "Mercedes-Benz S 580",
        it: "Mercedes-Benz S 580",
        du: "Mercedes-Benz S 580",
        fr: "Mercedes-Benz S 580"
      },
      color: {
        en: "Black",
        it: "Nero",
        du: "Zwart",
        fr: "Noir"
      },
      horsepower: {
        en: "450 HP",
        it: "450 CV",
        du: "450 PK",
        fr: "450 CH"
      },
      miles: {
        en: "0 miles",
        it: "0 km",
        du: "0 mijl",
        fr: "0 km"
      },
      obsidianBlack: {
        en: "Obsidian Black",
        it: "Nero Obsidiano",
        du: "Obsidian Zwart",
        fr: "Noir Obsidien"
      },
      horsepower2: {
        en: "496 HP",
        it: "496 CV",
        du: "496 PK",
        fr: "496 CH"
      },
      mpg: {
        en: "21 MPG",
        it: "21 MPG",
        du: "21 MPG",
        fr: "21 MPG"
      },
      img: Drivers
    }
  ];

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
                <h4> {language === 'en'
        ? 'Rent Now'
        : language === 'it'
        ? 'Noleggia ora'
        : language === 'du'
        ? 'Huur nu'
        : language === 'fr'
        ? 'Louer maintenant'
        : 'Rent Now'}</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transfercards;
