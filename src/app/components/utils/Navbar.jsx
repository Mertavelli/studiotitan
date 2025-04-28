import { GiAbstract086Icon, GiAbstract049Icon, GiAbstract080Icon } from "../Icons";

export default function Navbar({ isOpen, setIsOpen }) {
    return (
        <div className="flex justify-between items-center pt-4 pb-5 px-4">
            <div className="flex gap-2 items-center">
                <GiAbstract086Icon />
                <GiAbstract049Icon />
                <GiAbstract080Icon />
            </div>


            <button
                onClick={() => setIsOpen(true)}
                className="text-accent border border-accent font-black rounded-lg transition-all cursor-pointer hover:text-black hover:bg-accent text-sm sm:text-lg lg:text-3xl px-2 py-1">
                CONTACT
            </button>
        </div>
    );
}
