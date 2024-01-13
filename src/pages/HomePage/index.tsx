import { AboutUs, AboutUs2, ClientDesktop, OurServices, Footer } from "../../components";
import { Hero, LatestWork, Navbar } from "../../container";

const HomePage = () => {
  return (
    <>
      <Navbar />
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
