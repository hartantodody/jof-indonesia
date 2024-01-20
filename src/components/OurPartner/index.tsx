import audioPartnerImg from "../../assets/images/audio-partner.png";
import audioPartnerImgSm from "../../assets/images/audio-partner-sm.png";

const OurPartner = () => {
  return (
    <>
      <section>
        <picture>
          <source media='(max-width: 426px)' srcSet={audioPartnerImgSm} />
          <img className='w-[100%] overflow-hidden bg-cover' src={audioPartnerImg} alt='TW Audio' />
        </picture>
      </section>
    </>
  );
};

export default OurPartner;
