import React, { useState } from "react";
import { Link } from "react-router-dom";
import JofLogo from "../../assets/images/jof-logo.svg";
import hamburgerButton from "../../assets/images/hamburger-button.svg";
import closeIcon from "../../assets/images/close-icon.svg";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = async () => {
    setIsOpen(false);

    await new Promise((resolve) => setTimeout(resolve, 200));

    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mobileNavStyle: React.CSSProperties = {
    height: isOpen ? "100vh" : "80px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 5, 3, 1)",
    transition: "height 0.3s ease-out",
  };

  const mobileLinkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 0",
    transition: "color 0.3s ease-out",
  };

  return (
    <nav style={mobileNavStyle}>
      <div className={`w-[100%] flex items-center justify-between px-2 ${isOpen ? "py-[50px]" : ""}`}>
        <Link to='/' className='w-[120px] cursor-pointer' onClick={closeMenu}>
          <img src={JofLogo} alt='Jof Logo' />
        </Link>
        <img
          className='w-[30px] h-[30px] cursor-pointer'
          src={isOpen ? closeIcon : hamburgerButton}
          alt='Toggle Menu'
          onClick={toggleMenu}
        />
      </div>
      <div style={{ display: isOpen ? "flex" : "none", flexDirection: "column", alignItems: "center" }}>
        <Link to='/portfolio' style={mobileLinkStyle} onClick={closeMenu}>
          Portfolio
        </Link>
        <Link to='/' style={mobileLinkStyle} onClick={closeMenu}>
          Services
        </Link>
        <Link to='/about-us' style={mobileLinkStyle} onClick={closeMenu}>
          About Us
        </Link>
        <a href='/contact-us' style={mobileLinkStyle} onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavbarMobile;
