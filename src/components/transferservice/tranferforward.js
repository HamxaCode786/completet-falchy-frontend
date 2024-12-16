import React from "react";
import Chauffered from "../../assets/images/transferpage/ChauferwithCar2.png";
import Payment from '../../components/transferservice/payment'
import { TransferContext } from "../../contextapi/transferservicecontext";
import { useContext } from "react";


const Tranferforward = () => {
  const { selectedCard } = useContext(TransferContext);
  return (
    <div>
      <div className="driver_car_div">
        <img className="chauffer_2enh" src={selectedCard.image} />
        <h2>{selectedCard.name}</h2>
        <ul className="icons_list_drivers">
          <li>
            <i class="fas fa-wifi fa-1x"></i> Free Wifi
          </li>
          <li>
            <i class="fas fa-mobile-alt fa-1x"></i> Phone Charger
          </li>
          <li>
            <i class="fas fa-bottle-water fa-1x"></i> Complementary Water Bottle
          </li>
        </ul>
      </div>
      <div className="passenger_icons_list">
        <ul className="small_cards_white">
          <li className="box_small_card">
            <h4>
              <i className="fas fa-user-friends"></i> Passengers
            </h4>
          </li>

          <li className="box_small_card">
            <h4>
              <i className="fas fa-suitcase-rolling"></i> 6 Large Suitcases
            </h4>
          </li>

          <li className="box_small_card">
            <h4>
              <i className="fas fa-wifi"></i> Internet
            </h4>
          </li>

          <li className="box_small_card">
            <h4>
              <i className="fas fa-suitcase"></i> 4 Small Suitcases
            </h4>
          </li>
        </ul>
      </div>

      <div className="car_selected_description">
        <div className="table_left">
          <h5>Car Make</h5>
          <h5>Car Model</h5>
          <h5>Power</h5>
          <h5>Color</h5>
          <h5>Mileage</h5>
          <h5>Top Speed</h5>
          <h5>Fuel Type</h5>
        </div>
        <div className="table_right">
        <h5>{selectedCard.name}</h5>
        <h5></h5>
        <h5>{selectedCard.power}</h5>
        <h5>{selectedCard.color}</h5>
        <h5>{selectedCard.milage}</h5>
        <h5>144 mph</h5>
        <h5>Premium Gasoline</h5>
        </div>
      </div>
      <div className="payment_div">
      <Payment selectedCard={selectedCard} />
      </div>
    </div>
  );
};

export default Tranferforward;
