import "../../styles/main.css";
import OppositeGradientButton from "../OppositeGradientButton";

const HeroHeader = () => {
  return (
    <div className='lg:px-[128px] px-5 absolute inset-0 flex flex-col justify-center items-start text-left text-white p-8'>
      <h1 className='text-[30px] lg:text-[64px] font-bold'>
        Elevate Your Events with <br />
        Precision and Passion
      </h1>
      <h4 className='text-[22px] lg:text-[48px] mb-8'>Jakarta's Premier Event Organizer</h4>
      <OppositeGradientButton
        type='button'
        className='p-5 lg:text-[18px]'
        text='Free Event Consultation'
        onClick={() => {
          window.open("https://linktr.ee/jakartaoktoberfestival", "_blank");
        }}
      />
    </div>
  );
};

export default HeroHeader;
