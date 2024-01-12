import { useState, useEffect, useRef } from "react";
import { ImageCarouselProps } from "../../interfaces/interface";

const Carousel = ({ imageData }: { imageData: ImageCarouselProps[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<number | undefined>();

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalRef.current!);
  }, [currentImage]);

  const switchImage = (index: number) => {
    setCurrentImage(index);
    clearInterval(intervalRef.current!);
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 5000);
  };

  return (
    <div className='relative h-screen p-[100px] md:h-[75vh] lg:h-[75vh] md:p-8 lg:p-12'>
      <div className='relative flex justify-center mx-auto h-full overflow-hidden'>
        {imageData.map(({ src, title, description }, index) => (
          <div
            key={index}
            className={`absolute max-w-[1000px] h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={src} alt={`Image ${index + 1}`} className='w-full h-full object-cover' />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='absolute bottom-0 left-0 w-full h-70 p-10 text-white bg-black bg-opacity-50'>
              <h2 className='text-2xl md:text-3xl lg:text-3xl font-bold'>{title}</h2>
              <p className='text-sm md:text-base lg:text-base'>{description}</p>
            </div>
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
              {imageData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => switchImage(index)}
                  className={`h-3 w-3 bg-white rounded-full focus:outline-none transition-all duration-300 ${
                    index === currentImage ? "opacity-100 w-9" : "opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
