import React from "react";
import AboutUsImage from "../../assets/images/homepageimage/aboutusimage.png";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";

const InfoCard = ({ number, label }) => (
  <div className="info-heading">
    <h2>
      <span className="info-bold">{number}</span>
    </h2>
    <p className="info-lower-text">{label}</p>
  </div>
);

const AboutUs = () => {
  const { language } = useContext(TranslationContext);

  return (
    <div className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-content">
          <h2 className="about-us-heading">
            {language === "en"
              ? "About Us"
              : language === "it"
              ? "Chi siamo"
              : language === "du"
              ? "Over ons"
              : language === "fr"
              ? "À propos de nous"
              : "About Us"}
          </h2>
          <div className="about-us-text">
            <p>
              {language === "en"
                ? "We are a Mobility Services Company based in Italy"
                : language === "it"
                ? "Siamo una compagnia di servizi di mobilità con sede in Italia"
                : language === "du"
                ? "Wij zijn een mobiliteitsbedrijf gevestigd in Italië"
                : language === "fr"
                ? "Nous sommes une entreprise de services de mobilité basée en Italie"
                : "We are a Mobility Services Company based in Italy"}
            </p>

            <p>
              {language === "en"
                ? "At our exclusive chauffeured car service, we are dedicated to delivering unparalleled luxury and exceptional service to each and every client. Whether you're in need of a sophisticated ride for business, leisure, or special occasions, we offer personalized solutions tailored to your unique preferences. Our professional team ensures that every detail is meticulously crafted, from the moment you book your journey to the final destination. With a fleet of exquisite vehicles and a commitment to excellence, we provide an experience that blends comfort, elegance, and convenience. Trust us to offer a seamless, luxurious travel experience that exceeds your expectations, allowing you to indulge in the highest level of service and sophistication."
                : language === "it"
                ? "Con il nostro esclusivo servizio di auto con autista, siamo dedicati a offrire lusso incomparabile e un servizio eccezionale a ciascun cliente. Che tu abbia bisogno di un viaggio sofisticato per affari, svago o occasioni speciali, offriamo soluzioni personalizzate su misura per le tue preferenze uniche. Il nostro team professionale si assicura che ogni dettaglio sia curato con la massima attenzione, dal momento in cui prenoti il tuo viaggio fino alla destinazione finale. Con una flotta di veicoli eleganti e un impegno per l'eccellenza, offriamo un'esperienza che fonde comfort, eleganza e convenienza. Affidati a noi per offrirti un'esperienza di viaggio senza interruzioni e lussuosa che supera le tue aspettative, permettendoti di godere del massimo livello di servizio e sofisticazione."
                : language === "du"
                ? "Bij onze exclusieve chauffeured car service zijn we toegewijd aan het leveren van ongeëvenaard luxe en uitzonderlijke service aan elke klant. Of je nu een verfijnde rit nodig hebt voor zaken, plezier of speciale gelegenheden, we bieden gepersonaliseerde oplossingen die zijn afgestemd op je unieke voorkeuren. Ons professionele team zorgt ervoor dat elk detail zorgvuldig is uitgewerkt, van het moment dat je je reis boekt tot de uiteindelijke bestemming. Met een vloot van voortreffelijke voertuigen en een toewijding aan uitmuntendheid, bieden we een ervaring die comfort, elegantie en gemak combineert. Vertrouw op ons voor een naadloze, luxueuze reiservaring die je verwachtingen overtreft en je in staat stelt te genieten van het hoogste niveau van service en verfijning."
                : language === "fr"
                ? "Dans notre service de voiture avec chauffeur exclusif, nous nous engageons à offrir un luxe inégalé et un service exceptionnel à chaque client. Que vous ayez besoin d'un trajet sophistiqué pour les affaires, les loisirs ou des occasions spéciales, nous proposons des solutions personnalisées adaptées à vos préférences uniques. Notre équipe professionnelle veille à ce que chaque détail soit minutieusement élaboré, du moment où vous réservez votre voyage jusqu'à la destination finale. Avec une flotte de véhicules exquis et un engagement envers l'excellence, nous offrons une expérience qui allie confort, élégance et commodité. Faites-nous confiance pour offrir une expérience de voyage fluide et luxueuse qui dépasse vos attentes, vous permettant de profiter du plus haut niveau de service et de sophistication."
                : "At our exclusive chauffeured car service, we are dedicated to delivering unparalleled luxury and exceptional service to each and every client. Whether you're in need of a sophisticated ride for business, leisure, or special occasions, we offer personalized solutions tailored to your unique preferences. Our professional team ensures that every detail is meticulously crafted, from the moment you book your journey to the final destination. With a fleet of exquisite vehicles and a commitment to excellence, we provide an experience that blends comfort, elegance, and convenience. Trust us to offer a seamless, luxurious travel experience that exceeds your expectations, allowing you to indulge in the highest level of service and sophistication."}
            </p>

            <div className="about-us-info1">
              <InfoCard
                number={
                  language === "en"
                    ? "12"
                    : language === "it"
                    ? "12"
                    : language === "du"
                    ? "12"
                    : language === "fr"
                    ? "12"
                    : "12"
                }
                label={
                  language === "en"
                    ? "Years"
                    : language === "it"
                    ? "Anni"
                    : language === "du"
                    ? "Jaren"
                    : language === "fr"
                    ? "Années"
                    : "Years"
                }
              />

              <InfoCard
                number={
                  language === "en"
                    ? "200+"
                    : language === "it"
                    ? "200+"
                    : language === "du"
                    ? "200+"
                    : language === "fr"
                    ? "200+"
                    : "200+"
                }
                label={
                  language === "en"
                    ? "Clients"
                    : language === "it"
                    ? "Clienti"
                    : language === "du"
                    ? "Klanten"
                    : language === "fr"
                    ? "Clients"
                    : "Clients"
                }
              />
            </div>
          </div>
        </div>
        <img className="about-us-image" src={AboutUsImage} alt="about us" />
      </div>
    </div>
  );
};

export default AboutUs;
