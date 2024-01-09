import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import euLogo from "../../assets/images/european-union-logo.svg";
import undp from "../../assets/images/undp-logo.svg";
import unesco from "../../assets/images/UNESCO-02.svg";
import tanoto from "../../assets/images/Tanoto-Logo.svg";
import kemenparekraf from "../../assets/images/Kemenparekraf.svg";
import herbalife from "../../assets/images/Herbalife.svg";
import pgri from "../../assets/images/pgri.svg";
import poldaMetro from "../../assets/images/polda_metro.svg";
import bpip from "../../assets/images/BPIP.svg";
import jamkrindo from "../../assets/images/Jamkrindo.svg";

const ClientDesktop = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerDelay = 0.2;
  const transitionDuration = 1.5;

  return (
    <section className='flex flex-col justify-center items-center px-[152px] py-[79px]'>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className='flex flex-wrap flex-row justify-center items-center gap-[127px] mb-[41px]'
      >
        <motion.img
          src={euLogo}
          alt=''
          className='max-w-full'
          variants={{
            ...variants,
            visible: { ...variants.visible, transition: { delay: staggerDelay * 1, duration: transitionDuration } },
          }}
        />
        <motion.img
          src={undp}
          alt=''
          className='max-w-full'
          variants={{
            ...variants,
            visible: { ...variants.visible, transition: { delay: staggerDelay * 2, duration: transitionDuration } },
          }}
        />
        <motion.img
          src={unesco}
          alt=''
          className='max-w-full'
          variants={{
            ...variants,
            visible: { ...variants.visible, transition: { delay: staggerDelay * 3, duration: transitionDuration } },
          }}
        />
        <motion.img
          src={tanoto}
          alt=''
          className='max-w-full'
          variants={{
            ...variants,
            visible: { ...variants.visible, transition: { delay: staggerDelay * 4, duration: transitionDuration } },
          }}
        />
        <motion.img
          src={kemenparekraf}
          alt=''
          className='max-w-full'
          variants={{
            ...variants,
            visible: { ...variants.visible, transition: { delay: staggerDelay * 5, duration: transitionDuration } },
          }}
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}
        variants={variants2}
        className='flex flex-wrap justify-center items-center flex-row gap-[127px]'
      >
        <motion.img
          src={herbalife}
          alt=''
          className='max-w-full'
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 6, duration: transitionDuration } },
          }}
        />
        <motion.img
          src={pgri}
          alt=''
          className='max-w-full'
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 7, duration: transitionDuration } },
          }}
        />
        <motion.img
          src={poldaMetro}
          alt=''
          className='max-w-full'
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 8, duration: transitionDuration } },
          }}
        />
        <motion.img
          src={bpip}
          alt=''
          className='max-w-full'
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 9, duration: transitionDuration } },
          }}
        />
        <motion.img
          src={jamkrindo}
          alt=''
          className='max-w-full'
          variants={{
            ...variants2,
            visible: { ...variants2.visible, transition: { delay: staggerDelay * 10, duration: transitionDuration } },
          }}
        />
      </motion.div>
    </section>
  );
};

export default ClientDesktop;
