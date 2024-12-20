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
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '../src/pages/scrolltop/scroll';

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
import './styles/aboutusmobile.css'
import './styles/responsive/layout.css'
import './styles/responsive/transferluxury.css'
import './styles/transferservice/transferservice.css'
import './styles/transferservice/transfercards.css'
import './styles/transferservice/transferforward.css'
import './styles/conceirgebookings/conciergebooking.css'



import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';









function App() {
  return (
    <div className="App">
 <ScrollToTop /> 
<Routes>  {/* Wrapping Routes inside Router */}
            
            <Route path="/" element={<Layout><Homepage /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/transferservice" element={<Layout><TransferService /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/rentluxury" element={<Layout><Rentluxury /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/conciergeevents" element={<Layout><Conceirgeevents /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/transferforward" element={<Layout><Transferforward /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/rentluxuryforward" element={<Layout><Rentluxuryforward /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/conceirgebooking" element={<Layout><Conceirgebooking /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/luggagetransferform" element={<Layout><Luggagetransferform /></Layout>} /> {/* Define the route for HomePage */}
            <Route path="/aboutus" element={<Layout><Aboutpage /></Layout>} /> {/* Define the route for HomePage */}
            
</Routes>
       


    </div>
  );
}

export default App;
