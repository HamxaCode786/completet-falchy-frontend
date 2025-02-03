import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { TranslationContext } from "../../contextapi/translationContext";
import Swal from "sweetalert2";
import axios from "axios"; // Import axios for making HTTP requests

const Contactcard = () => {
  const { language } = useContext(TranslationContext);

  // Create state to hold form field values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "", // Keep phoneNumber in state
    description: "",
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Map phoneNumber to phone_number before sending the data
    const { phoneNumber, ...restData } = formData;
    const dataToSend = { ...restData, phone_number: phoneNumber }; // map phoneNumber to phone_number

    // Define your API URL here
    const apiUrl =
      "https://4ac6-2400-adc5-463-9d00-9c13-5215-5a37-b36e.ngrok-free.app/rent-luxury/custom-cars"; // Replace with your actual API endpoint

    try {
      // Make the actual API call using axios
      const response = await axios.post(apiUrl, dataToSend);

      if (response.status === 201) {
        // If the API call is successful, show a success message
        Swal.fire({
          icon: "success",
          title:
            language === "en"
              ? "Success!"
              : language === "it"
              ? "Successo!"
              : language === "du"
              ? "Succes!"
              : language === "fr"
              ? "Succès!"
              : "Success!",
          text:
            language === "en"
              ? "Thank You For Reaching Out, Our team will Get in touch with you Shortly!"
              : language === "it"
              ? "Grazie per averci contattato, il nostro team ti contatterà a breve!"
              : language === "du"
              ? "Bedankt voor je bericht, ons team neemt snel contact met je op!"
              : language === "fr"
              ? "Merci de nous avoir contacté, notre équipe vous contactera sous peu!"
              : "Thank You For Reaching Out, Our team will Get in touch with you Shortly!",
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        });
      } else {
        // Handle other response statuses if needed
        Swal.fire({
          icon: "error",
          title:
            language === "en"
              ? "Error!"
              : language === "it"
              ? "Errore!"
              : language === "du"
              ? "Fout!"
              : language === "fr"
              ? "Erreur!"
              : "Error!",
          text:
            language === "en"
              ? "Something went wrong. Please try again later."
              : language === "it"
              ? "Qualcosa è andato storto. Per favore riprova più tardi."
              : language === "du"
              ? "Er ging iets mis. Probeer het later nog eens."
              : language === "fr"
              ? "Quelque chose s'est mal passé. Veuillez réessayer plus tard."
              : "Something went wrong. Please try again later.",
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // If there is an error, show an error message
      Swal.fire({
        icon: "error",
        title:
          language === "en"
            ? "Error!"
            : language === "it"
            ? "Errore!"
            : language === "du"
            ? "Fout!"
            : language === "fr"
            ? "Erreur!"
            : "Error!",
        text:
          language === "en"
            ? "Failed to submit contact information. Please try again later."
            : language === "it"
            ? "Impossibile inviare le informazioni di contatto. Riprova più tardi."
            : language === "du"
            ? "Het is niet gelukt om contactinformatie in te dienen. Probeer het later opnieuw."
            : language === "fr"
            ? "Échec de la soumission des informations de contact. Veuillez réessayer plus tard."
            : "Failed to submit contact information. Please try again later.",
        iconColor: "#05021f",
        confirmButtonColor: "#05021f",
        customClass: {
          popup: "swal-popup-custom",
          confirmButton: "swal-button-custom",
        },
      });
    }
  };

  return (
    <div>
      <div className="contact_card1">
        <h2>
          {language === "en"
            ? "Need a Custom Car?"
            : language === "it"
            ? "Hai bisogno di un’auto personalizzata?"
            : language === "du"
            ? "Een aangepaste auto nodig?"
            : language === "fr"
            ? "Besoin d'une voiture personnalisée ?"
            : "Need a Custom Car?"}
          <br />
          <span>
            {language === "en"
              ? "Contact Our Team"
              : language === "it"
              ? "Contatta il nostro team"
              : language === "du"
              ? "Neem contact op met ons team"
              : language === "fr"
              ? "Contactez notre équipe"
              : "Contact Our Team"}
          </span>
        </h2>

        <div className="contact_card1_form1" style={{ width: "100%" }}>
          <div className="contact_div">
            <Form.Label className="contact_card1_form1_label1">
              {language === "en"
                ? "Name"
                : language === "it"
                ? "Nome"
                : language === "du"
                ? "Naam"
                : language === "fr"
                ? "Nom"
                : "Name"}
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="contact_div">
            <Form.Label className="contact_card1_form1_label1">
              {language === "en"
                ? "Email"
                : language === "it"
                ? "Email"
                : language === "du"
                ? "E-mail"
                : language === "fr"
                ? "E-mail"
                : "Email"}
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="contact_div">
            <Form.Label className="contact_card1_form1_label1">
              {language === "en"
                ? "Phone Number"
                : language === "it"
                ? "Numero di telefono"
                : language === "du"
                ? "Telefoonnummer"
                : language === "fr"
                ? "Numéro de téléphone"
                : "Phone Number"}
            </Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber" // Keep phoneNumber in the form state
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>

          <div className="contact_div">
            <Form.Label className="contact_card1_form1_label1">
              {language === "en"
                ? "Description"
                : language === "it"
                ? "Descrizione"
                : language === "du"
                ? "Beschrijving"
                : language === "fr"
                ? "Description"
                : "Description"}
            </Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Description"
            />
          </div>
        </div>

        <div className="contact_div1">
          <Form.Label className="contact_card1_form1_label1">&nbsp;</Form.Label>
          <button onClick={handleSubmit}>
            {language === "en"
              ? "Request Callback"
              : language === "it"
              ? "Richiedi Richiamata"
              : language === "du"
              ? "Vraag om Terugbellen"
              : language === "fr"
              ? "Demander un rappel"
              : "Request Callback"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;
