import React from 'react';
import StepsFlowVector from '../../assets/images/homepageimage/Steps-Images/Steps Flow Vector.svg'
import StepsTouchIcon from '../../assets/images/homepageimage/Steps Icons/Touch-Icon.svg';
import StepsFormIcon from '../../assets/images/homepageimage/Steps Icons/Form-Icon.svg';
import StepsPhoneIcon from '../../assets/images/homepageimage/Steps Icons/Phone-Icon.svg';

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
  return (
    <div className="steps-section">
      <p className="tagline">Plan Your Journey Now</p>
      <h2 className="steps-heading">
        Book your service in a{' '}
        <span className="steps-golden-heading">single click</span>
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
            description="Select A Service or Book An Appointment"
          />
          <StepCard
            number="2"
            icon={StepsFormIcon}
            description="Fill Out And Submit Your Service Booking Form"
          />
          <StepCard
            number="3"
            icon={StepsPhoneIcon}
            description="A Specialist Will Contact And Finalize Your Booking"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;