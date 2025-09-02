import React, { useState, useRef , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Bg1 from '../assets/10 img1.jpg';
import Thirteen2 from '../assets/13-2.svg'
import Thirteen1 from '../assets/13-1.svg'
import Thirteen3 from '../assets/13-3.svg'
import App1 from '../assets/a1.svg';
import App2 from '../assets/EMAIL ADDRESS.svg';
import App5 from '../assets/a5.svg';
import App6 from '../assets/FIRST NAME.svg';
import App7 from '../assets/a7.svg';
import App8 from '../assets/year of completion.svg';
import App9 from '../assets/a5.svg';
import App10 from '../assets/QUALIFICATION(S).png';
import App11 from '../assets/a8.svg'
import App12 from '../assets/UNIVERSITY.svg'
import App21 from '../assets/a8.svg'
import App22 from '../assets/current status.svg'
import App20 from '../assets/continue.svg' 
import App13 from '../assets/a8.svg'
import App14 from '../assets/cv.svg'
import App15 from '../assets/UPLOAD YOUR Résumé IN ENGLISH AS DOCX OR PDF ONLY..svg'
import App16 from '../assets/mine.svg'
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

const FifteenthPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    qualification: '',
    graduationYear: '',
    university: '',
    currentStatus: '',
    cvFile: null,
  });
  
  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
    qualification: false,
    graduationYear: false,
    university: false,
    currentStatus: false,
    cvFile: false
  });
  
  const [isTyping, setIsTyping] = useState({
    email: false,
    firstName: false,
    qualification: false,
    graduationYear: false,
    university: false,
    currentStatus: false,
    cvFile: false,
  });

  const [activeField, setActiveField] = useState(null);
  const [hasTriedToContinue, setHasTriedToContinue] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showQualificationDropdown, setShowQualificationDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

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

  const handleContinueClick = () => {
    setHasTriedToContinue(true);
    
    const newErrors = {
      firstName: false,
      email: false,
      qualification: false,
      graduationYear: false,
      university: false,
      currentStatus: false,
      cvFile: false
    };
    
    let hasError = false;
    
    if (!formData.firstName) {
      newErrors.firstName = true;
      hasError = true;
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = true;
      hasError = true;
    }

    
    if (!formData.email) {
      newErrors.email = true;
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = true;
      hasError = true;
    }

    if (!formData.qualification) {
      newErrors.qualification = true;
      hasError = true;
    }

    if (!formData.graduationYear) {
      newErrors.graduationYear = true;
      hasError = true;
    }

    if (!formData.university) {
      newErrors.university = true;
      hasError = true;
    }

    if (!formData.currentStatus) {
      newErrors.currentStatus = true;
      hasError = true;
    }

    if (!formData.cvFile) {
      newErrors.cvFile = true;
      hasError = true;
    }

    setErrors(newErrors);
    if (!hasError) {
      navigate('/sixteenth');
    } else {
      console.log('Validation errors:', newErrors);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
    
    if (errors[field] && hasTriedToContinue) {
      let isValid = true;
      
      if (field === 'email') {
        isValid = value && validateEmail(value);
      } else if (field === 'firstName') {
        isValid = value && validateName(value);
      } else if (field === 'qualification' || field === 'graduationYear' || field === 'university' || field === 'currentStatus') {
        isValid = value && value.length > 0;
      }
      
      setErrors(prev => ({...prev, [field]: !isValid}));
    }
    
    setIsTyping(prev => ({...prev, [field]: value.length > 0}));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({...prev, cvFile: file}));
      setIsTyping(prev => ({...prev, cvFile: true}));
      if (errors.cvFile) {
        setErrors(prev => ({...prev, cvFile: false}));
      }
    }
  };

  const handleCvBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFocus = (field) => {
    setIsTyping(prev => ({...prev, [field]: true}));
    setActiveField(field);
    if (field === 'graduationYear') {
      setShowYearDropdown(true);
    } else if (field === 'qualification') {
      setShowQualificationDropdown(true);
    } else if (field === 'currentStatus') {
      setShowStatusDropdown(true);
    }
  };

  const handleBlur = (field) => {
    if (formData[field]?.length === 0) {
      setIsTyping(prev => ({...prev, [field]: false}));
    }
    
    if (hasTriedToContinue) {
      let isValid = true;
      
      if (field === 'email') {
        isValid = formData.email && validateEmail(formData.email);
      } else if (field === 'firstName' ) {
        isValid = formData[field] && validateName(formData[field]);
      } else if (field === 'qualification' || field === 'graduationYear' || field === 'university' || field === 'currentStatus') {
        isValid = formData[field] && formData[field].length > 0;
      } else if (field === 'cvFile') {
        isValid = formData.cvFile !== null;
      }
      
      setErrors(prev => ({...prev, [field]: !isValid}));
    }
    
    setActiveField(null);
    setTimeout(() => {
      setShowYearDropdown(false);
      setShowQualificationDropdown(false);
      setShowStatusDropdown(false);
    }, 200);
  };

  const handleFieldClick = (field) => {
    setActiveField(field);
    setIsTyping(prev => ({...prev, [field]: true}));
    if (field === 'graduationYear') {
      setShowYearDropdown(true);
    } else if (field === 'qualification') {
      setShowQualificationDropdown(true);
    } else if (field === 'currentStatus') {
      setShowStatusDropdown(true);
    }
  };

  const handleSelect = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
    setIsTyping(prev => ({...prev, [field]: true}));
    
    if (field === 'graduationYear') {
      setShowYearDropdown(false);
    } else if (field === 'qualification') {
      setShowQualificationDropdown(false);
    } else if (field === 'currentStatus') {
      setShowStatusDropdown(false);
    }
    
    if (errors[field]) {
      setErrors(prev => ({...prev, [field]: false}));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleContinueClick();
    }
  };

  const years = [];
  for (let year = 2020; year <= 2030; year++) {
    years.push(year);
  }

  const qualifications = ['BA', 'BBA', 'BSCS', 'BSIT', 'BSSE', 'Other', 'ACCA'];
  const statusOptions = ['Less than 1 year', '1-2 years', '3-5 years', 'More than 5 years'];

  return (
    <div 
      id="fifteenth-page"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img src={Bg1} alt="background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 max-w-[500px] object-contain opacity-80"/>
      <div className="absolute inset-0 bg-white/0 backdrop-blur-[4px]"></div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        className="hidden"
      />
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
      
      <div className="absolute top-50 sm:top-50 md:top-32 lg:top-35 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
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
    
      <div 
        className="absolute top-60 sm:top-60 md:top-52 lg:top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer"
        onClick={() => handleFieldClick('qualification')}
      >
        <img 
          src={App5} 
          alt="qualification box" 
          className={`w-60 sm:w-50 md:w-70 lg:w-90 z-10 ${errors.qualification ? 'border-2 border-red-300 rounded-lg' : ''} ${activeField === 'qualification' ? 'bg-gray-100' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.qualification}
            readOnly
            onFocus={() => handleFocus('qualification')}
            onBlur={() => handleBlur('qualification')}
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
        {!isTyping.qualification && (
          <img src={App10} alt="qualification" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 sm:w-30 md:w-35 lg:w-40 z-15 opacity-40 pointer-events-none" />
        )}

        {showQualificationDropdown && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-40 max-h-40 overflow-y-auto">
            {qualifications.map((qual) => (
              <div
                key={qual}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect('qualification', qual);
                }}
              >
                {qual}
              </div>
            ))}
          </div>
        )}
      </div>

      <div 
        className="absolute top-70 sm:top-70 md:top-62 lg:top-65 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer"
        onClick={() => handleFieldClick('graduationYear')}
      >
        <img 
          src={App7} 
          alt="graduation year box" 
          className={`w-60 sm:w-50 md:w-70 lg:w-90 z-10 ${errors.graduationYear ? 'border-2 border-red-300 rounded-lg' : ''} ${activeField === 'graduationYear' ? 'bg-gray-100' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.graduationYear}
            readOnly
            onFocus={() => handleFocus('graduationYear')}
            onBlur={() => handleBlur('graduationYear')}
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
        {!isTyping.graduationYear && !formData.graduationYear && (
          <img src={App8} alt="graduation year" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-35 sm:w-33 md:w-42 lg:w-50 z-15 opacity-40 pointer-events-none" />
        )}

        {showYearDropdown && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-40 max-h-40 overflow-y-auto">
            {years.map((year) => (
              <div
                key={year}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect('graduationYear', year.toString());
                }}
              >
                {year}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute top-80 sm:top-80 md:top-78 lg:top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img 
          src={App11} 
          alt="university box" 
          className={`w-60 sm:w-50 md:w-70 lg:w-90 z-10 ${errors.university ? 'border-2 border-red-300 rounded-lg' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.university}
            onChange={(e) => handleInputChange('university', e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => handleFocus('university')}
            onBlur={() => handleBlur('university')}
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {!isTyping.university && (
          <img src={App12} alt="university" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-25 sm:w-30 md:w-35 lg:w-35 z-15 opacity-40 pointer-events-none" />
        )}
      </div>
      <div 
  className="absolute top-90 sm:top-90 md:top-92 lg:top-95 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
  onClick={() => handleFieldClick('currentStatus')}
>
  <img 
    src={App21} 
    alt="current status box" 
    className={`w-60 sm:w-50 md:w-70 lg:w-90 relative z-0 ${errors.currentStatus ? 'border-2 border-red-300 rounded-lg' : ''} ${activeField === 'currentStatus' ? 'bg-gray-100' : ''}`}
  />
  
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-40">
    <input
      type="text"
      value={formData.currentStatus}
      readOnly
      onFocus={() => handleFocus('currentStatus')}
      onBlur={() => handleBlur('currentStatus')}
      className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
    />
  </div>

  {!isTyping.currentStatus && (
    <img 
      src={App22} 
      alt="current status" 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-30 md:w-35 lg:w-55 z-5 opacity-50 pointer-events-none" 
    />
  )}

  {showStatusDropdown && (
    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg max-h-40 overflow-y-auto z-40">
      {statusOptions.map((status) => (
        <div
          key={status}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center"
          onClick={(e) => {
            e.stopPropagation();
            handleSelect('currentStatus', status);
          }}
        >
          {status}
        </div>
      ))}
    </div>
  )}
</div>

      <div 
        className="absolute top-100 sm:top-100 md:top-102 lg:top-110 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
        onClick={handleCvBoxClick}
      >
        <img 
          src={App13} 
          alt="cv box" 
          className={`w-60 sm:w-50 md:w-70 lg:w-90 z-10 ${errors.cvFile ? 'border-2 border-red-300 rounded-lg' : ''}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <input
            type="text"
            value={formData.cvFile ? formData.cvFile.name : ''}
            readOnly
            className="w-4/5 bg-transparent border-none outline-none text-center text-black placeholder-gray-600 font-medium text-sm sm:text-base md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
        {!isTyping.cvFile && (
          <img src={App14} alt="cv" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-25 sm:w-30 md:w-35 lg:w-35 z-15 opacity-40 pointer-events-none" />
        )}
      </div>

      <div className="absolute top-108 sm:top-108 md:top-110 lg:top-120 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img 
          src={App15} 
          alt="upload instructions" 
          className="w-60 sm:w-50 md:w-70 lg:w-90 z-10 opacity-70"
        />
      </div>
      <div className="absolute top-114 sm:top-114 md:top-116 lg:top-126 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img 
          src={App16} 
          alt="additional info" 
          className="w-40 sm:w-35 md:w-50 lg:w-65 z-10 opacity-70"
        />
      </div>
      
      <div 
        className="absolute top-90 sm:top-90 md:top-90 lg:top-90 lg:right-80 right-2 transform -translate-y-1/2 z-30 cursor-pointer"
        onClick={handleContinueClick}
      >
        <img src={App20} alt="continue" className="w-15 sm:w-15 md:w-20 lg:w-20 hover:opacity-90 transition-opacity" />
      </div>
      
      <img src={Thirteen2} alt="center" className="absolute top-170 sm:top-110 md:top-110 lg:top-110 left-25 w-30 sm:w-26 md:w-26 lg:w-35 -translate-x-1/2 -translate-y-1/2 z-10"/>
      <img src={Thirteen1} alt="center" className="absolute top-170 sm:top-110 md:top-120 lg:top-110 right-3 w-10 sm:w-10 md:w-10 lg:w-15 -translate-x-1/2 -translate-y-1/2 z-10"/>
      

      <div className="absolute top-10 sm:top-10 md:top-10 lg:top-10 left-15 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <img src={Thirteen3} alt="center" className="w-15 sm:w-15 md:w-15 lg:w-15"/>
        <div className="text-black font-bold text-sm sm:text-base md:text-lg mt-3 cursor-pointer hover:text-yellow-500 transition-colors" onClick={handleBackClick}>
          &lt;-- Back
        </div>
      </div>
      <DateTime />
    </div>
  )
}

export default FifteenthPage