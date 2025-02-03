import React from 'react';
import { TranslationContext } from '../../contextapi/translationContext';
import { useContext } from "react";



const FAQItem = ({ id, question, answer }) => {
  return (
    <div className="accordion-item">
      <input type="checkbox" id={`item-${id}`} className="accordion-toggle" />
      <label htmlFor={`item-${id}`} className="accordion-header">
        {id}. {question}
        <span className="accordion-arrow"></span>
      </label>
      <div className="accordion-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {

  const { language } = useContext(TranslationContext);

  const faqData = [
    {
      id: 1,
      question:
        language === 'en' ? 'How do I book a car for rental service?' :
        language === 'it' ? 'Come prenoto un\'auto a noleggio?' :
        language === 'du' ? 'Hoe boek ik een auto voor verhuur?' :
        language === 'fr' ? 'Comment réserver une voiture de location?' :
        'How do I book a car for rental service?',
      answer:
        language === 'en' ? 
          'To book a car for rental, choose your desired vehicle and follow the prompts to complete your booking. You can also submit our Appointment Book and our specialist will contact you soon.' :
        language === 'it' ? 
          'Per prenotare un\'auto a noleggio, scegli il veicolo desiderato e segui le istruzioni per completare la prenotazione. Puoi anche inviare il nostro modulo di prenotazione appuntamenti e il nostro specialista ti contatterà presto.' :
        language === 'du' ? 
          'Om een auto te boeken, kies je het gewenste voertuig en volg je de aanwijzingen om je boeking te voltooien. Je kunt ook ons afspraakformulier invullen en een specialist neemt snel contact met je op.' :
        language === 'fr' ? 
          'Pour réserver une voiture de location, choisissez le véhicule souhaité et suivez les instructions pour finaliser votre réservation. Vous pouvez également soumettre notre formulaire de réservation et un spécialiste vous contactera bientôt.' :
        'To book a car for rental, choose your desired vehicle and follow the prompts to complete your booking. You can also submit our Appointment Book and our specialist will contact you soon.',
    },
    {
      id: 2,
      question:
        language === 'en' ? 'What is the process for purchasing a car?' :
        language === 'it' ? 'Qual è il processo per acquistare un\'auto?' :
        language === 'du' ? 'Wat is het proces voor het kopen van een auto?' :
        language === 'fr' ? 'Quel est le processus pour acheter une voiture?' :
        'What is the process for purchasing a car?',
      answer:
        language === 'en' ? 
          'The process for purchasing a car involves selecting your desired vehicle, completing the necessary paperwork, and making the payment. Our team will guide you through every step.' :
        language === 'it' ? 
          'Il processo per acquistare un\'auto prevede la selezione del veicolo desiderato, la compilazione della documentazione necessaria e il pagamento. Il nostro team ti guiderà in ogni fase.' :
        language === 'du' ? 
          'Het proces voor het kopen van een auto omvat het selecteren van het gewenste voertuig, het invullen van de benodigde papieren en het doen van de betaling. Ons team begeleidt je bij elke stap.' :
        language === 'fr' ? 
          'Le processus d\'achat d\'une voiture consiste à sélectionner le véhicule souhaité, à remplir la paperasse nécessaire et à effectuer le paiement. Notre équipe vous guidera à chaque étape.' :
        'The process for purchasing a car involves selecting your desired vehicle, completing the necessary paperwork, and making the payment. Our team will guide you through every step.',
    },
    {
      id: 3,
      question:
        language === 'en' ? 'What does the rent-to-own program entail?' :
        language === 'it' ? 'Cosa comprende il programma di affitto con riscatto?' :
        language === 'du' ? 'Wat houdt het huurkoopprogramma in?' :
        language === 'fr' ? 'Que comprend le programme de location-vente?' :
        'What does the rent-to-own program entail?',
      answer:
        language === 'en' ? 
          'The rent-to-own program allows you to rent a vehicle with the option to purchase it at the end of the rental term.' :
        language === 'it' ? 
          'Il programma di affitto con riscatto ti consente di noleggiare un veicolo con la possibilità di acquistarlo al termine del periodo di noleggio.' :
        language === 'du' ? 
          'Het huurkoopprogramma stelt je in staat een voertuig te huren met de optie om het aan het einde van de huurperiode te kopen.' :
        language === 'fr' ? 
          'Le programme de location-vente vous permet de louer un véhicule avec l\'option de l\'acheter à la fin de la période de location.' :
        'The rent-to-own program allows you to rent a vehicle with the option to purchase it at the end of the rental term.',
    },
    {
      id: 4,
      question:
        language === 'en' ? 'How can I book an appointment for services?' :
        language === 'it' ? 'Come posso prenotare un appuntamento per i servizi?' :
        language === 'du' ? 'Hoe kan ik een afspraak maken voor diensten?' :
        language === 'fr' ? 'Comment puis-je prendre un rendez-vous pour des services?' :
        'How can I book an appointment for services?',
      answer:
        language === 'en' ? 
          'To book an appointment for services, you can use our online booking system or call our customer support team for assistance.' :
        language === 'it' ? 
          'Per prenotare un appuntamento per i servizi, puoi utilizzare il nostro sistema di prenotazione online o chiamare il nostro team di assistenza clienti per ricevere supporto.' :
        language === 'du' ? 
          'Om een afspraak te maken voor diensten, kun je ons online boekingssysteem gebruiken of onze klantenservice bellen voor hulp.' :
        language === 'fr' ? 
          'Pour prendre un rendez-vous pour des services, vous pouvez utiliser notre système de réservation en ligne ou appeler notre équipe de support client pour obtenir de l\'aide.' :
        'To book an appointment for services, you can use our online booking system or call our customer support team for assistance.',
    },
    {
      id: 5,
      question:
        language === 'en' ? 'What types of vehicles do you offer for rental?' :
        language === 'it' ? 'Che tipi di veicoli offrite per il noleggio?' :
        language === 'du' ? 'Welke soorten voertuigen bieden jullie aan voor verhuur?' :
        language === 'fr' ? 'Quels types de véhicules proposez-vous à la location?' :
        'What types of vehicles do you offer for rental?',
      answer:
        language === 'en' ? 
          'We offer a wide range of vehicles for rental, including sedans, SUVs, trucks, and luxury cars.' :
        language === 'it' ? 
          'Offriamo una vasta gamma di veicoli a noleggio, tra cui berline, SUV, camion e auto di lusso.' :
        language === 'du' ? 
          'We bieden een breed scala aan voertuigen voor verhuur, waaronder sedans, SUV\'s, vrachtwagens en luxeauto\'s.' :
        language === 'fr' ? 
          'Nous proposons une large gamme de véhicules à louer, y compris des berlines, des SUV, des camions et des voitures de luxe.' :
        'We offer a wide range of vehicles for rental, including sedans, SUVs, trucks, and luxury cars.',
    }
  ];
  
  return (
    <div className="FAQs-section">
      <h2 className="FAQs-heading">{
  language === 'en' ? (
    'Exquisite Insights to Your Most Common Inquiries.'
  ) : language === 'it' ? (
    'Eccellenti informazioni per le tue domande più comuni.'
  ) : language === 'du' ? (
    'Uitstekende inzichten in uw meest voorkomende vragen.'
  ) : language === 'fr' ? (
    'Des informations exquises pour vos questions les plus fréquentes.'
  ) : (
    'Exquisite Insights to Your Most Common Inquiries.'
  )
}
</h2>
      <div className="accordion">
        {faqData.map((faq) => (
          <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;