import herdy from "../../assets/images/portraits/Herdy.webp";
import elsa from "../../assets/images/portraits/Elsa.webp";
import rivo from "../../assets/images/portraits/Rivo.webp";
import unggul from "../../assets/images/portraits/Unggul.webp";

const OurTeam = () => {
  return (
    <>
      <section className='flex flex-col text-center py-[100px] py-9'>
        <h2 className='text-[28px] lg:text-[48px] text-headline mb-[56px] lg:mb-[120px]'>Our Team</h2>
        <div className='mx-auto mb-5 lg:mb-[50px]'>
          <img src={herdy} alt='Herdy Daud Rattu' className='w-[177px] lg:w-[328px] mx-auto mb-9' />
          <h3 className='text-headline text-[24px] lg:text-[32px]'>Herdy Daud Rattu</h3>
          <p className='text-subtitle text-[18px] lg:text-[24px] mb-[24px] lg:mb-[80px]'>Operational Director</p>
        </div>
        <div className='flex flex-col lg:flex-row mx-auto gap-9'>
          <div className='w-[300px] py-9 flex flex-col items-center bg-cardbg bg-opacity-25 rounded-[10px] lg:bg-transparent'>
            <img src={elsa} alt='Elsa Amelia Titaley' className='w-[130px] lg:w-[241px] mx-auto mb-9' />
            <h3 className='text-headline text-[22px] lg:text-[32px]'>Elsa Amelia Titaley</h3>
            <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>
              Account Executive Manager <br /> & Show Director
            </p>
            <div>
              <h3 className='text-headline text-2xl lg:text-3xl'>Aditio Ramon</h3>
              <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>Stage Manager</p>
              <h3 className='text-headline text-2xl lg:text-3xl'>Indry</h3>
              <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>MC Briefer/Support</p>
              <h3 className='text-headline text-2xl lg:text-3xl'>Yeremia Titaley</h3>
              <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>Stage Crew</p>
              <h3 className='text-headline text-2xl lg:text-3xl'>Christin Hutagalung</h3>
              <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>Talent Crew/Support</p>
            </div>
          </div>
          <div className='w-[300px] py-9 flex flex-col items-center bg-cardbg bg-opacity-25 rounded-[10px] lg:bg-transparent'>
            <img src={rivo} alt='David Rivo' className='w-[130px] lg:w-[241px] mx-auto mb-9' />
            <div className='text-center'>
              <h3 className='text-headline text-[22px] lg:text-[32px]'>David Rivo</h3>
              <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>Head of Production</p>
              <div>
                <h3 className='text-headline text-2xl lg:text-3xl'>Teguh Maulana</h3>
                <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>
                  Production Staff/Runner
                </p>
                <h3 className='text-headline text-2xl lg:text-3xl'>Gema Fatah</h3>
                <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>
                  Production Staff/Runner
                </p>
              </div>
            </div>
          </div>
          <div className='w-[300px] py-9 flex flex-col items-center bg-cardbg bg-opacity-25 rounded-[10px] lg:bg-transparent'>
            <img src={unggul} alt='Unggul Panjaitan' className='w-[130px] lg:w-[241px] mx-auto mb-9' />
            <h3 className='text-headline text-[22px] lg:text-[32px]'>Unggul Panjaitan</h3>
            <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>
              Head of Audio Visual & Design
            </p>
            <div>
              <h3 className='text-headline text-[22px] lg:text-[32px]'>Muhammad T Uqba</h3>
              <p className='text-subtitle text-[16px] lg:text-[20px] mb-[24px] lg:mb-[80px]'>Graphic Designer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
