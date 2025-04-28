'use client'
import React, { useState } from "react"
import Navbar from "../components/utils/Navbar"
import Divider from "../components/utils/Divider"
import Footer from "../components/utils/Footer"
import ProjectsMobile from "../components/sections/ProjectsMobile"
import About from "../components/sections/About"
import InquiryMobile from "../components/modals/InquiryMobile"
import InfinityMarquee from "../components/utils/InfinityMarquee"
import dynamic from 'next/dynamic';
const Noise = dynamic(
    () => import('../components/utils/Noise').then(({ Noise }) => Noise),
    {
        ssr: false,
    },
)


export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false)
    const [project, setProject] = useState({})

    return (
        <div className={`flex flex-col ${isOpen ? "h-screen" : ""}`}>
            <Noise />

            {isOpen && (
                <InquiryMobile isOpen={isOpen} setIsOpen={setIsOpen} />
            )}

            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            <Divider className={"px-4"} />
            <h1
                className="font-black text-[clamp(4rem,9vw,20rem)] text-center leading-[0.85] tracking-[-2px] -my-3 lg:-my-5 3xl:-my-10 lg:whitespace-nowrap"
                style={{ transform: 'scaleX(1.55) scaleY(0.7)', transformOrigin: 'center' }}
            >
                STUDIO TITAN
            </h1>
            <Divider className={"px-4"} />

            <div className="px-4 py-5">
                <InfinityMarquee />
            </div>


            <div className="flex flex-col gap-5 mb-5">
                {/* Bild ohne px-4 */}
                <img className="w-screen my-5" src="https://studiofreight.com/_next/image?url=%2Fmobile-temp-images%2Ftetsuo.jpg&w=1200&q=90" />

                <ProjectsMobile activeProject={project} setProject={setProject} />

                <div className="relative w-full mb-5">
                    {/* Das Bild ohne px-4 */}
                    <img
                        src="https://studiofreight.com/_next/image?url=%2Fmobile-temp-images%2Fsf-game-boy.png&w=1200&q=90"
                        className="w-full h-auto object-cover"
                    />

                    {/* Das schwarze Verlauf-Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>

                <About />
            </div>

            <Divider className={"px-4"} />

            <Footer />
        </div>
    )
}
