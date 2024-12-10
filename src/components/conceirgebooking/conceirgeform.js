import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2';
import { useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import axios from 'axios'; // Import axios

const Conceirgeform = () => {
  const location = useLocation();
  const cardData = location.state;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    description:"",
    eventSelected: cardData.title, // Added eventSelected to formData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields are filled
    const requiredFields = ['fullName', 'email', 'contact'];
    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Required Fields Missing',
        text: `Please fill in all required fields: ${emptyFields.join(', ')}`,
        iconColor: '#05021f',
        confirmButtonColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
        iconColor: '#05021f',
        confirmButtonColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
      return;
    }

    try {
      // Simulate an API call using axios
      const response = await axios.post('http://localhost:5000/api/usercontact', formData);
    
      // Correct the reference to 'success' field
      if (response.data.data.success) {
        console.log('Form data submitted:', formData);
        
        Swal.fire({
          icon: 'success',
          title: 'Success!', 
          text: 'Your Event Booking Has Been Noted. Our Team Will Contact Within 10 Minutes!',
          iconColor: '#05021f',
          confirmButtonColor: '#05021f',
          customClass: {
            popup: 'swal-popup-custom',
            confirmButton: 'swal-button-custom',
          }
        }).then(() => {
          setFormData({
            fullName: "",
            email: "",
            contact: "",
            description: "",
            eventSelected: cardData.title, // Reset eventSelected to cardData.title
          });
        });
      }
    
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
        iconColor: '#05021f',
        confirmButtonColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
    }
  };    

  return (
    <div className="dinner_form">
      <h3 className="conceirge_form_heading2">{cardData.title2}</h3>
      <div className="payment_form2">
        <Form className="hamza" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Control
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 400, fontSize: '16px', padding: '10px' }}
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 400, fontSize: '16px', padding: '10px' }}
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Control
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 400, fontSize: '16px', padding: '10px' }}
              type="text"
              placeholder="Enter Your Contact Information"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Control
              style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 400, fontSize: '16px', padding: '10px', height:'50px' }}
              type="text"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <button type="submit" className="payment_button">Get a quote</button>
        </Form>
      </div>
    </div>
  );
};

export default Conceirgeform;
