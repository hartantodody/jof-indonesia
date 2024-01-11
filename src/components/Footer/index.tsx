import linkedIn from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook-f.svg";
import youtube from "../../assets/images/youtube.svg";

const Footer = () => {
  return (
    <>
      <footer className='h-[512px] w-full bg-[#000000] px-[120px] py-[142px]'>
        <div className='flex flex-col justify-between items-center mb-10 sm:flex-row'>
          <div>
            <h4 className='text-2xl text-title mb-5'>PT Jakarta Oktober Festival Indonesia</h4>
            <p className='text-xl text-subtitle'>Jl. Wira Kencana 4 Cilangkap - Cipayung</p>
            <p className='text-xl text-subtitle'>East Jakarta 13870</p>
            <p className='text-xl text-subtitle'>Indonesia</p>
          </div>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-col px-5'>
              <p className='text-xl font-light text-title p-2'>Portfolio</p>
              <p className='text-xl font-light text-title p-2'>Services</p>
            </div>
            <div className='flex flex-col px-5'>
              <p className='text-xl font-light text-title p-2'>About Us</p>
              <p className='text-xl font-light text-title p-2'>Contact</p>
            </div>
            <div className='flex flex-col px-5'>
              <p className='text-xl font-light text-title p-2'>Follow us on</p>
              <div className='flex flex-row gap-5 p-2'>
                <a href='https://id.linkedin.com/company/jofindonesia' target='_blank' rel='noopener noreferrer'>
                  <img src={linkedIn} alt='Go to our LinkedIn Profile' />
                </a>
                <a href=' https://www.instagram.com/jofindonesia/' target='_blank' rel='noopener noreferrer'>
                  <img src={instagram} alt='Go to our Instagram Account' />
                </a>
                <a
                  href='https://www.facebook.com/people/PT-Jakarta-Oktober-Festival-Indonesia/100085331516207/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={facebook} alt='Go to our Facebook Profile' />
                </a>
                <a href='https://www.youtube.com/@jofindonesia' target='_blank' rel='noopener noreferrer'>
                  <img src={youtube} alt='Go to our Youtube Account' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className='text-xl text-body w-full'>©2024 Jakarta Oktober Festival Indonesia</p>
      </footer>
    </>
  );
};

export default Footer;
