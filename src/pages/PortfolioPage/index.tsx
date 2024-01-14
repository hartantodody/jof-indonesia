import { Footer, Portfolio, PortfolioHero } from "../../components";
import { Navbar } from "../../container";

const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <PortfolioHero />
      <Portfolio />
      <Footer />
    </>
  );
};

export default PortfolioPage;
