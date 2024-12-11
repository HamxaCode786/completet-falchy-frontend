import React from 'react';
import QuotationMark from '../../assets/images/homepageimage/QuotationMark.svg';
import TopLeftEclipse from '../../assets/images/homepageimage/Testimonial-Images/Circle Upper Left.png';
import BottomRightEclipse from '../../assets/images/homepageimage/Testimonial-Images/Circle Bottom Right (1).png';

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



  
  const testimonials = [
    {
      description:
        'I recently used the transfer service from these guys, and the experience was exceptional! The team was professional and ensured my journey was seamless from start to finish. The vehicle was immaculate, and the driver was courteous and prompt. I highly recommend their luxury transfer services for a reliable and comfortable travel experience!',
      author: 'Giovanni Doe',
      company: 'Owner of Car Rental Company',
    },
    {
      description:
        'I recently had the pleasure of using the luxury rental service from them, and I couldn’t be more impressed! From the moment I made my booking, the team was highly professional, ensuring that every detail of my journey was taken care of. The vehicle was absolutely spotless, and the service was nothing short of outstanding!',
      author: 'Jane Smith',
      company: 'CEO of Auto Ventures',
    },
    {
      description:
        'I recently used the concierge services from Falchyy, and the experience was exceptional! The team was incredibly knowledgeable and attentive, guiding me through every step and ensuring my needs were met with ease. They went above and beyond to provide personalized solutions, making my experience very seamless and stress-free!',
      author: 'Robert Brown',
      company: 'Founder of Road Safety Solutions',
    },
  ];

  return (
    <div className="blue-testimonial-section">
      <img className="toplefteclipse" src={TopLeftEclipse} alt="Top Left Eclipse" />
      <img className="bottomrighteclipse" src={BottomRightEclipse} alt="Bottom Right Eclipse" />
      <h2 className="testimonial-heading">Client Testimonials</h2>
      <p className="testimonial-tagline">
        Your insights help us grow and shape the services we provide.
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