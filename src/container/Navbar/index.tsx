import { useState, useEffect } from "react";
import { NavbarDesktop, NavbarMobile } from "../../components";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</>;
};

export default Navbar;
