import React from 'react';
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";




const Contactpicture = () => {
  const { language } = useContext(TranslationContext);
  return (
    <div className='contact_card_1'>
      
      <h1 className='new_contact_heading_one'>
  {language === 'en' 
    ? "Contact Us" 
    : language === 'it' 
    ? "Contattaci" 
    : language === 'fr' 
    ? "Contactez-nous" 
    : language === 'du' 
    ? "Neem contact met ons op" 
    : "Contact Us"}
</h1>
<h3 className='new_contact_heading_2'>
  {language === 'en' 
    ? <>Why Wait? Your Perfect <br /> Experience is just One Message <br /> Away</> 
    : language === 'it' 
    ? <>Perché aspettare? La tua esperienza perfetta è a solo un messaggio <br /> di distanza</> 
    : language === 'fr' 
    ? <>Pourquoi attendre ? Votre expérience parfaite est à un message <br /> de distance</> 
    : language === 'du' 
    ? <>Waarom wachten? Jouw perfecte <br /> ervaring is slechts één bericht <br /> van je verwijderd</> 
    : <>Why Wait? Your Perfect <br /> Experience is just One Message <br /> Away</>}
</h3>


    </div>
  );
};

export default Contactpicture;
