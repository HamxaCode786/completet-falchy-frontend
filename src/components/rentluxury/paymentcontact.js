import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2';
import { MDBInput } from 'mdb-react-ui-kit'; // Import MDBInput

const Paymentcontact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "", 
    contact: ""
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Validation rules
  const validateForm = () => {
    let tempErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 2) {
      tempErrors.fullName = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.fullName)) {
      tempErrors.fullName = "Name can only contain letters";
    }

    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      tempErrors.email = "Invalid email address";
    }

    // Contact validation 
    if (!formData.contact) {
      tempErrors.contact = "Contact information is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.contact)) {
      tempErrors.contact = "Please enter a valid phone number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if(errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Dummy API call
  const submitToApi = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Form submitted successfully",
          data: data
        });
      }, 2000); // 2 second delay
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await submitToApi(formData);

        if (response.success) {
          console.log('Form data submitted:', response.data);
          
          Swal.fire({
            icon: 'success',
            title: 'Success!', 
            text: 'Contact Information Has Been Noted. Our Team Will Contact Within 10 Minutes!',
            iconColor: '#05021f',
            confirmButtonColor: '#05021f',
            customClass: {
              popup: 'swal-popup-custom',
              confirmButton: 'swal-button-custom',
            }
          }).then(() => {
            // Reset form
            setFormData({
              fullName: "",
              email: "",
              contact: ""
            });
          });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Unable to share contact information. Please try again later.',
          confirmButtonColor: '#05021f',
          iconColor: '#05021f',
          customClass: {
            popup: 'swal-popup-custom',
            confirmButton: 'swal-button-custom',
          }
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please fill in all required fields correctly to contact us.',
        confirmButtonColor: '#05021f',
        iconColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
    }
  };

  return (
    <div className="payment_form">
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'rgba(27, 27, 27, 0.95)' }}>Your Ride, Your Status – Experience the Thrill of Luxury on the Road With Us!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <MDBInput
            id="formFullName"
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{ backgroundColor: "#f9f9f9", fontWeight: 600, fontSize: '16px', padding: '10px', border: 'none' }}
            isInvalid={!!errors.fullName}
            disabled={isLoading}
          />
          <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            id="formEmail"
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ backgroundColor: "#f9f9f9", fontWeight: 600, fontSize: '16px', padding: '10px', border: 'none' }}
            isInvalid={!!errors.email}
            disabled={isLoading}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContact">
          <MDBInput
            id="formContact"
            label="Contact Information"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            style={{ backgroundColor: "#f9f9f9", fontWeight: 600, fontSize: '16px', padding: '10px', border: 'none' }}
            isInvalid={!!errors.contact}
            disabled={isLoading}
          />
          <Form.Control.Feedback type="invalid">{errors.contact}</Form.Control.Feedback>
        </Form.Group>

        <button 
          type="submit" 
          className="payment_button"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Get a quote'}
        </button>
      </Form>
    </div>
  );
};

export default Paymentcontact;
