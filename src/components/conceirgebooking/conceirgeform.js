import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import axios from "axios";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBTextArea } from "mdb-react-ui-kit";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const Conceirgeform = () => {
  const { language } = useContext(TranslationContext);
  const location = useLocation();
  const cardData = location.state;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    description: "",
    eventSelected: cardData.title,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    contact: "",
    description: "",
  });

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate Full Name
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.length < 2) {
      tempErrors.fullName = "Name must be at least 2 characters long";
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate Phone Number
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    if (!formData.contact) {
      tempErrors.contact = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.contact)) {
      tempErrors.contact = "Please enter a valid phone number";
      isValid = false;
    }

    // Validate Description
    if (!formData.description.trim()) {
      tempErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isDiningEvent && !validateForm()) {
      // Get the first error message from the errors object
      const firstErrorMessage =
        Object.values(errors)[0] ||
        "Please fill in all required fields correctly";

      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: firstErrorMessage, // Display the first error message
        iconColor: "#05021f",
        confirmButtonColor: "#05021f",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        concerige_type: isDiningEvent
          ? cardData.title[language]
          : cardData.title[language],
        full_name: isDiningEvent ? cardData.title[language] : formData.fullName,
        email_address: isDiningEvent
          ? cardData.title[language]
          : formData.email,
        phone_number: isDiningEvent ? "123-456-7890" : formData.contact,
        description: isDiningEvent
          ? cardData.title[language]
          : formData.description,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/concierge/`, // Use the env variable here
        payload
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your Event Booking Has Been Noted. Our Team Will Contact Within 10 Minutes!",
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        }).then(() => {
          setFormData({
            fullName: "",
            email: "",
            contact: "",
            description: "",
            eventSelected: cardData.title,
          });
          setErrors({});
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDiningEvent =
    cardData.title[language] === "Dining and Entertainment" ||
    cardData.title[language] === "Comida y entretenimiento" ||
    cardData.title[language] === "Restauration et divertissement" ||
    cardData.title[language] === "Essen und Unterhaltung";

  return (
    <div className="dinner_form">
      <h3 className="conceirge_form_heading2">{cardData.title2[language]}</h3>
      <div className="payment_form2">
        {isDiningEvent ? (
          <p></p>
        ) : (
          <Form className="hamza" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="form-outline mb-3">
              <MDBInput
                id="formFullName"
                label={
                  language === "en"
                    ? "Full Name"
                    : language === "it"
                    ? "Nome Completo"
                    : language === "fr"
                    ? "Nom Complet"
                    : "Full Name"
                }
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  fontWeight: 400,
                  fontSize: "16px",
                  padding: "10px",
                  border: "none",
                }}
              />
              {errors.fullName && (
                <div className="text-danger">{errors.fullName}</div>
              )}
            </div>

            {/* Email Field */}
            <div className="form-outline mb-3">
              <MDBInput
                id="formEmail"
                label={
                  language === "en"
                    ? "Email Address"
                    : language === "it"
                    ? "Indirizzo Email"
                    : language === "fr"
                    ? "Adresse E-mail"
                    : "Email Address"
                }
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  fontWeight: 400,
                  fontSize: "16px",
                  padding: "10px",
                  border: "none",
                }}
              />
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>

            {/* Contact Field */}
            <div className="form-outline mb-3">
              <MDBInput
                id="formContact"
                label={
                  language === "en"
                    ? "Phone Number"
                    : language === "it"
                    ? "Numero di Telefono"
                    : language === "fr"
                    ? "Numéro de Téléphone"
                    : "Phone Number"
                }
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  fontWeight: 400,
                  fontSize: "16px",
                  padding: "10px",
                  border: "none",
                }}
              />
              {errors.contact && (
                <div className="text-danger">{errors.contact}</div>
              )}
            </div>

            {/* Description Field */}
            <div className="form-outline mb-3">
              <MDBTextArea
                id="formDescription"
                label={
                  language === "en"
                    ? "Description"
                    : language === "it"
                    ? "Descrizione"
                    : language === "fr"
                    ? "Description"
                    : "Description"
                }
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  fontWeight: 400,
                  fontSize: "16px",
                  padding: "10px",
                  height: "100px",
                  border: "none",
                }}
              />
              {errors.description && (
                <div className="text-danger">{errors.description}</div>
              )}
            </div>

            {/* Submit Button */}
          </Form>
        )}
        <button
          onClick={handleSubmit}
          type="submit"
          className="payment_button"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Submitting..."
            : language === "en"
            ? "Get a quote"
            : language === "it"
            ? "Ottieni un preventivo"
            : language === "fr"
            ? "Obtenir un devis"
            : "Get a quote"}
        </button>
      </div>
    </div>
  );
};

export default Conceirgeform;
