import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import illustration from "../../assets/images/about-us-illustration.svg";

const AboutUs = () => {
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
    <section ref={ref} className='flex flex-col lg:flex-row justify-center items-center mx-auto p-[109px]'>
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
        className='flex flex-wrap flex-col justify-center items-start p-10 lg:max-w-[50%]'
      >
        <motion.h4
          ref={ref}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 2, duration: transitionDuration } },
          }}
          className='text-3xl text-title max-w-[300px] mb-3'
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
          className='text-5xl text-headline mb-5'
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
          className='text-xl text-title mb-5'
        >
          Making every project, a passion. Project makes us more emphatic to your event and making sure that everything
          is delivered to the maximum satisfactory of our client.
        </motion.p>
        <motion.button
          ref={ref}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 8, duration: transitionDuration } },
          }}
          className='bg-transparent text-xl text-title border border-title rounded-[5px] p-5 hover:bg-title hover:text-black'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          More About Us
        </motion.button>
      </motion.article>
    </section>
  );
};

export default AboutUs;
