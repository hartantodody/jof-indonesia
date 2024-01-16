import "../../styles/main.css";

const ContactUs = () => {
  return (
    <section className='pt-[128px] contact-us-background'>
      <div
        className='w-[90vw] max-w-[1000px] mx-auto p-[26px] bg-cardbg bg-opacity-25 lg:flex lg:flex-row rounded-[10px]'
        style={{ backdropFilter: "blur(10px)" }}
      >
        <h2 className='flex-1 text-[32px] text-white mb-[29px] font-bold lg:text-[42px] lg:p-[15px]'>
          Let's discuss something <span className='gradient-text'>awesome</span> together
        </h2>
        s
        <form className='flex flex-1 flex-col gap-[16px] lg:p-[15px]'>
          <div className='flex flex-col lg:gap-2'>
            <label className='text-headline text-[16px]' htmlFor='name'>
              Name/Organization
            </label>
            <input
              className='p-[8px] rounded-[5px] text-white bg-cardbg'
              type='text'
              id='name'
              name='name'
              placeholder=''
            />
          </div>
          <div className='flex flex-col lg:gap-2'>
            <label className='text-headline text-[16px]' htmlFor='email'>
              Email
            </label>
            <input
              className='p-[8px] rounded-[5px] text-white bg-cardbg'
              type='email'
              id='email'
              name='email'
              placeholder=''
            />
          </div>
          <div className='flex flex-col lg:gap-2'>
            <label className='text-headline text-[16px]' htmlFor='service'>
              What service are you interested in?
            </label>
            <select className='p-[8px] rounded-[5px] text-[14px] text-title bg-cardbg' id='service' name='service'>
              <option value='' disabled hidden>
                Select your needs
              </option>
              <option value='Event Organizer'>Event Organizer</option>
              <option value='Event Production'>Event Production</option>
              <option value='Customized Needs'>Customized Needs</option>
            </select>
          </div>
          <div className='flex flex-col lg:gap-2'>
            <label className='text-headline text-[16px]' htmlFor='message'>
              Your message
            </label>
            <textarea
              className='p-[8px] rounded-[5px] text-white bg-cardbg h-[172px]'
              id='message'
              name='message'
              placeholder=''
            ></textarea>
          </div>
          <div>
            {/* Add a button for submitting the form */}
            <button className='gradient-background w-full rounded-[5px] p-[8px] text-[16px] font-bold' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
