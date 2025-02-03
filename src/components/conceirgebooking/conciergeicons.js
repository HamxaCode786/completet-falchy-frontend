import React from "react";
import { useLocation } from "react-router-dom";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const Conciergeicons = () => {
  const { language } = useContext(TranslationContext);
  const location = useLocation();
  const cardData = location.state;
  return (
    <div className="passenger_icons_list2">
      <ul className="small_cards_white2">
        {cardData.icons1.map((item, index) => (
          <li key={index} className="box_small_card2">
            <h4>
              <i className={`fas ${item.icon}`}></i> {item.text[language]}
            </h4>
          </li>
        ))}
      </ul>
      {/* <ul className="small_cards_white2">
          {cardData.icons2.map((item, index) => (
            <li key={index} className="box_small_card2">
              <h4>
                <i className={`fas ${item.icon}`}></i> {item.text}
              </h4>
            </li>
          ))}
        </ul> */}
    </div>
  );
};

export default Conciergeicons;
