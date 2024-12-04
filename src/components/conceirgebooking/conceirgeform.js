import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2';
import { useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const Conceirgeform = () => {
  const location = useLocation();
  const cardData = location.state;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    preferredDate: "",
    preferredTime: ""
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
    const requiredFields = ['fullName', 'email', 'contact', 'preferredDate', 'preferredTime'];
    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Required Fields Missing',
        text: 'Please fill in all required fields',
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
      // Simulate an API call
      const simulateApiCall = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: true,
              message: 'Form submitted successfully'
            });
          }, 1000);
        });
      };

      // Call simulated API
      const response = await simulateApiCall();

      if (response.success) {
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
            preferredDate: "",
            preferredTime: ""
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
      <h3 className="conceirge_form_heading2">Book {cardData.title}</h3>
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

          <div className="last_div">
            <Form.Group className="mb-3" controlId="formPreferredDate">
              <Flatpickr
                style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 400, fontSize: '16px', padding: '10px', width: '100%' }}
                className="form-control"
                placeholder="Preferred Date"
                value={formData.preferredDate}
                onChange={date => {
                  setFormData({
                    ...formData,
                    preferredDate: date[0]
                  });
                }}
                options={{
                  dateFormat: "Y-m-d",
                  minDate: "today",
                  disableMobile: true
                }}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPreferredTime">
              <Flatpickr
                style={{ backgroundColor: "#f9f9f9", border: 'none', fontWeight: 400, fontSize: '16px', padding: '10px', width: '100%' }}
                className="form-control"
                placeholder="Preferred Time"
                value={formData.preferredTime}
                onChange={time => {
                  setFormData({
                    ...formData,
                    preferredTime: time[0]
                  });
                }}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  time_24hr: true,
                  disableMobile: true
                }}
              />
            </Form.Group>
          </div>

          <button type="submit" className="payment_button">Get a quote</button>
        </Form>
      </div>
    </div>
  );
};

export default Conceirgeform;
