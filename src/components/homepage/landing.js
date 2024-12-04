import React from 'react'

const landing = () => {
  return (
  
    //   <div className="diagonal-image-container">
    //   <svg className='diagonal-image_sg' width="1350" height="880" viewBox="0 0 1436 868" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M1436 0C1436 0 1224.76 315.802 730.095 438C235.427 560.198 0.500977 725.051 0.500977 868L1436 861V0Z" fill="url(#paint0_linear_360_1526)"/>
    //     <defs>
    //       <linearGradient id="paint0_linear_360_1526" x1="701.5" y1="92.7319" x2="701.5" y2="929.099" gradientUnits="userSpaceOnUse">
    //         <stop offset="0.425" stopColor="#05021F"/>
    //         <stop offset="1" stopColor="white" stopOpacity="0"/>
    //       </linearGradient>
    //     </defs>
    //   </svg>




    // </div>


    <div className="diagonal-image-container">
      <div style={{
        position: 'absolute',
        left: '50px',
        top: '35%',
        transform: 'translateY(-50%)',
        zIndex: 1
      }}>
        {/* Add your content here */}
        <div className='landing-content1'>



          <h2>Save Big With Our<br/> Renting Services</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
          </h4>
          <button>Contact Us</button>






        </div>
      </div>
      <svg className='diagonal-image_sg' width="1350" height="880" viewBox="0 0 1436 868" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1436 0C1436 0 1224.76 315.802 730.095 438C235.427 560.198 0.500977 725.051 0.500977 868L1436 861V0Z" fill="url(#paint0_linear_360_1526)"/>
        <defs>
          <linearGradient id="paint0_linear_360_1526" x1="701.5" y1="92.7319" x2="701.5" y2="929.099" gradientUnits="userSpaceOnUse">
            <stop offset="0.425" stopColor="#05021F"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default landing
