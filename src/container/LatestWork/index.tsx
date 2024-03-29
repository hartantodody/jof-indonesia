import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Carousel } from "../../components";
import "../../styles/main.css";
import GradientButton from "../../components/GradientButton";

const LatestWork = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
  };

  const staggerDelay = 0.2;
  const transitionDuration = 1.5;

  return (
    <>
      <div
        ref={ref}
        className='px-2 lg:px-[50px] my-[100px]'
        style={{
          background: "radial-gradient(circle at center rgba(0, 166, 80, 0.075) 20%, transparent 50%)",
        }}
      >
        <motion.h4
          className='text-[22px] lg:text-6xl lg:my-5 font-light'
          style={{
            display: "inline-block",
            backgroundImage: "linear-gradient(135deg, #00A650, #FFC200)",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 700,
          }}
          variants={{
            ...variants,
            visible: { ...variants.visible, transition: { delay: staggerDelay * 2, duration: transitionDuration } },
          }}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
        >
          Latest Work
        </motion.h4>
        <motion.h2
          className='text-[14px] lg:text-xl mb-9 text-headline max-w-[400px] font-light'
          variants={{
            ...variants,
            visible: { ...variants.visible, transition: { delay: staggerDelay * 2, duration: transitionDuration } },
          }}
          transition={{ delay: staggerDelay * 2, duration: transitionDuration }}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
        >
          Our adaptation of dreams
        </motion.h2>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { delay: staggerDelay * 4, duration: transitionDuration } },
          }}
          transition={{ delay: staggerDelay * 2, duration: transitionDuration }}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
        >
          <Carousel />
        </motion.div>
        <motion.div className='flex justify-center mt-9 ' variants={buttonVariants} initial='hidden' animate='visible'>
          <GradientButton
            type='button'
            className='px-[24px] py-[8px]'
            text='Watch More'
            onClick={() => {
              navigate("/portfolio");
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default LatestWork;
