import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TransferContext } from "../../contextapi/transferservicecontext";
import Drivers from "../../assets/images/transferpage/chaufferedcars.png";

const Transfercards = () => {
  const { selectedCard, setSelectedCard } = useContext(TransferContext); // Destructure both selectedCard and setSelectedCard from context

  const handleCardSelection = (cardData) => {
    console.log("Selected card:", cardData);
    setSelectedCard(cardData);
  };

  const handleSelect = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div>
      <h1 className="transfer_service_heading1">Transfer Service</h1>
      <h1 className="transfer_service_heading2">Feel the Thrill of True Elegance with Every Transfer.</h1>


      

      <div className="cards_div_transfer">
        <div
          className="card_transfer12"
          onClick={() =>
            handleCardSelection({
              name: "Merceds E-Class",
              hourlyRate: "$120",
              color: "Super White",
              power: "375 HP",
              milage: "30 MPG",
            })
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
              Airport
              To
              Milan
            </button>
            <button
              className="small_cards_1"
              className={`small_cards_1 ${
                selectedCard === 2 ? "selected" : ""
              }`}
              onClick={() => handleSelect(2)}
            >
              Airport
              To
              Milan
            </button>
            <button
              className="small_cards_1"
              className={`small_cards_1 ${
                selectedCard === 3 ? "selected" : ""
              }`}
              onClick={() => handleSelect(3)}
            >
              Airport
              To
              Milan
            </button>
          </div>
          <h4>Merceds E-Class</h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$120</p>
              <p>Hourly Rate</p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1">$120</p>
              <p>Hourly Rate</p>
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
                <p style={{ margin: 0 }}>Color</p>
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
                <p style={{ margin: 0 }}>Power</p>
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
                <p style={{ margin: 0 }}>Milage</p>
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
                  Super White
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
                  375 HP
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
              <h4>To Where</h4>
              <h5>Custom Location</h5>
            </Link>
          </div>
        </div>
        <div
          className="card_transfer12"
          onClick={() =>
            handleCardSelection({
              name: "Mercedes-Benz V-Class",
              hourlyRate: "$180",
              color: "Super White",
              power: "237 HP",
              milage: "40 MPG",
            })
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
              Airport
              To
              Milan
            </button>
            <button
              className="small_cards_1"
              className={`small_cards_1 ${
                selectedCard === 2 ? "selected" : ""
              }`}
              onClick={() => handleSelect(2)}
            >
              Airport
              To
              Milan
            </button>
            <button
              className="small_cards_1"
              className={`small_cards_1 ${
                selectedCard === 3 ? "selected" : ""
              }`}
              onClick={() => handleSelect(3)}
            >
              Airport
              To
              Milan
            </button>
          </div>
          <h4>Mercedes-Benz V-Class</h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$180</p>
              <p>Hourly Rate</p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1">$180</p>
              <p>Hourly Rate</p>
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
                <p style={{ margin: 0 }}>Color</p>
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
                <p style={{ margin: 0 }}>Power</p>
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
                <p style={{ margin: 0 }}>Milage</p>
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
                  Super White
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
              <h4>To Where</h4>
              <h5>Custom Location</h5>
            </Link>
          </div>
        </div>
        <div
          className="card_transfer12"
          onClick={() =>
            handleCardSelection({
              name: "Mercedes-Benz S-Class",
              hourlyRate: "$150",
              color: "Super white",
              power: "510 HP",
              milage: "32 MPG",
            })
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
              Airport
              To
              Milan
            </button>
            <button
              className="small_cards_1"
              className={`small_cards_1 ${
                selectedCard === 2 ? "selected" : ""
              }`}
              onClick={() => handleSelect(2)}
            >
              Airport
              To
              Milan
            </button>
            <button
              className="small_cards_1"
              className={`small_cards_1 ${
                selectedCard === 3 ? "selected" : ""
              }`}
              onClick={() => handleSelect(3)}
            >
              Airport
              To
              Milan
            </button>
          </div>
          <h4>Mercedes-Benz S-Class</h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>Hourly Rate</p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>Hourly Rate</p>
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
                <p style={{ margin: 0 }}>Color</p>
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
                <p style={{ margin: 0 }}>Power</p>
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
                <p style={{ margin: 0 }}>Milage</p>
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
                  Super white
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
              <h4>To Where</h4>
              <h5>Custom Location</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfercards;
