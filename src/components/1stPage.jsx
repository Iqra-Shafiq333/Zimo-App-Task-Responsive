import React, { useState, useEffect } from 'react';
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
      <img src={Main} alt="Main Logo"  className="absolute top-1 left-5 w-15 md:w-20 lg:w-20 cursor-pointer transition-transform duration-300 hover:scale-110"/>
      <img src={ZimoBig} alt="ZIMATEAM Logo" className="absolute top-50 left-10 w-52 md:w-50 lg:w-70 cursor-pointer transition-transform duration-300 hover:scale-110"/>
      <img src={Minizimo} alt="Minizimo Logo" className="absolute top-62 left-7 w-30 md:w-32 lg:w-45"/>
    </header>
  );
};

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = time.toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  });
  
  const dateStr = time.toLocaleDateString('en-GB', { 
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).toUpperCase();

  return (
    <div className="absolute max-w-xs mx-auto my-0 px-2 py-1 top-0 right-4 -sm:right-0 md:right-5">
      <img src={Ukzone} alt="UK Time Zone" className="absolute top-3 right-0 w-5 h-5 md:w-7 md:h-7"/>
      <div className="flex flex-col pr-6"> 
        <span className="text-gray-800 font-semibold text-[9px] md:text-base">
          {timeStr} LONDON United Kingdom
        </span>
        <span className="text-gray-600 text-[7px] md:text-sm mt-1">
          {dateStr}
        </span>
      </div>
    </div>
  );
};

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
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full py-6 px-6 bg-gray-000 mt-auto">
      <div className="flex flex-col items-center">
        <img src={FooterLogo} alt="Footer Logo" className="w-28 sm:w-40 md:w-56 lg:w-64 mb-4 mx-auto"
        />
        <div 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-gray-800 transform rotate-45 cursor-pointer mx-auto"
          onClick={handleScrollToNext}
        ></div>
      </div>
    </footer>
  );
};

const FirstPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center px-4">
        <DateTime />

        <DesktopVideoBig />

        <LowerpicSwiper />
      </main>
      
      <Footer />
    </div>
  );
};

export default FirstPage;