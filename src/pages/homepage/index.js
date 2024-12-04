import React from 'react'
import Landing from '../../components/homepage/landing'
import Tailored from '../../components/homepage/tailored'
import Testimonial from '../../components/homepage/testimonail'
import Aboutus from '../../components/homepage/aboutus'
import Steps from '../../components/homepage/steps'
import Accordion from '../../components/homepage/accordion'

const Homepage = () => {
  return (
    <div>
      {/* <Landing /> */}
      <Tailored />
      <Steps />
      <Aboutus />
      <Testimonial />
      <Accordion />
    </div>
  )
}

export default Homepage


