// import React from 'react'
// import Contactcard from '../../components/transferservice/contactcard'
// import Transfercards3 from '../../components/transferservice/transfercards3'
// import Caraousel from '../../components/caraousel/caraousel'
// import Footertop from '../../components/footerabove/footerabove'
// import Alternative from '../../components/transferservice/alternative'

// const TransferService = () => {
//   return (
//     <div>
      
//       <Caraousel />
//       {/* <Alternative /> */}
//       <Transfercards3 />
//       <Footertop />
      
      

//     </div>
//   )
// }

// export default TransferService



import React from 'react';
import Contactcard from '../../components/transferservice/contactcard';
import Transfercards from '../../components/transferservice/transfercards3';
import Caraousel from '../../components/caraousel/caraousel';
import Footertop from '../../components/footerabove/footerabove';
import  CustomCookieConsent  from '../../components/transferservice/customCookieConsent'; // Ensure exact match
  

 const TransferService = () => {


  return (
    <div>
      <CustomCookieConsent />
      <Caraousel />
      <Transfercards />
      <Footertop />
    </div>
  );
};



export default TransferService;