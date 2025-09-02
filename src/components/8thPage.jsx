import React from 'react'
import Eight1 from '../assets/eight img.png'
import Eight2 from '../assets/8 img-2.png'
import Eight3 from '../assets/8 img-3.png'
import Eight4 from '../assets/8 img-4.png'
import Eight5 from '../assets/Line 801.png'
import Eight6 from '../assets/8 img-6.png'

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
const EightPage = () => {
  return (
    <div 
    id="eight-page"
    className="relative w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
    <img src={Eight1} alt="background" className="absolute top-90 sm:top-42 md:top-76 lg:top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-30 md:w-44 lg:w-50 object-contain"/>
    <img src={Eight2} alt="background" className="absolute top-170 sm:top-72 md:top-86 lg:top-120 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-40 md:w-54 lg:w-100 object-contain"/>
    <img src={Eight3} alt="background" className="absolute top-180 sm:top-72 md:top-86 lg:top-120 right-30 bottom-10  w-5 sm:w-7 md:w-6 lg:w-8 "/>
    <img src={Eight4} alt="background" className="absolute top-180 sm:top-72 md:top-86 lg:top-120 right-6 bottom-10  w-20 sm:w-20 md:w-20 lg:w-20 "/>
    <img src={Eight5} alt="background" className="absolute top-187 sm:top-80 md:top-96 lg:top-132 right-3 bottom-10  w-35 sm:w-30 md:w-30 lg:w-35 "/>
    <img src={Eight6} alt="background" className="absolute top-188 sm:top-80 md:top-96 lg:top-135 right-6 bottom-10  w-20 sm:w-20 md:w-20 lg:w-20 "/>
    <Footer />
      </div>
    
  )
}

export default EightPage
