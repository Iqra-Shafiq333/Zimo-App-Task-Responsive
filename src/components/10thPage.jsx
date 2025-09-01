import React, { useState, useEffect } from 'react';
import Bg1 from '../assets/10 img1.jpg';
import Tenth from '../assets/10 img 2.jpg';
import Tenth1 from '../assets/CODE.jpg';
import Tenth2 from '../assets/BUILD.jpg';
import Tenth3 from '../assets/CREATE.jpg';
import Tenth4 from '../assets/DESIGN.jpg';
import Tenth5 from '../assets/for everyone.jpg';
import Bottom2 from '../assets/for everyone1.jpg';
import Bottom3 from '../assets/for everyone2.jpg';
import Bottom4 from '../assets/for everyone3.jpg';

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

const TenthPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = [
    { src: Tenth1, alt: "CODE" },
    { src: Tenth2, alt: "BUILD" },
    { src: Tenth3, alt: "CREATE" },
    { src: Tenth4, alt: "DESIGN" }
  ];

  const [bottomIndex, setBottomIndex] = useState(0);
  const bottomImages = [
    { src: Tenth5, alt: "for everyone" },
    { src: Bottom2, alt: "for everyone 1" },
    { src: Bottom3, alt: "for everyone 2" },
    { src: Bottom4, alt: "for everyone 3" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2900); 
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBottomIndex((prevIndex) => (prevIndex + 1) % bottomImages.length);
    }, 2900); 
    return () => clearInterval(interval);
  }, );

  return (
    <div 
      id="tenth-page"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img src={Bg1} alt="background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 max-w-[500px] object-contain opacity-80"/>
      <div className="absolute inset-0 bg-white/0 backdrop-blur-[4px]"></div>
      <img src={Tenth} alt="center" className="absolute top-1/2 left-1/2 w-44 sm:w-30 md:w-36 lg:w-49 -translate-x-1/2 -translate-y-1/2"/>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center">
        <div className="relative h-16 w-64 flex items-center justify-center">
          {words.map((word, index) => (
            <div key={index} className={`absolute transition-all duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
              <img src={word.src} alt={word.alt} className="h-12 object-contain"/>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center">
        <div className="relative h-16 w-64 flex items-center justify-center">
          {bottomImages.map((image, index) => (
            <div key={index} className={`absolute transition-all duration-1000 ${index === bottomIndex ? 'opacity-100' : 'opacity-0'}`}>
              <img src={image.src} alt={image.alt} className="h-12 object-contain"/>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default TenthPage;