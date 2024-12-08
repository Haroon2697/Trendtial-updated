import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const VideoPlayer = ({ src, isLoaded }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <motion.div 
      className="relative aspect-[9/16] bg-[#1a1b1c] rounded-lg overflow-hidden shadow-lg"
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Placeholder UI */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1" />
          <div className="p-4 bg-gradient-to-t from-black/50 to-transparent">
            <div className="flex items-center gap-2 text-white/90">
              <button className="p-1 hover:bg-white/10 rounded-full">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <span className="text-sm">0:00</span>
              <div className="flex-1" />
              <button className="p-1 hover:bg-white/10 rounded-full">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-white/10 rounded-full">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              </button>
            </div>
            <div className="mt-2 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      )}

      {/* Actual Video Player */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={src}
            muted={isMuted}
            playsInline
            loop
            autoPlay
            onTimeUpdate={handleTimeUpdate}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2 text-white/90">
                <button
                  onClick={handlePlayPause}
                  className="p-1 hover:bg-white/10 rounded-full"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <span className="text-sm">{Math.floor(currentTime)}:00</span>
                <div className="flex-1" />
                <button
                  onClick={toggleMute}
                  className="p-1 hover:bg-white/10 rounded-full"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-1 hover:bg-white/10 rounded-full"
                  aria-label="Toggle fullscreen"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                </button>
              </div>
              <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white"
                  style={{
                    width: `${(currentTime / (videoRef.current?.duration || 1)) * 100}%`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const VideoGallery = () => {
  const [videosLoaded, setVideosLoaded] = useState(false);
  const videoedit = [
  

  ];

  const videography = [
  

    "/videos/Videography/VideoGraphy-BEST-DIGITAL-MARKETING-AGENCY-WITH-SOLUTIONS-TO-YOUR-PROBLEMS_3.mp4",
    "/videos/Videography/VideoGraphy-BEST-DIGITAL-MARKETING-AGENCY-WITH-SOLUTIONS-TO-YOUR-PROBLEMS_4.mp4",
    "/videos/Videography/Chocolate-Pizza_2.mp4",
    "/videos/Videography/Paratha.mp4",
    "/videos/Videography/Pizza.mp4",
    "/videos/Videography/Saadi-Di-Sajji_1.mp4",   
     "/videos/aigeneratedcontentreel.mp4",
    "/videos/bratsummerfullfinal.mp4",
    "/videos/HEYreel.mp4",
    "/videos/3dproductreel1.mp4",
    "/videos/3dproductreel2.mp4",
    "/videos/MarketingStrategies.mp4",
    "/videos/personalizedcontentreel.mp4",
    "/videos/tradmarketingrevised3.mp4",
    "/videos/VID-20241104-WA0036.mp4",


  ];


  useEffect(() => {
    const timer = setTimeout(() => {
      setVideosLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f5] py-24 px-4">

           
{/*VideoGraphy */}

<div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#1a1b26]">VideoGraphy</h1>
         <p className="text-xl text-[#1a1b26]">
            Unleash the Power of Visual Storytelling
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videography.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VideoPlayer src={url} isLoaded={videosLoaded} />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default VideoGallery;

