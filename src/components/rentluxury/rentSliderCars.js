import React from "react";
import { useBrand } from "../../contextapi/brandcontext";  // Import the context hook
import Mercedeslogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/Mercedes-Logo 2 222222.png";
import Ferarrilogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/icons8-ferrari-48.png";
import Lambologo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/icons8-lamborghini-48.png";
import Bentlogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/icons8-bentley-48.png";
import BMWlogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/icons8-bmw-48.png";
import Landroverlogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/land-rover-logo-png_seeklogo-201638 1.png";
import Audilogo from "../../assets/images/rentLuxury/RentLuxuryCars/icons/AudiLogo.png";

const RentSliderCars = () => {
  // List of logos and corresponding brand names
  const logos = [
    { src: Mercedeslogo, name: "Mercedes" },
    { src: Ferarrilogo, name: "Ferrari" },
    { src: Lambologo, name: "Lamborghini" },
    { src: Bentlogo, name: "Bentley" },
    { src: BMWlogo, name: "BMW" },
    { src: Landroverlogo, name: "Land Rover" },
    { src: Audilogo, name: "Audi" },
    { src: Mercedeslogo, name: "Mercedes" },
    { src: Ferarrilogo, name: "Ferrari" },
    { src: Lambologo, name: "Lamborghini" },
    { src: Bentlogo, name: "Bentley" },
    { src: BMWlogo, name: "BMW" },
    { src: Landroverlogo, name: "Land Rover" },
    { src: Audilogo, name: "Audi" },
  ];

  // Use the context hook to update the selected brand
  const { selectBrand } = useBrand();

  const handleClick = (brandName) => {
    selectBrand(brandName); // Update context when a logo is clicked
  };

  return (
    <div className="slider1">
  <div className="slide-track1">
    {/* Map over the logos array */}
    {logos.concat(logos).map((logo, index) => (
      <div
        className="slide1"
        key={index} // Ensure each item has a unique key
        onClick={() => handleClick(logo.name)} // Trigger on click
      >
        <img src={logo.src} alt={`Logo of ${logo.name}`} loading="lazy" />
      </div>
    ))}
  </div>
</div>

  );
};

export default RentSliderCars;
