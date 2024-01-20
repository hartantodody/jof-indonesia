import linkedIn from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook-f.svg";
import youtube from "../../assets/images/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-[#000000] md:px-[120px] md:py-[142px] py-[36px]'>
        <div className='flex flex-col justify-between items-center lg:items-start mb-[32px] lg:mb-10 lg:flex-row'>
          <div className='mb-[24px] lg:mb-[0px] p-2'>
            <h4 className='text-[14px] lg:text-[19.19px] text-title mb-5 text-center md:text-left'>
              PT Jakarta Oktober Festival Indonesia
            </h4>
            <p className='text-[14px] lg:text-[19.19px]  text-subtitle text-center md:text-left'>
              Jl. Wira Kencana 4 Cilangkap - Cipayung <br />
              East Jakarta 13870 <br />
              Indonesia
            </p>
          </div>
          <div className='flex flex-col sm:flex-row items-center'>
            <div className='lg:flex lg:flex-col px-5 hidden sm:text-center md:text-left lg:text-left'>
              <Link to='/portfolio' className='text-[14px] lg:text-[19.19px] font-light text-title p-2'>
                Portfolio
              </Link>
              <Link to='/' className='text-[14px] lg:text-[19.19px] font-light text-title p-2'>
                Services
              </Link>
            </div>
            <div className='lg:flex lg:flex-col px-5 hidden sm:text-center md:text-left lg:text-left'>
              <Link to='/about-us' className='text-[14px] lg:text-[19.19px] font-light text-title p-2'>
                About Us
              </Link>
              <Link to='/contact-us' className='text-[14px] lg:text-[19.19px] font-light text-title p-2'>
                Contact
              </Link>
            </div>
            <div className='flex flex-col px-5'>
              <p className='text-[14px] lg:text-[19.19px] font-light text-title p-2 text-center md:text-left'>
                Follow us on
              </p>
              <div className='flex flex-row gap-5 p-2'>
                <a href='https://id.linkedin.com/company/jofindonesia' target='_blank' rel='noopener noreferrer'>
                  <img src={linkedIn} alt='Go to our LinkedIn Profile' className='w-[18.73px] lg:w-[24px]' />
                </a>
                <a href=' https://www.instagram.com/jofindonesia/' target='_blank' rel='noopener noreferrer'>
                  <img src={instagram} alt='Go to our Instagram Account' className='w-[18.73px] lg:w-[24px]' />
                </a>
                <a
                  href='https://www.facebook.com/people/PT-Jakarta-Oktober-Festival-Indonesia/100085331516207/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-[18.73px] lg:w-[24px]'
                >
                  <img src={facebook} alt='Go to our Facebook Profile' />
                </a>
                <a href='https://www.youtube.com/@jofindonesia' target='_blank' rel='noopener noreferrer'>
                  <img src={youtube} alt='Go to our Youtube Account' className='w-[18.73px] lg:w-[24px]' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className='text-[12px] text-body w-full text-center md:text-left'>
          ©2024 Jakarta Oktober Festival Indonesia
        </p>
      </footer>
    </>
  );
};

export default Footer;
