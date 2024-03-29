import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fullPackageIcon from "../../assets/images/full-package.svg";
import exhibitionIcon from "../../assets/images/exhibit-event.svg";
import multimediaIcon from "../../assets/images/multimedia-event.svg";
import multicameraIcon from "../../assets/images/camera.svg";
import stageIcon from "../../assets/images/stage-rig.svg";
import soundIcon from "../../assets/images/sound-event.svg";
import ledIcon from "../../assets/images/led.svg";
import designIcon from "../../assets/images/design-concept.svg";

const EventOrganizer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerDelay = 0.2;
  const transitionDuration = 1.5;

  return (
    <>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}
        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
        className='lg:p-10 max-w-[100%]'
      >
        <div className='bg-cardbg bg-opacity-25 p-5 rounded-[10px] lg:min-h-[640px] lg:p-[80px]'>
          <motion.h4
            className='text-[1.625rem] lg:text-4xl mb-[3.125rem] '
            style={{
              display: "inline-block",
              backgroundImage: "linear-gradient(135deg, #00A650, #FFC200)",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 700,
            }}
            variants={{
              ...variants2,
              visible: { ...variants2.visible, transition: { delay: staggerDelay * 2, duration: transitionDuration } },
            }}
          >
            Event Production
          </motion.h4>
          <div className='flex flex-col lg:flex-row text-left gap-0 lg:gap-[1.875em]'>
            <div className='flex flex-col lg:px-[1.25em]'>
              <div className='flex flex-row items-center justify-start mb-[1.125em]'>
                <img src={fullPackageIcon} />
                <p className='text-left text-[1rem] lg:text-xl text-textservice ml-[0.625em] max-w-[200px]'>
                  Full Package
                </p>
              </div>
              <div className='flex flex-row items-center justify-start mb-[1.125em]'>
                <img src={exhibitionIcon} />
                <p className='text-left text-[1rem] lg:text-xl text-textservice ml-[0.625em] max-w-[200px]'>
                  Exhibition Booth and Stand
                </p>
              </div>
              <div className='flex flex-row items-center justify-start mb-[1.125em]'>
                <img src={multimediaIcon} />
                <p className='text-left text-[1rem] lg:text-xl text-textservice ml-[0.625em] max-w-[200px]'>
                  Multimedia Content Creation
                </p>
              </div>
              <div className='flex flex-row items-center justify-start mb-[1.125em]'>
                <img src={multicameraIcon} />
                <p className='text-left text-[1rem] lg:text-xl text-textservice ml-[0.625em] max-w-[200px]'>
                  Multicamera System and Documentation
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:px-[1.25em]'>
              <div className='flex flex-row items-center justify-start mb-[1.125em]'>
                <img src={stageIcon} />{" "}
                <p className='text-left text-[1rem] lg:text-xl text-textservice ml-[0.625em] max-w-[200px]'>
                  Stage and Rigging
                </p>
              </div>
              <div className='flex flex-row items-center justify-start mb-[1.125em]'>
                <img src={soundIcon} />{" "}
                <p className='text-left text-[1rem] lg:text-xl text-textservice ml-[0.625em] max-w-[200px]'>
                  Sound System
                </p>
              </div>
              <div className='flex flex-row items-center justify-start mb-[1.125em]'>
                <img src={ledIcon} />
                <p className='text-left text-[1rem] lg:text-xl text-textservice ml-[0.625em] max-w-[200px]'>
                  LED, Multimedia and Lighting System
                </p>
              </div>
              <div className='flex flex-row items-center justify-start mb-[1.125em]'>
                <img src={designIcon} />
                <p className='text-left text-[1rem] lg:text-xl text-textservice ml-[0.625em] max-w-[200px]'>
                  Design Concept Creation
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default EventOrganizer;
