import React, { useState } from 'react';
import Zimo2 from '../assets/ZIMO TEAM 2.jpg';
import ZimoBigg from '../assets/zima3.svg';
import ZimoSide from '../assets/image.svg';
import FootSide from '../assets/foot.svg';
import videoSources from '../assets/video.mp4';
import VideoOnee from '../assets/1st video.mp4';
import VideoTwoo from '../assets/2nd video.mp4';
import PicThreee from '../assets/3rd.jpg';
import PicFourr from '../assets/4rth.jpg';
import PicFivee from '../assets/5th.jpg';

const DesktopVideoBig = () => {
  return (
    <div className="hidden md:flex justify-center mt-15 max-w-xs relative right-0">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full rounded-lg shadow-lg"
      >
        <source src={videoSources} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const LowerpicSwiper = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mediaItems = [
    { src: VideoOnee, type: 'video' },
    { src: VideoTwoo, type: 'video' },
    { src: PicThreee, type: 'image' },
    { src: PicFourr, type: 'image' },
    { src: PicFivee, type: 'image' }
  ];

  return (
    <div className="hidden md:flex justify-center max-w-xs p-1 mt-11 relative right-0">
      <div className="flex flex-wrap justify-center gap-0 w-full max-w-6xl">
        {mediaItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out ${
                isHovered ? 'scale-90 shadow-lg' : 'scale-120'
              }`}
              style={{ width: '62px', height: '135px' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  loop
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />
              ) : (
                <img src={item.src} className="w-full h-full object-cover"/>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  const handleScrollToNext = () => {
    const fourthPage = document.getElementById('fourth-page');
    if (fourthPage) {
      fourthPage.scrollIntoView({ behavior: 'smooth' });
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

const ThirdPage = () => {
  return (
    <div 
    id="sixth-page"
        div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
          <img src={Zimo2} alt="background" className="absolute top-87 sm:top-90 md:top-80 lg:top-70 left-50 sm:left-40 md:left-80 lg:left-160 transform -translate-x-1/2 -translate-y-1/2 w-100 sm:w-100 md:w-100 lg:w-350 h-auto"/>
      
      {/* ZimoSide with animation */}
      <img 
        src={ZimoSide} 
        alt="Zima Trend" 
        className="absolute left-8 md:left-10 top-104 sm:top-90 md:top-80 lg:top-85 transform -translate-y-1/2 w-80 md:w-60 lg:w-100 h-auto z-30 transition-all duration-1000 ease-out"
        style={{ 
          animation: 'slideInFromLeft 1s ease-out forwards',
          opacity: 0,
          transform: 'translateX(-50px) translateY(-50%)',
          animationDelay: '0.2s'
        }}
      />
      
      {/* FootSide with animation */}
      <img 
        src={FootSide} 
        alt="Zima Trend Footer" 
        className="absolute bottom-25 md:bottom-20 lg:bottom-24 left-79 lg:left-200 transform -translate-x-1/2 w-70 md:w-60 lg:w-80 h-auto z-10 transition-all duration-1000 ease-out"
        style={{ 
          animation: 'slideInFromBottom 1s ease-out forwards',
          opacity: 0,
          transform: 'translateX(-50%) translateY(50px)',
          animationDelay: '0.4s'
        }}
      />
      

   
      <img 
        src={ZimoBigg} 
        alt="Zimo Team" 
        className="absolute top-12 md:top-14 lg:top-14-24 left-72 lg:left-200 transform -translate-x-1/2 w-50 md:w-60 lg:w-70 h-auto z-10 transition-all duration-1000 ease-out"
        style={{ 
          animation: 'slideInFromBottom 1s ease-out forwards',
          opacity: 0,
          transform: 'translateX(-50%) translateY(50px)',
          animationDelay: '0.4s'
        }}
      />
    
     
      
      <div className="absolute right-8 md:right-10 top-1/3 transform -translate-y-1/2 z-30">
        <DesktopVideoBig />
      </div>
      
      <div className="absolute right-8 md:right-10 top-2/3 transform -translate-y-1/2 z-30">
        <LowerpicSwiper />
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes slideInFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-50px) translateY(-50%);
            }
            100% {
              opacity: 1;
              transform: translateX(0) translateY(-50%);
            }
          }
          
          @keyframes slideInFromBottom {
            0% {
              opacity: 0;
              transform: translateX(-50%) translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
        `}
      </style>

      <Footer />
    </div>
  );
};

export default ThirdPage;