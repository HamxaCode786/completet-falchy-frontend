import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import Autosuggest from 'react-autosuggest';


const Payment = ({selectedCard}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    paymentMethod: '',
    accountNumber: '',
    expirationDate: null,
    cvc: '',
    pickupDate: null,
    numberOfPersons: '',
    pickupLocation: '',
    dropOffLocation: '',
    luggageQuantity: ''
  });

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulating API call
      const response = await fetch('https://api.example.com/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Payment information submitted successfully!');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          contact: '',
          paymentMethod: '',
          accountNumber: '',
          expirationDate: null,
          cvc: '',
          pickupDate: null,
          numberOfPersons: '',
          pickupLocation: '',
          dropOffLocation: '',
          luggageQuantity: ''
        });
      } else {
        alert('Failed to submit payment information');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting payment information');
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
    if (field === 'pickupLocation') {
      setPickupSuggestions(suggestions);
    } else if (field === 'dropOffLocation') {
      setDropOffSuggestions(suggestions);
    }
  };

  // Handle selection of suggestion
  const handleSuggestionSelected = (event, { suggestion, suggestionValue, sectionIndex, method }, field) => {
    const { description } = suggestion;
    setFormData({
      ...formData,
      [field]: description,
    });
  };

  return (
    <div className="payment_form">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
            type="text"
            name="contact"
            placeholder="Enter Your Contact Information"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </Form.Group>
        
        

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
            type="text"
            name="accountNumber"
            placeholder="Enter Your Account Number"
            value={formData.accountNumber}
            onChange={handleInputChange}
          />
        </Form.Group>

        <div className="last_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Flatpickr
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px', width: '100%' }}
              className="form-control"
              name="expirationDate"
              placeholder="Expiration Date"
              value={formData.expirationDate}
              onChange={date => handleDateChange(date, 'expirationDate')}
              options={{
                dateFormat: "m/Y",
                minDate: "today",
                disableMobile: true
              }}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
              type="text"
              name="cvc"
              placeholder="Enter Your CVC"
              value={formData.cvc}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
        <div className="last_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
              type="number"
              name="numberOfPersons"
              placeholder="Number of Persons"
              value={formData.numberOfPersons}
              onChange={handleInputChange}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Flatpickr
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px', width: '100%' }}
              className="form-control"
              name="pickupDate"
              placeholder="Pickup Date"
              value={formData.pickupDate}
              onChange={date => handleDateChange(date, 'pickupDate')}
              options={{
                dateFormat: "F j, Y",
                minDate: "today",
                disableMobile: true
              }}
            />
          </Form.Group>
        </div>
        <div className="last_div">
      {/* Drop Off Location */}
      <Form.Group className="mb-3" controlId="formDropOffLocation">
        <Autosuggest
          suggestions={dropOffSuggestions} // Removed slice
          onSuggestionsFetchRequested={(e) => handleSuggestionsFetchRequested(e, 'dropOffLocation')}
          onSuggestionsClearRequested={() => setDropOffSuggestions([])}
          getSuggestionValue={(suggestion) => suggestion.description}
          renderSuggestion={(suggestion) => <div>{suggestion.description}</div>}
          inputProps={{
            value: formData.dropOffLocation,
            onChange: handleInputChange,
            name: 'dropOffLocation',
            style: {
              backgroundColor: '#f9f9f9',
              border: 'none',
              fontWeight: 600,
              fontSize: '16px',
              padding: '10px',
              width: '100%',
              color: '#575b62', // Placeholder text color
            },
            placeholder: 'Drop Off Location',
          }}
          onSuggestionSelected={(e, data) => handleSuggestionSelected(e, data, 'dropOffLocation')}
          theme={{
            container: {
              position: 'relative',
              zIndex: 1050, // Ensure suggestions overlay without disturbing other UI elements
            },
            suggestionsContainerOpen: {
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              maxHeight: '200px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              backgroundColor: 'white',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              zIndex: 9999,
            },
            suggestion: {
              padding: '10px',
              cursor: 'pointer',
            },
            suggestionHighlighted: {
              backgroundColor: '#d3d3d3',
            },
          }}
        />
      </Form.Group>

      {/* Pickup Location */}
      <Form.Group className="mb-3" controlId="formPickupLocation">
        <Autosuggest
          suggestions={pickupSuggestions} // Removed slice
          onSuggestionsFetchRequested={(e) => handleSuggestionsFetchRequested(e, 'pickupLocation')}
          onSuggestionsClearRequested={() => setPickupSuggestions([])}
          getSuggestionValue={(suggestion) => suggestion.description}
          renderSuggestion={(suggestion) => <div>{suggestion.description}</div>}
          inputProps={{
            value: formData.pickupLocation,
            onChange: handleInputChange,
            name: 'pickupLocation',
            style: {
              backgroundColor: '#f9f9f9',
              border: 'none',
              fontWeight: 600,
              fontSize: '16px',
              padding: '10px',
              width: '100%',
              color: '#34434d', // Placeholder text color
            },
            placeholder: 'Pickup Location',
          }}
          onSuggestionSelected={(e, data) => handleSuggestionSelected(e, data, 'pickupLocation')}
          theme={{
            container: {
              position: 'relative',
              zIndex: 1050, // Ensure suggestions overlay without disturbing other UI elements
            },
            suggestionsContainerOpen: {
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              maxHeight: '200px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              backgroundColor: 'white',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              zIndex: 9999,
            },
            suggestion: {
              padding: '10px',
              cursor: 'pointer',
            },
            suggestionHighlighted: {
              backgroundColor: '#d3d3d3',
            },
          }}
        />
      </Form.Group>
    </div>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '100%' }}>
          <Form.Control
            style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
            type="number"
            name="luggageQuantity"
            placeholder="Luggage Quantity"
            value={formData.luggageQuantity}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRadio">
          <div style={{backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px'}}>
            <div style={{marginBottom: '10px', color: '#585b5e', fontWeight: 600}}>Choose Your Payment Method</div>
            <Form.Check
              type="radio"
              name="paymentMethod"
              id="visa"
              value="visa"
              label={<span><i className="fa-brands fa-cc-visa" style={{marginRight: '8px'}}></i>Visa Card</span>}
              style={{color: '#1B1B1B', marginBottom: '8px'}}
              onChange={handleInputChange}
            />
            <Form.Check
              type="radio"
              name="paymentMethod"
              id="mastercard"
              value="mastercard"
              label={<span><i className="fa-brands fa-cc-mastercard" style={{marginRight: '8px'}}></i>Master Card</span>}
              style={{color: '#1B1B1B'}}
              onChange={handleInputChange}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '100%' }}>
          <Form.Control
            style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
            type="number"
            name="Amount"
            placeholder={`Price: ${selectedCard.hourlyRate}$/hr`}
            value={selectedCard.hourlyRate}
            readOnly
          />
        </Form.Group>
        <button type="submit" className="payment_button">Get a quote</button>
      </Form>
    </div>
  );
};

export default Payment;
