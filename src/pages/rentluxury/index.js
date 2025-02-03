import React from "react";
import Luxury from "../../components/rentluxury/rentluxury";
import Contactcard2 from "../../components/transferservice/contactcard";
import Caraouselluxury from "../../components/caraousel/carousalrentluxury";
import Customcars from '../../components/customcar/customcars'
import RentSliderNew from '../../components/rentluxury/rentSliderCars'


const Rentluxury = () => {
  return (
    <div>
      <Caraouselluxury />
      <RentSliderNew />
      <Luxury />
      <Customcars />
      
    </div>
  );
};

export default Rentluxury;
