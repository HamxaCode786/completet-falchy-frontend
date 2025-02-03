import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TransferContext } from "../../contextapi/transferservicecontext";
import { TranslationContext } from "../../contextapi/translationContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const Transfercards2 = () => {
  const { language } = useContext(TranslationContext);
  const navigate = useNavigate();
  const { selectedCard, setSelectedCard } = useContext(TransferContext);
  const [isPulsing, setIsPulsing] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulsing(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleAutoFillButtonClick = (pickup, dropoff, additionalNumber) => {
    navigate("/transferBooking", {
      state: {
        pickup,
        dropoff,
        additionalNumber,
      },
    });
  };

  const handleCardSelection = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleSelect = (cardId, hourlyRate) => {
    // Log the values for debugging
      
    // Set the selected card
    setSelectedCard(cardId);
  
    // Navigate and pass the cardId and hourly rate separately
    navigate("/transferBooking", { state: { cardId, hourlyRate } });
  };
  

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCardsData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://nijaga8856.pythonanywhere.com/transfers`
        );

        const data = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setCardsData(data);
      } catch (error) {
        console.error("Error fetching cards data:", error);
        setCardsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCardsData();
  }, []);

  return (
    <div 

className="transfer_service_cards_styling"

    >
      <h1 className="transfer_service_heading1">
        {loading ? (
          <Skeleton width={200} />
        ) : language === "en" ? (
          "Arrive With Grace"
        ) : language === "it" ? (
          "Arriva con grazia"
        ) : language === "du" ? (
          "Kom met gratie"
        ) : language === "fr" ? (
          "Arrivez avec grâce"
        ) : (
          "Arrive With Grace"
        )}
      </h1>
      <h1 className="transfer_service_heading2">
        {loading ? (
          <Skeleton width={400} />
        ) : language === "en" ? (
          "Feel the Thrill of True Elegance with Every Transfer"
        ) : language === "it" ? (
          "Senti il brivido della vera eleganza in ogni trasferimento"
        ) : language === "du" ? (
          "Voel de sensatie van echte elegantie bij elke overdracht"
        ) : language === "fr" ? (
          "Ressentez le frisson de la vraie élégance à chaque transfert"
        ) : (
          "Feel the Thrill of True Elegance with Every Transfer"
        )}
      </h1>

      <div className="cards_div_transfer">
        {loading
          ? // Skeleton loading state
            [...Array(3)].map((_, index) => (
              <div key={index} className="card_transfer1222">
                <Skeleton height={350} width="100%" /> {/* For image */}
                <Skeleton
                  height={24}
                  width={150}
                  style={{ margin: "10px 0" }}
                />{" "}
                {/* For car name */}
                <div className="location_cards_selectable2">
                  <Skeleton
                    height={40}
                    width="100%"
                    style={{ margin: "5px 0" }}
                  />
                  
                  <Skeleton
                    height={40}
                    width="100%"
                    style={{ margin: "5px 0" }}
                  />
                  <Skeleton
                    height={40}
                    width="100%"
                    style={{ margin: "5px 0" }}
                  />
                  <Skeleton
                    height={40}
                    width="100%"
                    style={{ margin: "5px 0" }}
                  />
                </div>
                <div className="new_card_last_div">
                  <Skeleton height={60} width="100%" />
                  
                </div>
              </div>
            ))
          : Array.isArray(cardsData) &&
            cardsData.map((car, index) => (
              <div
                key={index}
                className="card_transfer1222"
                onClick={() =>
                  handleCardSelection({
                    id: car.id,
                    name: car.car_name,
                    hourlyRate: car.hourly_rate,
                    color: car.color,
                    power: car.power,
                    milage: car.mileage,
                    passengers: car.passangers,
                    luggage: car.luggage,
                    malpenssatomilan: car.locations.find(
                      (location) =>
                        location.location_name === "Malpensa to milan"
                    )?.price,
                    malpenssatocomo: car.locations.find(
                      (location) =>
                        location.location_name === "malpenssa to como"
                    )?.price,
                    malpenssatobergamo: car.locations.find(
                      (location) =>
                        location.location_name === "malpenssa to bergamo"
                    )?.price,
                    image: car.car_image,
                  })
                }
              >
                
                <div className="card_luxury_background_image">
                <img
                  className="card_transfer1_img2"
                  src={car.car_image}
                  alt={`cards_${index + 1}`}
                  loading="lazy"
                />
</div>
<h4 className="mercedes_names1">Mercedes</h4>

                <h4 className="mercedes_names2">{car.car_name}</h4>

                <div className="location_cards_selectable2">
                  
                  {/* <div className="line-container">
                    <div></div>
                  </div> */}
                  
                  

                  <button
                    id="malpensa-milan-btn"
                    className={`small_cards_12 ${
                      selectedCard === "malpensa-milan" ? "selected" : ""
                    } ${isPulsing ? "pulsing" : ""}`}
                    onClick={() => {
                      handleSelect("malpensa-milan");
                      handleAutoFillButtonClick(
                        "Milan-Malpensa International Airport, Via Santa Maria, Ferno, Unione dei comuni di Lonate Pozzolo e Ferno, Varese, Lombardy, 21015, Italy",
                        "Milan, Lombardy, Italy",
                        1
                      );
                    }}
                  >
                    {language === "en"
  ? <>
      Malpensa<br />to Milan
    </>
  : language === "it"
  ? <>
      Malpensa<br />a Milano
    </>
  : language === "du"
  ? <>
      Malpensa<br />naar Milaan
    </>
  : language === "fr"
  ? <>
      Malpensa<br />à Milan
    </>
  : <>
      Malpensa<br />to Milan
    </>}

                    <span>
                      €
                      {
                        car.locations.find(
                          (loc) => loc.location_name === "Malpensa to milan"
                        )?.price
                      }
                    </span>
                  </button>

                  <button
                    id="malpensa-como-btn"
                    className={`small_cards_12 ${
                      selectedCard === "malpensa-como" ? "selected" : ""
                    }`}
                    onClick={() => {
                      handleSelect("malpensa-como");
                      handleAutoFillButtonClick(
                        "Milan-Malpensa International Airport, Via Santa Maria, Ferno, Unione dei comuni di Lonate Pozzolo e Ferno, Varese, Lombardy, 21015, Italy",
                        "Lake Como, Como, Lombardy, Italy",
                        2
                      );
                    }}
                  >
                    {language === "en"
  ? <>
      Malpensa<br />to Como
    </>
  : language === "it"
  ? <>
      Malpensa<br /> Como
    </>
  : language === "du"
  ? <>
      Malpensa<br /> Comomeer
    </>
  : language === "fr"
  ? <>
      Malpensa<br /> Côme
    </>
  : <>
      Malpensa<br />to Como
    </>}

                    <span>
                      €
                      {
                        car.locations.find(
                          (loc) => loc.location_name === "malpenssa to como"
                        )?.price
                      }
                    </span>
                  </button>
                  <button
                    id="malpensa-bergamo-btn"
                    className={`small_cards_12 ${
                      selectedCard === "malpensa-bergamo" ? "selected" : ""
                    }`}
                    onClick={() => {
                      handleSelect("malpensa-bergamo");
                      handleAutoFillButtonClick(
                        "Milan-Malpensa International Airport, Via Santa Maria, Ferno, Unione dei comuni di Lonate Pozzolo e Ferno, Varese, Lombardy, 21015, Italy",
                        "Bergamo, Lombardy, Italy",
                        3
                      );
                    }}
                  >
                    {language === "en" 
  ? <>
      Malpensa<br />to Bergamo
    </>
  : language === "it"
  ? <>
      Malpensa<br />a Bergamo
    </>
  : language === "du"
  ? <>
      Malpensa<br />naar Bergamo
    </>
  : language === "fr"
  ? <>
      Malpensa<br />à Bergame
    </>
  : <>
      Malpensa<br />to Bergamo
    </>}

                    <span>
                      €
                      {
                        car.locations.find(
                          (loc) => loc.location_name === "malpenssa to bergamo"
                        )?.price
                      }
                    </span>
                  </button>
                </div>

                <div className="new_card_last_div">
                  
                <button
  className="button_1_new_card"
  onClick={() => handleSelect("hourly", car.hourly_rate)} // Passing hourly rate here
>
  {language === "en"
    ? "Book Per Hour"
    : language === "it"
    ? "Prenota per ora"
    : language === "du"
    ? "Boek per uur"
    : language === "fr"
    ? "Réserver par heure"
    : "Book Per Hour"}
  <span>€{car.hourly_rate}</span>
</button>

                    <button className="button_2_new_card" >Book With Custom Location</button>
                  
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Transfercards2;
