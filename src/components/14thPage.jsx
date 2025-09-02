import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Bg1 from '../assets/10 img1.jpg';
import Thirteen2 from '../assets/13-2.svg'
import Thirteen1 from '../assets/13-1.svg'
import Thirteen3 from '../assets/13-3.svg'
import App1 from '../assets/a1.svg';
import App2 from '../assets/EMAIL ADDRESS.svg';
import App3 from '../assets/a3.svg';
import App4 from '../assets/CONFIRM EMAIL ADDRESS.svg';
import App5 from '../assets/a5.svg';
import App6 from '../assets/FIRST NAME.svg';
import App7 from '../assets/a7.svg';
import App8 from '../assets/LAST NAME (INCLUDING MIDDLE NAME).svg';
import App9 from '../assets/a8.svg';
import App10 from '../assets/a10.svg';
import App11 from '../assets/UNITED KINGDOM.svg';
import App12 from '../assets/a12.svg';
import App13 from '../assets/flag.svg';
import App14 from '../assets/+44.svg';
import App16 from '../assets/a16.svg'
import App17 from '../assets/PHONE NUMBER.svg';
import App18 from '../assets/a18.svg';
import App19 from '../assets/ZAR CODE (OPTIONAL).svg';
import App20 from '../assets/continue.svg' 
import Ukzone from '../assets/ukzone.jpg';

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
        <img src={Ukzone} alt="UK Time Zone" className="absolute top-2 lg:top-2 w-6 h-6 md:w-7 md:h-7 right-2 lg:right-0 "/>
        <div className="flex flex-col pl-5 pr-8 lato-font"> 
          <span className="myfont text-gray-700 pl-20 text-[10px] ">
            {timeStr}&nbsp;LONDON&nbsp;&nbsp;&nbsp;UNITED&nbsp;KINGDOM
          </span>
          <span className="myfont text-yellow-600 text-[12px] pl-21 ">
            {dateStr}
          </span>
        </div>
      </div>
    );
  };

const FourteenthPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    firstName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    zipCode: ''
  });
  
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    confirmEmail: false,
    dob: false,
    phoneNumber: false
  });
  
  const [isTyping, setIsTyping] = useState({
    email: false,
    confirmEmail: false,
    firstName: false,
    lastName: false,
    dob: false,
    phoneNumber: false,
    zipCode: false
  });

  const [hasTriedToContinue, setHasTriedToContinue] = useState(false);

  const handleBackClick = () => {
    navigate(-1); 
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(input);
  };

  const validateName = (input) => {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    return nameRegex.test(input);
  };

  const validateDob = (input) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(input);
  };

  const validatePhoneNumber = (input) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(input);
  };

  const handleContinueClick = () => {
    setHasTriedToContinue(true);
    
    const newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      confirmEmail: false,
      dob: false,
      phoneNumber: false
    };
    
    let hasError = false;
    
    if (!formData.firstName) {
      newErrors.firstName = true;
      hasError = true;
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = true;
      hasError = true;
    }

    if (!formData.lastName) {
      newErrors.lastName = true;
      hasError = true;
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = true;
      hasError = true;
    }
    
    if (!formData.email) {
      newErrors.email = true;
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = true;
      hasError = true;
    }
    
    if (!formData.confirmEmail) {
      newErrors.confirmEmail = true;
      hasError = true;
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = true;
      hasError = true;
    }

    if (!formData.dob) {
      newErrors.dob = true;
      hasError = true;
    } else if (!validateDob(formData.dob)) {
      newErrors.dob = true;
      hasError = true;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = true;
      hasError = true;
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = true;
      hasError = true;
    }
    
    setErrors(newErrors);
    
    if (!hasError) {
      console.log('Form data:', formData);
      navigate('/fifteenth');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
    
    if (errors[field] && hasTriedToContinue) {
      let isValid = true;
      
      if (field === 'email') {
        isValid = value && validateEmail(value);
      } else if (field === 'confirmEmail') {
        isValid = value && value === formData.email;
      } else if (field === 'firstName' || field === 'lastName') {
        isValid = value && validateName(value);
      } else if (field === 'dob') {
        isValid = value && validateDob(value);
      } else if (field === 'phoneNumber') {
        isValid = value && validatePhoneNumber(value);
      }
      
      setErrors(prev => ({...prev, [field]: !isValid}));
    }
    
    setIsTyping(prev => ({...prev, [field]: value.length > 0}));
  };

  const handleFocus = (field) => {
    setIsTyping(prev => ({...prev, [field]: true}));
  };

  const handleBlur = (field) => {
    if (formData[field].length === 0) {
      setIsTyping(prev => ({...prev, [field]: false}));
    }
    
    if (hasTriedToContinue) {
      let isValid = true;
      
      if (field === 'email') {
        isValid = formData.email && validateEmail(formData.email);
      } else if (field === 'confirmEmail') {
        isValid = formData.confirmEmail && formData.confirmEmail === formData.email;
      } else if (field === 'firstName' || field === 'lastName') {
        isValid = formData[field] && validateName(formData[field]);
      } else if (field === 'dob') {
        isValid = formData.dob && validateDob(formData.dob);
      } else if (field === 'phoneNumber') {
        isValid = formData.phoneNumber && validatePhoneNumber(formData.phoneNumber);
      }
      
      setErrors(prev => ({...prev, [field]: !isValid}));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleContinueClick();
    }
  };

  return (
    <div 
      id="fourteenth-page"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img src={Bg1} alt="background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 max-w-[500px] object-contain opacity-80"/>
      <div className="absolute inset-0 bg-white/0 backdrop-blur-[4px]"></div>
    
      <div className="absolute top-40 sm:top-40 md:top-40 lg:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img 
          src={App1} 
          alt="email box" 
          className={`w-60 sm:w-50 md:w-70 lg:w-90 z-10 ${errors.email ? 'border-2 border-red-300 rounded-lg' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {!isTyping.email && (
          <img src={App2} alt="email address" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-25 sm:w-20 md:w-30 lg:w-30 z-15 opacity-40 pointer-events-none" />
        )}
      </div>

      <div className="absolute top-50 sm:top-47 md:top-30 lg:top-34 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img 
          src={App3} 
          alt="email box" 
          className={`w-60 sm:w-50 md:w-70 lg:w-90 z-10 ${errors.confirmEmail ? 'border-2 border-red-300 rounded-lg' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.confirmEmail}
            onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => handleFocus('confirmEmail')}
            onBlur={() => handleBlur('confirmEmail')}
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {!isTyping.confirmEmail && (
          <img src={App4} alt="confirm email address" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 sm:w-23 md:w-32 lg:w-37 z-15 opacity-40 pointer-events-none" />
        )}
      </div>

      <div className="absolute top-60 sm:top-58 md:top-47 lg:top-49 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img 
          src={App5} 
          alt="name box" 
          className={`w-60 sm:w-50 md:w-70 lg:w-90 z-10 ${errors.firstName ? 'border-2 border-red-300 rounded-lg' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => handleFocus('firstName')}
            onBlur={() => handleBlur('firstName')}
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {!isTyping.firstName && (
          <img src={App6} alt="first name" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-23 md:w-32 lg:w-30 z-15 opacity-40 pointer-events-none" />
        )}
      </div>

      <div className="absolute top-72 sm:top-70 md:top-62 lg:top-65 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img 
          src={App7} 
          alt="name box" 
          className={`w-60 sm:w-50 md:w-70 lg:w-90 z-10 ${errors.lastName ? 'border-2 border-red-300 rounded-lg' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => handleFocus('lastName')}
            onBlur={() => handleBlur('lastName')}
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {!isTyping.lastName && (
          <img src={App8} alt="last name" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-35 sm:w-33 md:w-42 lg:w-50 z-15 opacity-40 pointer-events-none" />
        )}
      </div>


      <div className="absolute top-84 sm:top-80 md:top-76 lg:top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img 
          src={App9} 
          alt="date of birth box" 
          className={`w-60 sm:w-50 md:w-70 lg:w-90 z-10 ${errors.dob ? 'border-2 border-red-300 rounded-lg' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => handleInputChange('dob', e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => handleFocus('dob')}
            onBlur={() => handleBlur('dob')}
            className="w-4/5 bg-transparent border-none outline-none text-center placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="absolute top-94 sm:top-92 md:top-91 lg:top-94 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img src={App10} alt="name box" className="w-60 sm:w-50 md:w-70 lg:w-90 z-10" />
        <img src={App11} alt="country name" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-35 sm:w-33 md:w-42 lg:w-40 z-15 opacity-40 pointer-events-none" />
      </div>

      
      <div className="absolute top-105 sm:top-103 md:top-105 lg:top-108 lg:right-167 right-47 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img src={App12} alt="additional box" className="w-20 sm:w-18 md:w-22 lg:w-25 z-10" />
        <img src={App13} alt="small flag" className="absolute top-1 lg:top-2 left-1  w-3 sm:w-7 md:w-8 lg:w-4 z-15" />
        <img src={App14} alt="small flag" className="absolute top-1 lg:top-2 left-8  w-7 sm:w-7 md:w-8 lg:w-8 z-15" />
      </div>

 
      <div className="absolute top-105 sm:top-103 md:top-105 lg:top-108 lg:right-90 right-4 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img 
          src={App16} 
          alt="phone number box" 
          className={`w-35 sm:w-30 md:w-50 lg:w-55 z-10 ${errors.phoneNumber ? 'border-2 border-red-300 rounded-lg' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => handleFocus('phoneNumber')}
            onBlur={() => handleBlur('phoneNumber')}
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {!isTyping.phoneNumber && (
          <img src={App17} alt="phone number" className="absolute top-2 lg:top-3 left-8  w-15 sm:w-15 md:w-20 lg:w-24 z-15" />
        )}
      </div>

      <div className="absolute top-118 sm:top-115 md:top-118 lg:top-124 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img src={App18} alt="zip code box" className="w-60 sm:w-50 md:w-70 lg:w-90 z-10" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => handleFocus('zipCode')}
            onBlur={() => handleBlur('zipCode')}
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {!isTyping.zipCode && (
          <img src={App19} alt="zip code" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-35 sm:w-33 md:w-42 lg:w-50 z-15 opacity-40 pointer-events-none" />
        )}
      </div>
      <div 
        className="absolute top-105 sm:top-110 md:top-100 lg:top-100 lg:right-80 right-2 transform -translate-y-1/2 z-30 cursor-pointer"
        onClick={handleContinueClick}
      >
        <img src={App20} alt="continue" className="w-15 sm:w-15 md:w-20 lg:w-20 hover:opacity-90 transition-opacity" />
      </div>
      
      <img src={Thirteen2} alt="center" className="absolute top-160 sm:top-110 md:top-110 lg:top-110 left-25 w-30 sm:w-26 md:w-26 lg:w-35 -translate-x-1/2 -translate-y-1/2"/>
      <img src={Thirteen1} alt="center" className="absolute top-160 sm:top-110 md:top-120 lg:top-110 right-3 w-10 sm:w-10 md:w-10 lg:w-15 -translate-x-1/2 -translate-y-1/2"/>
      
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

export default FourteenthPage;