'use client';

import React, { Suspense } from "react";
import useIsMobile from "./components/hooks/useIsMobile";
const Desktop = React.lazy(() => import("./pages/Desktop"));
const Mobile = React.lazy(() => import("./pages/Mobile"));

export default function Home() {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    // Besseres Loading-UI
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <h1 className="text-white text-2xl animate-pulse">Loading...</h1>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-black">
          <h1 className="text-white text-2xl animate-pulse">Loading...</h1>
        </div>
      }
    >
      {isMobile ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}
