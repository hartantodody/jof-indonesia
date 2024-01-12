import { AboutUs, AboutUs2, ClientDesktop, NavbarDesktop, OurServices, Footer } from "../../components";
import { Hero, LatestWork } from "../../container";

const HomePage = () => {
  return (
    <>
      <NavbarDesktop />
      <Hero />
      <ClientDesktop />
      <AboutUs />
      <AboutUs2 />
      <OurServices />
      <LatestWork />
      <Footer />
    </>
  );
};

export default HomePage;
