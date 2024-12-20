import React from 'react';
import StepsFlowVector from '../../assets/images/homepageimage/Steps-Images/Steps Flow Vector.svg'
import StepsTouchIcon from '../../assets/images/homepageimage/Steps Icons/Touch-Icon.svg';
import StepsFormIcon from '../../assets/images/homepageimage/Steps Icons/Form-Icon.svg';
import StepsPhoneIcon from '../../assets/images/homepageimage/Steps Icons/Phone-Icon.svg';
import { TranslationContext } from '../../contextapi/translationContext';
import { useContext } from "react";


// StepCard Component
const StepCard = ({ number, icon, description }) => (
  <div className="steps-card">
    <div className="steps-number">{number}</div>
    <img className="steps-icon" src={icon} alt={`step ${number} icon`} />
    <p className="steps-card-description">{description}</p>
  </div>
);

// StepsSection Component
const Steps = () => {

  const { language } = useContext(TranslationContext);


  return (
    <div className="steps-section">
      <p className="tagline">{
  language === 'en' ? (
    'Plan Your Journey Now'
  ) : language === 'it' ? (
    'Pianifica il tuo viaggio ora'
  ) : language === 'du' ? (
    'Plan je reis nu'
  ) : language === 'fr' ? (
    'Planifiez votre voyage maintenant'
  ) : (
    'Plan Your Journey Now'
  )
}
</p>
<h2 className="steps-heading">
  {language === 'en' ? (
    <>
      Book your service in a{' '}
      <span className="steps-golden-heading">single click</span>
    </>
  ) : language === 'it' ? (
    <>
      Prenota il tuo servizio in un{' '}
      <span className="steps-golden-heading">clic singolo</span>
    </>
  ) : language === 'du' ? (
    <>
      Boek je service in een{' '}
      <span className="steps-golden-heading">enkele klik</span>
    </>
  ) : language === 'fr' ? (
    <>
      Réservez votre service en un{' '}
      <span className="steps-golden-heading">clic</span>
    </>
  ) : (
    <>
      Book your service in a{' '}
      <span className="steps-golden-heading">single click</span>
    </>
  )}
</h2>


      <div className="steps-cardsnvector">
        <img
          className="steps-flow-vector"
          src={StepsFlowVector}
          alt="steps vector"
        />
        <div className="steps-cards">
        <StepCard
  number="1"
  icon={StepsTouchIcon}
  description={
    language === 'en' ? (
      'Select A Service or Book An Appointment'
    ) : language === 'it' ? (
      'Seleziona un servizio o prenota un appuntamento'
    ) : language === 'du' ? (
      'Selecteer een service of boek een afspraak'
    ) : language === 'fr' ? (
      'Sélectionnez un service ou réservez un rendez-vous'
    ) : (
      'Select A Service or Book An Appointment'
    )
  }
/>

<StepCard
  number="2"
  icon={StepsFormIcon}
  description={
    language === 'en' ? (
      'Fill Out And Submit Your Service Booking Form'
    ) : language === 'it' ? (
      'Compila e invia il modulo di prenotazione del servizio'
    ) : language === 'du' ? (
      'Vul het formulier voor serviceboeking in en dien het in'
    ) : language === 'fr' ? (
      'Remplissez et soumettez votre formulaire de réservation de service'
    ) : (
      'Fill Out And Submit Your Service Booking Form'
    )
  }
/>

<StepCard
  number="3"
  icon={StepsPhoneIcon}
  description={
    language === 'en' ? (
      'A Specialist Will Contact And Finalize Your Booking'
    ) : language === 'it' ? (
      'Uno specialista ti contatterà e finalizzerà la tua prenotazione'
    ) : language === 'du' ? (
      'Een specialist neemt contact met je op en rond je boeking af'
    ) : language === 'fr' ? (
      'Un spécialiste vous contactera et finalisera votre réservation'
    ) : (
      'A Specialist Will Contact And Finalize Your Booking'
    )
  }
/>

        </div>
      </div>
    </div>
  );
};

export default Steps;