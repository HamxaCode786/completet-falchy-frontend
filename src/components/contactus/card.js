import React from "react";

export default function Card(props) {
  const CARDSIZE = 150;
  const CARDWIDTH = CARDSIZE * 2;
  const CARDBORDERRADIUS = CARDSIZE * 0.1;
  //TITLE
  const CARDTITLEPOS = CARDWIDTH * 0.21;
  //IMG
  const CARDIMGHEIGHT = CARDSIZE * 0.5;
  const CARDIMGWIDTH = CARDWIDTH * 0.9;
  const CARDIMGMARGINTOP = CARDSIZE * 0.02;
  //TEXT
  const CARDTXTHEIGHT = CARDSIZE * 0.4;
  const CARDTXTWIDTH = CARDWIDTH * 0.9;
  const CARDTXTMARGIN = CARDSIZE * 0.05;

  const getStars = (number) => {
    // Create an array of stars based on the rating number
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < number ? "gold" : "gray" }}>★</span>
      );
    }
    return stars;
  };

  return (
    <div
      className="cardContainer"
      style={{
        height: CARDSIZE,
        width: CARDWIDTH,
        borderRadius: CARDBORDERRADIUS,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <div className="titleContainer" style={{ position: "relative" }}>
        <div id="rating" style={{ position: "absolute", top: 0, left: 0 }}>
          {getStars(props.rating || 0)} {/* Display stars based on rating */}
        </div>
        <div id="title" style={{ position: "absolute", bottom: 0, right: CARDTITLEPOS }}>
          {props.title || "Default Title"} {/* Display title from props */}
        </div>
      </div>

      <div
        className="cardImgContainer"
        style={{
          height: CARDIMGHEIGHT,
          width: CARDIMGWIDTH,
          borderRadius: CARDBORDERRADIUS,
          marginTop: CARDIMGMARGINTOP
        }}
      >
        <img
          src={props.image || "https://picsum.photos/800/200/?random"} // Use prop or fallback
          alt={props.title || "Image"}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: CARDBORDERRADIUS,
            objectFit: "cover"
          }}
          loading="lazy"
        />
      </div>

      <div
        className="cardTextContainer"
        style={{
          height: CARDTXTHEIGHT,
          width: CARDTXTWIDTH,
          borderRadius: CARDBORDERRADIUS,
          marginTop: CARDTXTMARGIN,
          marginBottom: CARDTXTMARGIN,
          overflow: "hidden"
        }}
      >
        <p style={{ margin: 0, padding: "5px", fontSize: "12px" }}>
          {props.text || "This is a sample text description of the card."}
        </p>
      </div>
    </div>
  );
}
