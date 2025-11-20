import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'smooth' for smooth scroll, 'instant' for immediate
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;