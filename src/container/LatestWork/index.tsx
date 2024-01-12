import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Carousel } from "../../components";
import { imageList } from "../../utils/imageList";
import "../../styles/main.css";

const LatestWork = () => {
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
        className='h-screen px-[50px] my-[100px]'
        style={{
          background: "radial-gradient(circle at center rgba(0, 166, 80, 0.075) 20%, transparent 50%)",
        }}
      >
        <motion.h4
          className='text-6xl my-5 font-light font-plus-jakarta-sans'
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
          className='text-xl mb-9 text-headline max-w-[400px] font-light font-plus-jakarta-sans'
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
          <Carousel imageData={imageList} />
        </motion.div>
        <motion.button
          className='py-2 px-6 mx-auto border border-title text-title bg-transparent hover:bg-title hover:text-black hover:opacity-90 hover:scale-2 transition-all duration-300 focus:outline-none rounded-md'
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          style={{ display: "flex", justifyContent: "center" }}
        >
          Watch More
        </motion.button>
      </div>
    </>
  );
};

export default LatestWork;
