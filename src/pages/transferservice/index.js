import React, { useState, useEffect } from 'react';
import Contactcard from '../../components/transferservice/contactcard';
import Transfercards from '../../components/transferservice/transfercards3';
import Caraousel from '../../components/caraousel/caraousel';
import Footertop from '../../components/footerabove/footerabove';
import CustomCookieConsent from '../../components/transferservice/customCookieConsent'; // Ensure exact match
import { Modal, Box, Button, Typography } from '@mui/material'; // Correct import for MUI Modal
import Bannersale from '../../assets/logo/Dark Car Sale Promo Poster.png'
import Countdown from '../../components/transferservice/countdown'

const TransferService = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000); // 15 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <CustomCookieConsent />
      <Caraousel />
      <Countdown />
      <Transfercards />
      <Footertop />

      {/* MUI Modal */}
      <div className='modal_main'>
      <Modal
        open={showModal}
        onClose={closeModal} // Close modal on clicking outside as well
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className='mobile_view'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width:"30%",
          height:"300px",
          margin:"0 auto",
          paddingTop:"500px"
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {/* Close Button */}
          <Button 
            onClick={closeModal} 
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: 'white',
              fontSize: '24px',
              minWidth: 'auto',
              padding: 0
            }}
          >
            ✖
          </Button>

          <img className="banner_sales" src={Bannersale} alt="Special Offer" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
      </Modal>
      </div>
    </div>
  );
};

export default TransferService;
