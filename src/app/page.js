'use client';

import React, { Suspense } from "react";
import useIsMobile from "./components/hooks/useIsMobile";
const Desktop = React.lazy(() => import("./pages/Desktop"));
const Mobile = React.lazy(() => import("./pages/Mobile"));

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}
