import React, { useState, useEffect } from 'react';
import Background from '../assets/1stpagebg.svg'
import ZimoBig from '../assets/zimateam.jpg';
import Minizimo from '../assets/minizimo.jpg';
import Main from '../assets/upperlogo.jpg';
import Ukzone from '../assets/ukzone.jpg';
import FooterLogo from '../assets/footer.jpg';
import videoSources from '../assets/video.mp4';
import VideoOnee from '../assets/1st video.mp4';
import VideoTwoo from '../assets/2nd video.mp4';
import PicThreee from '../assets/3rd.jpg';
import PicFourr from '../assets/4rth.jpg';
import PicFivee from '../assets/5th.jpg';
const Header = () => {
  return (
    <header className="relative w-full py-4 px-6 flex justify-center items-center">
      <img src={Main} alt="Main Logo"  className="absolute top-3 left-5 w-10 md:w-20 lg:w-20 cursor-pointer transition-transform duration-300 hover:scale-110"/>
      <img 
        src={ZimoBig} 
        alt="ZIMATEAM Logo" 
        className="absolute top-80 sm:top-80 md:top-60 lg:top-50 left-10 w-55 md:w-50 lg:w-70 cursor-pointer transition-all duration-1000 ease-out hover:scale-110"
        style={{ 
          animation: 'slideInFromLeft 1s ease-out forwards',
          opacity: 0,
          transform: 'translateX(-50px)'
        }}
      />
      <img 
        src={Minizimo} 
        alt="Minizimo Logo" 
        className="absolute top-90 sm:top-90 md:top-60 lg:top-62 left-8 w-35 md:w-32 lg:w-45 transition-all duration-1000 ease-out delay-300"
        style={{ 
          animation: 'slideInFromLeft 1s ease-out forwards',
          opacity: 0,
          transform: 'translateX(-50px)',
          animationDelay: '0.3s'
        }}
      />
      <style>
        {`
          @keyframes slideInFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </header>
  );
};

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = time.toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/London'
  });
  
  const dateStr = time.toLocaleDateString('en-GB', { 
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/London'
  }).toUpperCase();

  return (
    <div className="absolute max-w-xs mx-auto my-0 px-2 py-1 top-3 right-4 -sm:right-0 md:right-5">
      <img src={Ukzone} alt="UK Time Zone" className="absolute top-2 lg:top-2 right-0 w-6 h-6 md:w-7 md:h-7 right-2 lg:right-0 "/>
      <div className="flex flex-col pl-5 pr-8 lato-font"> 
        <span className="myfont text-gray-700 pl-10 text-[12px] ">
          {timeStr}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LONDON&nbsp;&nbsp;&nbsp;&nbsp;UNITED&nbsp;&nbsp;KINGDOM
        </span>
        <span className="myfont text-yellow-600 text-[12px] pl-21 ">
          {dateStr}
        </span>
      </div>
    </div>
  );
};

// ... rest of your code remains the same
const DesktopVideoBig= () => {
  return (
    <div className="hidden md:flex justify-center mt-15 left-115 max-w-xs relative">
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

const LowerpicSwiper= () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mediaItems = [
    { src: VideoOnee, type: 'video' },
    { src: VideoTwoo, type: 'video' },
    { src: PicThreee, type: 'image' },
    { src: PicFourr, type: 'image' },
    { src: PicFivee, type: 'image' }
  ];

  return (
    <div className="hidden md:flex justify-center max-w-xs left-115 p-1 mt-3 relative">
      <div className="flex flex-wrap justify-center gap-0.4 w-full max-w-6xl">
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
                  muted
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />
              ) : (
                <img src={item.src} alt={`Media ${index + 1}`} className="w-full h-full object-cover"/>
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
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full py-2 px-6 bg-gray-000 mt-auto">
      <div className="flex flex-col items-center">
        <img src={FooterLogo} alt="Footer Logo" className="w-58 sm:w-40 md:w-56 lg:w-64 mb-15 sm:mb-10 md:mb-10 lg:mb-8 mx-auto z-10"
        />
        <div 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-7 sm:mb-10 md:mb-10 lg:mb-7 border-b-2 border-r-2 border-gray-800 transform rotate-45 cursor-pointer mx-auto"
          onClick={handleScrollToNext}
        ></div>
      </div>
    </footer>
  );
};

const FirstPage = () => {
  return (
    <div
    id="tenth-page"
          className="relative w-full h-[99vh] flex items-center justify-center overflow-hidden">
          <img src={Background} alt="background" className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 max-w-[500px] object-contain opacity-80"/>
          <div className="absolute inset-0 bg-white/0 backdrop-blur-[7px]"></div>
    <div className="min-h-screen w-full flex flex-col relative ">
      <Header />
      
      <main className="flex-grow flex flex-col items-center px-4">
        <DateTime />

        <DesktopVideoBig />

        <LowerpicSwiper />
      </main>
      
      <Footer />
    </div>
    </div>
  );
};

export default FirstPage;