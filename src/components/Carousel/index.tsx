import { useState, useEffect } from "react";
import { imageList } from "../../utils/imageList";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, imageList.length]);

  const switchImage = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  const currentImageData = imageList[currentImageIndex];

  return (
    <div className='relative flex justify-center'>
      <div className='max-w-[800px] relative'>
        <img
          key={currentImageIndex}
          src={currentImageData.src}
          alt={currentImageData.title}
          className={`transition-opacity duration-500 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          } w-full h-full object-cover max-w-[800px] max-h-[500px]`}
        />
        <div
          className={`absolute bottom-0 left-0 w-full h-70 p-6 lg:p-10 text-white bg-black bg-opacity-50 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500 ease-in-out`}
        >
          <h2 className='text-[14px] lg:text-3xl font-bold'>{currentImageData.title}</h2>
          <p className='text-[8px] lg:text-base'>{currentImageData.description}</p>
        </div>
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {imageList.map((_, index) => (
            <button
              key={index}
              onClick={() => switchImage(index)}
              className={`h-[7px] w-[7px] lg:h-3 lg:w-3 bg-white rounded-full focus:outline-none transition-all duration-300 ${
                index === currentImageIndex ? "opacity-100 w-[15px] lg:w-9" : "opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
