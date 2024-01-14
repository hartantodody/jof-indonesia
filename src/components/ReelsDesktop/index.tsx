import React, { useEffect, useState } from "react";
import ReelsLandscape from "../../assets/videos/hero-content-landscape.webm";
import ReelsPortrait from "../../assets/videos/hero-content-portrait.webm";
import HeroHeader from "../HeroHeader";

const ReelsDesktop = () => {
  const [videoSrc, setVideoSrc] = useState(ReelsLandscape);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 630 && window.innerWidth <= 700) {
        setVideoSrc(ReelsPortrait);
      } else {
        setVideoSrc(ReelsLandscape);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='relative'>
      <video className='object-cover w-full h-[100svh]' autoPlay loop muted playsInline src={videoSrc}></video>
      <HeroHeader />
    </div>
  );
};

export default ReelsDesktop;
