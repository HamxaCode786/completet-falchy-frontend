import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import Autosuggest from "react-autosuggest";
import { MDBInput } from "mdb-react-ui-kit";

const Payment = ({ selectedCard }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    paymentMethod: "",
    accountNumber: "",
    expirationDate: null,
    cvc: "",
    pickupDate: null,
    numberOfPersons: "",
    pickupLocation: "",
    dropOffLocation: "",
    luggageQuantity: "",
  });

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulating API call
      const response = await fetch("https://api.example.com/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Payment information submitted successfully!");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          contact: "",
          paymentMethod: "",
          accountNumber: "",
          expirationDate: null,
          cvc: "",
          pickupDate: null,
          numberOfPersons: "",
          pickupLocation: "",
          dropOffLocation: "",
          luggageQuantity: "",
        });
      } else {
        alert("Failed to submit payment information");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting payment information");
    }
  };

  const fetchSuggestions = async (value) => {
    if (!value) return [];

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${value}&limit=5`
    );
    const data = await response.json();
    return data.map((place) => ({
      description: place.display_name,
      latitude: place.lat,
      longitude: place.lon,
    }));
  };

  const handleSuggestionsFetchRequested = async ({ value }, field) => {
    const suggestions = await fetchSuggestions(value);
    if (field === "pickupLocation") {
      setPickupSuggestions(suggestions);
    } else if (field === "dropOffLocation") {
      setDropOffSuggestions(suggestions);
    }
  };

  // Handle selection of suggestion
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

  return (
    <div className="payment_form">
      <h3 className="transfer_service_heading_form">
        Arrive with grace leave an impression, luxurytransfer redefined
      </h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label="Enter Your Contact Information"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label="Account Number"
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>

        <div className="last_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <MDBInput
              label="Expiration Date"
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              as={Flatpickr}
              options={{
                enableTime: false,
                dateFormat: "F j, Y",
                defaultDate: formData.expirationDate,
              }}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                fontWeight: 600,
                fontSize: "16px",
                padding: "10px",
                width: "100%",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <MDBInput
              label="Enter Your CVC"
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                fontWeight: 600,
                fontSize: "16px",
                padding: "10px",
              }}
            />
          </Form.Group>
        </div>
        <div className="last_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <MDBInput
              label="Number of Persons"
              type="number"
              name="numberOfPersons"
              value={formData.numberOfPersons}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                fontWeight: 600,
                fontSize: "16px",
                padding: "10px",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPickupDate">
  <div style={{ position: "relative" }}>
    {/* Floating Label */}
    <label
      htmlFor="pickupDate"
      style={{
        position: "absolute",
        backgroundColor:"#f9f9f9",
        top: formData.pickupDate ? "-10px" : "50%",
        left: "10px",
        transform: formData.pickupDate ? "none" : "translateY(-50%)",
        fontSize: formData.pickupDate ? "12px" : "16px", // Dynamic font size
        color: formData.pickupDate ? "#495057" : "#6c757d", // Color based on state
        transition: "all 0.3s ease", // Smooth transition for floating effect
        pointerEvents: "none",
        background: "#fff", // Prevent overlap with input content
        padding: "0 5px", // Padding around the label text
        zIndex: 1, // Ensure it stays above the input field
      }}
    >
      Pickup Date
    </label>

    {/* Flatpickr Input */}
    <Flatpickr
      className="form-control"
      name="pickupDate"
      value={formData.pickupDate}
      onChange={(date) => handleDateChange(date, "pickupDate")}
      options={{
        dateFormat: "F j, Y",
        minDate: "today",
        disableMobile: true,
      }}
      style={{
        backgroundColor:"#f9f9f9",
        border: "1px solid #ced4da", // Border with MDBInput-like styling
        borderRadius: "5px", // Smooth rounded corners
        padding: "10px", // Padding to maintain height and spacing
        paddingTop: "18px", // Extra padding to accommodate floating label
        fontWeight: 400, // Lighter font weight for a sleek look
        fontSize: "16px", // Standard font size for MDBInput
        height: "45px", // Fixed height for consistency
        color: "#495057", // Default text color
        outline: "none", // Remove default outline
        transition: "border-color 0.3s, box-shadow 0.3s", // Smooth hover and focus effects
        boxShadow: "none", // No shadow initially
      }}
      onFocus={(e) => (e.target.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)")}
      onBlur={(e) => (e.target.style.boxShadow = "none")}
    />
  </div>
</Form.Group>


        </div>
        <div className="last_div">
          {/* Drop Off Location */}
          <Form.Group className="mb-3" controlId="formDropOffLocation">
  <MDBInput 
    type="text"
    label="Drop-off Location" // Optional label
    value={formData.dropOffLocation}
    onChange={handleInputChange}
    name="dropOffLocation"
    style={{
      backgroundColor: "#f9f9f9",
      border: "none",
      fontWeight: 600,
      fontSize: "16px",
      padding: "10px",
      width: "100%",
      color: "#575b62", // Placeholder text color
    }}
    className="form-control" // MDB class to apply default styling
  >
    <Autosuggest
      suggestions={dropOffSuggestions}
      onSuggestionsFetchRequested={(e) =>
        handleSuggestionsFetchRequested(e, "dropOffLocation")
      }
      onSuggestionsClearRequested={() => setDropOffSuggestions([])}
      getSuggestionValue={(suggestion) => suggestion.description}
      renderSuggestion={(suggestion) => (
        <div>{suggestion.description}</div>
      )}
      inputProps={{
        value: formData.dropOffLocation,
        onChange: handleInputChange,
        name: "dropOffLocation",
        style: {
          backgroundColor: "#f9f9f9",
          border: "none",
          fontWeight: 600,
          fontSize: "16px",
          padding: "10px",
          width: "100%",
          color: "#575b62", // Placeholder text color
        },
      }}
      onSuggestionSelected={(e, data) =>
        handleSuggestionSelected(e, data, "dropOffLocation")
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
          maxHeight: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          backgroundColor: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          zIndex: 9999,
        },
        suggestion: {
          padding: "10px",
          cursor: "pointer",
        },
        suggestionHighlighted: {
          backgroundColor: "#d3d3d3",
        },
      }}
    />
  </MDBInput>
</Form.Group>

          {/* Pickup Location */}
          <Form.Group className="mb-3" controlId="formPickupLocation">
            <Autosuggest
              suggestions={pickupSuggestions} // Removed slice
              onSuggestionsFetchRequested={(e) =>
                handleSuggestionsFetchRequested(e, "pickupLocation")
              }
              onSuggestionsClearRequested={() => setPickupSuggestions([])}
              getSuggestionValue={(suggestion) => suggestion.description}
              renderSuggestion={(suggestion) => (
                <div>{suggestion.description}</div>
              )}
              inputProps={{
                value: formData.pickupLocation,
                onChange: handleInputChange,
                name: "pickupLocation",
                style: {
                  backgroundColor: "#f9f9f9",
                  border: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "10px",
                  width: "100%",
                  color: "#34434d", // Placeholder text color
                },
                placeholder: "Pickup Location",
              }}
              onSuggestionSelected={(e, data) =>
                handleSuggestionSelected(e, data, "pickupLocation")
              }
              theme={{
                container: {
                  position: "relative",
                  zIndex: 1050, // Ensure suggestions overlay without disturbing other UI elements
                },
                suggestionsContainerOpen: {
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: "200px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  zIndex: 9999,
                },
                suggestion: {
                  padding: "10px",
                  cursor: "pointer",
                },
                suggestionHighlighted: {
                  backgroundColor: "#d3d3d3",
                },
              }}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            label="Luggage Quantity"
            type="number"
            name="luggageQuantity"
            value={formData.luggageQuantity}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRadio">
          <div
            style={{
              marginBottom: "10px",
              padding: "15px",
              border: "1px solid #ced4da",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{
                marginBottom: "10px",
                color: "#585b5e",
                fontWeight: 600,
              }}
            >
              Choose Your Payment Method
            </div>
            <Form.Check
              type="radio"
              name="paymentMethod"
              id="visa"
              value="visa"
              label={
                <span>
                  <i
                    className="fa-brands fa-cc-visa"
                    style={{ marginRight: "8px" }}
                  ></i>
                  Visa Card
                </span>
              }
              style={{
                color: "#1B1B1B",
                marginBottom: "8px",
                padding: "10px 0 10px 30px", // Added more padding on the left
                backgroundColor: "#f9f9f9",
              }}
              onChange={handleInputChange}
            />
            <Form.Check
              type="radio"
              name="paymentMethod"
              id="mastercard"
              value="mastercard"
              label={
                <span>
                  <i
                    className="fa-brands fa-cc-mastercard"
                    style={{ marginRight: "8px" }}
                  ></i>
                  Master Card
                </span>
              }
              style={{
                color: "#1B1B1B",
                padding: "10px 0 10px 30px", // Added more padding on the left
                backgroundColor: "#f9f9f9",
              }}
              onChange={handleInputChange}
            />
          </div>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ width: "100%" }}
        >
          <MDBInput
            type="number"
            name="Amount"
            placeholder={`Price: ${selectedCard.hourlyRate}/hr`}
            value={selectedCard.hourlyRate}
            readOnly
          />
        </Form.Group>
        <button type="submit" className="payment_button">
          Get a quote
        </button>
      </Form>
    </div>
  );
};

export default Payment;
