import React from 'react'
import First from '../../components/aboutus/aboutusheading' 
import Second from '../../components/aboutus/aboutgrid'
import Contactcaraousel from '../../components/aboutus/contactpicture'



const Aboutus = () => {
  return (
    <div>
      <Contactcaraousel />
      {/* <First /> */}
      <Second />
      
    </div>
  )
}

export default Aboutus
