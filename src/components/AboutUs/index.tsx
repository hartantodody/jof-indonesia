import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import illustration from "../../assets/images/about-us-illustration.svg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
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
    <section
      ref={ref}
      className='flex flex-col lg:flex-row justify-center items-center mx-auto px-5 py-[109px] lg:px-[109px]'
    >
      <motion.img
        ref={ref}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}
        variants={{
          ...variants,
          visible: { ...variants.visible, transition: { delay: staggerDelay * 1, duration: transitionDuration } },
        }}
        className='mb-5 max-w-full h-auto lg:max-w-[50%]'
        src={illustration}
        alt='about us illustration'
      />
      <motion.article
        ref={ref}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}
        variants={variants2}
        className='flex flex-wrap flex-col justify-center items-start lg:p-10 lg:max-w-[50%]'
      >
        <motion.h4
          ref={ref}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 2, duration: transitionDuration } },
          }}
          className='text-[18px] lg:text-3xl text-title max-w-[300px] mb-3 font-medium'
        >
          Setting the Standard for Excellence:
        </motion.h4>
        <motion.h2
          ref={ref}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 4, duration: transitionDuration } },
          }}
          className='text-[26px] lg:text-5xl text-headline mb-5 font-bold'
        >
          Your Event, Our Passion
        </motion.h2>
        <motion.p
          ref={ref}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 6, duration: transitionDuration } },
          }}
          className='text-[16px] lg:text-xl text-title mb-5'
        >
          Making every project, a passion. Project makes us more emphatic to your event and making sure that everything
          is delivered to the maximum satisfactory of our client.
        </motion.p>
        <motion.button
          onClick={() => {
            navigate("/portfolio");
          }}
          ref={ref}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 7, duration: transitionDuration } },
          }}
          className='flex py-2 px-6 border border-title text-title bg-transparent hover:bg-title hover:text-black hover:opacity-90 hover:scale-2 transition-all duration-300 focus:outline-none rounded-md'
        >
          More About Us
        </motion.button>
      </motion.article>
    </section>
  );
};

export default AboutUs;
