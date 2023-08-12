import React from 'react'
import { useState, useEffect } from 'react';
import arrow from "../../images/Vector.png"
import "../ScrollToTopArrow/ScrollToTopArrow.css"
const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top-arrow ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <img src={arrow} alt="Scroll to Top" />
    </div>
  );
};

export default ScrollToTopArrow;
