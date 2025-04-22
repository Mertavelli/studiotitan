'use client'
import Divider from "./components/utils/Divider";
import Navbar from "./components/utils/Navbar";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Details from "./components/sections/Details";
import Footer from "./components/utils/Footer";
import React, { useState, useEffect, useRef } from "react";
import Inquiry from "./components/modals/Inquiry";
import { mockProjects } from "./components/mockProjects";
import gsap from "gsap";

export default function Home() {
  const [projectName, setProjectName] = useState(mockProjects[0].name)
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 0.8, duration: 0.6 }
      );
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.6 });
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col">
      {isOpen && (
        <>
          <Inquiry isOpen={isOpen} setIsOpen={setIsOpen} />
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-black z-40 pointer-events-none"
            style={{ opacity: 0 }}
          />
        </>
      )}

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Divider />

      <h1
        className="font-black text-[clamp(4rem,9vw,20rem)] text-center leading-[1] tracking-tight -my-5 3xl:-my-10 sm:whitespace-nowrap"
        style={{ transform: 'scaleX(1.55) scaleY(0.7)', transformOrigin: 'center' }}
      >
        STUDIO TITAN
      </h1>

      <Divider />

      <div className="grid grid-cols-4 h-[70vh] flex-grow overflow-hidden">
        <About />
        <Projects projectName={projectName} setProjectName={setProjectName} />
        <div className="col-span-2 h-full overflow-hidden">
          <Details projectName={projectName} />
        </div>
      </div>

      <Divider />

      <Footer />
    </div>

  );
}
