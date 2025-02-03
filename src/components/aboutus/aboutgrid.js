import React, { useState } from 'react'
import LocationIcon from '../../assets/images/About Us Vectors/location_on_24px.svg'
import CallIcon from '../../assets/images/About Us Vectors/call_24px.svg'
import TimeIcon from '../../assets/images/About Us Vectors/query_builder_24px.svg'
import MailIcon from '../../assets/images/About Us Vectors/email_24px.svg'
import { MDBInput } from 'mdb-react-ui-kit'
import { MDBTextArea } from 'mdb-react-ui-kit'
import Swal from 'sweetalert2'
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import axios from 'axios'


const Aboutusgrid = () => {
  const { language } = useContext(TranslationContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    description: ""
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

    // Construct the URL to which you want to send the POST request
    const url = 'https://your-api-endpoint.com/contact'; // Replace with your actual API endpoint

    try {
        // Send a POST request with form data
        const response = await axios.post(url, formData);

        // Handle the response when the request is successful
        Swal.fire({
            icon: 'success',
            title: language === 'en' ? 'Success!' :
                   language === 'it' ? 'Successo!' :
                   language === 'fr' ? 'Succès!' :
                   language === 'du' ? 'Succes!' :
                   'Success!', // Default to English

            text: language === 'en' ? 'Thank You For Reaching Out, Our team will Get in touch with you Shortly!' :
                   language === 'it' ? 'Grazie per averci contattato, il nostro team ti contatterà a breve!' :
                   language === 'fr' ? 'Merci de nous avoir contacté, notre équipe vous contactera sous peu!' :
                   language === 'du' ? 'Dank je voor het contact opnemen, ons team neemt binnenkort contact met je op!' :
                   'Thank You For Reaching Out, Our team will Get in touch with you Shortly!', // Default to English

            iconColor: '#05021f',
            confirmButtonColor: '#05021f',
            customClass: {
                popup: 'swal-popup-custom',
                confirmButton: 'swal-button-custom',
            }
        });
        setFormData({
          fullName: '',
          email: '',
          contact: '',
          description: ''
      });

    } catch (error) {
        // Handle the error if the request fails
        console.error('Error:', error);

        Swal.fire({
            icon: 'error',
            title: language === 'en' ? 'Error!' :
                   language === 'it' ? 'Errore!' :
                   language === 'fr' ? 'Erreur!' :
                   language === 'du' ? 'Fout!' :
                   'Error!', // Default to English

            text: language === 'en' ? 'Failed to submit contact information. Please try again later.' :
                   language === 'it' ? 'Impossibile inviare le informazioni di contatto. Riprova più tardi.' :
                   language === 'fr' ? 'Échec de l\'envoi des informations de contact. Veuillez réessayer plus tard.' :
                   language === 'du' ? 'Het verzenden van contactinformatie is mislukt. Probeer het later opnieuw.' :
                   'Failed to submit contact information. Please try again later.', // Default to English

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
    <div className='aboutus-info-flex'>
  <div className='about-us-info'>
    <p className='aboutus-info-subheading'>
      {language === 'en' 
        ? "Contact us at your convenience!" 
        : language === 'it' 
        ? "Contattaci quando vuoi!" 
        : language === 'fr' 
        ? "Contactez-nous à votre convenance!" 
        : language === 'du'
        ? "Neem contact met ons op wanneer het jou uitkomt!" 
        : "Contact us at your convenience!"}
    </p>

    <div className='grid-container'>
      <div className='grid-item'>
        <div className='grid-item-flex'>
          <div className='grid-item-heading-flex'>
          <i class="fas fa-location-pin" alt="Location Icon"></i>

            <p className='grid-item-heading'> 
              {language === 'en' 
                ? "Find Us" 
                : language === 'it' 
                ? "Trova noi" 
                : language === 'fr' 
                ? "Trouvez-nous" 
                : language === 'du'
                ? "Vind ons" 
                : "Find Us"}
            </p>
          </div>
          <div className='grid-item-content'>
            <p className='grid-item-info'> 
              {language === 'en' 
                ? "Plazza Gino Valle, 20149 MI, Italy" 
                : language === 'it' 
                ? "Plazza Gino Valle, 20149 MI, Italia" 
                : language === 'fr' 
                ? "Plazza Gino Valle, 20149 MI, Italie" 
                : language === 'du' 
                ? "Plazza Gino Valle, 20149 MI, Italië" 
                : "Plazza Gino Valle, 20149 MI, Italy"}
            </p>
            <p className='grid-item-info'> 
              {language === 'en' 
                ? "Rope Valle, 20149 MI, Italy" 
                : language === 'it' 
                ? "Rope Valle, 20149 MI, Italia" 
                : language === 'fr' 
                ? "Rope Valle, 20149 MI, Italie" 
                : language === 'du' 
                ? "Rope Valle, 20149 MI, Italië" 
                : "Rope Valle, 20149 MI, Italy"}
            </p>
          </div>
        </div>
      </div>  
      <div className='grid-item'>
        <div className='grid-item-flex'>
          <div className='grid-item-heading-flex'>
          <i class="fas fa-phone-alt" alt="Call Icon"></i>

            <p className='grid-item-heading'> 
              {language === 'en' 
                ? "Call Us" 
                : language === 'it' 
                ? "Chiamaci" 
                : language === 'fr' 
                ? "Appelez-nous" 
                : language === 'du' 
                ? "Bel ons" 
                : "Call Us"}
            </p>
          </div>
          <div className='grid-item-content'>
            <p className='grid-item-info'>+1 123-456-7890</p>
            <p className='grid-item-info'>+1 123-456-7890</p>
          </div>
        </div>
      </div>  
      <div className='grid-item'>
        <div className='grid-item-flex'>
          <div className='grid-item-heading-flex'>
          <i class="fas fa-clock" alt="Time Icon"></i>

            <p className='grid-item-heading'> 
              {language === 'en' 
                ? "Visit Us" 
                : language === 'it' 
                ? "Visita ci" 
                : language === 'fr' 
                ? "Visitez-nous" 
                : language === 'du' 
                ? "Bezoek ons" 
                : "Visit Us"}
            </p>
          </div>
          <div className='grid-item-content'>
            <p className='grid-item-info'> 
              {language === 'en' 
                ? "Monday - Friday" 
                : language === 'it' 
                ? "Lunedì - Venerdì" 
                : language === 'fr' 
                ? "Lundi - Vendredi" 
                : language === 'du' 
                ? "Maandag - Vrijdag" 
                : "Monday - Friday"}
            </p>
            <p className='grid-item-info'>9 AM - 5 PM</p>
          </div>
        </div>
      </div>  
      <div className='grid-item'>
        <div className='grid-item-flex'>
          <div className='grid-item-heading-flex'>
          <i class="fas fa-envelope" alt="Mail Icon"></i>

            <p className='grid-item-heading'> 
              {language === 'en' 
                ? "Mail Us" 
                : language === 'it' 
                ? "Scrivici" 
                : language === 'fr' 
                ? "Envoyez-nous un mail" 
                : language === 'du' 
                ? "Stuur ons een e-mail" 
                : "Mail Us"}
            </p>
          </div>
          <div className='grid-item-content'>
            <p className='grid-item-info'>contact@falchy.com</p>
            <p className='grid-item-info'>+1 123-456-7890</p>
          </div>
        </div>
      </div>  
    </div>
  </div>

  <div className='about-us-info'>
  <p className='aboutus-info-subheading'>
  {language === 'en' 
    ? "Fill out the form" 
    : language === 'it' 
    ? "Compila il modulo" 
    : language === 'fr' 
    ? "Remplissez le formulaire" 
    : language === 'du' 
    ? "Vul het formulier in" 
    : "Fill out the form"}
</p>

    <div className='contact-us-form'>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-layout form-info-layout">
          <MDBInput
  className='info-input'
  type="text"
  name="fullName"
  label={
    language === 'en' 
      ? "Full Name" 
      : language === 'it' 
      ? "Nome Completo" 
      : language === 'fr' 
      ? "Nom Complet" 
      : language === 'du' 
      ? "Volledige Naam" 
      : "Full Name"
  }
  required
  style={{ height: '50px', backgroundColor: "#f9f9f9" }}
  value={formData.fullName}
  onChange={handleChange}
/>

<MDBInput
  className='info-input'
  type="email"
  name="email"
  label={
    language === 'en' 
      ? "Email Address" 
      : language === 'it' 
      ? "Indirizzo Email" 
      : language === 'fr' 
      ? "Adresse Email" 
      : language === 'du' 
      ? "E-mailadres" 
      : "Email Address"
  }
  required
  style={{ height: '50px', backgroundColor: "#f9f9f9" }}
  value={formData.email}
  onChange={handleChange}
/>

<div className="form-outline mb-3">
  <MDBTextArea
    id="formDescription"
    label={
      language === 'en' 
        ? "Description" 
        : language === 'it' 
        ? "Descrizione" 
        : language === 'fr' 
        ? "Description" 
        : language === 'du' 
        ? "Beschrijving" 
        : "Description"
    }
    name="description"
    value={formData.description}
    onChange={handleChange}
    style={{ backgroundColor: "#f9f9f9", fontWeight: 400, fontSize: '16px', padding: '10px', height: '140px', border: 'none' }}
  />
</div>

          </div>
          <button type="submit" className='info-button'> 
            {language === 'en' 
              ? "Send" 
              : language === 'it' 
              ? "Invia" 
              : language === 'fr' 
              ? "Envoyer" 
              : language === 'du' 
              ? "Verstuur" 
              : "Send"}
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Aboutusgrid