import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EventOrganizer, EventProduction } from "..";

const OurServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const variants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerDelay = 0.2;
  const transitionDuration = 1.5;

  return (
    <>
      <section className='text-center p-10'>
        <div>
          <motion.h4
            className='text-2xl mb-2 inline-block mx-auto'
            style={{
              backgroundImage: "linear-gradient(135deg, #00A650, #FFC200)",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            variants={{
              ...variants,
              visible: { ...variants.visible, transition: { delay: staggerDelay * 2, duration: transitionDuration } },
            }}
          >
            Our Services
          </motion.h4>

          <h2 className='text-5xl mb-5 mx-auto text-headline max-w-[400px] font-semibold'>
            Your Perfect Event Starts Here
          </h2>
        </div>
        <div className='flex flex-row items-center justify-center p-10'>
          <EventOrganizer />
          <EventProduction />
        </div>
        <button className='min-w-[200px] min-h-[60px] max-w-[300px] max-h-[82px] text-black py-2 px-6 rounded-[15px] text-xl font-bold gradient-background mx-auto mt-5'>
          Customize Your Needs
        </button>
      </section>
    </>
  );
};

export default OurServices;
