import audioPartnerImg from "../../assets/images/audio-partner.png";
import audioPartnerImgSm from "../../assets/images/audio-partner-sm.png";

const OurPartner = () => {
  return (
    <>
      <section>
        <picture>
          <source media='(max-width: 426px)' srcSet={audioPartnerImgSm} />
          <img src={audioPartnerImg} alt='TW Audio' />
        </picture>
      </section>
    </>
  );
};

export default OurPartner;
