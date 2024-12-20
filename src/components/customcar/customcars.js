import React, { useState } from 'react'
import Custom from '../../assets/images/customcars/custom.jpg'
import { Modal, Button } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const Customcars = () => {
  const { language } = useContext(TranslationContext);

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

  return (
    <div className='custom_car_push' style={{ backgroundImage: `url(${Custom})`, backgroundSize: 'cover', height: '550px' }}>
      

      <div className='custom_car_div' >
      <h3 className='custom_card_heading'>
  {language === 'en' ? 'Dreaming of Your Customized Car?' : language === 'it' ? 'Sogni della tua auto personalizzata?' : language === 'du' ? 'Droom je van je aangepaste auto?' : language === 'fr' ? 'Rêvez-vous de votre voiture personnalisée?' : 'Dreaming of Your Customized Car?'}
  <br />
  {language === 'en' ? 'Click the button below!' : language === 'it' ? 'Clicca il bottone qui sotto!' : language === 'du' ? 'Klik op de onderstaande knop!' : language === 'fr' ? 'Cliquez sur le bouton ci-dessous!' : 'Click the button below!'}
</h3>

      <div className='custom_card_button_1'>
      <button className="mybutton noSelect" type="button" onClick={toggle}>
                <div className="mybuttoninner">
                    <div className="mybuttoninner2">
                        <ul>
                            <li>{language === 'en' ? 'Start' : language === 'it' ? 'Inizia' : language === 'du' ? 'Start' : language === 'fr' ? 'Démarrer' : 'Start'}
                            </li>
                            <div className="mybuttoninnerline2">
                                <div className="mybuttoninnerline"></div>
                            </div>
                            <li>{language === 'en' ? 'Stop' : language === 'it' ? 'Fermare' : language === 'du' ? 'Stop' : language === 'fr' ? 'Arrêter' : 'Stop'}
                            </li>
                        </ul>
                    </div>
                </div>
            </button>
            </div>
</div>

      <Modal  show={modal} onHide={toggle}>
        <Modal.Header  closeButton>
          <Modal.Title className='custom_car_modal'>{language === 'en' ? 'Customize Car' : language === 'it' ? 'Personalizza Auto' : language === 'du' ? 'Pas auto aan' : language === 'fr' ? 'Personnaliser la voiture' : 'Customize Car'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal_background' >
        <MDBInput label="Example label" id="form12" type="text" className="mb-4" />
        <MDBInput label="Example label" id="form12" type="text" className="mb-4" />
        <MDBInput label="Example label" id="form12" type="text" className="mb-4" />
        
        </Modal.Body>
        <Modal.Footer className='modal_custom_footer'>
          <Button variant="primary" onClick={toggle}>
          {language === 'en' ? 'Submit' : language === 'it' ? 'Invia' : language === 'du' ? 'Indienen' : language === 'fr' ? 'Soumettre' : 'Submit'}

          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Customcars



