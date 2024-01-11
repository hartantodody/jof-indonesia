// src/components/Carousel.js
import React, { useState, useEffect } from "react";
import image1 from "../../assets/florian-giorgio-PSJ-B59f-LE-unsplash.jpg";
import image2 from "../../assets/geio-tischler-7hww7t6NLcg-unsplash.jpg";
import image3 from "../../assets/wahyu-pratama-otS5DQxUNi4-unsplash.jpg";

const images = [image1, image2, image3];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalRef.current);
  }, []);

  const switchImage = (index: number) => {
    setCurrentImage(index);
    clearInterval(intervalRef.current);
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
  };

  const handlePrev = () => {
    switchImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    switchImage((currentImage + 1) % images.length);
  };

  const intervalRef = React.useRef<number>();

  return (
    <div className='relative h-96 mx-auto'>
      <div className='flex items-center justify-center h-full'>
        <button onClick={handlePrev} className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white'>
          {"<"}
        </button>
        <div className='relative w-full h-full overflow-hidden'>
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={imgSrc} alt={`Image ${index + 1}`} className='w-full h-full object-cover' />
              <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white'>
          {">"}
        </button>
      </div>

      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => switchImage(index)}
            className={`h-3 w-3 bg-white rounded-full focus:outline-none ${
              index === currentImage ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
