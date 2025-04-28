'use client';

import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import useIsMobile from "./components/hooks/useIsMobile";

const Desktop = dynamic(() => import('./pages/Desktop'), { ssr: false });
const Mobile = dynamic(() => import('./pages/Mobile'), { ssr: false });

export default function Home() {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
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
