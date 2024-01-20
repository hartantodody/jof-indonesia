import bgHero from "../../assets/images/photos/bg-hero.png";
import bgHeroSm from "../../assets/images/photos/bg-hero-sm.png";

const PortfolioHero = () => {
  return (
    <section>
      <picture>
        <source media='(max-width: 768px)' srcSet={bgHeroSm} />
        <img src={bgHero} alt='Festival image' className='h-full w-screen' />
      </picture>
    </section>
  );
};

export default PortfolioHero;
