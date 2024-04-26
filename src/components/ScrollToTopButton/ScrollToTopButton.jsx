import React, { useState, useEffect } from 'react';
import css from './ScrollToTopButton.module.css';

const ScrollToTopButton = ({ onClick }) => {
    const [scrolledUp, setScrolledUp] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolledUp(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <button
        className={`${css.scrollToTopButton} ${scrolledUp ? '' : css.hidden}`}
        onClick={onClick}
      >
        Scroll to Top
      </button>
    );
  };
  
  export default ScrollToTopButton;