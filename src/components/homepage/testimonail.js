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
        'I recently purchased a car from WHA Road Solution, and the experience was exceptional! The staff were knowledgeable and guided me through the entire process, making it easy to find the perfect vehicle. I highly recommend them for anyone looking to buy a car!',
      author: 'John Doe',
      company: 'Owner of Car Rental Company',
    },
    {
      description:
        'I recently purchased a car from WHA Road Solution, and the experience was exceptional! The staff were knowledgeable and guided me through the entire process, making it easy to find the perfect vehicle. I highly recommend them for anyone looking to buy a car!',
      author: 'Jane Smith',
      company: 'CEO of Auto Ventures',
    },
    {
      description:
        'I recently purchased a car from WHA Road Solution, and the experience was exceptional! The staff were knowledgeable and guided me through the entire process, making it easy to find the perfect vehicle. I highly recommend them for anyone looking to buy a car!',
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