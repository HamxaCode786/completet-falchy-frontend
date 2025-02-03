import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TransferContext } from "../../contextapi/transferservicecontext";
import Drivers from "../../assets/images/transferpage/transfercars/Chauffer-E-Class2.png";
import Driversv from "../../assets/images/transferpage/transfercars/Chauffer-V-Class.png";
import Driverss from "../../assets/images/transferpage/transfercars/Chauffer-S-Class.png";
import { TranslationContext } from "../../contextapi/translationContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import I1 from '../../assets/images/illustrations/driver.png'
import I2 from '../../assets/images/illustrations/wifi.png'
import I3 from '../../assets/images/illustrations/water-bottle.png'


const Transfercards = () => {
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
        {!loading ? (
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
        {!loading ? (
          <Skeleton width={200} />
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
        {!loading
          ? // Skeleton loading state
            [...Array(3)].map((_, index) => (
              <div key={index} className="card_transfer1223">
                <div className="card_luxury_background_image">
                <Skeleton style={{backgroundColor:"#323232"}} height={200} width="100%"  /> {/* For image */}
                </div>
                
                {/* For car name */}
                <div className="location_cards_selectable3">
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
                <div className="last_rent_now_div3">
                  <Skeleton height={50} width="100%" />
                </div>
              </div>
            ))
          : Array.isArray(cardsData) &&
            cardsData.map((car, index) => (
              <div
                key={index}
                className="card_transfer1223"
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
                    image2: car.banner_image,
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
                <h4 className="mercedes_names3">{car.car_name}</h4>

                <div className="location_cards_selectable3">
                  
                  {/* <div className="line-container">
                    <div></div>
                  </div> */}
                  
                  <div className="cards_price_hourly">
                  <button
  id="hourly-rate-btn"
  className={`small_cards_4 ${selectedCard === "hourly" ? "selected" : ""}`}
  onClick={() => handleSelect("hourly", car.hourly_rate)} // Passing hourly rate here
>
{language === "en"
    ? "Per Hour"
    : language === "it"
    ? "Per Hour"
    : language === "du"
    ? "Per Hour"
    : language === "fr"
    ? "Per Hour"
    : "Milan to Malpensa"}

  <span>€{car.hourly_rate}</span>
</button>

{/* <div className="png_imported">
  
  <img className="png_icons_cards" src={I1} title="Chauffered Service" />
  <img className="png_icons_cards" src={I2} title="Water Bottle" />
  <img className="png_icons_cards" src={I3} title="Wifi" />
  
</div>   */}
</div>
<p className="custom_location_name2">Popular Routes</p>
                  <button
                    id="malpensa-milan-btn"
                    className={`small_cards_13 ${
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
                      ? "Malpensa to Milan"
                      : language === "it"
                      ? "Malpensa a Milano"
                      : language === "du"
                      ? "Malpensa naar Milaan"
                      : language === "fr"
                      ? "Malpensa à Milan"
                      : "Malpensa to Milan"}
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
                    className={`small_cards_13 ${
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
                      ? "Malpensa to Lake Como"
                      : language === "it"
                      ? "Malpensa al Lago di Como"
                      : language === "du"
                      ? "Malpensa naar Comomeer"
                      : language === "fr"
                      ? "Malpensa au lac de Côme"
                      : "Malpensa to Lake Como"}
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
                    className={`small_cards_13 ${
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
                      ? "Malpensa to Bergamo"
                      : language === "it"
                      ? "Malpensa a Bergamo"
                      : language === "du"
                      ? "Malpensa naar Bergamo"
                      : language === "fr"
                      ? "Malpensa à Bergame"
                      : "Malpensa to Bergamo"}
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
                <p className="custom_location_name">Custom Location</p>
                  
                
                <Link className="last_rent_now_div3" to="/transferBooking">
                    <button className="background_button">Book Now</button>
               </Link>
                
              </div>
            ))}
      </div>
    </div>
  );
};

export default Transfercards;
