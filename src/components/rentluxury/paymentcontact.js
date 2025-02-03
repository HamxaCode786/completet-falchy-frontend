import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { MDBInput } from "mdb-react-ui-kit"; // Import MDBInput
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import { SelectedCardContext } from "../../contextapi/rentluxurycontext";
import axios from "axios";

const Paymentcontact = () => {
  const { language } = useContext(TranslationContext);
  const { selectedCard } = useContext(SelectedCardContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Validation rules
  const validateForm = () => {
    let tempErrors = {};

    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 2) {
      tempErrors.fullName = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.fullName)) {
      tempErrors.fullName = "Name can only contain letters";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      tempErrors.email = "Invalid email address";
    }

    if (!formData.contact) {
      tempErrors.contact = "Phone Number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.contact)) {
      tempErrors.contact = "Please enter a valid phone number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        const payload = {
          customer_name: formData.fullName,
          customer_email: formData.email,
          phone_number: formData.contact,
          car: selectedCard ? selectedCard.id : "",
        };

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/rent-luxury/bookings`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Contact Information Has Been Noted. Our Team Will Contact Within 10 Minutes!",
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
            });
          });
        } else {
          throw new Error("Submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Unable to share contact information. Please try again later.",
          confirmButtonColor: "#05021f",
          iconColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      // Show the first error in the validation alert
      const firstErrorMessage = Object.values(errors)[0]; // Get the first error message
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text:
          firstErrorMessage ||
          "Please fill in all required fields correctly to contact us.",
        confirmButtonColor: "#05021f",
        iconColor: "#05021f",
        customClass: {
          popup: "swal-popup-custom",
          confirmButton: "swal-button-custom",
        },
      });
    }
  };

  return (
    <div className="payment_form">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "rgba(27, 27, 27, 0.95)",
        }}
      >
        {language === "en"
          ? "Experience the Thrill of Luxury on the Road With Us!"
          : language === "it"
          ? "Vivi il brivido del lusso sulla strada con noi!"
          : language === "du"
          ? "Ervaar de spanning van luxe op de weg met ons!"
          : language === "fr"
          ? "Vivez l'excitation du luxe sur la route avec nous !"
          : "Experience the Thrill of Luxury on the Road With Us!"}
      </h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <MDBInput
            id="formFullName"
            label={
              language === "en"
                ? "Full Name"
                : language === "it"
                ? "Nome Completo"
                : language === "du"
                ? "Volledige Naam"
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

              fontSize: "16px",
              padding: "10px",
              border: "none",
            }}
            isInvalid={!!errors.fullName}
            disabled={isLoading}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fullName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <MDBInput
            id="formEmail"
            label={
              language === "en"
                ? "Email Address"
                : language === "it"
                ? "Indirizzo Email"
                : language === "du"
                ? "E-mail Adres"
                : language === "fr"
                ? "Adresse Email"
                : "Email Address"
            }
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              backgroundColor: "#f9f9f9",

              fontSize: "16px",
              padding: "10px",
              border: "none",
            }}
            isInvalid={!!errors.email}
            disabled={isLoading}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContact">
          <MDBInput
            id="formContact"
            label={
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
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            style={{
              backgroundColor: "#f9f9f9",

              fontSize: "16px",
              padding: "10px",
              border: "none",
            }}
            isInvalid={!!errors.contact}
            disabled={isLoading}
          />
          <Form.Control.Feedback type="invalid">
            {errors.contact}
          </Form.Control.Feedback>
        </Form.Group>

        <button type="submit" className="payment_button" disabled={isLoading}>
          {language === "en"
            ? isLoading
              ? "Submitting..."
              : "Get a quote"
            : language === "it"
            ? isLoading
              ? "Invio..."
              : "Ottieni un preventivo"
            : language === "du"
            ? isLoading
              ? "Verzenden..."
              : "Krijg een offerte"
            : language === "fr"
            ? isLoading
              ? "Soumission..."
              : "Obtenez un devis"
            : isLoading
            ? "Submitting..."
            : "Get a quote"}
        </button>
      </Form>
    </div>
  );
};

export default Paymentcontact;
