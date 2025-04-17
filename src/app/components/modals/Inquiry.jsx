import React from "react"
import Divider from "../utils/Divider"

export default function Inquiry({ isOpen, setIsOpen }) {
    return (
        <div className={`absolute z-50 ${isOpen ? 'block' : 'hidden'} inset-0`}>
            {/* Display only when isOpen is true */}
            <div className="flex w-full h-full">
                {/* Linke Seite mit halbtransparentem Schwarz */}
                <div className="w-1/2 bg-black/50" />

                {/* Rechte Seite mit vollem Schwarz */}
                <div className="w-1/2 bg-black">
                    <div className="flex justify-between p-5">
                        <div />
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="text-blue border border-blue p-2 font-black rounded-lg text-xl hover:text-black hover:bg-blue transition-all cursor-pointer"
                        >
                            CLOSE
                        </button>
                    </div>

                    <Divider />
                </div>
            </div>
        </div>
    )
}
