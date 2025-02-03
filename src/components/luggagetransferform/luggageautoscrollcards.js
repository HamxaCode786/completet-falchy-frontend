import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap'; // Import Card from react-bootstrap
import Customimage from '../../assets/images/customscrollcards/leonhard-niederwimmer-D62gSEgS_yY-unsplash-min.jpg'; // Import your image
import Customimage2 from '../../assets/images/customscrollcards/marco-chilese-vnv6nKdtqLc-unsplash-min.jpg'; // Import your image
import Customimage3 from '../../assets/images/customscrollcards/martino-grua-EbyHdUVfzww-unsplash-min.jpg'; // Import your image
import Customimage4 from '../../assets/images/customscrollcards/matteo-del-piano-Lfo7YMVHYA8-unsplash-min.jpg'; // Import your image
import Customimage5 from '../../assets/images/customscrollcards/michele-bitetto-lhrZZUwIGrE-unsplash-min.jpg'; // Import your image
import Customimage6 from '../../assets/images/customscrollcards/summer-de-witte-KNXZhJ0MNYw-unsplash-min.jpg'; // Import your image
import Customimage7 from '../../assets/images/customscrollcards/tomas-trajan-d7aQvLjG4S8-unsplash-min.jpg'; // Import your image

const Marquee = () => {
  // Data array containing information for each card, with images assigned
  const cardData = [
    { title: 'Lahore to Italy', image: Customimage },
    { title: 'Lahore to Italy', image: Customimage2 },
    { title: 'Lahore to Italy', image: Customimage3 },
    { title: 'Lahore to Italy', image: Customimage4 },
    { title: 'Lahore to Italy', image: Customimage5 },
    { title: 'Lahore to Italy', image: Customimage6 },
    { title: 'Lahore to Italy', image: Customimage7 },
    { title: 'Lahore to Italy', image: Customimage },
    { title: 'Lahore to Italy', image: Customimage2 },
    { title: 'Lahore to Italy', image: Customimage3 },
    { title: 'Lahore to Italy', image: Customimage4 },
    { title: 'Lahore to Italy', image: Customimage5 },
  ];

  useEffect(() => {
    // This is run once when the component mounts
    const root = document.documentElement;
    const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"), 10);
    const marqueeContent = document.querySelector("ul.marquee-content");

    // Set the number of marquee elements
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    // Clone the marquee elements
    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  const scrollToBottom = () => {
    window.scrollBy({
      top: 650, // Scroll down by 200px
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <div className="marquee">
      <ul className="marquee-content" style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {cardData.map((card, index) => (
          <li key={index} style={{ marginRight: '20px' }}>
            <Card
              onClick={scrollToBottom}
              style={{
                width: '25rem !Important',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${card.image})`, // Dynamically apply the image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100px', // Adjust height as necessary
                // cursor: 'pointer',
                // borderRadius: "30px",
              }}
              className="small-card">
              <Card.Body>
                <Card.Title className='cards_text_locations'>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
