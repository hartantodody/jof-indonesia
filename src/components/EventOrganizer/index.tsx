import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fullServiceIcon from "../../assets/images/full-service.svg";
import eventPlanningIcon from "../../assets/images/event-planning.svg";
import showManageIcon from "../../assets/images/show-manage.svg";
import exhibitionIcon from "../../assets/images/exhibit.svg";
import productLaunchIcon from "../../assets/images/product-launch.svg";

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
        <div className='bg-cardbg bg-opacity-25 min-w-[300px] p-5 rounded-[10px] lg:min-h-[640px] lg:max-h-[720px] lg:p-[80px]'>
          <motion.h4
            className='text-[26px] lg:text-4xl mb-[50px]'
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
            Event Organizer
          </motion.h4>
          <div className='flex flex-col lg:flex-col text-left gap-0 lg:gap-3'>
            <div className='flex flex-row items-center justify-start mb-6'>
              <img src={fullServiceIcon} />{" "}
              <p className='text-left text-[16px] lg:text-xl text-textservice ml-5'>Full Service</p>
            </div>
            <div className='flex flex-row items-center justify-start mb-6'>
              <img src={eventPlanningIcon} />{" "}
              <p className='text-left text-[16px] lg:text-xl text-textservice ml-5'>Event Planning</p>
            </div>
            <div className='flex flex-row items-center justify-start mb-6'>
              <img src={showManageIcon} />{" "}
              <p className='text-left text-[16px] lg:text-xl text-textservice ml-5'>Show Management</p>
            </div>
            <div className='text-left flex flex-row items-center justify-start mb-6'>
              <img src={exhibitionIcon} />{" "}
              <p className='text-left text-[16px] lg:text-xl text-textservice ml-5'>Exhibition Event</p>
            </div>
            <div className='flex flex-row items-center justify-start mb-6'>
              <img src={productLaunchIcon} />{" "}
              <p className='text-left text-[16px] lg:text-xl text-textservice ml-5'>Product Launching</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default EventOrganizer;
