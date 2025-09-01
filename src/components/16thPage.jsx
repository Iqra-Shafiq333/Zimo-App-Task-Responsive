import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Bg1 from '../assets/10 img1.jpg';
import Thirteen2 from '../assets/13-2.svg'
import Thirteen1 from '../assets/13-1.svg'
import Thirteen3 from '../assets/13-3.svg'
import Ukzone from '../assets/ukzone.jpg';
import Thirteen4 from '../assets/13-4.svg'
import Sixteen2 from '../assets/career.svg'
import Sixteen3 from '../assets/zia.svg'
import Sixteen4 from '../assets/text.svg'
import Sixteen5 from '../assets/thank u.svg'
import Sixteen6 from '../assets/thanks.svg'
import Sixteen7 from '../assets/last-zia.svg'

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

const SixteenthPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  
  return (
    <div
    id="fourteenth-page"
      className="relative w-full h-screen flex items-center justify-center bg-gray-200 overflow-hidden">
      <img src={Bg1} alt="background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 max-w-[500px] object-contain opacity-80"/>
      <div className="absolute inset-0 bg-white/0 backdrop-blur-[4px]"></div>
     <img src={Thirteen4} alt="center" className="absolute top-70 sm:top-70 md-top-250 lg:top-25 w-90 sm:w-90 md:w-120 lg:w-150 "/>
     <img src={Sixteen2} alt="center" className="absolute top-72 sm:top-72 md-top-30 lg:top-30 w-17 sm:w-17 md:w-28 lg:w-30 "/>
    <img src={Sixteen3} alt="center" className="absolute top-72 sm:top-72 md-top-30 lg:top-30 right-10 sm:right-10 md:right-88 lg:right-90 w-10 sm:w-15 md:w-22 lg:w-20 "/>
    <img src={Sixteen4} alt="center" className="absolute top-88 sm:top-85 md-top-55 lg:top-57 w-50 sm:w-50 md:w-95 lg:w-100 "/>
    <img src={Sixteen5} alt="center" className="absolute top-85 sm:top-85 md-top-50 lg:top-52 w-40 sm:w-40 md:w-85 lg:w-88 "/>
    <img src={Sixteen6} alt="center" className="absolute top-100 sm:top-100 md-top-70 lg:top-75 w-50 sm:w-50 md:w-87 lg:w-90 "/>
    <img src={Sixteen7} alt="center" className="absolute top-120 sm:top-120 md-top-108 lg:top-110 w-40 sm:w-40 md:w-57 lg:w-60 "/>
    <img src={Thirteen2} alt="center" className="absolute top-180 sm:top-110 md:top-110 lg:top-110 left-25 w-30 sm:w-26 md:w-26 lg:w-35 -translate-x-1/2 -translate-y-1/2"/>
    <img src={Thirteen1} alt="center" className="absolute top-180 sm:top-110 md:top-120 lg:top-110 right-3 w-10 sm:w-10 md:w-10 lg:w-15 -translate-x-1/2 -translate-y-1/2"/>
    <div className="absolute top-10 sm:top-10 md:top-10 lg:top-10 left-15 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
    <img src={Thirteen3} alt="center" className="w-15 sm:w-15 md:w-15 lg:w-15"/>
    <div className="text-black font-bold text-sm sm:text-base md:text-lg mt-3 cursor-pointer hover:text-yellow-500 transition-colors" onClick={handleBackClick}>
        &lt;-- Back
        </div>
        </div>
        <DateTime />
    </div>
  )
}

export default SixteenthPage