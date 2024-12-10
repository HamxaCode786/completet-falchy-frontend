import React from "react";
import Form from "react-bootstrap/Form";

const contactcard = () => {
  return (
    <div>
      <div className="contact_card1">
        <h2>
          Need Help Finding The Right Car To Hire
          <br />
          Contact Our Team
        </h2>
        <h4>
  Looking for something unique? We also offer customized car options 
  tailored to your preferences. Whether it's luxury features, color 
  schemes, or specific requirements, we can help you find the perfect match.
</h4>
    
        <div className="contact_card1_form1" style={{width: "100%"}}>
          <div className="contact_div">
            <Form.Label className="contact_card1_form1_label1">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </div>
          <div className="contact_div" >
            <Form.Label className="contact_card1_form1_label1">
              Email
            </Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </div>
          <div className="contact_div" >
            <Form.Label className="contact_card1_form1_label1">
              Phone Number
            </Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="contact_div1" >
          <Form.Label className="contact_card1_form1_label1">&nbsp;</Form.Label>
          <button>Request Callback</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default contactcard;
