import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true,     // Animation triggers only once
    });
    AOS.refresh(); // Ensures positions recalculate
  }, []);
};

export default useAOS;
