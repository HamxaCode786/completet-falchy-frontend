import React, { useState } from 'react'
import LocationIcon from '../../assets/images/About Us Vectors/location_on_24px.svg'
import CallIcon from '../../assets/images/About Us Vectors/call_24px.svg'
import TimeIcon from '../../assets/images/About Us Vectors/query_builder_24px.svg'
import MailIcon from '../../assets/images/About Us Vectors/email_24px.svg'
import { MDBInput } from 'mdb-react-ui-kit'
import { MDBTextArea } from 'mdb-react-ui-kit'
import Swal from 'sweetalert2'

const Aboutusgrid = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate a fake API call for testing
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: formData
          });
        }, 1000); // Simulate a 2 second delay
      });
      const data = response.data;
      Swal.fire({
        icon: 'success',
        title: 'Success!', 
        text: 'Thank You For Reaching Out, Our team will Get in touch with you Shortly!',
        iconColor: '#05021f',
        confirmButtonColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!', 
        text: 'Failed to submit contact information. Please try again later.',
        iconColor: '#05021f',
        confirmButtonColor: '#05021f',
        customClass: {
          popup: 'swal-popup-custom',
          confirmButton: 'swal-button-custom',
        }
      });
    }
  };

  return (
    <div className='aboutus-info-flex'>
      <div className='about-us-info'>
        <p className='aboutus-info-subheading'>Contact us at your convenience!</p>
        <div className='grid-container'>
          <div className='grid-item'>
            <div className='grid-item-flex'>
              <div className='grid-item-heading-flex'>
                <img src={LocationIcon} alt='Location Icon' />
                <p class='grid-item-heading'>Find Us</p>
              </div>
              <div className='grid-item-content'>
                <p class='grid-item-info'>Plazza Gino Valle, 20149 MI, Italy</p>
                <p class='grid-item-info'>Rope Valle, 20149 MI, Italy</p>
              </div>
            </div>
          </div>  
          <div className='grid-item'>
            <div className='grid-item-flex'>
              <div className='grid-item-heading-flex'>
                <img src={CallIcon} alt='Location Icon' />
                <p class='grid-item-heading'>Call Us</p>
              </div>
              <div className='grid-item-content'>
                <p class='grid-item-info'>+1 123-456-7890</p>
                <p class='grid-item-info'>+1 123-456-7890</p>
              </div>
            </div>
          </div>  
          <div className='grid-item'>
            <div className='grid-item-flex'>
              <div className='grid-item-heading-flex'>
                <img src={TimeIcon} alt='Location Icon' />
                <p class='grid-item-heading'>Visit Us</p>
              </div>
              <div className='grid-item-content'>
                <p class='grid-item-info'>Monday - Friday</p>
                <p class='grid-item-info'>9 AM - 5 PM</p>
              </div>
            </div>
          </div>  
          <div className='grid-item'>
            <div className='grid-item-flex'>
              <div className='grid-item-heading-flex'>
                <img src={MailIcon} alt='Location Icon' />
                <p class='grid-item-heading'>Mail Us</p>
              </div>
              <div className='grid-item-content'>
                <p class='grid-item-info'>contact@falchy.com</p>
                <p class='grid-item-info'>+1 123-456-7890</p>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div className='about-us-info'>
        <p className='aboutus-info-subheading'>Fill out the form</p>
        <div className='contact-us-form'>
          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-layout form-info-layout">
                <MDBInput
                  className='info-input'
                  type="text"
                  name="fullName"
                  label="Full Name"
                  required
                  style={{ height: '50px' , backgroundColor: "#f9f9f9" }}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <MDBInput
                  className='info-input'
                  type="email"
                  name="email"
                  label="Email Address"
                  required
                  style={{ height: '50px', backgroundColor: "#f9f9f9" }}
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="form-outline mb-3">
                  <MDBTextArea
                    id="formDescription"
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    style={{ backgroundColor: "#f9f9f9", fontWeight: 400, fontSize: '16px', padding: '10px', height: '140px', border: 'none' }}
                  />
                </div>
              </div>
              <button type="submit" class='info-button'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutusgrid