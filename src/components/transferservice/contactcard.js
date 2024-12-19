import React from "react";
import Form from "react-bootstrap/Form";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";


const Contactcard = () => {
  const { language } = useContext(TranslationContext);

  return (
    <div>
      <div className="contact_card1">
      <h2>
  {language === 'en' ? 'Need a Custom Car?' : language === 'it' ? 'Hai bisogno di un’auto personalizzata?' : language === 'du' ? 'Een aangepaste auto nodig?' : language === 'fr' ? 'Besoin d\'une voiture personnalisée ?' : 'Need a Custom Car?'}
  <br />
  <span>
    {language === 'en' ? 'Contact Our Team' : language === 'it' ? 'Contatta il nostro team' : language === 'du' ? 'Neem contact op met ons team' : language === 'fr' ? 'Contactez notre équipe' : 'Contact Our Team'}
  </span>
</h2>

        {/* <h4>
  Looking for something unique? We also offer customized car options 
  tailored to your preferences. Whether it's luxury features, color 
  schemes, or specific requirements, we can help you find the perfect match.
</h4> */}
    
        <div className="contact_card1_form1" style={{width: "100%"}}>
          <div className="contact_div">
            <Form.Label className="contact_card1_form1_label1">{language === 'en' ? 'Name' : language === 'it' ? 'Nome' : language === 'du' ? 'Naam' : language === 'fr' ? 'Nom' : 'Name'}
            </Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </div>
          <div className="contact_div" >
            <Form.Label className="contact_card1_form1_label1">
            {language === 'en' ? 'Email' : language === 'it' ? 'Email' : language === 'du' ? 'E-mail' : language === 'fr' ? 'E-mail' : 'Email'}

            </Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </div>
          <div className="contact_div" >
            <Form.Label className="contact_card1_form1_label1">
            {language === 'en' ? 'Phone Number' : language === 'it' ? 'Numero di telefono' : language === 'du' ? 'Telefoonnummer' : language === 'fr' ? 'Numéro de téléphone' : 'Phone Number'}

            </Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="contact_div" >
            <Form.Label className="contact_card1_form1_label1">
            {language === 'en' ? 'Description' : language === 'it' ? 'Descrizione' : language === 'du' ? 'Beschrijving' : language === 'fr' ? 'Description' : 'Description'}

            </Form.Label>
            <Form.Control type="tel" placeholder="Enter Description" />
          </div>
          
        </div>
        <div className="contact_div1" >
          <Form.Label className="contact_card1_form1_label1">&nbsp;</Form.Label>
          <button>{language === 'en' ? 'Request Callback' : language === 'it' ? 'Richiedi Richiamata' : language === 'du' ? 'Vraag om Terugbellen' : language === 'fr' ? 'Demander un rappel' : 'Request Callback'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;
