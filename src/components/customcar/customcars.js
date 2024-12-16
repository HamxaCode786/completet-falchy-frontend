import React, { useState } from 'react'
import Custom from '../../assets/images/customcars/custom.jpg'
import { Modal, Button } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';

const Customcars = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

  return (
    <div className='custom_car_push' style={{ backgroundImage: `url(${Custom})`, backgroundSize: 'cover', height: '550px' }}>
      

      <div className='custom_car_div' >
      <h3 className='custom_card_heading'>Dreaming of Your Customized Car?<br/> Click the button below!</h3>
      <div className='custom_card_button_1'>
      <button className="mybutton noSelect" type="button" onClick={toggle}>
                <div className="mybuttoninner">
                    <div className="mybuttoninner2">
                        <ul>
                            <li>Start</li>
                            <div className="mybuttoninnerline2">
                                <div className="mybuttoninnerline"></div>
                            </div>
                            <li>Stop</li>
                        </ul>
                    </div>
                </div>
            </button>
            </div>
</div>

      <Modal  show={modal} onHide={toggle}>
        <Modal.Header  closeButton>
          <Modal.Title className='custom_car_modal'>Customize Car</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal_background' >
        <MDBInput label="Example label" id="form12" type="text" className="mb-4" />
        <MDBInput label="Example label" id="form12" type="text" className="mb-4" />
        <MDBInput label="Example label" id="form12" type="text" className="mb-4" />
        
        </Modal.Body>
        <Modal.Footer className='modal_custom_footer'>
          <Button variant="primary" onClick={toggle}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Customcars



