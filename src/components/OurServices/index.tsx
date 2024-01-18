import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { EventOrganizer, EventProduction } from "..";
import OppositeGradientButton from "../OppositeGradientButton";

const OurServices = () => {
  const navigate = useNavigate();
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
      id='services'
      ref={ref}
      className='text-center lg:p-10'
      variants={sectionVariants}
      initial='hidden'
      animate={inView ? "visible" : "hidden"}
    >
      <div>
        <motion.h4 className='text-[16px] lg:text-2xl mb-2 inline-block mx-auto gradient-text' variants={childVariants}>
          Our Services
        </motion.h4>

        <motion.h2
          className='text-[26px] lg:text-5xl mb-5 mx-auto text-headline max-w-[300px] lg:max-w-[400px] font-bold'
          variants={childVariants}
          transition={{ delay: staggerDelay * 2, duration: transitionDuration }}
        >
          Your Perfect Event Starts Here
        </motion.h2>
      </div>

      <motion.div
        className='flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-0'
        variants={childVariants}
        transition={{ delay: staggerDelay * 4, duration: transitionDuration }}
      >
        <EventOrganizer />
        <EventProduction />
      </motion.div>

      <motion.div variants={childVariants} transition={{ delay: staggerDelay * 6, duration: transitionDuration }}>
        <OppositeGradientButton
          type='button'
          className='p-3'
          text='Customize Your Needs'
          onClick={() => {
            navigate("/contact-us");
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default OurServices;
