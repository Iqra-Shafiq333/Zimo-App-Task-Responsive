import React from "react";
import Background from "../assets/bg img 6-1.svg";
import Background2 from "../assets/bg img 6--2.svg";
import Background3 from "../assets/bg img 6-3.svg";
import Background4 from "../assets/bg img 6-4.svg";
import Background5 from "../assets/bg img 6-5.svg";
import Background6 from "../assets/bg img 6-6.svg";
import Background7 from "../assets/bg img 6-7.svg";


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
const SixthPage = () => {
  return (
    <div 
    id="sixth-page"
    div className="relative w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <img src={Background} alt="background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 max-w-[500px] object-contain"/>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      <img src={Background2} alt="side1" className="absolute top-10 left-6 w-40 sm:w-30 md:w-44 lg:w-68"/>
      <img src={Background3} alt="side2" className="absolute top-48 sm:top-32 md:top-36 lg:top-40 left-6 w-50 sm:w-30 md:w-44 lg:w-50"/>
      <img src={Background4} alt="side3" className="absolute top-140 sm:top-76 md:top-64 lg:top-92 left-6 w-50 sm:w-20 md:w-24 lg:w-55" />
      <img src={Background5} alt="side4" className="absolute top-170 sm:top-160 md:top-74 lg:top-120 left-6 w-50 sm:w-40 md:w-54 lg:w-58"/>
      <img src={Background6} alt="side5" className="absolute bottom-10 right-6 w-10 sm:w-14 md:w-15 lg:w-15"/>
      <img src={Background7} alt="center" className="absolute top-1/2 left-1/2 w-44 sm:w-30 md:w-36 lg:w-49 -translate-x-1/2 -translate-y-1/2"/>
      <Footer />
    </div>
  );
};

export default SixthPage;
