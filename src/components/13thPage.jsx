import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Thirteen1 from '../assets/13-1.svg'
import Thirteen2  from '../assets/13-2.svg'
import Thirteen3  from '../assets/13-3.svg'
import Thirteen4 from '../assets/13-4.svg'
import Thirteen5 from '../assets/13-5.svg'
import Box from '../assets/13-boxx.svg'
import Thirteen6 from '../assets/START YOUR APPLICATION.svg'
import Feild from '../assets/CHOOSE YOUR ROLE (FIELD).svg'
import Thirteen7 from '../assets/start.svg'

const Footer = () => {
  const handleScrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="w-full py-0 px-0 bg-transparent absolute bottom-5 z-10">
      <div className="relative flex flex-col items-center">
        <div 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-black transform rotate-45 cursor-pointer mx-auto"
          onClick={handleScrollToNext}
        ></div>
      </div>
    </footer>
  );
};

const ThirteenthPage = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const dropdownRef = useRef(null);
  

  const countries = ['Pakistan', 'India', 'UK', 'USA', 'Canada'];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const clearSelection = () => {
    setSelectedCountry('');
    setIsDropdownOpen(true);
  };
  
  const handleStartClick = () => {
    // Add validation - only navigate if country is selected
    if (!selectedCountry) {
      alert('Please select a country first');
      return;
    }
    navigate('/fourteenth');
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      id="tenth-page"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <img src={Thirteen5} alt="center" className="absolute top-1/2 left-1/2 w-25 sm:w-26 md:w-26 lg:w-30 -translate-x-1/2 -translate-y-1/2 z-10 "/>
      <img src={Thirteen2} alt="center" className="absolute top-170 sm:top-110 md:top-110 lg:top-110 left-20 w-30 sm:w-26 md:w-26 lg:w-35 -translate-x-1/2 -translate-y-1/2 "/>
      <img src={Thirteen3} alt="center" className="absolute top-30 sm:top-10 md:top-10 lg:top-10 left-15 w-20 sm:w-15 md:w-15 lg:w-15 -translate-x-1/2 -translate-y-1/2 "/>
      <img src={Thirteen4} alt="center" className="absolute top-80 sm:top-60 md-top-70 lg:top-20 w-85 sm:w-80 md:w-80 lg:w-120 border-1 border-yellow-600 rounded-md"/>
      <img src={Thirteen1} alt="center" className="absolute top-170 sm:top-110 md:top-120 lg:top-110 right-3 w-10 sm:w-10 md:w-10 lg:w-15 -translate-x-1/2 -translate-y-1/2"/>
      <img src={Box} alt="center" className="absolute top-123 sm:top-100 md-top-90 lg:top-85 w-50 sm:w-60 md:w-70 lg:w-80 border-2 border-gray-300 rounded-md"/>
      <img src={Thirteen6} alt="center" className="absolute top-84 sm:top-90 md:top-40 lg:top-40 w-40 sm:w-40 md:w-40 lg:w-45 -translate-x-1 -translate-y-1/2"/>
      

      <div className="absolute top-124 sm:top-100 md-top-90 lg:top-87 z-30" ref={dropdownRef}>
        <div className="relative w-45 sm:w-45 md:w-50 lg:w-50 cursor-pointer">
          {!selectedCountry ? (
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <img src={Feild} alt="field" className="w-full" />
            </div>
          ) : (
            <div 
              className="w-60 lg:w-90 h-10 bottom-2 right-10 lg:right-20  bg-white border-2 border-gray-700 rounded-md flex items-center justify-center text-black font-bold text-sm sm:text-base md:text-lg py-2 px-4 shadow-md relative"
              onClick={clearSelection}
            >
              {selectedCountry}
              <span className="absolute top-0 right-0 text-xs text-gray-500 hover:text-red-500 p-1">
                ✕
              </span>
            </div>
          )}
          {isDropdownOpen && (
            <div className="absolute bottom-full left-0 w-full mb-1 bg-white border border-gray-700 rounded-md shadow-lg z-40 max-h-40 overflow-y-auto">
              {countries.map((country) => (
                <div
                  key={country}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm sm:text-base transition-colors"
                  onClick={() => handleCountrySelect(country)}
                >
                  {country}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Start button with conditional styling based on selection */}
      <img 
        src={Thirteen7} 
        alt="center" 
        className={`absolute right-4 sm:right-6 md:right-8 lg:right-80 top-145 sm:top-1/2 md:top-1/2 lg:top-1/2 left-35 lg:left-205 md-left-120 sm:left-120 transform -translate-y-1/2 w-20 sm:w-20 md:w-25 lg:w-30 cursor-pointer ${
          !selectedCountry ? 'opacity-90 cursor-not-allowed' : ''
        }`}
        onClick={handleStartClick}
      />
      
      <Footer />
    </div>
  )
}

export default ThirteenthPage;