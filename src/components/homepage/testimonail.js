import React from 'react';
import QuotationMark from '../../assets/images/homepageimage/QuotationMark.svg';
import TopLeftEclipse from '../../assets/images/homepageimage/Testimonial-Images/Circle Upper Left.png';
import BottomRightEclipse from '../../assets/images/homepageimage/Testimonial-Images/Circle Bottom Right (1).png';
import { TranslationContext } from '../../contextapi/translationContext';
import { useContext } from "react";
import { useState } from 'react';
// import { useEffect } from 'react';


// TestimonialCard Component
const TestimonialCard = ({ description, author, company }) => (

  


  
  <div className="testimonial-card">
    <img className="quotation-mark" src={QuotationMark} alt="Quotation Marks" loading="lazy" />
    <p className="testimonial-card-description">{description}</p>
    <hr />
    <div className='testimonial_cards_author'>
    <p className="testimonial-author">{author}</p>
    <p className="testimonial-company">{company}</p>
    </div>
  </div>
);

// TestimonialSection Component
const Testimonial = () => {
  const { language } = useContext(TranslationContext);



  
  const testimonials = [
  {
    description:
      language === 'en' ? 
        'I recently used the transfer service from these guys, and the experience was exceptional! The team was professional and ensured my journey was seamless. The vehicle was immaculate, and the driver was courteous and prompt. I highly recommend their luxury transfer services, as it was a flawless experience.' :
      language === 'it' ? 
        'Recentemente ho utilizzato il servizio di trasferimento di queste persone, e l\'esperienza è stata eccezionale! Il team è stato professionale e ha assicurato che il mio viaggio fosse senza intoppi. Il veicolo era immacolato e l\'autista è stato cortese e puntuale. Consiglio vivamente i loro servizi di trasferimento di lusso!' :
      language === 'nl' ? 
        'Onlangs heb ik de transferdienst van deze jongens gebruikt en de ervaring was uitzonderlijk! Het team was professioneel en zorgde ervoor dat mijn reis soepel verliep. Het voertuig was onberispelijk en de chauffeur was beleefd en punctueel. Ik beveel hun luxe transferdiensten ten zeerste aan!' :
      language === 'fr' ? 
        'J\'ai récemment utilisé le service de transfert de ces gars, et l\'expérience était exceptionnelle! L\'équipe était professionnelle et a veillé à ce que mon voyage soit sans faille. Le véhicule était impeccable et le chauffeur était courtois et ponctuel. Je recommande vivement leurs services de transfert de luxe!' :
        'I recently used the transfer service from these guys, and the experience was exceptional! The team was professional and ensured my journey was seamless. The vehicle was immaculate, and the driver was courteous and prompt. I highly recommend their luxury transfer services, as it was a flawless experience.',
    author: 'Giovanni Doe',
    company: 'Owner of Car Rental Company',
  },
  {
    description:
      language === 'en' ? 
        'Last month, I had the pleasure of using their luxury rental service, and I couldn’t be more impressed! The team was highly professional, ensuring that every detail was taken care of. The vehicle was spotless, and the service was outstanding. I highly recommend their premium rental services for an unforgettable experience!' :
      language === 'it' ? 
        'Il mese scorso ho avuto il piacere di utilizzare il servizio di noleggio di lusso da loro, e non potrei essere più impressionato! Il team è stato altamente professionale, assicurandosi che ogni dettaglio fosse curato. Il veicolo era impeccabile e il servizio eccezionale! Consiglio vivamente i loro servizi di noleggio premium!' :
      language === 'nl' ? 
        'Vorige maand had ik het genoegen hun luxe verhuurservice te gebruiken, en ik was er niet minder van onder de indruk! Het team was zeer professioneel en zorgde ervoor dat elk detail verzorgd werd. Het voertuig was vlekkeloos en de service was uitmuntend! Ik beveel hun premium verhuurservice ten zeerste aan!' :
      language === 'fr' ? 
        'Le mois dernier, j\'ai eu le plaisir d\'utiliser leur service de location de luxe, et je n\'aurais pas pu être plus impressionné! L\'équipe a été très professionnelle, s\'assurant que chaque détail soit pris en charge. Le véhicule était impeccable et le service exceptionnel! Je recommande vivement leurs services de location premium!' :
        'Last month, I had the pleasure of using their luxury rental service, and I couldn’t be more impressed! The team was highly professional, ensuring that every detail was taken care of. The vehicle was spotless, and the service was outstanding. I highly recommend their premium rental services for an unforgettable experience.',
    author: 'Jane Smith',
    company: 'CEO of Auto Ventures',
  },
  {
    description:
      language === 'en' ? 
        'Two days ago, I used the concierge services from Falchyy, and the experience was exceptional! The team was knowledgeable and attentive, guiding me through every step. They went above and beyond to provide personalized solutions, making my experience seamless and stress-free. Their services are second to none!' :
      language === 'it' ? 
        'Due giorni fa ho utilizzato i servizi di concierge di Falchyy, e l\'esperienza è stata eccezionale! Il team è stato esperto e attento, guidandomi in ogni passo. Hanno fatto di più per fornire soluzioni personalizzate, rendendo la mia esperienza senza stress! I loro servizi sono senza pari!' :
      language === 'nl' ? 
        'Twee dagen geleden heb ik de conciërgeservices van Falchyy gebruikt, en de ervaring was uitzonderlijk! Het team was deskundig en attent, leidde me door elke stap. Ze deden er alles aan om gepersonaliseerde oplossingen te bieden, waardoor mijn ervaring stressvrij was! Hun diensten zijn ongeëvenaard!' :
      language === 'fr' ? 
        'Il y a deux jours, j\'ai utilisé les services de conciergerie de Falchyy, et l\'expérience était exceptionnelle! L\'équipe était compétente et attentive, me guidant à chaque étape. Ils ont fait des efforts considérables pour fournir des solutions personnalisées, rendant mon expérience fluide et sans stress! Leurs services sont inégalés!' :
        'Two days ago, I used the concierge services from Falchyy, and the experience was exceptional! The team was knowledgeable and attentive, guiding me through every step. They went above and beyond to provide personalized solutions, making my experience seamless and stress-free. Their services are second to none!',
    author: 'Robert Brown',
    company: 'Founder of Road Safety Solutions',
  },
  {
    description:
      language === 'en' ? 
        'I recently booked a luxury yacht charter, and the service was beyond my expectations! The crew was professional, the yacht was pristine, and every detail was meticulously handled. I felt like royalty throughout the entire experience. I highly recommend their premium yacht services for an unforgettable time on the water!' :
      language === 'it' ? 
        'Recentemente ho prenotato un charter di lusso per yacht, e il servizio ha superato le mie aspettative! L\'equipaggio era professionale, lo yacht era immacolato, e ogni dettaglio è stato gestito meticolosamente. Mi sono sentito come una persona reale durante tutta l\'esperienza. Consiglio vivamente i loro servizi premium per yacht per un\'esperienza indimenticabile!' :
      language === 'nl' ? 
        'Onlangs heb ik een luxe jachtcharter geboekt, en de service overtrof mijn verwachtingen! De bemanning was professioneel, het jacht was onberispelijk, en elk detail werd met zorg behandeld. Ik voelde me als royalty gedurende de hele ervaring. Ik beveel hun premium jachtservices ten zeerste aan voor een onvergetelijke tijd op het water!' :
      language === 'fr' ? 
        'J\'ai récemment réservé une location de yacht de luxe, et le service a dépassé mes attentes! L\'équipage était professionnel, le yacht était immaculé, et chaque détail était méticuleusement pris en charge. Je me suis senti comme un roi tout au long de l\'expérience. Je recommande vivement leurs services de yacht haut de gamme pour un moment inoubliable sur l\'eau!' :
        'I recently booked a luxury yacht charter, and the service was beyond my expectations! The crew was professional, the yacht was pristine, and every detail was meticulously handled. I felt like royalty throughout the entire experience. I highly recommend their premium yacht services for an unforgettable time on the water.',
    author: 'Emily White',
    company: 'Founder of Elite Yachts',
  }
];

  const [index, setIndex] = useState(0);

  // Update the displayed testimonials every 30 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  //   }, 30000); // 30 seconds

  //   return () => clearInterval(interval); // Clean up on component unmount
  // }, []);

  // Get the last 3 testimonials based on the current index
  const displayedTestimonials = testimonials.slice(index, index + 3);



  return (
    <div className="blue-testimonial-section">
      <img className="toplefteclipse" src={TopLeftEclipse} alt="Top Left Eclipse" loading="lazy" />
      <img className="bottomrighteclipse" src={BottomRightEclipse} alt="Bottom Right Eclipse" loading="lazy" />
      <h2 className="testimonial-heading">{
  language === 'en' ? (
    'Client Testimonials'
  ) : language === 'it' ? (
    'Testimonianze dei Clienti'
  ) : language === 'du' ? (
    <>
      Klant
      <br />
      beoordelingen
    </>
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
        {displayedTestimonials.map((testimonial, index) => (
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