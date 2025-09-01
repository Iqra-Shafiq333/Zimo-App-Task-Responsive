import React from "react";
import FourthPic from '../assets/4rthpic.jpg';
import FourthTwo from '../assets/page2.jpg';
import AI from '../assets/ARTIFICIAL INTELLIGENCE FOR EVERYONE.jpg';


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
const FourthPage = () => {
  return (
    <div 
    id="fourth-page"
    className="relative min-h-screen w-full flex items-center justify-center bg-white p-4 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-4/5 max-w-xs sm:max-w-sm md:max-w-md">
        <img src={FourthPic} alt='Picture' className="w-100 h-auto object-contain" />
      </div>
      <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 z-20 w-3/4 max-w-xs sm:max-w-sm md:max-w-md">
        <img src={AI} alt='AI' className="w-100  h-auto object-contain" />
      </div>
      <div className="absolute bottom-8 right-4 sm:right-6 md:right-8 z-30 w-1/4 max-w-[80px] sm:max-w-[100px] md:max-w-[120px] ">
        <img src={FourthTwo} alt='pic' className="w-full h-auto object-contain" />
      </div>
      <Footer/>
    </div>
  );
};

export default FourthPage;