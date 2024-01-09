import "../../styles/main.css";

const HeroHeader = () => {
  return (
    <div className='font-plus-jakarta-sans px-[128px] absolute inset-0 flex flex-col justify-center items-start text-left text-white p-8'>
      <h1 className='text-5xl font-bold'>Elevate Your Events with</h1>
      <h1 className='text-5xl font-bold mb-4'>Precision and Passion</h1>
      <h4 className='text-4xl mb-8'>Jakarta's Premier Event Organizer</h4>
      <button className='w-[300px] h-[82px] text-black py-2 px-6 rounded-[15px] text-xl font-bold gradient-background'>
        Free Event Consultation
      </button>
    </div>
  );
};

export default HeroHeader;
