import { useState } from "react";
import { imageList } from "../../utils/imageList";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const itemsToShow = showMore ? imageList : imageList.slice(0, 4);

  return (
    <>
      <section className='mt-[80px] px-5 lg:px-7 text-headline flex flex-col justify-center items-center '>
        <h2 className='text-[28px] lg:text-[72px] lg:mb-[80px] text-center py-9 font-bold'>Portfolio</h2>
        {itemsToShow.map((item, index) => (
          <div key={index} className='bg-cardbg bg-opacity-25 mb-[24px] lg:flex lg:flex-row-reverse'>
            <img src={item.src} alt={item.description} className='lg:w-[500px]' />
            <div className='p-3 lg:min-w-[500px]'>
              <h3 className='text-[24px] lg:w-[400px]'>{item.title}</h3>
              <p className='text-subtitle text-[16px]'>{item.description}</p>
              <p className='text-body text-[16px]'>{item.venue}</p>
              <p className='text-body text-[16px]'>{item.held}</p>
            </div>
          </div>
        ))}
        {imageList.length > 4 && !showMore && <button onClick={() => setShowMore(true)}>Show More</button>}
      </section>
    </>
  );
};

export default Portfolio;
