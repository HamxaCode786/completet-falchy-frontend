import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/luggagetransferdeposit/Dinnning1.png";
import image2 from "../../assets/images/luggagetransferdeposit/Welllness1.png";
import image3 from "../../assets/images/luggagetransferdeposit/Conference1.png";
import image4 from "../../assets/images/luggagetransferdeposit/ProfessionServic1.png";
import image5 from "../../assets/images/luggagetransferdeposit/LifeStylee1.png";
import image6 from "../../assets/images/luggagetransferdeposit/Travel1.png";

const Conceirge = () => {
  const navigate = useNavigate();

  const handleCardClick = (cardData) => {
    navigate("/conceirgebooking", { state: cardData });
  };

  const CardComponent = ({ data }) => (
    <div className="image_hover_done custom_image"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${data.image[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "30px",
        borderRadius: "15px",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onClick={() => handleCardClick(data)}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundImage = `linear-gradient(rgba(5, 2, 31, 0.8), rgba(5, 2, 31, 0.8)), url(${data.image[0]})`;
        e.currentTarget.style.opacity = "1";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${data.image[0]})`;
        e.currentTarget.style.opacity = "1";
      }}
    >
      <h2 style={{ margin: 0, color: "white", fontSize: "36px" }}>
        {data.title}
      </h2>
      <button
        className="image_button_div"
        style={{
          alignSelf: "flex-start",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        View more{" "}
        <i className="fas fa-arrow-right" style={{ width: "40px" }}></i>
      </button>
    </div>
  );

  const cardDetails = [
    {
      title:"Dining and Entertainment",
      title2: "Reserve Your Exclusive Dining and Entertainment Experience with us!",
      image: [image1, image2, image3, image4],
      description: "Experience exquisite culinary delights and world-class entertainment. From exclusive restaurant reservations to private concerts and shows, we curate unforgettable experiences. Our expert concierge team handpicks the finest dining establishments and arranges VIP access to the most sought-after entertainment venues. Whether it's a romantic dinner at a Michelin-starred restaurant or front-row seats at a sold-out performance, we ensure every moment is extraordinary.",
      icons1: [
        { icon: "fa-solid fa-bottle-water", text: "Water Bottle" },
        { icon: "fa-wifi", text: "Wifi" },
        { icon: "fa-car", text: "Luxury Transportation" },
        { icon: "fa-gem", text: "Luxury",},
        
      ],
      icons2: [
        
        { icon: "fa-car", text: "Valet Parking" },
        { icon: "fa-star", text: "Luxury Ambiance" },
        { icon: "fa-music", text: "Acoustic Music" },
        { icon: "fa-taxi", text: "Transportation" },
      ]
    },
    {
      title:"Wellness and Relaxation",
      title2: "Your Path to Relaxation Starts Here – Fill Out the Form and Unwind!", 
      image: [image2, image1, image3, image4],
      description: "Rejuvenate your body and mind with our premium wellness services. Access top spas, personal trainers, beauty treatments, and holistic health experiences. Our carefully selected wellness partners provide transformative treatments, from traditional therapies to cutting-edge beauty technologies. Enjoy personalized fitness sessions, meditation classes, and rejuvenating spa treatments delivered by industry-leading professionals in luxurious settings.",
      icons1: [
        { icon: "fa-solid fa-bottle-water", text: "Water Bottle" },
        { icon: "fa-wifi", text: "Wifi" },
        { icon: "fa-car", text: "Luxury Transportation" },
        { icon: "fa-gem", text: "Luxury",},
        
      ],
      icons2: [
        
        { icon: "fa-hot-tub", text: "Massage" },
        { icon: "fa-leaf", text: "Holistic Health" },
        { icon: "fa-peace", text: "Meditation" },
        { icon: "fa-star", text: "Premium Service" },
      ]
    },

    {
      title:"Conferences",
      title2: "Transform Your Event into a Masterpiece – We’re Here to Guide You!",
      image: [image3, image2, image4, image1],
      description: "Let us handle your corporate and social events with precision. From venue selection to full-service event planning, we ensure flawless execution. Our experienced event coordinators manage every aspect, including catering, decor, entertainment, and technical requirements. Whether it's an intimate gathering or a large-scale conference, we deliver exceptional events that exceed expectations and leave lasting impressions.",
      icons1: [
        { icon: "fa-solid fa-bottle-water", text: "Water Bottle" },
        { icon: "fa-wifi", text: "Wifi" },
        { icon: "fa-car", text: "Luxury Transportation" },
        { icon: "fa-gem", text: "Luxury",},
        
      ],
      icons2: [
        
        { icon: "fa-chair", text: "Seating" },
        { icon: "fa-video", text: "Video Setup" },
        { icon: "fa-clipboard-list", text: "Registration" },
        { icon: "fa-coffee", text: "Catering" },
      ]
    },
    {
      title: "Travel and Accomodation",
      title2: "Secure Your Exclusive Professional Services With Us– Tailored to Perfection for the Discerning Few",
      image: [image4, image3, image1, image2],
      description: "Access our network of trusted professionals for business support, legal services, translation, and other specialized assistance during your stay. Our vetted experts provide seamless solutions for all your professional needs, from document preparation to business meeting coordination. We connect you with skilled interpreters, legal advisors, and business consultants who understand the nuances of both local and international operations.",
      icons1: [
        { icon: "fa-solid fa-bottle-water", text: "Water Bottle" },
        { icon: "fa-wifi", text: "Wifi" },
        { icon: "fa-car", text: "Luxury Transportation" },
        { icon: "fa-gem", text: "Luxury",},
        
      ],
      icons2: [
        
        { icon: "fa-file-contract", text: "Documentation" },
        { icon: "fa-user-tie", text: "Professional Advisors" },
        { icon: "fa-globe", text: "International Services" },
        { icon: "fa-clock", text: "24/7 Support" },
      ]
    },
    {
      
      title: "Lifestyle & Expereinces",
      title2: "Streamline Your Life with Excellence – Let’s Create the Perfect Experience for You!",
      image: [image5, image3, image1, image2],
      description: "Simplify your life with our comprehensive lifestyle management services. From personal shopping to home management, we take care of every detail. Our dedicated team handles everything from wardrobe curation and gift procurement to household maintenance and administrative tasks. We provide proactive solutions and personalized attention to ensure your lifestyle runs smoothly and efficiently.",
      icons1: [
        { icon: "fa-solid fa-bottle-water", text: "Water Bottle" },
        { icon: "fa-wifi", text: "Wifi" },
        { icon: "fa-car", text: "Luxury Transportation" },
        { icon: "fa-gem", text: "Luxury",},
        
      ],
      icons2: [
        
        { icon: "fa-tools", text: "Maintenance" },
        { icon: "fa-tasks", text: "Task Management" },
        { icon: "fa-calendar-alt", text: "Scheduling" },
        { icon: "fa-concierge-bell", text: "Concierge Support" },
      ]
    },
    {
      title: "Professional Services",
      title2: "Effortless Luxury, Expertly Crafted – Your Ultimate Travel Adventure Starts Here!",
      image: [image6, image1, image3, image2],
      description: "Let us orchestrate your travel needs with precision. From luxury transportation to exclusive excursions, we create seamless travel experiences. Our travel specialists arrange private jets, luxury vehicles, and yacht charters while crafting bespoke itineraries that showcase the best destinations. We handle all logistics, including VIP airport services, custom tours, and last-minute changes to ensure stress-free, memorable journeys.",
      icons1: [
        { icon: "fa-solid fa-bottle-water", text: "Water Bottle" },
        { icon: "fa-wifi", text: "Wifi" },
        { icon: "fa-car", text: "Luxury Transportation" },
        { icon: "fa-gem", text: "Luxury",},
        
      ],
      icons2: [
        
        { icon: "fa-passport", text: "VIP Airport Services" },
        { icon: "fa-route", text: "Travel Planning" },
        { icon: "fa-calendar-check", text: "Itinerary Management" },
        { icon: "fa-concierge-bell", text: "24/7 Assistance" },
      ]
    }
  ];

  return (
    <div className="luggage_transfer_and_deposit">
      <h1 className="transfer_service_heading1">Experience Tailored Services for Every Need</h1>
      <h1 className="transfer_service_heading2">Indulge in Services Crafted Exclusively for Your Every Desire.</h1>

      <div className="tailored_container">
        <div className="first_row1">
          {cardDetails.slice(0, 3).map((card, index) => (
            <CardComponent key={index} data={card} />
          ))}
        </div>
        <div className="second_row1">
          {cardDetails.slice(3).map((card, index) => (
            <CardComponent key={index + 3} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conceirge;
