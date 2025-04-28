'use client';

import React, { useEffect, useState, Suspense } from "react";
import useIsMobile from "./components/hooks/useIsMobile";
const Desktop = React.lazy(() => import("./pages/Desktop"));
const Mobile = React.lazy(() => import("./pages/Mobile"));

export default function Home() {
  const isMobile = useIsMobile();

  if (isMobile === null) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}
