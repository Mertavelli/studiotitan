import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Setze die Schwelle für Mobile
    };
    
    handleResize(); // Initialer Check
    window.addEventListener("resize", handleResize); // Event Listener hinzufügen

    return () => {
      window.removeEventListener("resize", handleResize); // Event Listener entfernen
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
