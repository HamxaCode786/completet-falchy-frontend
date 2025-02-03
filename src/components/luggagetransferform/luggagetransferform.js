import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import Swal from "sweetalert2";

export default function Luggageransferform() {
  const { language } = useContext(TranslationContext);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    luggageType: "",
    pickupLocation: "",
    dropOffLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropOffDate: "",
    dropOffTime: "",
    phoneNumber: "",
    email: "",
  });

  const validateForm = () => {
    let tempErrors = {};
    let formIsValid = true;

    if (!formData.luggageType) {
      tempErrors.luggageType = "Luggage type is required";
      formIsValid = false;
    }

    if (!formData.pickupLocation) {
      tempErrors.pickupLocation = "Pickup location is required";
      formIsValid = false;
    }

    if (!formData.dropOffLocation) {
      tempErrors.dropOffLocation = "Drop off location is required";
      formIsValid = false;
    }

    if (!formData.pickupDate) {
      tempErrors.pickupDate = "Pickup date is required";
      formIsValid = false;
    }

    if (!formData.pickupTime) {
      tempErrors.pickupTime = "Pickup time is required";
      formIsValid = false;
    }

    if (!formData.dropOffDate) {
      tempErrors.dropOffDate = "Drop off date is required";
      formIsValid = false;
    }

    if (!formData.dropOffTime) {
      tempErrors.dropOffTime = "Drop off time is required";
      formIsValid = false;
    }

    if (!formData.phoneNumber) {
      tempErrors.phoneNumber = "Phone number is required";
      formIsValid = false;
    } else if (!/^\+?[\d\s-]+$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Invalid phone number";
      formIsValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      formIsValid = false;
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Format dates and times to match required format
        const formatDate = (date) => {
          const d = new Date(date);
          return d.toISOString().split("T")[0]; // Returns YYYY-MM-DD
        };

        const formatTime = (time) => {
          const d = new Date(time);
          return d.toTimeString().split(" ")[0].substring(0, 5); // Returns HH:mm
        };

        const payload = {
          luggage_type: formData.luggageType,
          pick_up_location: formData.pickupLocation,
          drop_off_location: formData.dropOffLocation,
          pick_up_date: formatDate(formData.pickupDate),
          pick_up_time: formatTime(formData.pickupTime),
          drop_off_date: formatDate(formData.dropOffDate),
          drop_off_time: formatTime(formData.dropOffTime),
          phone_number: formData.phoneNumber,
          email: formData.email,
        };

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/luggage-transfers/`, // Use the environment variable here
          payload
        );

        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your luggage transfer Has Been Noted. Our Team Will Contact Within 10 Minutes!",
            iconColor: "#05021f",
            confirmButtonColor: "#05021f",
            customClass: {
              popup: "swal-popup-custom",
              confirmButton: "swal-button-custom",
            },
          });
          setFormData({
            luggageType: "",
            pickupLocation: "",
            dropOffLocation: "",
            pickupDate: "",
            pickupTime: "",
            dropOffDate: "",
            dropOffTime: "",
            phoneNumber: "",
            email: "",
          });
        
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        });
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Failed to submit form. Please try again.",
          confirmButtonColor: "#05021f",
          iconColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const fetchSuggestions = async (value) => {
    if (!value) return [];

    try {
      const response = await fetch(
        `${
          process.env.REACT_APP_API_URL
        }/transfers/autocomplete/?input=${encodeURIComponent(value)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch location suggestions");
      }

      const data = await response.json();
      return data.predictions?.map((place) => ({
        description: place.description,
        latitude: place.latitude,
        longitude: place.longitude,
      }));
    } catch (error) {
      console.error("Error fetching data from API:", error);
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
          <form onSubmit={handleSubmit} method="POST">
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
                  name="luggageType"
                  value={formData.luggageType}
                  onChange={handleInputChange}
                  required
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    padding: "10px",
                    border: "none",
                    color: "black",
                    height: "52px",
                    width: "100%",
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
                  <option className="select-option" value="None Selected">
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
                  <option className="select-option" value="Suitcase">
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
                  <option className="select-option" value="Backpack">
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
                  <option className="select-option" value="Duffel">
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
                  <option className="select-option" value="Others">
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
                {errors.luggageType && (
                  <span className="error">{errors.luggageType}</span>
                )}
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
                  className="autosuggest_1"
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
                      zIndex: 1050,
                    },
                    suggestionsContainerOpen: {
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      maxHeight: "250px",
                      overflowY: "auto",
                      border: "1px solid #ccc",
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px",
                      zIndex: 9999,
                      padding: "5px 0",
                      listStyleType: "none !Important",
                    },
                    suggestion: {
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "500",
                      textAlign: "left",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      fontFamily: "'Arial', sans-serif",
                      color: "#333",
                      transition: "background-color 0.2s ease, color 0.2s ease",
                    },
                    suggestionHighlighted: {
                      backgroundColor: "#05021f",
                      color: "white",
                      borderRadius: "4px",
                      visibility: "visible !important",
                      zIndex: 9999,
                      fontWeight: "bold",
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
                    style: { width: "100%" },
                  }}
                  renderInputComponent={renderInputComponent}
                />
                {errors.pickupLocation && (
                  <span className="error">{errors.pickupLocation}</span>
                )}
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
                      zIndex: 1000,
                    },
                    suggestionsContainerOpen: {
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      maxHeight: "250px",
                      overflowY: "auto",
                      border: "1px solid #ccc",
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px",
                      zIndex: 9999,
                      padding: "5px 0",
                    },
                    suggestion: {
                      padding: "12px 16px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "500",
                      textAlign: "left",
                      fontFamily: "'Arial', sans-serif",
                      color: "#333",
                      transition: "background-color 0.2s ease, color 0.2s ease",
                    },
                    suggestionHighlighted: {
                      backgroundColor: "#05021f",
                      color: "white",
                      borderRadius: "4px",
                      visibility: "visible !important",
                      zIndex: 9999,
                      fontWeight: "700",
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
                    style: { width: "100%" },
                  }}
                  renderInputComponent={renderInputComponent}
                />
                {errors.dropOffLocation && (
                  <span className="error">{errors.dropOffLocation}</span>
                )}
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
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={(date) =>
                      setFormData({ ...formData, pickupDate: date[0] })
                    }
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
                      dateFormat: "Y-m-d",
                      minDate: "today",
                      disableMobile: true, // Force Flatpickr to use its custom UI on mobile
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
                      width: "100%",
                    }}
                  />

                  {errors.pickupDate && (
                    <span className="error">{errors.pickupDate}</span>
                  )}
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
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={(time) =>
                      setFormData({ ...formData, pickupTime: time[0] })
                    }
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
                      dateFormat: "H:i",
                      minTime: "09:00",
                      maxTime: "17:00",
                      time_24hr: true,
                      disableMobile: true, // This prevents Flatpickr from using native input on mobile devices
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
                      width: "100%",
                    }}
                  />

                  {errors.pickupTime && (
                    <span className="error">{errors.pickupTime}</span>
                  )}
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
                    name="dropOffDate"
                    value={formData.dropOffDate}
                    onChange={(date) =>
                      setFormData({ ...formData, dropOffDate: date[0] })
                    }
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
                      enableTime: false,
                      dateFormat: "Y-m-d",
                      minDate: formData.pickupDate || "today", // Ensures drop-off date is after pickup date
                      disableMobile: true, // Force custom UI on mobile devices
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
                      width: "100%",
                    }}
                  />

                  {errors.dropOffDate && (
                    <span className="error">{errors.dropOffDate}</span>
                  )}
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
                    name="dropOffTime"
                    value={formData.dropOffTime}
                    onChange={(time) =>
                      setFormData({ ...formData, dropOffTime: time[0] })
                    }
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
                      dateFormat: "H:i",
                      minTime: "09:00",
                      maxTime: "17:00",
                      time_24hr: true,
                      disableMobile: true, // Force Flatpickr to use the custom UI on mobile devices
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
                      width: "100%",
                    }}
                  />

                  {errors.dropOffTime && (
                    <span className="error">{errors.dropOffTime}</span>
                  )}
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
                    htmlFor="phoneNumber"
                    style={{
                      alignSelf: "flex-start",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {language === "en"
                      ? "Phone Number"
                      : language === "it"
                      ? "Numero di Telefono"
                      : language === "du"
                      ? "Telefoonnummer"
                      : language === "fr"
                      ? "Numéro de Téléphone"
                      : "Phone Number"}
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder={
                      language === "en"
                        ? "Phone Number"
                        : language === "it"
                        ? "Numero di Telefono"
                        : language === "du"
                        ? "Telefoonnummer"
                        : language === "fr"
                        ? "Numéro de Téléphone"
                        : "Phone Number"
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
                      width: "100%",
                    }}
                  />
                  {errors.phoneNumber && (
                    <span className="error">{errors.phoneNumber}</span>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="email"
                    style={{
                      alignSelf: "flex-start",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {language === "en"
                      ? "Email Address"
                      : language === "it"
                      ? "Indirizzo Email"
                      : language === "du"
                      ? "E-mailadres"
                      : language === "fr"
                      ? "Adresse e-mail"
                      : "Email Address"}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={
                      language === "en"
                        ? "Email Address"
                        : language === "it"
                        ? "Indirizzo Email"
                        : language === "du"
                        ? "E-mailadres"
                        : language === "fr"
                        ? "Adresse e-mail"
                        : "Email Address"
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
                      width: "100%",
                    }}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
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
              {errors.submit && <span className="error">{errors.submit}</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
