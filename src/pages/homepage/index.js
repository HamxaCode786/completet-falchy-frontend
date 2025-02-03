import React from 'react'
import Landing from '../../components/homepage/landing'
import Tailored from '../../components/homepage/tailored'
import Testimonial from '../../components/homepage/testimonail'
import Aboutus from '../../components/homepage/aboutus'
import Steps from '../../components/homepage/steps'
import Accordion from '../../components/homepage/accordion'
import Footertop from '../../components/footerabove/footerabove'
import Landing2 from '../../components/homepage/landing2'

const Homepage = () => {
  return (
    <div>
      
      
      {/* <Landing /> */}
      <Landing2 />
       <Tailored />
      <Steps />
      <Aboutus /> 
      {/* <AboutusCarousel /> */}
      <Testimonial />
      <Accordion />
      <Footertop /> 
      
    </div>
  )
}

export default Homepage


