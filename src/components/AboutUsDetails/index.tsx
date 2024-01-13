import jofTeam from "../../assets/images/photos/jof-team.png";
import jofTeamSmall from "../../assets/images/photos/jof-team-sm.png";
import "../../styles/main.css";

const AboutUsDetails = () => {
  return (
    <>
      <section className='font-plus-jakarta-sans'>
        <picture>
          <source media='(max-width: 768px)' srcSet={jofTeamSmall} />
          <img src={jofTeam} alt='Jakarta Oktober Festival Members' className='h-full w-screen pt-[80px]' />
        </picture>
        <article className='text-title p-5 lg:p-[100px] about-us-background'>
          <h2 className='text-[10px] lg:text-[24px] mb-10'>About Us</h2>
          <h3 className='text-[24px] lg:text-[40px] w-[100%] lg:w-[944px] mb-[100px] text-headline font-reguler'>
            Jakarta Oktober Festival is a Jakarta's premier event organizer that specializes in customization and
            personalization.
          </h3>
          <div className='flex flex-col space-y-4 lg:flex-row lg:space-between  lg:space-x-[30%] '>
            <p
              className='w-[100%] lg:w-[50%] text-[16px] lg:text-[20px] font-light mb-[50px]'
              style={{ lineHeight: "1.75" }}
            >
              Jakarta Oktober Festival more personal approach to events makes us more flexible. Offering a high level of
              customization and personalization in event planning can set an organizer apart. This involves tailoring
              each event to the client's specific needs and preferences, creating one-of-a-kind experience.With Jakarta
              Oktober Festival, you can expect a seamless blend of creativity, precision, and a genuine passion for
              bringing dreams to life. Whether you're planning a corporate gathering, a social celebration, or a private
              affair, our expertise in customization ensures that your event stands out in a crowd.
            </p>
            <div className='w-[100%] lg:w-[30%] text-xl space-y-1 text-[16px] lg:text-[20px]'>
              <h4 className='text-headline'>Business Enquiries:</h4>
              <p>info@jofindonesia.com</p>
              <p className='pb-4'>+62821 2486 2441</p>

              <h4 className='text-headline'>Address:</h4>
              <p>Jl. Wira Kencana 4 Cilangkap - Cipayung, East Jakarta 13870, Indonesia</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default AboutUsDetails;
