import React from 'react';

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
  const faqData = [
    {
      id: 1,
      question: 'How do I book a car for rental?',
      answer:
        'To book a car for rental, choose your desired vehicle and follow the prompts to complete your booking. You can also submit our Appointment Book and our specialist will contact you soon.',
    },
    {
      id: 2,
      question: 'What is the process for purchasing a car?',
      answer:
        'The process for purchasing a car involves selecting your desired vehicle, completing the necessary paperwork, and making the payment. Our team will guide you through every step.',
    },
    {
      id: 3,
      question: 'What does the rent-to-own program entail?',
      answer:
        'The rent-to-own program allows you to rent a vehicle with the option to purchase it at the end of the rental term.',
    },
    {
      id: 4,
      question: 'How can I book an appointment for services?',
      answer:
        'To book an appointment for services, you can use our online booking system or call our customer support team for assistance.',
    },
    {
      id: 5,
      question: 'What types of vehicles do you offer for rental?',
      answer:
        'We offer a wide range of vehicles for rental, including sedans, SUVs, trucks, and luxury cars.',
    },
  ];

  return (
    <div className="FAQs-section">
      <h2 className="FAQs-heading">Exquisite Insights to Your Most Common Inquiries.</h2>
      <div className="accordion">
        {faqData.map((faq) => (
          <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;