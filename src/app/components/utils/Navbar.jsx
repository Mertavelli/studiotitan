import { GiAbstract086, GiAbstract049, GiAbstract080 } from "react-icons/gi";

export default function Navbar({ isOpen, setIsOpen }) {
    return (
        <div className="flex justify-between items-center py-2">
            <div className="flex gap-4">
                <GiAbstract086 size={40} />
                <GiAbstract049 size={40} />
                <GiAbstract080 size={40} />
            </div>

            <button onClick={() => setIsOpen(true)} className="text-blue border border-blue p-2 font-black rounded-lg text-xl hover:text-black hover:bg-blue transition-all cursor-pointer">CONTACT</button>
        </div>
    )
}