'use client';

import React, { useEffect, useState, Suspense } from "react";
const Desktop = React.lazy(() => import("./pages/Desktop"));
const Mobile = React.lazy(() => import("./pages/Mobile"));

export default function Home() {
  const [isMobile, setIsMobile] = useState(null);

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

  if (isMobile === null) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}
