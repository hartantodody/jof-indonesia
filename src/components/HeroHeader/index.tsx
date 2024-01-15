import "../../styles/main.css";

const HeroHeader = () => {
  return (
    <div className='lg:px-[128px] px-5 absolute inset-0 flex flex-col justify-center items-start text-left text-white p-8'>
      <h1 className='text-[30px] lg:text-[64px] font-bold'>
        Elevate Your Events with <br />
        Precision and Passion
      </h1>
      <h4 className='text-[22px] lg:text-[48px] mb-8'>Jakarta's Premier Event Organizer</h4>
      <button
        className='lg:w-[300px] lg:h-[82px] w-[184px] h-[56px] text-black p-5 lg:px-10 rounded-[10px] text-[11px] lg:text-[17px] font-bold gradient-background'
        onClick={() => {
          window.open("https://linktr.ee/jakartaoktoberfestival", "_blank");
        }}
      >
        Free Event Consultation
      </button>
    </div>
  );
};

export default HeroHeader;
