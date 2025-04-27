import { GiAbstract086, GiAbstract049, GiAbstract080 } from "react-icons/gi";
import { useEffect, useState } from "react";

export default function Navbar({ isOpen, setIsOpen }) {
    const [iconSize, setIconSize] = useState(40);

    useEffect(() => {
      const updateSize = () => {
        const width = window.innerWidth;
        if (width < 640) {
          setIconSize(25); // mobile
        } else if (width < 811) {
          setIconSize(35); // tablet
        } else {
          setIconSize(40); // desktop
        }
      };
  
      updateSize(); // set once on mount
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div className="flex justify-between items-center pt-4 pb-5">
            <div className="flex gap-2 items-center">
                <GiAbstract086 size={iconSize} />
                <GiAbstract049 size={iconSize} />
                <GiAbstract080 size={iconSize} />
            </div>


            <button
                onClick={() => setIsOpen(true)}
                className="text-accent border border-accent font-black rounded-lg transition-all cursor-pointer hover:text-black hover:bg-accent text-sm sm:text-lg lg:text-3xl px-2 py-1">
                CONTACT
            </button>
        </div>
    );
}
