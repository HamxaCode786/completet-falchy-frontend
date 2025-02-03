import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/luggagetransferdeposit/Dinnning1.png";
import image2 from "../../assets/images/luggagetransferdeposit/Wellness-min.png";
import image3 from "../../assets/images/luggagetransferdeposit/Conference1.png";
import image4 from "../../assets/images/luggagetransferdeposit/ProfessionService-min.png";
import image5 from "../../assets/images/luggagetransferdeposit/LifeStylee-min.png";
import image6 from "../../assets/images/luggagetransferdeposit/Travel1.png";
import Travel1 from '../../assets/images/Travel&Accomodation/Four-Seasons-min.png'
import Travel2 from '../../assets/images/Travel&Accomodation/Grand-Hotel-min.png'
import Travel3 from '../../assets/images/Travel&Accomodation/Hotel-Galia-min.png'
import Travel4 from '../../assets/images/Travel&Accomodation/VillaD.png'
import Travel5 from '../../assets/images/Travel&Accomodation/lastvilla.png'
import Dining1 from '../../assets/images/Dining&/Armani-hotel-milan-min.png'
import Dining2 from '../../assets/images/Dining&/Four-Season-Dining-min.png'
import Dining3 from '../../assets/images/Dining&/Grand-Hotel-min.png'
import Dining4 from '../../assets/images/Dining&/Villa-Deste-min.png'
import lifestyle from '../../assets/images/caraoselImage/lifestyleexpereinces&conferences/Conferences-Banner_Image-min.png'
import lifestyle2 from '../../assets/images/caraoselImage/lifestyleexpereinces&conferences/Milan-Gallery-min.png'
import lifestyle3 from '../../assets/images/caraoselImage/lifestyleexpereinces&conferences/Seravalle-Outlet-min.png'
import Relax1 from '../../assets/images/caraoselImage/relaxation/Armani-Spa-Image-min.png'
import Relax2 from '../../assets/images/caraoselImage/relaxation/Palazzo Parigi Hotel Milan-min.png'
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const Conceirge = () => {
  const { language } = useContext(TranslationContext);

  const navigate = useNavigate();

  const handleCardClick = (cardData) => {
    const dynamicUrl = `/${cardData.title[language].replace(/\s+/g, '-').toLowerCase()}`;
    navigate(dynamicUrl, { state: cardData });
    
    
  };
  
  

  const CardComponent = ({ data }) => (
    <div
      className="image_hover_done custom_image"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${data.image[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "30px",
        borderRadius: "15px",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onClick={() => handleCardClick(data)}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundImage = `linear-gradient(rgba(5, 2, 31, 0.8), rgba(5, 2, 31, 0.8)), url(${data.image[0]})`;
        e.currentTarget.style.opacity = "1";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${data.image[0]})`;
        e.currentTarget.style.opacity = "1";
      }}
    >
      <h2 style={{ margin: 0, color: "white", fontSize: "36px" }}>
        {data.title[language]}
      </h2>
      <button
        className="image_button_div"
        style={{
          alignSelf: "flex-start",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {
          language === "en"
            ? "View More"
            : language === "it"
            ? "Vedi di più"
            : language === "nl"
            ? "Bekijk meer" // For Dutch
            : language === "fr"
            ? "Voir plus"
            : "View More" // Default to English
        }{" "}
        <i className="fas fa-arrow-right" style={{ width: "40px" }}></i>
      </button>
    </div>
  );

  const cardDetails = [
    {
      title: {
        en: "Dining and Entertainment",
        it: "Ristorazione e Intrattenimento",
        du: "Eten en Entertainment",
        fr: "Restauration et Divertissement",
      },
      title2: {
        en: "Reserve Your Exclusive Dining and Entertainment Experience with us!",
        it: "Prenota la tua esperienza esclusiva di ristorazione e intrattenimento con noi!",
        du: "Reserveer uw exclusieve diner- en entertainmentervaring bij ons!",
        fr: "Réservez votre expérience exclusive de restauration et de divertissement avec nous !",
      },
      image: [Dining1, Dining2, Dining3, Dining4],
      description: {
        en: "Experience exquisite culinary delights and world-class entertainment. From exclusive restaurant reservations to private concerts and shows, we curate unforgettable experiences. Our expert concierge team handpicks the finest dining establishments and arranges VIP access to the most sought-after entertainment venues. Whether it's a romantic dinner at a Michelin-starred restaurant or front-row seats at a sold-out performance, we ensure every moment is extraordinary.",
        it: "Vivi prelibatezze culinarie raffinate e intrattenimento di classe mondiale. Dalle prenotazioni in ristoranti esclusivi a concerti e spettacoli privati, creiamo esperienze indimenticabili. Il nostro esperto team di concierge seleziona i migliori ristoranti e organizza l'accesso VIP alle location di intrattenimento più ricercate. Che si tratti di una cena romantica in un ristorante stellato Michelin o di posti in prima fila a uno spettacolo sold-out, ci assicuriamo che ogni momento sia straordinario.",
        du: "Ervaar voortreffelijke culinaire lekkernijen en entertainment van wereldklasse. Van exclusieve restaurantreserveringen tot privéconcerten en shows, wij creëren onvergetelijke ervaringen. Ons deskundige conciërge-team selecteert de beste eetgelegenheden en regelt VIP-toegang tot de meest gewilde entertainmentlocaties. Of het nu gaat om een romantisch diner in een Michelin-sterrenrestaurant of zitplaatsen op de eerste rij bij een uitverkocht optreden, wij zorgen ervoor dat elk moment buitengewoon is.",
        fr: "Vivez des délices culinaires exquis et un divertissement de classe mondiale. Des réservations dans des restaurants exclusifs aux concerts privés et spectacles, nous organisons des expériences inoubliables. Notre équipe de conciergerie d'experts sélectionne les meilleurs restaurants et organise l'accès VIP aux lieux de divertissement les plus recherchés. Que ce soit un dîner romantique dans un restaurant étoilé Michelin ou des places en première ligne à une performance complète, nous veillons à ce que chaque instant soit extraordinaire.",
      },
      icons1: [
        {
          icon: "fa-solid fa-bottle-water",
          text: {
            en: "Water Bottle",
            it: "Bottiglia d'acqua",
            du: "Waterfles",
            fr: "Bouteille d'eau",
          },
        },
        {
          icon: "fa-wifi",
          text: { en: "Wifi", it: "Wifi", du: "Wifi", fr: "Wifi" },
        },
        {
          icon: "fa-car",
          text: {
            en: "Luxury Transportation",
            it: "Trasporti di lusso",
            du: "Luxe Vervoer",
            fr: "Transport de luxe",
          },
        },
        {
          icon: "fa-gem",
          text: { en: "Luxury", it: "Lusso", du: "Luxe", fr: "Luxe" },
        },
      ],
      icons2: [
        {
          icon: "fa-car",
          text: {
            en: "Valet Parking",
            it: "Parcheggio con valet",
            du: "Valet Parking",
            fr: "Parking avec voiturier",
          },
        },
        {
          icon: "fa-star",
          text: {
            en: "Luxury Ambiance",
            it: "Ambiente di lusso",
            du: "Luxe Ambiance",
            fr: "Ambiance de luxe",
          },
        },
        {
          icon: "fa-music",
          text: {
            en: "Acoustic Music",
            it: "Musica acustica",
            du: "Akoestische muziek",
            fr: "Musique acoustique",
          },
        },
        {
          icon: "fa-taxi",
          text: {
            en: "Transportation",
            it: "Trasporto",
            du: "Vervoer",
            fr: "Transport",
          },
        },
      ],
    },
    {
      title: {
        en: "Wellness and Relaxation",
        it: "Benessere e Relax",
        du: "Wellness en Ontspanning",
        fr: "Bien-être et Relaxation",
      },
      title2: {
        en: "Your Path to Relaxation Starts Here – Fill Out the Form and Unwind!",
        it: "Il tuo percorso verso il relax inizia qui – Compila il modulo e rilassati!",
        du: "Je pad naar ontspanning begint hier – Vul het formulier in en ontspan!",
        fr: "Votre chemin vers la relaxation commence ici – Remplissez le formulaire et détendez-vous !",
      },
      image: [image2, Relax1, Relax2, image4],
      description: {
        en: "Rejuvenate your body and mind with our premium wellness services. Access top spas, personal trainers, beauty treatments, and holistic health experiences. Our carefully selected wellness partners provide transformative treatments, from traditional therapies to cutting-edge beauty technologies. Enjoy personalized fitness sessions, meditation classes, and rejuvenating spa treatments delivered by industry-leading professionals in luxurious settings.",
        it: "Ringiovanisci il corpo e la mente con i nostri servizi di benessere premium. Accedi alle migliori spa, personal trainer, trattamenti di bellezza e esperienze di salute olistica. I nostri partner di benessere selezionati con cura offrono trattamenti trasformativi, dalle terapie tradizionali alle tecnologie di bellezza all'avanguardia. Goditi sessioni di fitness personalizzate, lezioni di meditazione e trattamenti spa ringiovanenti offerti da professionisti di settore in ambienti lussuosi.",
        du: "Verjong je lichaam en geest met onze premium wellnessdiensten. Toegang tot top-spa's, personal trainers, schoonheidsbehandelingen en holistische gezondheidsbelevingen. Onze zorgvuldig geselecteerde wellnesspartners bieden transformerende behandelingen, van traditionele therapieën tot geavanceerde schoonheids-technologieën. Geniet van gepersonaliseerde fitnesssessies, meditatieklassen en verjongende spabehandelingen, uitgevoerd door toonaangevende professionals in luxe omgevingen.",
        fr: "Rajeunissez votre corps et votre esprit avec nos services de bien-être premium. Accédez aux meilleures spas, entraîneurs personnels, soins de beauté et expériences de santé holistique. Nos partenaires de bien-être soigneusement sélectionnés proposent des traitements transformateurs, des thérapies traditionnelles aux technologies de beauté de pointe. Profitez de séances de fitness personnalisées, de cours de méditation et de traitements spa régénérants prodigués par des professionnels de l'industrie dans des cadres luxueux.",
      },
      icons1: [
        {
          icon: "fa-solid fa-bottle-water",
          text: {
            en: "Water Bottle",
            it: "Bottiglia d'acqua",
            du: "Waterfles",
            fr: "Bouteille d'eau",
          },
        },
        {
          icon: "fa-wifi",
          text: { en: "Wifi", it: "Wifi", du: "Wifi", fr: "Wifi" },
        },
        {
          icon: "fa-car",
          text: {
            en: "Luxury Transportation",
            it: "Trasporti di lusso",
            du: "Luxe Vervoer",
            fr: "Transport de luxe",
          },
        },
        {
          icon: "fa-gem",
          text: { en: "Luxury", it: "Lusso", du: "Luxe", fr: "Luxe" },
        },
      ],
      icons2: [
        {
          icon: "fa-hot-tub",
          text: {
            en: "Massage",
            it: "Massaggio",
            du: "Massage",
            fr: "Massage",
          },
        },
        {
          icon: "fa-leaf",
          text: {
            en: "Holistic Health",
            it: "Salute Olistica",
            du: "Holistische Gezondheid",
            fr: "Santé Holistique",
          },
        },
        {
          icon: "fa-peace",
          text: {
            en: "Meditation",
            it: "Meditazione",
            du: "Meditatie",
            fr: "Méditation",
          },
        },
        {
          icon: "fa-star",
          text: {
            en: "Premium Service",
            it: "Servizio Premium",
            du: "Premium Service",
            fr: "Service Premium",
          },
        },
      ],
    },
    
    {
      title: {
        en: "Travel and Accommodation",
        it: "Viaggi e Alloggio",
        du: "Reizen en Accommodatie",
        fr: "Voyage et Hébergement",
      },
      title2: {
        en: "Secure Your Exclusive Professional Services With Us– Tailored to Perfection for the Discerning Few",
        it: "Garantisci i tuoi servizi professionali esclusivi con noi – Su misura per la perfezione per pochi intenditori",
        du: "Beveilig uw exclusieve professionele diensten bij ons – Op maat gemaakt voor de weinigen die het waarderen",
        fr: "Sécurisez vos services professionnels exclusifs avec nous – Sur mesure pour les connaisseurs exigeants",
      },
      image: [Travel2, Travel1, Travel5, Travel3, Travel4],
      description: {
        en: "Access our network of trusted professionals for business support, legal services, translation, and other specialized assistance during your stay. Our vetted experts provide seamless solutions for all your professional needs, from document preparation to business meeting coordination. We connect you with skilled interpreters, legal advisors, and business consultants who understand the nuances of both local and international operations.",
        it: "Accedi alla nostra rete di professionisti affidabili per supporto aziendale, servizi legali, traduzioni e altre assistenze specializzate durante il tuo soggiorno. I nostri esperti selezionati offrono soluzioni senza interruzioni per tutte le tue esigenze professionali, dalla preparazione di documenti alla coordinazione di riunioni aziendali. Ti mettiamo in contatto con interpreti qualificati, consulenti legali e consulenti aziendali che comprendono le sfumature delle operazioni locali e internazionali.",
        du: "Krijg toegang tot ons netwerk van vertrouwde professionals voor zakelijke ondersteuning, juridische diensten, vertalingen en andere gespecialiseerde hulp tijdens uw verblijf. Onze geselecteerde experts bieden naadloze oplossingen voor al uw professionele behoeften, van documentvoorbereiding tot de coördinatie van zakelijke vergaderingen. Wij verbinden u met deskundige tolken, juridisch adviseurs en zakelijke consultants die de nuances van zowel lokale als internationale operaties begrijpen.",
        fr: "Accédez à notre réseau de professionnels de confiance pour le soutien aux affaires, les services juridiques, la traduction et d'autres services spécialisés pendant votre séjour. Nos experts sélectionnés fournissent des solutions sans faille pour tous vos besoins professionnels, de la préparation des documents à la coordination des réunions d'affaires. Nous vous mettons en relation avec des interprètes qualifiés, des conseillers juridiques et des consultants en affaires qui comprennent les nuances des opérations locales et internationales.",
      },
      icons1: [
        {
          icon: "fa-solid fa-bottle-water",
          text: {
            en: "Water Bottle",
            it: "Bottiglia d'acqua",
            du: "Waterfles",
            fr: "Bouteille d'eau",
          },
        },
        {
          icon: "fa-wifi",
          text: { en: "Wifi", it: "Wifi", du: "Wifi", fr: "Wifi" },
        },
        {
          icon: "fa-car",
          text: {
            en: "Luxury Transportation",
            it: "Trasporti di lusso",
            du: "Luxe Vervoer",
            fr: "Transport de luxe",
          },
        },
        {
          icon: "fa-gem",
          text: { en: "Luxury", it: "Lusso", du: "Luxe", fr: "Luxe" },
        },
      ],
      icons2: [
        {
          icon: "fa-file-contract",
          text: {
            en: "Documentation",
            it: "Documentazione",
            du: "Documentatie",
            fr: "Documentation",
          },
        },
        {
          icon: "fa-user-tie",
          text: {
            en: "Professional Advisors",
            it: "Consulenti Professionali",
            du: "Professionele Adviseurs",
            fr: "Conseillers professionnels",
          },
        },
        {
          icon: "fa-globe",
          text: {
            en: "International Services",
            it: "Servizi Internazionali",
            du: "Internationale Diensten",
            fr: "Services Internationaux",
          },
        },
        {
          icon: "fa-clock",
          text: {
            en: "24/7 Support",
            it: "Supporto 24/7",
            du: "24/7 Ondersteuning",
            fr: "Assistance 24/7",
          },
        },
      ],
    },
    {
      title: {
        en: "Lifestyle Experiences & Conferences",
        it: "Stile di Vita, Esperienze e Conferenze",
        du: "Levensstijl, Ervaringen en Conferenties",
        fr: "Style de Vie, Expériences et Conférences",
      },
      title2: {
        en: "Streamline Your Life with Excellence – Let’s Create the Perfect Experience for You!",
        it: "Semplifica la tua vita con eccellenza – Creiamo l'esperienza perfetta per te!",
        du: "Stroomlijn je leven met uitmuntendheid – Laten we de perfecte ervaring voor jou creëren!",
        fr: "Rationalisez votre vie avec excellence – Créons l'expérience parfaite pour vous !",
      },
      image: [image5, lifestyle, lifestyle2, lifestyle3],
      description: {
        en: "Simplify your life with our comprehensive lifestyle management services. From personal shopping to home management, we take care of every detail. Our dedicated team handles everything from wardrobe curation and gift procurement to household maintenance and administrative tasks. We provide proactive solutions and personalized attention to ensure your lifestyle runs smoothly and efficiently.",
        it: "Semplifica la tua vita con i nostri servizi completi di gestione dello stile di vita. Dallo shopping personale alla gestione della casa, ci occupiamo di ogni dettaglio. Il nostro team dedicato gestisce tutto, dalla cura del guardaroba e l'acquisto dei regali alla manutenzione domestica e le attività amministrative. Offriamo soluzioni proattive e attenzione personalizzata per garantire che il tuo stile di vita proceda senza intoppi ed efficientemente.",
        du: "Vereenvoudig je leven met onze uitgebreide lifestyle-managementdiensten. Van persoonlijke shopping tot thuisbeheer, wij zorgen voor elk detail. Ons toegewijde team beheert alles, van garderobe-curatie en geschenkinkoop tot huishoudonderhoud en administratieve taken. We bieden proactieve oplossingen en persoonlijke aandacht om ervoor te zorgen dat je levensstijl soepel en efficiënt verloopt.",
        fr: "Simplifiez votre vie avec nos services complets de gestion du style de vie. Du shopping personnel à la gestion de la maison, nous nous occupons de chaque détail. Notre équipe dédiée gère tout, de la création de garde-robe et l'achat de cadeaux à l'entretien domestique et les tâches administratives. Nous fournissons des solutions proactives et une attention personnalisée pour garantir que votre style de vie se déroule sans accroc et efficacement.",
      },
      icons1: [
        {
          icon: "fa-solid fa-bottle-water",
          text: {
            en: "Water Bottle",
            it: "Bottiglia d'acqua",
            du: "Waterfles",
            fr: "Bouteille d'eau",
          },
        },
        {
          icon: "fa-wifi",
          text: { en: "Wifi", it: "Wifi", du: "Wifi", fr: "Wifi" },
        },
        {
          icon: "fa-car",
          text: {
            en: "Luxury Transportation",
            it: "Trasporti di lusso",
            du: "Luxe Vervoer",
            fr: "Transport de luxe",
          },
        },
        {
          icon: "fa-gem",
          text: { en: "Luxury", it: "Lusso", du: "Luxe", fr: "Luxe" },
        },
      ],
      icons2: [
        {
          icon: "fa-tools",
          text: {
            en: "Maintenance",
            it: "Manutenzione",
            du: "Onderhoud",
            fr: "Entretien",
          },
        },
        {
          icon: "fa-tasks",
          text: {
            en: "Task Management",
            it: "Gestione delle Attività",
            du: "Taakbeheer",
            fr: "Gestion des Tâches",
          },
        },
        {
          icon: "fa-calendar-alt",
          text: {
            en: "Scheduling",
            it: "Pianificazione",
            du: "Planning",
            fr: "Planification",
          },
        },
        {
          icon: "fa-concierge-bell",
          text: {
            en: "Concierge Support",
            it: "Supporto Concierge",
            du: "Concierge Support",
            fr: "Support Concierge",
          },
        },
      ],
    },
    
  ];

  return (
    <div className="luggage_transfer_and_deposit">
      <h1 className="transfer_service_heading1">
        {language === "en"
          ? "Experience Tailored Services for Every Need"
          : language === "it"
          ? "Scopri i Servizi Personalizzati per Ogni Esigenza"
          : language === "fr"
          ? "Découvrez des services sur mesure pour chaque besoin"
          : "Experience Tailored Services for Every Need"}
      </h1>

      <h1 className="transfer_service_heading2">
        {language === "en"
          ? "Indulge in Services Crafted Exclusively for Your Every Desire."
          : language === "it"
          ? "Concediti Servizi Creati Esclusivamente per Ogni Tuo Desiderio."
          : language === "fr"
          ? "Offrez-vous des services créés exclusivement pour chaque désir."
          : "Indulge in Services Crafted Exclusively for Your Every Desire."}
      </h1>

      <div className="tailored_container">
        <div className="first_row1">
          {cardDetails.slice(0, 2).map((card, index) => (
            <CardComponent key={index} data={card} />
          ))}
        </div>
        <div className="second_row1">
          {cardDetails.slice(2).map((card, index) => (
            <CardComponent key={index + 3} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conceirge;
