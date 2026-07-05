import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const scrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setScrollProgress(scrolled);

      // Show button after scrolling down 300px
      if (winScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // SVG circle calculations
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  // This calculates how much of the stroke to offset based on progress
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      onClick={scrollToTop}
    >
      <div className="relative flex items-center justify-center cursor-pointer group">
        {/* SVG for progress circle */}
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          className="transform -rotate-90 drop-shadow-lg"
        >
          {/* Background Circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            stroke="#374151" // gray-700
            strokeWidth="3"
            fill="#111827" // gray-900 (matches dark theme background)
            className="group-hover:fill-gray-800 transition-colors duration-300"
          />
          {/* Progress Circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            stroke="#ffffff" // white progress to match the image
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
          />
        </svg>
        {/* Arrow Icon */}
        <div className="absolute text-white">
          <FiArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default scrollToTop;
