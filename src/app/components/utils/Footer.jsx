import { IoIosArrowRoundDown } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex justify-between items-start pt-10">
            <a href="/capabilities-deck.pdf" download className="text-accent flex items-center cursor-pointer whitespace-nowrap">
                <label className="cursor-pointer">CAPABILITIES DECK</label>
                <IoIosArrowRoundDown size={30} />
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
    )
}