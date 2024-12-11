import React from 'react'
import Footerimage from "../../assets/images/layout/footer_image.jpg";

const footerabove = () => {
  return (
    <div>
      <div
        className="image_div"
        style={{
          background: `linear-gradient(rgba(39, 47, 59, 0.7), rgba(39, 47, 59, 0.7)), url(${Footerimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="footer_heading">
          Lets Get You Moving <span className="span_1">-</span>{" "}
          <span>Contact Us</span>
        </h1>
      </div> 
    </div>
  )
}

export default footerabove
