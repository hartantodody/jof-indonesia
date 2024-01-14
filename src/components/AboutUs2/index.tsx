import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clientIcon from "../../assets/images/client-icon.svg";
import deliveredIcon from "../../assets/images/paperplane-icon.svg";
import roIcon from "../../assets/images/repeatorder-icon.svg";
import smileyIcon from "../../assets/images/smiley-icon.svg";

const AboutUs2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const variants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerDelay = 0.2;
  const transitionDuration = 1.5;

  return (
    <>
      <section
        ref={ref}
        className='bg-black flex flex-col lg:flex-row md:justify-center md:items-center lg:mx-auto py-[150px] px-5 lg:p-[50px]'
        style={{ backdropFilter: "blur(8px)" }}
      >
        <motion.article
          ref={ref}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className='w-[300px] lg:w-[500px]'
        >
          <motion.h4
            className='text-[26px] lg:text-4xl font-semibold text-headline'
            variants={{
              ...variants2,
              visible: { ...variants2.visible, transition: { delay: staggerDelay * 1, duration: transitionDuration } },
            }}
          >
            Helping National & International
          </motion.h4>
          <motion.h4
            className='text-[26px] lg:text-4xl mb-5 font-semibold'
            style={{
              display: "inline-block",
              backgroundImage: "linear-gradient(135deg, #00A650, #FFC200)",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            variants={{
              ...variants2,
              visible: { ...variants2.visible, transition: { delay: staggerDelay * 2, duration: transitionDuration } },
            }}
          >
            Client Evolve Their Events
          </motion.h4>
          <motion.p
            className='text-[16px] lg:text-xl text-title'
            variants={{
              ...variants2,
              visible: { ...variants2.visible, transition: { delay: staggerDelay * 3, duration: transitionDuration } },
            }}
          >
            We reached here with our hardworking and passionate team
          </motion.p>
        </motion.article>
        <motion.article
          ref={ref}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className='p-0 py-5 lg:py-0 lg:p-10 grid grid-cols-2 gap-5 '
        >
          <motion.div
            variants={{
              ...variants,
              visible: { ...variants.visible, transition: { delay: staggerDelay * 4, duration: transitionDuration } },
            }}
          >
            <div className='flex gap-5'>
              <img src={clientIcon} className='w-[34px] lg:w-[54px]' />
              <div>
                <motion.h4 className='text-[20.27px] lg:text-4xl text-headline max-w-[300px]'>{">"}10</motion.h4>
                <motion.p
                  className='text-[11.58px] lg:text-xl text-title max-w-[300px]'
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: staggerDelay * 5, duration: transitionDuration },
                    },
                  }}
                >
                  Clients
                </motion.p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              ...variants,
              visible: { ...variants.visible, transition: { delay: staggerDelay * 5, duration: transitionDuration } },
            }}
          >
            <div className='flex gap-5'>
              <img src={deliveredIcon} className='w-[34px] lg:w-[54px]' />
              <div>
                <motion.h4 className='text-[20.27px] lg:text-4xl text-headline max-w-[300px]'>{">"}100</motion.h4>
                <motion.p
                  className='text-[11.58px] lg:text-xl text-title max-w-[300px]'
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: staggerDelay * 7, duration: transitionDuration },
                    },
                  }}
                >
                  Events Delivered
                </motion.p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              ...variants,
              visible: { ...variants.visible, transition: { delay: staggerDelay * 6, duration: transitionDuration } },
            }}
          >
            <div className='flex gap-5'>
              <img src={roIcon} className='w-[34px] lg:w-[54px]' />
              <div>
                <motion.h4 className='text-[20.27px] lg:text-4xl text-headline max-w-[300px]'>{">"}10</motion.h4>
                <motion.p
                  className='text-[11.58px] lg:text-xl text-title max-w-[300px]'
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: staggerDelay * 9, duration: transitionDuration },
                    },
                  }}
                >
                  Repeat Order
                </motion.p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              ...variants,
              visible: { ...variants.visible, transition: { delay: staggerDelay * 7, duration: transitionDuration } },
            }}
          >
            <div className='flex gap-5'>
              <img src={smileyIcon} className='w-[34px] lg:w-[54px]' />
              <div>
                <motion.h4 className='text-[20.27px] lg:text-4xl text-headline max-w-[300px]'>{">"}10000</motion.h4>
                <motion.p
                  className='text-[11.58px] lg:text-xl text-title max-w-[300px]'
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: staggerDelay * 11, duration: transitionDuration },
                    },
                  }}
                >
                  Happy Event Participants
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.article>
      </section>
    </>
  );
};

export default AboutUs2;
