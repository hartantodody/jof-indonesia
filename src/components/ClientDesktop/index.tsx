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

  const responsiveImageStyle = {
    height: "100%",
  };

  return (
    <section className='flex flex-col justify-center items-center py-[79px] gap-[50px] bg-[#0e0e0e]'>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className='flex flex-row justify-between items-center mb-[41px] w-[100%] px-[50px]'
      >
        {[
          { src: euLogo, alt: "EU Logo" },
          { src: undp, alt: "UNDP Logo" },
          { src: unesco, alt: "UNESCO Logo" },
          { src: tanoto, alt: "Tanoto Logo" },
          { src: kemenparekraf, alt: "Kemenparekraf Logo" },
        ].map((image, index) => (
          <div className='w-[350px] flex justify-center items-center px-[15px]'>
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              style={responsiveImageStyle}
              variants={{
                ...variants,
                visible: {
                  ...variants.visible,
                  transition: { delay: staggerDelay * (index + 1), duration: transitionDuration },
                },
              }}
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}
        variants={variants2}
        className='flex flex-row justify-between items-center mb-[41px] w-[100%] px-[50px]'
      >
        {[
          { src: herbalife, alt: "Herbalife Logo" },
          { src: pgri, alt: "PGRI Logo" },
          { src: poldaMetro, alt: "Polda Metro Logo" },
          { src: bpip, alt: "BPIP Logo" },
          { src: jamkrindo, alt: "Jamkrindo Logo" },
        ].map((image, index) => (
          <div className='w-[350px] flex justify-center items-center px-[15px]'>
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              style={responsiveImageStyle}
              variants={{
                ...variants2,
                visible: {
                  ...variants2.visible,
                  transition: { delay: staggerDelay * (index + 6), duration: transitionDuration },
                },
              }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientDesktop;
