import React from 'react'
import Twelev1 from '../assets/12-1.svg'
import Twelev2 from '../assets/Equal Opportunity.svg'
// import Twelev3 from '../assets/12-3.svg' // ab ye use nahi hoga
import Twelev4 from '../assets/JOIN OUR TEAM.svg'

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
 
const TwelvethPage = () => {
  return (
    <div 
      id="twelveth-page"
      className="w-full h-screen bg-black flex items-center justify-center relative"
    >
      {/* Top logo */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 p-2">
        <img src={Twelev1} alt="background" className="w-70 sm:w-60 md:w-74 lg:w-80 object-contain"/>
      </div>

      {/* Equal Opportunity heading */}
      <div className="absolute top-30 left-1/2 transform -translate-x-1/2 p-2">
        <img src={Twelev2} alt="background" className="w-40 sm:w-60 md:w-74 lg:w-60 object-contain"/>
      </div>

      {/* Replaced Twelev3 image with text */}
      <div className="myfont absolute top-70 sm:top-50 md:top-40 lg:top-55 w-[100%] lg:w-[70%] left-1/2 transform -translate-x-1/2 text-center px-4">
        <p className="text-[#d3d3d3] text-xs sm:text-sm md:text-base leading-relaxed tracking-wide">
          ZIMO IS PROUD TO BE AN EQUAL OPPORTUNITY WORKPLACE AND AFFIRMATIVE ACTION EMPLOYER.WE ARE COMMITTED TO EQUAL EMPLOYMENT OPPORTUNITY REGARDLESS OF RACE, COLOUR, ANCESTRY, RELIGION, SEX,
          SEXUAL ORIENTATION, AGE, CITIZENSHIP, MARITAL STATUS, DISABILITY, GENDER IDENTITY OR VETERAN STATUS.WE ALSO CONSIDER QUALIFIED APPLICANTS REGARDLESS OF CRIMINAL HISTORIES, CONSISTENT WITH LEGAL REQUIREMENTS.
        </p>
      </div>

      {/* Bottom JOIN OUR TEAM image */}
      <div className="myfont absolute top-155 sm:top-130 md:top-110 lg:top-110 left-1/2 transform -translate-x-1/2 p-2">
        <img src={Twelev4} alt="background" className="w-200 sm:w-180 md:w-144 lg:w-50 object-contain"/>
      </div>

      <Footer/>
    </div>
  )
}

export default TwelvethPage
