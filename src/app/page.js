'use client'
import Divider from "./components/utils/Divider";
import Navbar from "./components/utils/Navbar";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Details from "./components/sections/Details";
import Footer from "./components/utils/Footer";
import React, { useState } from "react";
import Inquiry from "./components/modals/Inquiry";

export default function Home() {
  const [projectName, setProjectName] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Inquiry isOpen={isOpen} setIsOpen={setIsOpen} />

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Divider />
      <h1 className="font-black text-[13rem] text-center leading-none tracking-tighter">STUDIO TITAN</h1>
      <Divider />

      <div className="grid grid-cols-4">

        <About />

        <Projects projectName={projectName} setProjectName={setProjectName} />

        <div className="col-span-2">
          <Details projectName={projectName} />
        </div>


      </div>

      <Divider />
      <Footer />
    </div>
  );
}
