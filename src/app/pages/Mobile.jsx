'use client'
import React, { useState, useEffect, useRef } from "react"
import Navbar from "../components/utils/Navbar"
import Divider from "../components/utils/Divider"
import Footer from "../components/utils/Footer"
import Projects from "../components/sections/Projects"
import gsap from "gsap";
import { mockProjects } from "../components/mockProjects"
import About from "../components/sections/About"

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false)
    const overlayRef = useRef(null);
    const [project, setProject] = useState({})

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

            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            <Divider />

            <h1
                className="font-black text-[clamp(4rem,9vw,20rem)] text-center leading-[0.85] tracking-[-2px] -my-3 lg:-my-5 3xl:-my-10 lg:whitespace-nowrap"
                style={{ transform: 'scaleX(1.55) scaleY(0.7)', transformOrigin: 'center' }}
            >
                STUDIO TITAN
            </h1>

            <Divider />

            <div className="flex flex-col gap-5 mb-5">
                <img className="w-screen my-5" src="https://studiofreight.com/_next/image?url=%2Fmobile-temp-images%2Ftetsuo.jpg&w=1200&q=90" />

                <Projects activeProject={project} setProject={setProject} />

                <div className="relative w-full mb-5">
                    {/* Das Bild */}
                    <img
                        src="https://studiofreight.com/_next/image?url=%2Fmobile-temp-images%2Fsf-game-boy.png&w=1200&q=90"
                        className="w-full h-auto object-cover"
                    />

                    {/* Das schwarze Verlauf-Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>

                <About />
            </div>



            <Divider />

            <Footer />
        </div>
    )
}