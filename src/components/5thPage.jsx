import React from 'react';
import Image from '../assets/5thimg.svg';
import Image1 from '../assets/5th img 1.svg';
import SixthPage from './6thPage';

const Footer = () => {
  const handleScrollToNext = () => {
  const sixthPage = document.getElementById('sixth-page'); 
  if (sixthPage) {
    sixthPage.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <footer className="w-full py-0 px-0 bg-transparent absolute bottom-5 z-50">
      <div className="relative flex flex-col items-center">
        <div 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-gray-100 transform rotate-45 cursor-pointer mx-auto"
          onClick={handleScrollToNext}
        ></div>
      </div>
    </footer>
  );
};

const FifthPage = () => {
  return (
    <div className="relative min-h-[100vh] w-full bg-black flex justify-start px-5 py-8 overflow-hidden">
      <img
        src={Image1}
        alt="Blurred Background"
        className="absolute left-[12%] top-[50%] w-90 sm:w-[900px] md:w-[1000px] lg:w-[900px] blur-[9px] opacity-80"
      />
        <img src={Image} alt="Fifth Page"
        className=" absolute left-1/2 top-1/2 
        -translate-x-1/2 -translate-y-1/2
        w-[120%] max-w-[1000px] 
        h-auto object-contain 
        sm:w-[70%] md:w-[60%] lg:w-[800px] 
        z-10"/>

        <Footer/>
    </div>
  );
};

export default FifthPage;
