import { AboutUs, AboutUs2, OurServices, Footer } from "../../components";
import { Hero, LatestWork, Navbar, OurClients } from "../../container";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurClients />
      <AboutUs />
      <AboutUs2 />
      <OurServices />
      <LatestWork />
      <Footer />
    </>
  );
};

export default HomePage;
