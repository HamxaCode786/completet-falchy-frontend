import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location]);

  return null; // This component does not render anything
};

export default ScrollToTop;
