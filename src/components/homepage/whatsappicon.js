import React, { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { BsWhatsapp } from 'react-icons/bs';
import Falchyy from '../../assets/images/Falchy-Whatsapp-Profile-Grayish.svg';

const WhatsAppIcon = () => {
  const [notificationCount, setNotificationCount] = useState(1);
  const [chatMessage, setChatMessage] = useState("Hi, how can I assist you today?");
  const [isClicked, setIsClicked] = useState(false); // State to track if the icon is clicked

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationCount(0);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const dynamicMessage = "Hello! I noticed you are browsing our Services. How can I assist you?";
    setChatMessage(dynamicMessage);
  }, []);

  const handleIconClick = () => {
    setIsClicked(true); // Set the state to true when the icon is clicked
  };

  // Reset the animation after the WhatsApp chat window is closed
  const handleClose = () => {
    setIsClicked(false); // Reset isClicked state to restart animation
  };

  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+393338000177"
        accountName="Falchy"
        allowClickAway={true}
        notificationCount={notificationCount}
        statusMessage="We are available 24/7. How can we assist you?"
        chatMessage={chatMessage}
        darkMode={false}
        avatar={Falchyy}
        buttonStyle={{
          backgroundColor: '#25D366',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          boxShadow: '2px 2px 6px rgba(0,0,0,0.4)',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '99999999',
          pointerEvents: 'auto',
          animation: isClicked ? 'none' : 'bounce 2s ease-in-out infinite', // Stop animation when clicked
        }}
        icon={<BsWhatsapp size={73} color="white" />}
        className="floating-whatsapp-icon"
        onClick={handleIconClick} // Set the click handler
        onClose={handleClose} // Triggered when the WhatsApp chat is closed
      />
    </div>
  );
};

export default WhatsAppIcon;
