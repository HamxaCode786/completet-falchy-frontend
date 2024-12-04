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
            At our company, we are committed to providing outstanding value and high-quality services to every customer. Whether you're looking to rent, rent-to-own, or explore flexible options for your transportation needs, we have solutions tailored just for you. Our team works tirelessly to ensure that every detail is carefully considered, from the moment you make an inquiry to the time you complete your journey with us. We pride ourselves on offering a diverse range of choices to suit every lifestyle, budget, and preference, ensuring that no customer ever feels left out. Experience convenience, flexibility, and the peace of mind that comes with knowing you’re supported by professionals who truly care about meeting and exceeding your expectations.
            </p>
            <div className='about-us-info'>
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