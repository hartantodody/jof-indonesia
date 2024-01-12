import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EventOrganizer, EventProduction } from "..";

const OurServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerDelay = 0.2;
  const transitionDuration = 1.5;

  return (
    <motion.section
      ref={ref}
      className='text-center p-10'
      variants={sectionVariants}
      initial='hidden'
      animate={inView ? "visible" : "hidden"}
    >
      <div>
        <motion.h4
          className='text-2xl mb-2 inline-block mx-auto'
          style={{
            backgroundImage: "linear-gradient(135deg, #00A650, #FFC200)",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          variants={childVariants}
        >
          Our Services
        </motion.h4>

        <motion.h2
          className='text-5xl mb-5 mx-auto text-headline max-w-[400px] font-semibold'
          variants={childVariants}
          transition={{ delay: staggerDelay * 2, duration: transitionDuration }}
        >
          Your Perfect Event Starts Here
        </motion.h2>
      </div>

      <motion.div
        className='flex flex-row items-center justify-center p-10'
        variants={childVariants}
        transition={{ delay: staggerDelay * 4, duration: transitionDuration }}
      >
        <EventOrganizer />
        <EventProduction />
      </motion.div>

      <motion.button
        className='min-w-[200px] min-h-[60px] max-w-[300px] max-h-[82px] text-black py-2 px-6 rounded-[15px] text-xl font-bold gradient-background mx-auto mt-5'
        variants={childVariants}
        transition={{ delay: staggerDelay * 6, duration: transitionDuration }}
      >
        Customize Your Needs
      </motion.button>
    </motion.section>
  );
};

export default OurServices;
