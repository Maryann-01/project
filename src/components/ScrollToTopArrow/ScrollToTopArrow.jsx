import React from 'react'
import { useState, useEffect } from 'react';
import arrow from "../../images/Vector.png"
import "../ScrollToTopArrow/ScrollToTopArrow.css"
const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);
const scrollThreshhold=window.innerHeight/2
  const handleScroll = () => {
    if (window.pageYOffset >scrollThreshhold) {
      setIsVisible(true);

      
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth' });
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
      onClick={scrollToTop} style={{display:isVisible?"block":"none"}}
    >
      <img src={arrow} alt="Scroll to Top" />
    </div>
  );
};

export default ScrollToTopArrow;
