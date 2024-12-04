import React from "react";
import { Link } from "react-router-dom";
import Drivers from "../../assets/images/transferpage/chaufferedcars.png";

const transfercards = () => {
  return (
    <div>
      <h1 className="transfer_service_heading1">Transfer Service</h1>

      <div className="cards_div_transfer">
        <div className="card_transfer12">
          <img className="card_transfer1_img1" src={Drivers} alt="cards_1" />
          <h4>Merchedes-Benz S 580 </h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>Hourly Rate</p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1" >$150</p>
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
                <p style={{ margin: 0 }}>Black</p>
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
                <p style={{ margin: 0 }}>450 HP</p>
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
                <p style={{ margin: 0 }}>0 miles</p>
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
                  Obsidian Black
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
                  496 HP
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
                  21 MPG
                </p>
              </div>
            </div>
          </div>
          <div className="last_rent_now_div">
            <Link to="/transferforward">
              <h4>Rent Now</h4>
            </Link>
          </div>
        </div>
        <div className="card_transfer12">
          <img className="card_transfer1_img1" src={Drivers} alt="cards_1" />
          <h4>Merchedes-Benz S 580 </h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>Hourly Rate</p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1" >$150</p>
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
                <p style={{ margin: 0 }}>Black</p>
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
                <p style={{ margin: 0 }}>450 HP</p>
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
                <p style={{ margin: 0 }}>0 miles</p>
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
                  Obsidian Black
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
                  496 HP
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
                  21 MPG
                </p>
              </div>
            </div>
          </div>
          <div className="last_rent_now_div">
            <Link to="/transferforward">
              <h4>Rent Now</h4>
            </Link>
          </div>
        </div>

        <div className="card_transfer12">
          <img className="card_transfer1_img1" src={Drivers} alt="cards_1" />
          <h4>Merchedes-Benz S 580 </h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>Hourly Rate</p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1" >$150</p>
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
                <p style={{ margin: 0 }}>Black</p>
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
                <p style={{ margin: 0 }}>450 HP</p>
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
                <p style={{ margin: 0 }}>0 miles</p>
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
                  Obsidian Black
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
                  496 HP
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
                  21 MPG
                </p>
              </div>
            </div>
          </div>
          <div className="last_rent_now_div">
            <Link to="/transferforward">
              <h4>Rent Now</h4>
            </Link>
          </div>
        </div>

        <div className="card_transfer12">
          <img className="card_transfer1_img1" src={Drivers} alt="cards_1" />
          <h4>Merchedes-Benz S 580 </h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>Hourly Rate</p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1" >$150</p>
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
                <p style={{ margin: 0 }}>Black</p>
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
                <p style={{ margin: 0 }}>450 HP</p>
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
                <p style={{ margin: 0 }}>0 miles</p>
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
                  Obsidian Black
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
                  496 HP
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
                  21 MPG
                </p>
              </div>
            </div>
          </div>
          <div className="last_rent_now_div">
            <Link to="/transferforward">
              <h4>Rent Now</h4>
            </Link>
          </div>
        </div>

        <div className="card_transfer12">
          <img className="card_transfer1_img1" src={Drivers} alt="cards_1" />
          <h4>Merchedes-Benz S 580 </h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>Hourly Rate</p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1" >$150</p>
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
                <p style={{ margin: 0 }}>Black</p>
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
                <p style={{ margin: 0 }}>450 HP</p>
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
                <p style={{ margin: 0 }}>0 miles</p>
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
                  Obsidian Black
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
                  496 HP
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
                  21 MPG
                </p>
              </div>
            </div>
          </div>
          <div className="last_rent_now_div">
            <Link to="/transferforward">
              <h4>Rent Now</h4>
            </Link>
          </div>
        </div>

        <div className="card_transfer12">
          <img className="card_transfer1_img1" src={Drivers} alt="cards_1" />
          <h4>Merchedes-Benz S 580 </h4>
          <div className="cards_grey_buttons">
            <div className="grey_button_1_d">
              <p className="first_text1">$150</p>
              <p>Hourly Rate</p>
            </div>
            <div className="grey_button_1_d">
              <p className="first_text1" >$150</p>
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
                <p style={{ margin: 0 }}>Black</p>
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
                <p style={{ margin: 0 }}>450 HP</p>
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
                <p style={{ margin: 0 }}>0 miles</p>
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
                  Obsidian Black
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
                  496 HP
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
                  21 MPG
                </p>
              </div>
            </div>
          </div>
          <div className="last_rent_now_div">
            <Link to="/transferforward">
              <h4>Rent Now</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transfercards;
