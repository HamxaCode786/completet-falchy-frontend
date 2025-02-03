import React, { useState } from 'react'
import Custom from '../../assets/images/customcars/custom.jpg'
import { Modal, Button } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const Customcars = () => {
  const { language } = useContext(TranslationContext);

  const [modal, setModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    makeModel: '',
    exteriorSpecs: '',
    interiorSpecs: ''
  });

  const toggle = () => {
    setModal(!modal);
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/rent-luxury/custom-cars`,
        {
          name: formData.name,
          email: formData.email,
          phone_number: formData.phoneNumber,
          make_model: formData.makeModel,
          exterior_specifications: formData.exteriorSpecs,
          interior_specifications: formData.interiorSpecs
        }
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your custom car request has been submitted. Our team will contact you shortly!",
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        });
        toggle();
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          makeModel: '',
          exteriorSpecs: '',
          interiorSpecs: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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

  return (
    <div className='custom_car_push' style={{ backgroundImage: `url(${Custom})`, backgroundSize: 'cover', height: '550px' }}>
      
      <div className='custom_car_div'>
        <h3 className='custom_card_heading'>
          {language === 'en' ? 'Get A Customized Car in One Click' 
            : language === 'it' ? 'Ottieni un\'auto personalizzata con un clic'
            : language === 'du' ? 'Krijg een aangepaste auto met één klik' 
            : language === 'fr' ? 'Obtenez une voiture personnalisée en un clic'
            : 'Get A Customized Car in One Click'}
        </h3>

        <div className='custom_card_button_1'>
          <button className="mybutton noSelect" type="button" onClick={toggle}>
            <div className="mybuttoninner">
              <div className="mybuttoninner2">
                <ul>
                  <li>
                    {language === 'en' ? 'Start'
                      : language === 'it' ? 'Inizia'
                      : language === 'du' ? 'Start'
                      : language === 'fr' ? 'Démarrer'
                      : 'Start'}
                  </li>
                  <div className="mybuttoninnerline2">
                    <div className="mybuttoninnerline"></div>
                  </div>
                  <li>
                    {language === 'en' ? 'Stop'
                      : language === 'it' ? 'Fermare'
                      : language === 'du' ? 'Stop'
                      : language === 'fr' ? 'Arrêter'
                      : 'Stop'}
                  </li>
                </ul>
              </div>
            </div>
          </button>
        </div>
      </div>

      <Modal show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title className='custom_car_modal'>
            {language === 'en' ? 'Customize Car'
              : language === 'it' ? 'Personalizza Auto'
              : language === 'du' ? 'Pas auto aan'
              : language === 'fr' ? 'Personnaliser la voiture'
              : 'Customize Car'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal_background'>
          <MDBInput 
            label="Name" 
            id="name" 
            type="text" 
            className="mb-4"
            value={formData.name}
            onChange={handleChange}
          />
          <MDBInput 
            label="Email" 
            id="email" 
            type="email" 
            className="mb-4"
            value={formData.email}
            onChange={handleChange}
          />
          <MDBInput 
            label="Phone Number" 
            id="phoneNumber" 
            type="tel" 
            className="mb-4"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <MDBInput 
            label="Make & Model" 
            id="makeModel" 
            type="text" 
            className="mb-4"
            value={formData.makeModel}
            onChange={handleChange}
          />
          <MDBInput 
            label="Exterior Specifications" 
            id="exteriorSpecs" 
            type="text" 
            className="mb-4"
            value={formData.exteriorSpecs}
            onChange={handleChange}
          />
          <MDBInput 
            label="Interior Specifications" 
            id="interiorSpecs" 
            type="text" 
            className="mb-4"
            value={formData.interiorSpecs}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer className='modal_custom_footer'>
          <Button className='button_custom_cars_hover_issue' variant="primary" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 
              language === 'en' ? 'Submit'
              : language === 'it' ? 'Invia'
              : language === 'du' ? 'Indienen'
              : language === 'fr' ? 'Soumettre'
              : 'Submit'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Customcars
