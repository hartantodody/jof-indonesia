import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import JofLogo from "../../assets/images/jof-logo.svg";

const NavbarDesktop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 250;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle: React.CSSProperties = {
    height: "80px",
    width: "100%",
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
    background: scrolled
      ? "linear-gradient(to bottom, rgba(0, 5, 3, 1), rgba(0, 5, 3, 1))"
      : "linear-gradient(to bottom, rgba(0, 5, 3, 1), rgba(0, 5, 3, 0))",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease-out",
  };

  const hrVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%" },
  };

  type LinkWithAnimationProps = {
    href: string;
    children: React.ReactNode;
  };

  const LinkWithAnimation: React.FC<LinkWithAnimationProps> = ({ href, children }) => {
    const lineAnimationControls = useAnimation();

    const hoverProps = {
      onHoverStart: () => lineAnimationControls.start("visible"),
      onHoverEnd: () => lineAnimationControls.start("hidden"),
    };

    return (
      <motion.div whileHover={{ color: "#00A650" }} {...hoverProps}>
        <motion.a href={href} style={linkStyle}>
          {children}
          <motion.hr
            // style={{ borderWidth: "1px" }}
            className='border-[#00A650] border-t-2'
            variants={hrVariants}
            initial='hidden'
            animate={lineAnimationControls}
          ></motion.hr>
        </motion.a>
      </motion.div>
    );
  };

  return (
    <nav style={navbarStyle} className='px-[64px] lg:px-[128px]'>
      <img className='w-[120px] cursor-pointer' src={JofLogo} alt='Jof Logo' />
      <div className='text-white flex flex-row justify-evenly gap-[44px]'>
        <LinkWithAnimation href='/portfolio'>Portfolio</LinkWithAnimation>
        <LinkWithAnimation href='#services'>Services</LinkWithAnimation>
        <LinkWithAnimation href='/about-us'>About Us</LinkWithAnimation>
        <LinkWithAnimation href='#contact'>Contact</LinkWithAnimation>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
