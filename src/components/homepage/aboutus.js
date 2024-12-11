import React from 'react';
import AboutUsImage from '../../assets/images/homepageimage/aboutusimage.png';

const InfoCard = ({ number, label }) => (
  <div className='info-heading'>
    <h2><span className='info-bold'>{number}</span></h2>
    <p className='info-lower-text'>{label}</p>
  </div>
);

const AboutUs = () => {
  return (
    <div className='about-us-section'>
      <div className='about-us-container'>
        <div className='about-us-content'>
          <h2 className='about-us-heading'>About Us</h2>
          <div className='about-us-text'>
            <p>We are a Mobility Services Company based in Italy</p>
            <p>
            At our exclusive chauffeured car service, we are dedicated to delivering unparalleled luxury and exceptional service to each and every client. Whether you're in need of a sophisticated ride for business, leisure, or special occasions, we offer personalized solutions tailored to your unique preferences. Our professional team ensures that every detail is meticulously crafted, from the moment you book your journey to the final destination. With a fleet of exquisite vehicles and a commitment to excellence, we provide an experience that blends comfort, elegance, and convenience. Trust us to offer a seamless, luxurious travel experience that exceeds your expectations, allowing you to indulge in the highest level of service and sophistication.
            </p>
            <div className='about-us-info1'>
              <InfoCard number="12" label="Years" />
              <InfoCard number="200+" label="Clients" />
            </div>
          </div>
        </div>
        <img className='about-us-image' src={AboutUsImage} alt='about us' />
      </div>
    </div>
  );
};

export default AboutUs;