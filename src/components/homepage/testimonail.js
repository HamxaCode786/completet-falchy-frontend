import React from 'react';
import QuotationMark from '../../assets/images/homepageimage/QuotationMark.svg';
import TopLeftEclipse from '../../assets/images/homepageimage/Testimonial-Images/Circle Upper Left.png';
import BottomRightEclipse from '../../assets/images/homepageimage/Testimonial-Images/Circle Bottom Right (1).png';
import { TranslationContext } from '../../contextapi/translationContext';
import { useContext } from "react";


// TestimonialCard Component
const TestimonialCard = ({ description, author, company }) => (


  
  <div className="testimonial-card">
    <img className="quotation-mark" src={QuotationMark} alt="Quotation Marks" />
    <p className="testimonial-card-description">{description}</p>
    <hr />
    <p className="testimonial-author">{author}</p>
    <p className="testimonial-company">{company}</p>
  </div>
);

// TestimonialSection Component
const Testimonial = () => {
  const { language } = useContext(TranslationContext);



  
  const testimonials = [
    {
      description:
        language === 'en' ? 
          'I recently used the transfer service from these guys, and the experience was exceptional! The team was professional and ensured my journey was seamless from start to finish. The vehicle was immaculate, and the driver was courteous and prompt. I highly recommend their luxury transfer services for a reliable and comfortable travel experience!' :
        language === 'it' ? 
          'Recentemente ho utilizzato il servizio di trasferimento di queste persone, e l\'esperienza è stata eccezionale! Il team è stato professionale e ha assicurato che il mio viaggio fosse senza intoppi dall\'inizio alla fine. Il veicolo era immacolato, e l\'autista è stato cortese e puntuale. Consiglio vivamente i loro servizi di trasferimento di lusso per un\'esperienza di viaggio affidabile e confortevole!' :
        language === 'du' ? 
          'Onlangs heb ik de transferdienst van deze jongens gebruikt en de ervaring was uitzonderlijk! Het team was professioneel en zorgde ervoor dat mijn reis van begin tot eind soepel verliep. Het voertuig was onberispelijk en de chauffeur was beleefd en punctueel. Ik beveel hun luxe transferdiensten ten zeerste aan voor een betrouwbare en comfortabele reiservaring!' :
        language === 'fr' ? 
          'J\'ai récemment utilisé le service de transfert de ces gars, et l\'expérience était exceptionnelle! L\'équipe était professionnelle et a veillé à ce que mon voyage soit sans faille du début à la fin. Le véhicule était impeccable et le chauffeur était courtois et ponctuel. Je recommande vivement leurs services de transfert de luxe pour une expérience de voyage fiable et confortable!' :
        'I recently used the transfer service from these guys, and the experience was exceptional! The team was professional and ensured my journey was seamless from start to finish. The vehicle was immaculate, and the driver was courteous and prompt. I highly recommend their luxury transfer services for a reliable and comfortable travel experience!',
      author: 'Giovanni Doe',
      company: 'Owner of Car Rental Company',
    },
    {
      description:
        language === 'en' ? 
          'Last month I had the pleasure of using the luxury rental service from them, and I couldn’t be more impressed! From the moment I made my booking, the team was highly professional, ensuring that every detail of my journey was taken care of. The vehicle was absolutely spotless, and the service was nothing short of outstanding!' :
        language === 'it' ? 
          'Il mese scorso ho avuto il piacere di utilizzare il servizio di noleggio di lusso da loro, e non potrei essere più impressionato! Dal momento in cui ho effettuato la mia prenotazione, il team è stato altamente professionale, assicurandosi che ogni dettaglio del mio viaggio fosse curato. Il veicolo era assolutamente impeccabile e il servizio è stato eccezionale!' :
        language === 'du' ? 
          'Vorige maand had ik het genoegen hun luxe verhuurservice te gebruiken, en ik was er niet minder van onder de indruk! Vanaf het moment dat ik mijn reservering maakte, was het team zeer professioneel en zorgde ervoor dat elk detail van mijn reis werd verzorgd. Het voertuig was absoluut vlekkeloos, en de service was niets minder dan uitmuntend!' :
        language === 'fr' ? 
          'Le mois dernier, j\'ai eu le plaisir d\'utiliser leur service de location de luxe, et je n\'aurais pas pu être plus impressionné! Dès que j\'ai effectué ma réservation, l\'équipe a été très professionnelle, s\'assurant que chaque détail de mon voyage soit pris en charge. Le véhicule était absolument impeccable et le service était tout simplement exceptionnel!' :
        'Last month I had the pleasure of using the luxury rental service from them, and I couldn’t be more impressed! From the moment I made my booking, the team was highly professional, ensuring that every detail of my journey was taken care of. The vehicle was absolutely spotless, and the service was nothing short of outstanding!',
      author: 'Jane Smith',
      company: 'CEO of Auto Ventures',
    },
    {
      description:
        language === 'en' ? 
          'Two days ago I used the concierge services from Falchyy, and the experience was exceptional! The team was incredibly knowledgeable and attentive, guiding me through every step and ensuring my needs were met with ease. They went above and beyond to provide personalized solutions, making my experience very seamless and stress-free!' :
        language === 'it' ? 
          'Due giorni fa ho utilizzato i servizi di concierge di Falchyy, e l\'esperienza è stata eccezionale! Il team è stato incredibilmente esperto e attento, guidandomi in ogni passo e assicurandosi che le mie esigenze venissero soddisfatte con facilità. Hanno fatto di più per fornire soluzioni personalizzate, rendendo la mia esperienza estremamente fluida e senza stress!' :
        language === 'du' ? 
          'Twee dagen geleden heb ik de conciërgeservices van Falchyy gebruikt, en de ervaring was uitzonderlijk! Het team was ongelooflijk deskundig en attent, en leidde me door elke stap en zorgde ervoor dat mijn behoeften moeiteloos werden vervuld. Ze deden er alles aan om gepersonaliseerde oplossingen te bieden, waardoor mijn ervaring zeer soepel en stressvrij was!' :
        language === 'fr' ? 
          'Il y a deux jours, j\'ai utilisé les services de conciergerie de Falchyy, et l\'expérience était exceptionnelle! L\'équipe était incroyablement compétente et attentive, me guidant à chaque étape et s\'assurant que mes besoins étaient satisfaits en toute simplicité. Ils ont fait des efforts considérables pour fournir des solutions personnalisées, rendant mon expérience très fluide et sans stress!' :
        'Two days ago I used the concierge services from Falchyy, and the experience was exceptional! The team was incredibly knowledgeable and attentive, guiding me through every step and ensuring my needs were met with ease. They went above and beyond to provide personalized solutions, making my experience very seamless and stress-free!',
      author: 'Robert Brown',
      company: 'Founder of Road Safety Solutions',
    }
  ];
  

  return (
    <div className="blue-testimonial-section">
      <img className="toplefteclipse" src={TopLeftEclipse} alt="Top Left Eclipse" />
      <img className="bottomrighteclipse" src={BottomRightEclipse} alt="Bottom Right Eclipse" />
      <h2 className="testimonial-heading">{
  language === 'en' ? (
    'Client Testimonials'
  ) : language === 'it' ? (
    'Testimonianze dei Clienti'
  ) : language === 'du' ? (
    'Klantbeoordelingen'
  ) : language === 'fr' ? (
    'Témoignages des Clients'
  ) : (
    'Client Testimonials'
  )
}
</h2>
      <p className="testimonial-tagline">
      {
  language === 'en' ? (
    'Your insights help us grow and shape the services we provide.'
  ) : language === 'it' ? (
    'Le tue intuizioni ci aiutano a crescere e a modellare i servizi che offriamo.'
  ) : language === 'du' ? (
    'Jouw inzichten helpen ons te groeien en de diensten die wij aanbieden te vormen.'
  ) : language === 'fr' ? (
    'Vos idées nous aident à grandir et à façonner les services que nous proposons.'
  ) : (
    'Your insights help us grow and shape the services we provide.'
  )
}

      </p>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            description={testimonial.description}
            author={testimonial.author}
            company={testimonial.company}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;