import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../contextapi/translationContext";
import { SelectedCardContext } from "../../contextapi/rentluxurycontext";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useBrand } from "../../contextapi/brandcontext";

const Transfercards = () => {
  const { language } = useContext(TranslationContext);
  const { selectedBrand, resetBrand } = useBrand();
  const { setSelectedCard } = useContext(SelectedCardContext);
  const [cardsData, setCardsData] = useState([]);
  const cardsPerPage = 6;
  const [loading, setLoading] = useState(true); // Added loading state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [hasMore, setHasMore] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(cardsPerPage);
  const [filteredCards, setFilteredCards] = useState([]);
  const fetchCardData = async () => {
    try {
      const response = await axios.get(
        "https://nijaga8856.pythonanywhere.com/rent-luxury/cars"
      ); // Replace with your API URL

      // Map the response data to match your required structure
      const mappedData = response.data.map((item) => ({
        id: item.id, // Map API ID to your desired ID
        title: item.car_name, // Map API vehicle_name to title
        obsidianBlack: item.color, // Map API paint_color to obsidianBlack
        horsepower2: item.horse_power, // Map API horsepower to horsepower2
        mpg: item.mileage, // Map API mileage to mpg
        carMake: item.car_make, // Extract car make (assuming first word is make)
        topSpeed: item.top_speed, // Map API max_speed to topSpeed
        seatingCapacity: item.seating_capacity, // Map API seats to seatingCapacity
        fuelType: item.fuel_type, // Map API fuel to fuelType
        img: item.car_image, // Map API image_url to img
        img2: item.company_logo, // Map API logo_url to img2
      }));

      setCardsData(mappedData); // Store the fetched and mapped data in state
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching card data:", error);
      setCardsData([]); // Return an empty array in case of error
      setLoading(false); // Set loading to false on error as well
    }
  };

  // Fetch the data when the component mounts
  useEffect(() => {
    fetchCardData();
  }, []);

  // Handle card click to set selected card

  // Pagination logic
  const loadMoreData = () => {
    if (cardsToShow >= cardsData.length) {
      setHasMore(false);
      return;
    }
    setCardsToShow(cardsToShow + cardsPerPage);
  };

  useEffect(() => {
    // If the search query is typed, only use the search query for filtering
    const combinedQuery =
      searchQuery.trim() !== ""
        ? `${searchQuery}`.toLowerCase() // Only use searchQuery if it's typed
        : `${searchQuery} ${selectedBrand || ""}`.toLowerCase(); // Otherwise, combine searchQuery and selectedBrand

    const filtered = cardsData
      .slice(0, cardsToShow) // Show up to `cardsToShow`
      .filter((card) =>
        // Check if the combined search query matches card details
        `${card.title} ${card.carMake} ${card.obsidianBlack}`
          .toLowerCase()
          .includes(combinedQuery)
      );

    setFilteredCards(filtered);
  }, [cardsData, cardsToShow, searchQuery, selectedBrand]); // Re-run effect when any dependency changes

  const resetFilters = () => {
    setSearchQuery("");
    resetBrand();
  };

  const handleCardClick = (cardId) => {
    const selected = cardsData.find((card) => card.id === cardId);
    if (selected) {
      setSelectedCard(selected);
    } else {
    }
  };

  return (
    <div>
      <h1 className="transfer_service_heading1">
        {language === "en"
          ? "Experience elegance and comfort"
          : language === "it"
          ? "Sperimenta eleganza e comfort"
          : language === "du"
          ? "Ervaar elegantie en comfort"
          : language === "fr"
          ? "Découvrez l'élégance et le confort"
          : "Experience elegance and comfort"}
      </h1>
      <h1 className="transfer_service_heading2">
        {language === "en"
          ? "Sense the Pulse of Perfection on Every Mile You Travel."
          : language === "it"
          ? "Senti il battito della perfezione in ogni miglio che percorri."
          : language === "du"
          ? "Voel de pols van perfectie op elke mijl die je reist."
          : language === "fr"
          ? "Sentez le pouls de la perfection à chaque kilomètre que vous parcourez."
          : "Sense the Pulse of Perfection on Every Mile You Travel."}
      </h1>

      <div style={{ margin: "20px auto", textAlign: "center" }}>
        <input
          type="text"
          placeholder={
            language === "en"
              ? "Search by name, make, or model"
              : language === "it"
              ? "Cerca per nome, marca o modello"
              : language === "du"
              ? "Zoek op naam, merk of model"
              : language === "fr"
              ? "Rechercher par nom, marque ou modèle"
              : "Search by name, make, or model"
          }
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "600px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button className="reset_filters_button" onClick={resetFilters}>
          Show All Cars
        </button>
      </div>

      <InfiniteScroll
        dataLength={filteredCards.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={
          filteredCards.length > 0 && (
          <div className="cards_div_transfer">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="card_transfer12 custom_height_card">
                <Skeleton height={200} width="100%" /> {/* For image */}
                <Skeleton
                  height={24}
                  width={150}
                  style={{ margin: "10px 0" }}
                />{" "}
                {/* For car name */}
                <div className="card_specs_div">
                  <div className="icon_specs_div" style={{ gap: "15px" }}>
                    <div
                      className="testing_123"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        width: "100%",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Skeleton
                        height={20}
                        width={20}
                        style={{ margin: "0 10px" }}
                      />{" "}
                      {/* Icon for color */}
                      <Skeleton height={20} width={60} />{" "}
                      {/* Text for "Color" */}
                    </div>
                    <div
                      className="testing_123"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        width: "100%",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Skeleton
                        height={20}
                        width={20}
                        style={{ margin: "0 10px" }}
                      />{" "}
                      {/* Icon for power */}
                      <Skeleton height={20} width={60} />{" "}
                      {/* Text for "Power" */}
                    </div>
                    <div
                      className="testing_123"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        width: "100%",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Skeleton
                        height={20}
                        width={20}
                        style={{ margin: "0 10px" }}
                      />{" "}
                      {/* Icon for mileage */}
                      <Skeleton height={20} width={60} />{" "}
                      {/* Text for "Mileage" */}
                    </div>
                  </div>
                  <div className="icon_specs_div" style={{ gap: "15px" }}>
                    <Skeleton
                      height={20}
                      width={100}
                      style={{ margin: "5px 0" }}
                    />{" "}
                    {/* Specs (like obsidianBlack) */}
                    <Skeleton
                      height={20}
                      width={100}
                      style={{ margin: "5px 0" }}
                    />{" "}
                    {/* Specs (like horsepower) */}
                    <Skeleton
                      height={20}
                      width={100}
                      style={{ margin: "5px 0" }}
                    />{" "}
                    {/* Specs (like mpg) */}
                  </div>
                </div>
                <div className="last_rent_now_div">
                  <Skeleton height={40} width="100%" />{" "}
                  {/* For Rent Now button */}
                </div>
              </div>
            ))}
          </div>
          )
        }
        endMessage={
          <div style={{ textAlign: "center" }}>
            <p>No more cars to display</p>
          </div>
        }
      >
        <div className="cards_div_transfer">
          {loading
            ? // Skeleton loading state for cards
              [...Array(6)].map((_, index) => (
                <div key={index} className="card_transfer12 custom_height_card">
                  <Skeleton height={200} width="100%" /> {/* For image */}
                  <Skeleton
                    height={24}
                    width={150}
                    style={{ margin: "10px 0" }}
                  />{" "}
                  {/* For car name */}
                  <div className="card_specs_div">
                    <div className="icon_specs_div" style={{ gap: "15px" }}>
                      <div
                        className="testing_123"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          width: "100%",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Skeleton
                          height={20}
                          width={20}
                          style={{ margin: "0 10px" }}
                        />{" "}
                        {/* Icon for color */}
                        <Skeleton height={20} width={60} />{" "}
                        {/* Text for "Color" */}
                      </div>
                      <div
                        className="testing_123"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          width: "100%",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Skeleton
                          height={20}
                          width={20}
                          style={{ margin: "0 10px" }}
                        />{" "}
                        {/* Icon for power */}
                        <Skeleton height={20} width={60} />{" "}
                        {/* Text for "Power" */}
                      </div>
                      <div
                        className="testing_123"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          width: "100%",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Skeleton
                          height={20}
                          width={20}
                          style={{ margin: "0 10px" }}
                        />{" "}
                        {/* Icon for mileage */}
                        <Skeleton height={20} width={60} />{" "}
                        {/* Text for "Mileage" */}
                      </div>
                    </div>
                    <div className="icon_specs_div" style={{ gap: "15px" }}>
                      <Skeleton
                        height={20}
                        width={100}
                        style={{ margin: "5px 0" }}
                      />{" "}
                      {/* Specs (like obsidianBlack) */}
                      <Skeleton
                        height={20}
                        width={100}
                        style={{ margin: "5px 0" }}
                      />{" "}
                      {/* Specs (like horsepower) */}
                      <Skeleton
                        height={20}
                        width={100}
                        style={{ margin: "5px 0" }}
                      />{" "}
                      {/* Specs (like mpg) */}
                    </div>
                  </div>
                  <div className="last_rent_now_div">
                    <Skeleton height={40} width="100%" />{" "}
                    {/* For Rent Now button */}
                  </div>
                </div>
              ))
            : filteredCards.map((card) => (
                <div
                  key={card.id}
                  className="card_transfer12 custom_height_card"
                >
                  <div className="card_luxury_background_image">
                    <img
                      src={card.img2}
                      alt="Logo"
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                      }}
                      loading="lazy"
                    />
                    <img
                      className="card_transfer1_img1"
                      src={card.img}
                      alt="cards_1"
                      loading="lazy"
                    />
                  </div>
                  <h4>{card.title}</h4>
                  <div className="card_specs_div">
                    <div className="icon_specs_div" style={{ gap: "15px" }}>
                      <div
                        className="testing_123"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          width: "100%",
                          justifyContent: "flex-start",
                        }}
                      >
                        <i
                          className="fas fa-palette"
                          style={{ width: "20px", textAlign: "center" }}
                        ></i>
                        <p style={{ margin: 0 }}>Color</p>
                      </div>
                      <div
                        className="testing_123"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          width: "100%",
                          justifyContent: "flex-start",
                        }}
                      >
                        <i
                          className="fas fa-tachometer-alt"
                          style={{ width: "20px", textAlign: "center" }}
                        ></i>
                        <p style={{ margin: 0 }}>Power</p>
                      </div>
                      <div
                        className="testing_123"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          width: "100%",
                          justifyContent: "flex-start",
                        }}
                      >
                        <i
                          className="fas fa-road"
                          style={{ width: "20px", textAlign: "center" }}
                        ></i>
                        <p style={{ margin: 0 }}>Mileage</p>
                      </div>
                    </div>
                    <div className="icon_specs_div" style={{ gap: "15px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          width: "100%",
                        }}
                      >
                        <p
                          className="card_specs_p1"
                          style={{ margin: 0, textAlign: "left" }}
                        >
                          {card.obsidianBlack}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          width: "100%",
                        }}
                      >
                        <p
                          className="card_specs_p1"
                          style={{ margin: 0, textAlign: "left" }}
                        >
                          {card.horsepower2} Hp
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          width: "100%",
                        }}
                      >
                        <p
                          className="card_specs_p1"
                          style={{ margin: 0, textAlign: "left" }}
                        >
                          {card.mpg} MPG
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="last_rent_now_div">
                    <Link to="/rentluxuryforward">
                      <h4 onClick={() => handleCardClick(card.id)}>
                        {language === "en"
                          ? "Rent Now"
                          : language === "it"
                          ? "Noleggia ora"
                          : language === "du"
                          ? "Huur nu"
                          : language === "fr"
                          ? "Louer maintenant"
                          : "Rent Now"}
                      </h4>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Transfercards;
