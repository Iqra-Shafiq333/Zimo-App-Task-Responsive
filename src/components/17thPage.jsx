import React from 'react'
import Bg1 from '../assets/10 img1.jpg';
import Seventeen1 from '../assets/CONTACT.svg'
import Seventeen2 from '../assets/PARTNERS.svg'
import Seventeen3 from '../assets/partners@zimogroup.org.svg'
import Seventeen4 from '../assets/LEGAL copy 2.svg'
import Seventeen5 from '../assets/legal@zimogroup.org.svg'
import Seventeen6 from '../assets/CORPORATE.svg'
import Seventeen7 from '../assets/corporate@zimogroup.org.svg'
import Seventeen8 from '../assets/MARKETING.svg'
import Seventeen9 from '../assets/marketing@zimogroup.org.svg'
import Seventeen10 from '../assets/PRESS.svg'
import Seventeen11 from '../assets/UNITED KINGDOM.svg'
import Seventeen13 from '../assets/press-uk@zimogroup.org.svg'
import Seventeen14 from '../assets/EUROPE.svg'
import Seventeen15 from '../assets/press-eu@zimogroup.org.svg'
import Seventeen16 from '../assets/NORTH AMERICA.svg'
import Seventeen17 from '../assets/press-na@zimogroup.org.svg'
import Seventeen18 from '../assets/MIDDLE EAST.svg'
import Seventeen19 from '../assets/press-me@zimogroup.org.svg'
import Seventeen20 from '../assets/ASIA-AUSTRALIA.svg'
import Seventeen21 from '../assets/press-apac@zimogroup.org.svg'
import Seventeen22 from '../assets/CAREERS.svg'
import Seventeen23 from '../assets/careers@zimogroup.org.svg'
import Seventeen24 from '../assets/ACADEMY.svg'
import Seventeen25 from '../assets/academy@zimogroup.org.svg'
import Seventeen26 from '../assets/ARTIFICIAL INTELLIGENCE.svg'
import Seventeen27 from '../assets/ai@zimogroup.org.svg'
import Seventeen28 from '../assets/INTERNSHIP.svg'
import Seventeen29 from '../assets/internship@zimogroup.org.svg'
import Seventeen30 from '../assets/TEAM.svg'
import Seventeen31 from '../assets/team@zimogroup.org.svg'
import Seventeen32 from '../assets/req.svg'
import Seventeen35 from '../assets/teamms.svg'
import Seventeen33 from '../assets/© ZIMO GROUP LIMITED  2024.svg'
import Seventeen34 from '../assets/lengthy.svg'
import Seventeen36 from '../assets/logs.svg'

