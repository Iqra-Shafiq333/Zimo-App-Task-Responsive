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
    <div className="relative h-screen w-full overflow-hidden">
      <img src={Zimo2} alt="Zimo Team Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      <img src={ZimoSide} alt="Zima Trend" className="absolute left-8 md:left-10 top-1/2 transform -translate-y-1/2 w-70 md:w-60 lg:w-100 h-auto z-10" />
      <img src={FootSide} alt="Zima Trend Footer" className="absolute bottom-15 md:bottom-20 left-1/2 transform -translate-x-1/2 w-40 md:w-60 lg:w-80 h-auto z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
        <img 
          src={ZimoBigg} 
          alt="Zimo Team" 
          className="absolute top-12 md-top-14 transform -translate-y-1/2 w-40 md:w-60 lg:w-70"
        />
      </div>
      <div className="absolute right-8 md:right-10 top-1/3 transform -translate-y-1/2 z-30">
        <DesktopVideoBig />
      </div>
      <div className="absolute right-8 md:right-10 top-2/3 transform -translate-y-1/2 z-30">
        <LowerpicSwiper />
      </div>

      <Footer />
    </div>
  );
};

export default ThirdPage;