import { useState, useRef, useEffect } from "react";
import euLogo from "../../assets/images/european-union-logo.svg";
import undp from "../../assets/images/undp-logo.svg";
import unesco from "../../assets/images/UNESCO-02.svg";
import tanoto from "../../assets/images/Tanoto-Logo.svg";
import kemenparekraf from "../../assets/images/Kemenparekraf.svg";
import herbalife from "../../assets/images/Herbalife.svg";
import pgri from "../../assets/images/pgri.svg";
import poldaMetro from "../../assets/images/polda_metro.svg";
import bpip from "../../assets/images/BPIP.svg";
import jamkrindo from "../../assets/images/Jamkrindo.svg";

const images = [euLogo, undp, unesco, tanoto, kemenparekraf];
const images2 = [herbalife, pgri, poldaMetro, bpip, jamkrindo];

const ClientMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 1500);

    return () => {
      clearInterval(intervalRef.current ?? undefined);
    };
  }, [currentIndex]);

  return (
    <section className='p-[50px] flex justify-center items-center bg-[#0e0e0e]'>
      <div className='flex flex-col transition-transform duration-500 ease-in-out gap-5'>
        <div className='flex justify-center items-center h-[173px] w-[203px] my-auto overflow-hidden'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex items-center w-full h-[300px] ${index === currentIndex ? "block" : "hidden"}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} className='h-[173px] mx-auto' />
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center h-[173px] w-[203px] my-auto overflow-hidden'>
          {images2.map((image, index) => (
            <div
              key={index}
              className={`flex items-center w-full h-[300px] ${index === currentIndex ? "block" : "hidden"}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} className='h-[173px] mx-auto' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMobile;
