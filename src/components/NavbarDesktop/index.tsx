import React, { useEffect, useState } from "react";
import JofLogo from "../../assets/images/jof-logo.svg";

const NavbarDesktop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down a certain distance, e.g., 100px
      const isScrolled = window.scrollY > 250;
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define styles explicitly with the correct types
  const navbarStyle: React.CSSProperties = {
    height: "148px",
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

  return (
    <nav style={navbarStyle}>
      <img className='w-[159.99px] cursor-pointer' src={JofLogo} alt='Jof Logo' />
      <div className='font-plus-jakarta-sans text-white flex flex-row space-x-4 gap-[44px]'>
        <a href='#portfolio'>Portfolio</a>
        <a href='#services'>Services</a>
        <a href='#about'>About Us</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
