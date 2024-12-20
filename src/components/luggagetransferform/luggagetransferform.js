import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css"; // Import Flatpickr CSS for styling
import { MDBInput } from "mdb-react-ui-kit";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";

export default function Luggageransferform() {
  const { language } = useContext(TranslationContext);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropOffLocation: "",
  });

  const fetchSuggestions = async (value) => {
    if (!value) return [];

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}&limit=5`
      );
      return response.data.map((place) => ({
        description: place.display_name,
        latitude: place.lat,
        longitude: place.lon,
      }));
    } catch (error) {
      console.error("Error fetching data from Nominatim:", error);
      return [];
    }
  };

  const handleSuggestionsFetchRequested = async ({ value }, field) => {
    const suggestions = await fetchSuggestions(value);
    if (field === "pickupLocation") {
      setPickupSuggestions(suggestions);
    } else if (field === "dropOffLocation") {
      setDropOffSuggestions(suggestions);
    }
  };

  const handleSuggestionSelected = (
    event,
    { suggestion, suggestionValue, sectionIndex, method },
    field
  ) => {
    const { description } = suggestion;
    setFormData({
      ...formData,
      [field]: description,
    });
  };

  // Autosuggest input component
  const renderInputComponent = (inputProps) => (
    <input
      {...inputProps}
      style={{
        backgroundColor: "#f9f9f9",
        fontWeight: 400,
        fontSize: "16px",
        padding: "10px",
        border: "none",
        color: "black",
        borderColor: "white",
        height: "52px",
        width: "100%",
      }}
    />
  );

  const getSuggestionValue = (suggestion) => suggestion.description;
  const renderSuggestion = (suggestion) => <div>{suggestion.description}</div>;

  return (
    <div>
      <div className="luggage-section">
        <h1 className="luggage-heading">
          {language === "en"
            ? "Book Your Luggage Transfer"
            : language === "it"
            ? "Prenota il Tuo Trasferimento Baggagli"
            : language === "du"
            ? "Boek Je Bagage Transfer"
            : language === "fr"
            ? "Réservez Votre Transfert de Bagages"
            : "Book Your Luggage Transfer"}
        </h1>
        <h2 className="luggage-heading2">
          {language === "en"
            ? "Your Luggage Transfer—Where Every Journey Begins with Effortless Luxury"
            : language === "it"
            ? "Il Tuo Trasferimento Baggagli—Dove Ogni Viaggio Inizia con Lusso Senza Sforzo"
            : language === "du"
            ? "Je Bagage Transfer—Waar Elke Reis Begint met Moeiteloze Luxe"
            : language === "fr"
            ? "Votre Transfert de Bagages—Là Où Chaque Voyage Commence avec un Luxe Sans Effort"
            : "Your Luggage Transfer—Where Every Journey Begins with Effortless Luxury"}
        </h2>

        <div className="form-section">
          <form action="#" method="POST">
            <div className="form-layout">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="luggage_type"
                  style={{
                    alignSelf: "flex-start",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {language === "en"
                    ? "Luggage Type"
                    : language === "it"
                    ? "Tipo di Bagaglio"
                    : language === "du"
                    ? "Bagage Type"
                    : language === "fr"
                    ? "Type de Bagages"
                    : "Luggage Type"}
                </label>
                <select
                  id="luggage_type"
                  name="luggage_type"
                  required
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    padding: "10px",
                    border: "none",
                    color: "black",
                    height: "52px",
                  }}
                >
                  <option value="" disabled selected hidden>
                    {language === "en"
                      ? "Select Your Luggage Type"
                      : language === "it"
                      ? "Seleziona il Tipo di Bagaglio"
                      : language === "du"
                      ? "Selecteer je Bagagetype"
                      : language === "fr"
                      ? "Sélectionnez Votre Type de Bagages"
                      : "Select Your Luggage Type"}
                  </option>
                  <option value="None Selected">
                    {language === "en"
                      ? "None"
                      : language === "it"
                      ? "Nessuno"
                      : language === "du"
                      ? "Geen"
                      : language === "fr"
                      ? "Aucun"
                      : "None"}
                  </option>
                  <option value="Suitcase">
                    {language === "en"
                      ? "Suitcase"
                      : language === "it"
                      ? "Valigia"
                      : language === "du"
                      ? "Koffer"
                      : language === "fr"
                      ? "Valise"
                      : "Suitcase"}
                  </option>
                  <option value="Backpack">
                    {language === "en"
                      ? "Backpack"
                      : language === "it"
                      ? "Zaino"
                      : language === "du"
                      ? "Rugzak"
                      : language === "fr"
                      ? "Sac à dos"
                      : "Backpack"}
                  </option>
                  <option value="Duffel">
                    {language === "en"
                      ? "Duffel Bag"
                      : language === "it"
                      ? "Borsa da viaggio"
                      : language === "du"
                      ? "Duffel Tas"
                      : language === "fr"
                      ? "Sac de sport"
                      : "Duffel Bag"}
                  </option>
                  <option value="Others">
                    {language === "en"
                      ? "Others"
                      : language === "it"
                      ? "Altri"
                      : language === "du"
                      ? "Anderen"
                      : language === "fr"
                      ? "Autres"
                      : "Others"}
                  </option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="pickupLocation"
                  style={{
                    alignSelf: "flex-start",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {language === "en"
                    ? "Pickup Location"
                    : language === "it"
                    ? "Luogo di Ritiro"
                    : language === "du"
                    ? "Ophaallocatie"
                    : language === "fr"
                    ? "Lieu de Prise en Charge"
                    : "Pickup Location"}
                </label>
                <Autosuggest
                  suggestions={pickupSuggestions}
                  onSuggestionsFetchRequested={({ value }) =>
                    handleSuggestionsFetchRequested({ value }, "pickupLocation")
                  }
                  onSuggestionsClearRequested={() => setPickupSuggestions([])}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  onSuggestionSelected={(e, data) =>
                    handleSuggestionSelected(e, data, "pickupLocation")
                  }
                  theme={{
                    container: {
                      position: "relative",
                      zIndex: 1050, // Ensures that the container has a higher stacking order
                    },
                    suggestionsContainerOpen: {
                      position: "absolute",
                      top: "100%", // Positioning the suggestion container directly below the input
                      left: 0,
                      right: 0,
                      maxHeight: "250px", // Increased max height for better visibility
                      overflowY: "auto", // Makes the suggestions container scrollable if the list is too long
                      border: "1px solid #ccc", // Border to separate the dropdown from the rest of the page
                      backgroundColor: "#fff", // Clean white background
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Softer shadow with higher spread for a more polished look
                      borderRadius: "8px", // Rounded corners for a more modern look
                      zIndex: 9999, // Ensures the suggestions container appears above other content
                      padding: "5px 0", // Adds space between suggestions and the border
                    },
                    suggestion: {
                      padding: "12px 16px", // Increase padding for better readability and clickability
                      cursor: "pointer", // Indicates that each suggestion is clickable
                      fontSize: "16px",
                      fontWeight: "500",
                      textAlign: "left",
                      // Set a comfortable font size
                      fontFamily: "'Arial', sans-serif", // Uniform and clean font style
                      color: "#333", // Dark text for better contrast and readability
                      transition: "background-color 0.2s ease, color 0.2s ease", // Smooth transition for hover effects
                    },
                    suggestionHighlighted: {
                      backgroundColor: "#05021f", // Highlight suggestion with a blue color for emphasis
                      color: "grey", // Change text color to white when highlighted
                      borderRadius: "4px",
                      visibility: "visible !important",
                      zIndex: 9999,
                      fontWeight: "700",
                      // Rounded corners for the highlighted suggestion
                    },
                  }}
                  inputProps={{
                    value: formData.pickupLocation,
                    onChange: (e, { newValue }) =>
                      setFormData({ ...formData, pickupLocation: newValue }),
                    placeholder:
                      language === "en"
                        ? "Select Your Pickup Location"
                        : language === "it"
                        ? "Seleziona il Luogo di Ritiro"
                        : language === "du"
                        ? "Selecteer je Ophalen Locatie"
                        : language === "fr"
                        ? "Sélectionnez Votre Lieu de Prise en Charge"
                        : "Select Your Pickup Location",
                    required: true,
                    style: { width: "100%" }, // Set input width to 100% to ensure it's full width
                  }}
                  renderInputComponent={renderInputComponent}
                />
              </div>

              {/* Dropoff Location Autosuggest */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="dropoffLocation"
                  style={{
                    alignSelf: "flex-start",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {language === "en"
                    ? "Drop Off Location"
                    : language === "it"
                    ? "Luogo di Consegna"
                    : language === "du"
                    ? "Afleverlocatie"
                    : language === "fr"
                    ? "Lieu de Dépôt"
                    : "Drop Off Location"}
                </label>
                <Autosuggest
                  suggestions={dropOffSuggestions}
                  onSuggestionsFetchRequested={({ value }) =>
                    handleSuggestionsFetchRequested(
                      { value },
                      "dropOffLocation"
                    )
                  }
                  onSuggestionsClearRequested={() => setDropOffSuggestions([])}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  onSuggestionSelected={(e, data) =>
                    handleSuggestionSelected(e, data, "dropOffLocation")
                  }
                  theme={{
                    container: {
                      position: "relative",
                      zIndex: 1000, // Ensures that the container has a higher stacking order
                    },
                    suggestionsContainerOpen: {
                      position: "absolute",
                      top: "100%", // Positioning the suggestion container directly below the input
                      left: 0,
                      right: 0,
                      maxHeight: "250px", // Increased max height for better visibility
                      overflowY: "auto", // Makes the suggestions container scrollable if the list is too long
                      border: "1px solid #ccc", // Border to separate the dropdown from the rest of the page
                      backgroundColor: "#fff", // Clean white background
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Softer shadow with higher spread for a more polished look
                      borderRadius: "8px", // Rounded corners for a more modern look
                      zIndex: 9999, // Ensures the suggestions container appears above other content
                      padding: "5px 0", // Adds space between suggestions and the border
                    },
                    suggestion: {
                      padding: "12px 16px", // Increase padding for better readability and clickability
                      cursor: "pointer", // Indicates that each suggestion is clickable
                      fontSize: "16px",
                      fontWeight: "500",
                      textAlign: "left",
                      fontFamily: "'Arial', sans-serif", // Uniform and clean font style
                      color: "#333", // Dark text for better contrast and readability
                      transition: "background-color 0.2s ease, color 0.2s ease", // Smooth transition for hover effects
                    },
                    suggestionHighlighted: {
                      backgroundColor: "#05021f", // Highlight suggestion with a blue color for emphasis
                      color: "grey", // Change text color to grey when highlighted
                      borderRadius: "4px",
                      visibility: "visible !important", // Ensure the highlighted suggestion is visible
                      zIndex: 9999,
                      fontWeight: "700", // Emphasize highlighted suggestion text
                    },
                  }}
                  inputProps={{
                    value: formData.dropOffLocation,
                    onChange: (e, { newValue }) =>
                      setFormData({ ...formData, dropOffLocation: newValue }),
                    placeholder:
                      language === "en"
                        ? "Select Your Dropoff Location"
                        : language === "it"
                        ? "Seleziona il Luogo di Consegna"
                        : language === "du"
                        ? "Selecteer je Aflever Locatie"
                        : language === "fr"
                        ? "Sélectionnez Votre Lieu de Dépôt"
                        : "Select Your Dropoff Location",
                    required: true,
                    style: { width: "100%" }, // Set input width to 100% to ensure it's full width
                  }}
                  renderInputComponent={renderInputComponent}
                />
              </div>

              <div
                className="lugagge_transfer_mobile"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "3%",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="pickupdate"
                    style={{
                      alignSelf: "flex-start",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {language === "en"
                      ? "Pick Up Date"
                      : language === "it"
                      ? "Data di Ritiro"
                      : language === "du"
                      ? "Ophaaldatum"
                      : language === "fr"
                      ? "Date de Prise en Charge"
                      : "Pick Up Date"}
                  </label>
                  <Flatpickr
                    id="pickupdate"
                    name="pickupdate"
                    placeholder={
                      language === "en"
                        ? "Select Your Pick Up Date"
                        : language === "it"
                        ? "Seleziona la Data di Ritiro"
                        : language === "du"
                        ? "Selecteer je Ophalen Datum"
                        : language === "fr"
                        ? "Sélectionnez Votre Date de Prise en Charge"
                        : "Select Your Pick Up Date"
                    }
                    required
                    options={{
                      enableTime: false,
                      dateFormat: "F j, Y",
                    }}
                    style={{
                      backgroundColor: "#f9f9f9",
                      fontWeight: 400,
                      fontSize: "16px",
                      padding: "10px",
                      border: "none",
                      color: "black",
                      borderColor: "white",
                      height: "52px",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="pickuptime"
                    style={{
                      alignSelf: "flex-start",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {language === "en"
                      ? "Pick Up Time"
                      : language === "it"
                      ? "Orario di Ritiro"
                      : language === "du"
                      ? "Ophaaltijd"
                      : language === "fr"
                      ? "Heure de Prise en Charge"
                      : "Pick Up Time"}
                  </label>
                  <Flatpickr
                    id="pickuptime"
                    name="pickuptime"
                    placeholder={
                      language === "en"
                        ? "Select Your Pick Up Time"
                        : language === "it"
                        ? "Seleziona l'Orario di Ritiro"
                        : language === "du"
                        ? "Selecteer je Ophalen Tijd"
                        : language === "fr"
                        ? "Sélectionnez Votre Heure de Prise en Charge"
                        : "Select Your Pick Up Time"
                    }
                    required
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "g:i K",
                    }}
                    style={{
                      backgroundColor: "#f9f9f9",
                      fontWeight: 400,
                      fontSize: "16px",
                      padding: "10px",
                      border: "none",
                      color: "black",
                      borderColor: "white",
                      height: "52px",
                    }}
                  />
                </div>
              </div>

              <div
                className="lugagge_transfer_mobile"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "3%",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="dropOffDate"
                    style={{
                      alignSelf: "flex-start",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {language === "en"
                      ? "Drop Off Date"
                      : language === "it"
                      ? "Data di Consegna"
                      : language === "du"
                      ? "Afleverdatum"
                      : language === "fr"
                      ? "Date de Dépôt"
                      : "Drop Off Date"}
                  </label>
                  <Flatpickr
                    id="dropOffDate"
                    name="dropoffdate"
                    placeholder={
                      language === "en"
                        ? "Select Your Drop Off Date"
                        : language === "it"
                        ? "Seleziona la Data di Consegna"
                        : language === "du"
                        ? "Selecteer je Aflever Datum"
                        : language === "fr"
                        ? "Sélectionnez Votre Date de Dépôt"
                        : "Select Your Drop Off Date"
                    }
                    required
                    options={{
                      enableTime: true,
                      dateFormat: "F j, Y g:i K",
                    }}
                    style={{
                      backgroundColor: "#f9f9f9",
                      fontWeight: 400,
                      fontSize: "16px",
                      padding: "10px",
                      border: "none",
                      color: "black",
                      borderColor: "white",
                      height: "52px",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="dropOffTime"
                    style={{
                      alignSelf: "flex-start",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {language === "en"
                      ? "Drop Off Time"
                      : language === "it"
                      ? "Orario di Consegna"
                      : language === "du"
                      ? "Aflevertijd"
                      : language === "fr"
                      ? "Heure de Dépôt"
                      : "Drop Off Time"}
                  </label>
                  <Flatpickr
                    id="dropOffTime"
                    name="dropofftime"
                    placeholder={
                      language === "en"
                        ? "Select Your Drop Off Time"
                        : language === "it"
                        ? "Seleziona l'Orario di Consegna"
                        : language === "du"
                        ? "Selecteer je Aflever Tijd"
                        : language === "fr"
                        ? "Sélectionnez Votre Heure de Dépôt"
                        : "Select Your Drop Off Time"
                    }
                    required
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "g:i K",
                    }}
                    style={{
                      backgroundColor: "#f9f9f9",
                      fontWeight: 400,
                      fontSize: "16px",
                      padding: "10px",
                      border: "none",
                      color: "black",
                      borderColor: "white",
                      height: "52px",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="pickupLocation"
                  style={{
                    alignSelf: "flex-start",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {language === "en"
                    ? "Contact Information"
                    : language === "it"
                    ? "Informazioni di Contatto"
                    : language === "du"
                    ? "Contactinformatie"
                    : language === "fr"
                    ? "Informations de Contact"
                    : "Contact Information"}
                </label>
                <input
                  id="pickupLocation"
                  type="text"
                  name="pickup_location"
                  placeholder={
                    language === "en"
                      ? "Contact Information"
                      : language === "it"
                      ? "Informazioni di Contatto"
                      : language === "du"
                      ? "Contactinformatie"
                      : language === "fr"
                      ? "Informations de Contact"
                      : "Contact Information"
                  }
                  required
                  style={{
                    backgroundColor: "#f9f9f9",
                    fontWeight: 400,
                    fontSize: "16px",
                    padding: "10px",
                    border: "none",
                    color: "black",
                    borderColor: "white",
                    height: "52px",
                  }}
                />
              </div>
            </div>

            <div className="buttonWrapper">
              <button type="submit">
                {language === "en"
                  ? "Reserve Now"
                  : language === "it"
                  ? "Prenota Ora"
                  : language === "du"
                  ? "Reserveer Nu"
                  : language === "fr"
                  ? "Réservez Maintenant"
                  : "Reserve Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
