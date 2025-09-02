import React from "react";
import Ninth from '../assets/ninthh1.png'
import Ninth1 from '../assets/9 img2.svg'
import Ninth2 from '../assets/9 img3.svg'
import Ninth3 from '../assets/9 img4.svg'
import Ninth4 from '../assets/9 img5.svg'


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
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-gray-100 transform rotate-45 cursor-pointer mx-auto"
          onClick={handleScrollToNext}
        ></div>
      </div>
    </footer>
  );
};
 
const NinthPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 top-2">
        <img src={Ninth} alt="Full page background" className="w-full h-full object-cover" />
        <img src={Ninth1} alt="background" className="absolute top-160 sm:top-90 md:top-100 lg:top-110 left-45 -translate-x-1/2 -translate-y-1/2 w-70 sm:w-60 md:w-74 lg:w-80 object-contain"/>
        <img src={Ninth2} alt="background" className="absolute top-10 sm:top-10 md:top-10 lg:top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-40 md:w-54 lg:w-100 object-contain"/>
        <img src={Ninth3} alt="background" className="absolute top-20 sm:top-20 md:top-20 lg:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 sm:w-30 md:w-44 lg:w-90 object-contain"/>
        <img src={Ninth4} alt="background" className="absolute top-80 sm:top-42 md:top-66 lg:top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 sm:w-40 md:w-48 lg:w-50 object-contain"/>
      </div>
      <Footer/>
    </div>
  );
};

export default NinthPage;