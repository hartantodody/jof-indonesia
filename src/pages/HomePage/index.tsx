import { AboutUs, AboutUs2, ClientDesktop, NavbarDesktop, OurServices, Footer } from "../../components";
import { Hero } from "../../container";

const HomePage = () => {
  return (
    <>
      <NavbarDesktop />
      <Hero />
      <ClientDesktop />
      <AboutUs />
      <AboutUs2 />
      <OurServices />
      <Footer />
    </>
  );
};

export default HomePage;
