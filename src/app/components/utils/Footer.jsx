import { IoIosArrowRoundDownIcon } from "../Icons"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";

export default function Footer() {
    const isMobile = useIsMobile();

    return (
        <>
            {!isMobile && (
                <div className="flex justify-between items-start pt-10">
                    <a href="/capabilities-deck.pdf" download className="text-accent flex items-center cursor-pointer whitespace-nowrap">
                        <label className="cursor-pointer">CAPABILITIES DECK</label>
                        <IoIosArrowRoundDownIcon />
                    </a>

                    <div className="grid grid-cols-4 gap-2">

                        <Link href="/" className="group relative inline-block w-min cursor-pointer">
                            <label>GITHUB</label>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Link href="/" className="group relative inline-block w-min cursor-pointer">
                            <label className="lg:text-white">AWARDS</label>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Link href="/" className="group relative inline-block w-min cursor-pointer">
                            <label className="lg:text-white">INSTAGRAM</label>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Link href="/" className="group relative inline-block w-min whitespace-nowrap cursor-pointer">
                            <label className="lg:text-white">P: +1 380.238.9363</label>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Link href="/" className="group relative inline-block w-min cursor-pointer">
                            <label className="lg:text-white">LENIS</label>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Link href="/" className="group relative inline-block w-min cursor-pointer">
                            <label className="lg:text-white">TWITTER</label>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Link href="/" className="group relative inline-block w-min cursor-pointer">
                            <label className="lg:text-white">VIMEO</label>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Link href="/" className="group relative inline-block w-min whitespace-nowrap cursor-pointer">
                            <label className="lg:text-white">E: hello@studiofreight.com</label>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                    </div>

                    <label className="text-white/50">© 2025</label>

                </div>
            )}

            {isMobile && (
                <div className="grid grid-cols-1 gap-10 pt-5">
                    <div className="grid grid-cols-2 gap-2">
                        <a href="/capabilities-deck.pdf" download className="text-accent flex items-center cursor-pointer whitespace-nowrap">
                            <label className="cursor-pointer">CAPABILITIES DECK</label>
                            <IoIosArrowRoundDownIcon />
                        </a>

                        <label className="text-white/50">© 2025</label>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <Link href="/">
                            <label className="underline uppercase">GITHUB</label>
                        </Link>


                        <Link href="/">
                            <label className="underline uppercase">twitter</label>
                        </Link>

                        <Link href="/">
                            <label className="underline uppercase">lenis</label>
                        </Link>

                        <Link href="/">
                            <label className="underline uppercase">instagram</label>
                        </Link>

                        <Link href="/">
                            <label className="underline uppercase">awards</label>
                        </Link>

                        <Link href="/">
                            <label className="underline uppercase">vimeo</label>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        <Link href="/">
                            <label className="underline uppercase">P: +1 380.238.9363</label>
                        </Link>

                        <Link href="/">
                            <label className="underline uppercase">E: hello@studiofreight.com</label>
                        </Link>
                    </div>

                    <div className="relative w-full mb-5">
                        {/* Das Bild */}
                        <img
                            src="https://studiofreight.com/_next/image?url=%2Fmobile-temp-images%2Ffooter.png&w=1200&q=90"
                            className="w-full h-auto object-cover"
                        />

                        {/* Das schwarze Verlauf-Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    </div>

                </div>

            )}
        </>

    )
}