import React from "react";
import { Card, Button } from "react-bootstrap"; // Import Bootstrap components
import { FaChevronRight, FaStar } from "react-icons/fa"; // Import FontAwesome icons
import Image from '../../assets/images/homepageimage/concerge2.jpg'

// You can skip the `useStyles`, `useWideCardMediaStyles`, and other MUI-related styles

export const NewsCardDemo = React.memo(function NewsCard() {
  const n = 6; // Number of stars to display

  return (
    <Card className="mx-auto my-4" style={{ maxWidth: '500px', borderRadius: '30px', boxShadow: 'none' }}>
      {/* Bootstrap's CardImage (equivalent to CardMedia) */}
      <Card.Img
        variant="top"
        src={Image}
        style={{ borderRadius: '30px 30px 0 0' }}
        loading="lazy"
      />

      {/* Card body */}
      <Card.Body style={{ padding: '24px' }}>
        {/* Display Stars using FontAwesome */}
        {/* <div>
          {[...Array(n)].map((e, i) => (
            <FaStar key={i} size={20} color="#FFD700" />
          ))}
        </div> */}

                
        
         <Button variant="primary" className="w-100" style={{ textTransform: "initial" }}>
          Find Out More <FaChevronRight />
        </Button>
      </Card.Body>
    </Card>
  );
});

export default NewsCardDemo;
