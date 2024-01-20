import { AboutUs, AboutUs2, OurServices, Footer } from "../../components";
import { Hero, LatestWork, Navbar, OurClients } from "../../container";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <OurClients />
        <AboutUs />
        <AboutUs2 />
        <OurServices />
        <LatestWork />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
