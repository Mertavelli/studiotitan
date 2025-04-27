'use client';

import React, { useEffect, useState, Suspense } from "react";

// Dynamischer Import der Komponenten
const Desktop = React.lazy(() => import("./pages/Desktop"));
const Mobile = React.lazy(() => import("./pages/Mobile"));

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}
