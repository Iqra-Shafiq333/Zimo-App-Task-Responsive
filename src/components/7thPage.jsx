import React, { useState, useRef, useEffect } from 'react';
import ZimaVid from '../assets/ZTEAM VIDEO V1.0.mp4';

const SevPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    if (video) {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      setIsPlaying(!video.paused);
      setIsMuted(video.muted);

      video.muted = true;
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log('Auto-play was prevented:', error);
            setIsPlaying(false);
          });
      }
    }

    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      }
    };
  }, []);

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (videoRef.current) {
      try {
        if (videoRef.current.paused) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(error => {
            console.log('Play failed:', error);
          });
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      } catch (error) {
        console.log('Toggle play error:', error);
      }
    }
  };

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (videoRef.current) {
      try {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
      } catch (error) {
        console.log('Toggle mute error:', error);
      }
    }
  };

  const toggleFullScreen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch(err => {
          console.log('Fullscreen error:', err);
        });
      } else {
        document.exitFullscreen();
      }
    } catch (error) {
      console.log('Fullscreen toggle error:', error);
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  const handleVideoClick = (e) => {
    if (e.target === videoRef.current) {
      togglePlay(e);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <video 
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
        onClick={handleVideoClick}
      >
        <source src={ZimaVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute bottom-4 left-4 flex space-x-2 bg-black bg-opacity-50 rounded-full p-2">
        <button 
          className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors w-8 h-8 flex items-center justify-center text-sm"
          onClick={togglePlay}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
        
        <button 
          className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors w-8 h-8 flex items-center justify-center text-sm"
          onClick={toggleMute}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        
        <button 
          className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors w-8 h-8 flex items-center justify-center text-sm"
          onClick={toggleFullScreen}
        >
          {isFullScreen ? '✕' : '⛶'}
        </button>
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
 
const SeventhPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <SevPage />
      <Footer />
    </div>
  );
};

export default SeventhPage;