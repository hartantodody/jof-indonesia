import ReelsLandscape from "../../assets/videos/hero-content-landscape.webm";
import HeroHeader from "../HeroHeader";

const ReelsDesktop = () => {
  return (
    <div className='relative'>
      <video className='object-cover w-full h-[100svh]' autoPlay loop muted playsInline src={ReelsLandscape}></video>
      <HeroHeader />
    </div>
  );
};

export default ReelsDesktop;
