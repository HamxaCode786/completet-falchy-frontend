import Layout from '../src/layout';
import Homepage from './pages/homepage';
import TransferService from './pages/transferservice';
import Rentluxury from './pages/rentluxury';
import Conceirgeevents from './pages/conceirgeevents'
import Transferforward from '../src/components/transferservice/tranferforward';
import Rentluxuryforward from '../src/components/rentluxury/rentforward';
import Conceirgebooking from '../src/pages/conceirgebooking';
import Luggagetransferform from '../src/pages/luggagetransferpage'
import Aboutpage from '../src/pages/aboutus'
import Newcontactus from '../src/components/contactus/contactusnew'
import WhatsAppIcon from '../src/components/homepage/whatsappicon'
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '../src/pages/scrolltop/scroll';
import Terms from '../src/pages/terms&conditions';
import Privacy from '../src/pages/PrivacyPolicy';
import Cookie from '../src/pages/CookiePolicy';
import Stripe from '../src/components/transferservice/stripePayment'


import './styles/style.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/landing.css'
import './styles/tailor.css'
import './styles/tailor2.css'
import './styles/aboutus.css'
import './styles/aboutusmobile.css'
import './styles/testimonial.css'
import './styles/testimonialmobile.css'
import './styles/steps.css'
import './styles/stepsmobile.css'
import './styles/faqmobile.css'
import './styles/faq.css'
import './styles/luggage.css'
import './styles/luggage1.css'
import './styles/aboutus.css'
import './styles/aboutsection.css'
import './styles/caraosel.css'
import './styles/caraouselcomponent.css'
import './styles/customcar.css'
import './styles/landing2.css'
import './styles/policy.css'
import './styles/new.css'
import './styles/error.css'
import './styles/splash.css'
import './styles/newcontactpage.css'
import './styles/luggagetransferautocards.css'
import './styles/aboutusmobile.css'
import './styles/responsive/layout.css'
import './styles/responsive/transferluxury.css'
import './styles/transferservice/transferservice.css'
import './styles/transferservice/transfercards.css'
import './styles/transferservice/transfercards2.css'
import './styles/transferservice/transfercards3.css'
import './styles/transferservice/transferforward.css'
import './styles/conceirgebookings/conciergebooking.css'



import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Error from './pages/page404/error';









function App() {


  return (
    <div className="App">
 <ScrollToTop /> 
<Routes>  {/* Wrapping Routes inside Router */}
            
            {/* <Route path="/" element={<Layout><Homepage /></Layout>}/>  */}
            <Route path="/home" element={<Layout><Homepage /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/transfers" element={<Layout><TransferService /></Layout>} /> {/* Define the route for TransferService */}
            <Route path="/" element={<Layout><TransferService /></Layout>} /> {/* Define the route for TransferService */}
            <Route path="/rental" element={<Layout><Rentluxury /></Layout>} /> {/* Define the route for RentLuxury */}
            <Route path="/conciergeevents" element={<Layout><Conceirgeevents /></Layout>} /> {/* Define the route for ConceirgeEvents */}
            <Route path="/transferBooking" element={<Layout><Transferforward /></Layout>} /> {/* Define the route for TransferForm */}
            <Route path="/rentluxuryforward" element={<Layout><Rentluxuryforward /></Layout>} /> {/* Define the route for RentForm */}
            <Route path="/:servicename" element={<Layout><Conceirgebooking /></Layout>} /> {/* Define the route for ConceirgeForm */}
            <Route path="/luggagetransferform" element={<Layout><Luggagetransferform /></Layout>} />
            <Route path="/contactus" element={<Layout><Newcontactus /></Layout>} /> {/* Define the route for AboutUs */}
            <Route path="/termsandconditions" element={<Layout><Terms /></Layout>} /> {/* Define the route for Terms & Conditions */}
            <Route path="/cookiePolicy" element={<Layout><Cookie /></Layout>} /> {/* Define the route for CookiePolicy */}
            <Route path="/privacyPolicy" element={<Layout><Privacy /></Layout>} /> {/* Define the route for PrivacyPolicy */}
            <Route path="/stripePayment" element={<Layout><Stripe /></Layout>} /> {/* Define the route for Stripe */}
            <Route path="*"  element={<Layout><Error /></Layout>} /> {/* Define the route for Error Page */}
            
            
</Routes>
<WhatsAppIcon />
       


    </div>
  );
}

export default App;
