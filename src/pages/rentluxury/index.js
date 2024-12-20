import React from "react";
import Luxury from "../../components/rentluxury/rentluxury";
import Contactcard2 from "../../components/transferservice/contactcard";
import Caraouselluxury from "../../components/caraousel/carousalrentluxury";

const Rentluxury = () => {
  return (
    <div>
      <Caraouselluxury />
      <Luxury />
      <Contactcard2 />
    </div>
  );
};

export default Rentluxury;
