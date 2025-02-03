import React, { useState, useContext } from "react";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import Aboutusheading from "../aboutus/contactpicture";
import { TranslationContext } from "../../contextapi/translationContext";
import axios from "axios";
import Swal from "sweetalert2";

const Contactusnew = () => {
  const { language } = useContext(TranslationContext);

  // State to handle form inputs and validation errors
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Form validation function
  const validateForm = () => {
    let formErrors = { email: "", name: "", message: "" };
    let isValid = true;

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate Name
    if (!formData.name) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    // Validate Message
    if (!formData.message) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/transfers/contact`,
          formData
        );

        // Reset form data after successful submission
        setFormData({ email: "", name: "", message: "" });

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your Contact Information Has Been Noted. Our Team Will Act As Per Your Requirements!",
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        });
      } catch (error) {
        console.error("Error submitting form", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "There was an error. Please try again.",
          iconColor: "#05021f",
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
    }
  };

  return (
    <div>
      <Aboutusheading />
      <div className="componantourt_di1">
        <div className="new_component_contact1">
          <h3 className="new_contact_heading">
            {language === "en"
              ? "Any Question or Remarks? Just Write Us A Message!"
              : language === "it"
              ? "Qualche domanda o osservazione? Scrivici un messaggio!"
              : language === "du"
              ? "Heb je vragen of opmerkingen? Stuur ons een bericht!"
              : language === "fr"
              ? "Des questions ou des remarques ? Écrivez-nous un message!"
              : "Any Question or Remarks? Just Write Us A Message!"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="first_feilds_new">
              <div className="form-outline">
                <MDBInput
                  label={
                    language === "en"
                      ? "Email"
                      : language === "it"
                      ? "Email"
                      : language === "du"
                      ? "E-mail"
                      : language === "fr"
                      ? "E-mail"
                      : "Email"
                  }
                  id="formControlDefault1"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-control new1122 ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  style={{
                    opacity: 0.6,
                    backgroundColor: "#dae4e8 !important",
                    borderColor: errors.email ? "#dc3545" : "",
                  }}
                />
                {errors.email && (
                  <div className="error" style={{ color: "#dc3545" }}>
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-outline">
                <MDBInput
                  label={
                    language === "en"
                      ? "Name"
                      : language === "it"
                      ? "Nome"
                      : language === "du"
                      ? "Naam"
                      : language === "fr"
                      ? "Nom"
                      : "Name"
                  }
                  id="formControlDefault2"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-control new1122 ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  style={{
                    opacity: 0.6,
                    borderColor: errors.name ? "#dc3545" : "",
                  }}
                />
                {errors.name && (
                  <div className="error" style={{ color: "#dc3545" }}>
                    {errors.name}
                  </div>
                )}
              </div>
            </div>
            <MDBTextArea
              label={
                language === "en"
                  ? "Message"
                  : language === "it"
                  ? "Messaggio"
                  : language === "du"
                  ? "Bericht"
                  : language === "fr"
                  ? "Message"
                  : "Message"
              }
              id="formControlDefault2"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`form-control new1122 ${
                errors.message ? "is-invalid" : ""
              }`}
              style={{
                opacity: 0.6,
                borderColor: errors.message ? "#dc3545" : "",
              }}
            />
            {errors.message && (
              <div className="error" style={{ color: "#dc3545" }}>
                {errors.message}
              </div>
            )}

            <button
              className="button_send_us_new"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : language === "en"
                ? "Send"
                : language === "it"
                ? "Invia"
                : language === "du"
                ? "Verzenden"
                : language === "fr"
                ? "Envoyer"
                : "Send"}
            </button>
          </form>

          <div></div>
        </div>
      </div>
      <div className="below_form_component">
        <div className="first_logo_details">
          <div className="icon-container">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <h4 className="font_heading_new">
            {language === "en"
              ? "Find Us"
              : language === "it"
              ? "Trova noi"
              : language === "du"
              ? "Vind ons"
              : language === "fr"
              ? "Trouvez-nous"
              : "Find Us"}
          </h4>
          <a
            href="https://www.google.com/maps?q=Via%20Foro%20S.%20Martino%2C%2022%2C%2021012%20Cassano%20Magnago%20VA%2C%20Italy"
            target="_blank"
            style={{ textDecoration: "none", color: "#4f4f4f" }}
          >
            <h5>
              CASSANO MAGNAGO (VA) <br />
              VIA FORO SAN MARTINO 22 CAP 21012
            </h5>
          </a>

          <h5></h5>
        </div>

        <div className="first_logo_details">
          <div className="icon-container">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h4 className="font_heading_new">
            {language === "en"
              ? "Call Us"
              : language === "it"
              ? "Chiamaci"
              : language === "du"
              ? "Bel ons"
              : language === "fr"
              ? "Appelez-nous"
              : "Call Us"}
          </h4>
          <a href="tel:+393759119255" style={{ color: "#4f4f4f" }}>
            <h5>(+39) 375 911 9255</h5>
          </a>
         
        </div>
        <div className="first_logo_details">
          <div className="icon-container">
            <i className="fas fa-envelope"></i>
          </div>
          <h4 className="font_heading_new">
            {language === "en"
              ? "Mail Us"
              : language === "it"
              ? "Inviaci una mail"
              : language === "du"
              ? "Stuur ons een e-mail"
              : language === "fr"
              ? "Envoyez-nous un e-mail"
              : "Mail Us"}
          </h4>
          <a href="mailto:contact@falchy.com" style={{ color: "#4f4f4f" }}>
            <h5>contact@falchy.com</h5>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Contactusnew;
