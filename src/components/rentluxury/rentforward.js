import React from "react";
import Chauffered from "../../assets/images/transferpage/Car1.png";
import Payment from '../../components/rentluxury/paymentcontact'

const tranferforward = () => {
  return (
    <div>
      <div className="driver_car_div">
        <img className="chauffer_2enh" src={Chauffered} />
        <h2 className="car_name1">Mercedes Benz S-580</h2>
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
        <h5>Mercedes-Benz</h5>
        <h5>S 580 4MATIC</h5>
        <h5> 496 Horse Power</h5>
        <h5>Obsidian Black</h5>
        <h5>21 MPG</h5>
        <h5>144 mph</h5>
        <h5>Premium Gasoline</h5>
        </div>
      </div>
      <div className="payment_div">
      <Payment />
      </div>
    </div>
  );
};

export default tranferforward;
