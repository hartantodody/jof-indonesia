import { AboutUsDetails, Footer, OurPartner, OurTeam } from "../../components";
import { Navbar } from "../../container";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <AboutUsDetails />
      <OurTeam />
      <OurPartner />
      <Footer />
    </>
  );
};

export default AboutUsPage;
