import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const Payment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    paymentMethod: '',
    accountNumber: '',
    expirationDate: null,
    cvc: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact information is required';
    }

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Please select a payment method';
    }

    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = 'Account number is required';
    }

    if (!formData.expirationDate) {
      newErrors.expirationDate = 'Expiration date is required';
    }

    if (!formData.cvc.trim()) {
      newErrors.cvc = 'CVC is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
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
            cvc: ''
          });
        } else {
          alert('Failed to submit payment information');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting payment information');
      }
    }
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
            isInvalid={!!errors.fullName}
          />
          {errors.fullName && <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            isInvalid={!!errors.email}
          />
          {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
            type="text"
            name="contact"
            placeholder="Enter Your Contact Information"
            value={formData.contact}
            onChange={handleInputChange}
            isInvalid={!!errors.contact}
          />
          {errors.contact && <Form.Control.Feedback type="invalid">{errors.contact}</Form.Control.Feedback>}
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
              isInvalid={!!errors.paymentMethod}
            />
            <Form.Check
              type="radio"
              name="paymentMethod"
              id="mastercard"
              value="mastercard"
              label={<span><i className="fa-brands fa-cc-mastercard" style={{marginRight: '8px'}}></i>Master Card</span>}
              style={{color: '#1B1B1B'}}
              onChange={handleInputChange}
              isInvalid={!!errors.paymentMethod}
            />
            {errors.paymentMethod && <div className="invalid-feedback d-block">{errors.paymentMethod}</div>}
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
            type="text"
            name="accountNumber"
            placeholder="Enter Your Account Number"
            value={formData.accountNumber}
            onChange={handleInputChange}
            isInvalid={!!errors.accountNumber}
          />
          {errors.accountNumber && <Form.Control.Feedback type="invalid">{errors.accountNumber}</Form.Control.Feedback>}
        </Form.Group>

        <div className="last_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Flatpickr
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px', width: '100%' }}
              className={`form-control ${errors.expirationDate ? 'is-invalid' : ''}`}
              name="expirationDate"
              placeholder="Expiration Date"
              value={formData.expirationDate}
              onChange={date => {
                setFormData({
                  ...formData,
                  expirationDate: date[0]
                });
              }}
              options={{
                dateFormat: "m/Y",
                minDate: "today",
                disableMobile: true
              }}
            />
            {errors.expirationDate && <Form.Control.Feedback type="invalid">{errors.expirationDate}</Form.Control.Feedback>}
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 600, fontSize: '16px', padding: '10px' }}
              type="text"
              name="cvc"
              placeholder="Enter Your CVC"
              value={formData.cvc}
              onChange={handleInputChange}
              isInvalid={!!errors.cvc}
            />
            {errors.cvc && <Form.Control.Feedback type="invalid">{errors.cvc}</Form.Control.Feedback>}
          </Form.Group>
        </div>
        <button type="submit" className="payment_button">Get a quote</button>
      </Form>
    </div>
  );
};

export default Payment;