const SeventeenthPage = () => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div id="seventeenth-page" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img src={Bg1} alt="background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 max-w-[500px] object-contain opacity-80"/>
      <div className="absolute inset-0 bg-white/0 backdrop-blur-[4px]"></div>
      <div className="absolute top-10 sm:top-10 md:top-10 lg:top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img src={Seventeen1} alt="CONTACT" className="w-20 sm:w-20 md:w-20 lg:w-25 z-10" />
      </div>

       <img src={Seventeen32} alt="CONTACT" className="absolute w-25 sm:w-25 md:w-30 lg:w-30 top-30 sm:top-30 md:top-30 lg:top-20 left-10 z-10" />
       <img src={Seventeen33} alt="CONTACT" className="absolute w-40 sm:w-35 md:w-40 lg:w-50 top-175 sm:top-180 md:top-120 lg:top-120 left-10 z-10" />
       <img src={Seventeen34} alt="CONTACT" className="absolute w-55 sm:w-50 md:w-60 lg:w-70 top-150 sm:top-140 md:top-85 lg:top-95 left-10 sm:left-10 md:left-10 lg:left-20 z-10" />
        <img src={Seventeen35} alt="CONTACT" className="absolute w-45 sm:w-40 md:w-50 lg:w-60 top-90 sm:top-85 md:top-50 lg:top-60 left-10 z-10" />
         <img src={Seventeen36} alt="CONTACT" className="absolute w-40 sm:w-35 md:w-45 lg:w-45 top-100 sm:top-95 md:top-40 lg:top-70 left-10 z-10" />

      <div className="absolute top-70 sm:top-40 md:top-40 lg:top-70 right-5 sm:right-4 md:right-4 lg:right-8 transform -translate-y-1/2 z-10 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4">
        
        <div className="flex flex-col items-end">
          <img src={Seventeen2} alt="PARTNERS" className="w-10 sm:w-10 md:w-15 lg:w-15 mb-2" />
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('partners@zimogroup.org')}
          >
            <img src={Seventeen3} alt="partners email" className="w-24 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <img src={Seventeen4} alt="LEGAL" className="w-7 sm:w-7 md:w-8 lg:w-15 mb-1" />
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('legal@zimogroup.org')}
          >
            <img src={Seventeen5} alt="legal email" className="w-20 sm:w-20 md:w-27 lg:w-32" />
          </div>
        </div>

        <div className="flex flex-col items-end">
          <img src={Seventeen6} alt="CORPORATE" className="w-10 sm:w-10 md:w-15 lg:w-15 mb-2" />
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('corporate@zimogroup.org')}
          >
            <img src={Seventeen7} alt="corporate email" className="w-24 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>

        <div className="flex flex-col items-end">
          <img src={Seventeen8} alt="MARKETING" className="w-10 sm:w-10 md:w-15 lg:w-15 mb-2" />
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('marketing@zimogroup.org')}
          >
            <img src={Seventeen9} alt="marketing email" className="w-24 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>

        <div className="flex flex-col items-end mt-10">
          <img src={Seventeen10} alt="PRESS" className="w-10 sm:w-10 md:w-15 lg:w-15 mb-2" />
        </div>

        <div className="flex flex-col items-end">
          <img src={Seventeen11} alt="UNITED KINGDOM" className="w-15 sm:w-10 md:w-15 lg:w-20 mb-2" />
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-uk@zimogroup.org')}
          >
            <img src={Seventeen13} alt="UK press email" className="w-24 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>

        <div className="flex flex-col items-end">
          <img src={Seventeen14} alt="EUROPE" className="w-10 sm:w-10 md:w-10 lg:w-15 mb-2" />
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-eu@zimogroup.org')}
          >
            <img src={Seventeen15} alt="EU press email" className="w-24 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>

        <div className="flex flex-col items-end">
          <img src={Seventeen16} alt="NORTH AMERICA" className="w-15 sm:w-15 md:w-15 lg:w-17 mb-2" />
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-na@zimogroup.org')}
          >
            <img src={Seventeen17} alt="NA press email" className="w-24 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>

          <div className="flex flex-col items-end">
          <img src={Seventeen18} alt="MIDDLE EAST" className="w-15 sm:w-15 md:w-20 lg:w-17 mb-2" />
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-me@zimogroup.org')}
          >
            <img src={Seventeen19} alt="ME press email" className="w-24 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>

        <div className="flex flex-col items-end">
          <img src={Seventeen20} alt="ASIA-AUSTRALIA" className="w-15 sm:w-15 md:w-15 lg:w-18 mb-2" />
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-apac@zimogroup.org')}
          >
            <img src={Seventeen21} alt="APAC press email" className="w-24 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>

      </div>

      <div className="absolute top-150 sm:top-10 md:top-10 lg:top-50 -right-10 lg:right-50 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img src={Seventeen22}  className="w-15 sm:w-15 md:w-15 lg:w-18 z-10" />

        <div className="flex flex-col items-end">
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-apac@zimogroup.org')}
          >
            <img src={Seventeen23} className="w-27 sm:w-24 md:w-28 lg:w-32 mt-2" />

          </div>
        </div>
       
        <img src={Seventeen24}  className="w-15 sm:w-15 md:w-15 lg:w-20 mt-2 z-10" />

        <div className="flex flex-col items-end">
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-apac@zimogroup.org')}
          >
            <img src={Seventeen25} className="w-27 sm:w-24 md:w-28 lg:w-32 mt-2" />
          </div>
        </div>

        <img src={Seventeen26}  className="w-25 sm:w-25 md:w-25 lg:w-33 mt-4 z-10" />

        <div className="flex flex-col items-end">
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-apac@zimogroup.org')}
          >
            <img src={Seventeen27} className="w-27 sm:w-24 md:w-28 lg:w-32 mt-3" />
          </div>
        </div>

        <img src={Seventeen28}  className="w-15 sm:w-15 md:w-15 lg:w-20 mt-3 z-10" />

        <div className="flex flex-col items-end">
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-apac@zimogroup.org')}
          >
            <img src={Seventeen29} className="w-27 sm:w-24 md:w-28 lg:w-32 mt-2" />
          </div>
        </div>

        <img src={Seventeen30}  className="w-10 sm:w-10 md:w-10 lg:w-13 mt-3 z-10" />
        <div className="flex flex-col items-end">
          <div 
            className="cursor-pointer transition-all duration-300 hover:opacity-50 hover:brightness-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.7)]"
            onClick={() => handleEmailClick('press-apac@zimogroup.org')}
          >
            <img src={Seventeen31} className="w-27 sm:w-24 md:w-28 lg:w-32 mt-2" />
          </div>
        </div>
      </div>
    

    </div>
  )
}

export default SeventeenthPage