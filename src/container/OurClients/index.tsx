import { useState, useEffect } from "react";
import { ClientDesktop, ClientMobile } from "../../components";

const OurClients = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <ClientMobile /> : <ClientDesktop />}</>;
};

export default OurClients;
