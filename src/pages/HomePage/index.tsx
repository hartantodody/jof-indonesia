import { AboutUs, AboutUs2, ClientDesktop, NavbarDesktop } from "../../components";
import { Hero } from "../../container";

const HomePage = () => {
  return (
    <>
      <NavbarDesktop />
      <Hero />
      <ClientDesktop />
      <AboutUs />
      <AboutUs2 />
    </>
  );
};

export default HomePage;
