import React from "react";
import Payment from "../../components/transferservice/payment";
import { TransferContext } from "../../contextapi/transferservicecontext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Tranferforward = () => {
  {
    /* For Autofill Functionality */
  }
  const location = useLocation();
  const formState = location.state || {};

  const { selectedCard } = useContext(TransferContext);

  // useEffect(() => {
  //   const slowScroll = (targetPosition, duration) => {
  //     const startPosition = window.scrollY;
  //     const distance = targetPosition - startPosition;
  //     let startTime = null;

  //     const animation = (currentTime) => {
  //       if (!startTime) startTime = currentTime;
  //       const timeElapsed = currentTime - startTime;
  //       const progress = Math.min(timeElapsed / duration, 1); // Progress as a ratio

  //       window.scrollTo(0, startPosition + distance * progress); // Scroll based on progress

  //       if (timeElapsed < duration) {
  //         requestAnimationFrame(animation); // Continue animation until time is up
  //       }
  //     };

  //     requestAnimationFrame(animation);
  //   };

  //   const timer = setTimeout(() => {
  //     slowScroll(800, 450); // Scroll to 600px in 2000ms (2 seconds)
  //   }, 300); // Delay the scroll by 2 seconds

  //   return () => clearTimeout(timer); // Clean up timer on component unmount
  // }, []);


  return (
    <div>
      <div className="driver_car_div">
        <img className="chauffer_2enh" src={selectedCard.image2} loading="lazy" />
        <div className="driver_car_transfer_banner">
        <h2 >{selectedCard.name}</h2>
        </div>
        {/* <ul className="icons_list_drivers">
          <li>
            <i class="fas fa-wifi fa-1x"></i> Free Wifi
          </li>
          <li>
            <i class="fas fa-mobile-alt fa-1x"></i> Phone Charger
          </li>
          <li>
            <i class="fas fa-bottle-water fa-1x"></i> Complementary Water Bottle
          </li>
        </ul> */}
      </div>
      <div className="passenger_icons_list">
        <ul className="small_cards_white">
          <li className="box_small_card">
            <h4>
              <i className="fas fa-user-friends"></i> Passengers: {selectedCard?.passengers || 'N/A'}
            </h4>

          </li>

          <li className="box_small_card">
            <h4>
            <i className="fas fa-bottle-water"></i> Water Bottle
            </h4>
          </li>

          <li className="box_small_card">
            <h4>
              <i className="fas fa-wifi"></i> Internet
            </h4>
          </li>

          <li className="box_small_card">
            <h4>
              <i className="fas fa-suitcase"></i>{selectedCard.luggage}
            </h4>
          </li>
        </ul>
      </div>

      {/* <div className="car_selected_description">
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
      </div> */}
      <div className="payment_div">
        <Payment selectedCard={selectedCard} initialState={formState} />
      </div>
    </div>
  );
};

export default Tranferforward;
