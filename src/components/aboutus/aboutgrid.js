
import React from 'react'
import LocationIcon from '../../assets/images/About Us Vectors/location_on_24px.svg'
import CallIcon from '../../assets/images/About Us Vectors/call_24px.svg'
import TimeIcon from '../../assets/images/About Us Vectors/query_builder_24px.svg'
import MailIcon from '../../assets/images/About Us Vectors/email_24px.svg'

const aboutusgrid = () => {
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

        {/* Experimental Code */}

        <div className="form-section">
      <form action="#" method="POST">
        <div className="form-layout form-info-layout">
          

          <input
            class='info-input'
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
          />
          <input
            class='info-input'
            type="email"
            name="email_address"
            placeholder="Email Address"
            required
          />

          <textarea
              id="message"
              class='info-input'
              name="message"
              placeholder="Write Us"
              rows="6"
              required>
          </textarea>
        </div>

      
        <button type="submit" class='info-button'>Send</button>
        
        
      </form>
    </div>

    </div>
    

       
    </div>


  </div>
  )
}

export default aboutusgrid