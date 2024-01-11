import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    padding: "0 128px",
    zIndex: 10,
    background: scrolled
      ? "linear-gradient(to bottom, rgba(0, 5, 3, 1), rgba(0, 5, 3, 1))"
      : "linear-gradient(to bottom, rgba(0, 5, 3, 1), rgba(0, 5, 3, 0))",
  };

  const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    position: "relative",
    transition: "color 0.3s ease-out",
  };

  const hrVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%" },
  };

  return (
    <nav style={navbarStyle}>
      <img className='w-[120px] cursor-pointer' src={JofLogo} alt='Jof Logo' />
      <div className='font-plus-jakarta-sans text-white flex flex-row space-x-4 gap-[44px]'>
        <motion.a href='#portfolio' style={linkStyle} whileHover={{ color: "#00A650" }}>
          Portfolio
          <motion.hr className='underline' style={{ ...linkStyle, ...hrVariants }}></motion.hr>
        </motion.a>
        <motion.a href='#services' style={linkStyle} whileHover={{ color: "#00A650" }}>
          Services
          <motion.hr className='underline' style={{ ...linkStyle, ...hrVariants }}></motion.hr>
        </motion.a>
        <motion.a href='#about' style={linkStyle} whileHover={{ color: "#00A650" }}>
          About Us
          <motion.hr className='underline' style={{ ...linkStyle, ...hrVariants }}></motion.hr>
        </motion.a>
        <motion.a href='#contact' style={linkStyle} whileHover={{ color: "#00A650" }}>
          Contact
          <motion.hr className='underline' style={{ ...linkStyle, ...hrVariants }}></motion.hr>
        </motion.a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
