import { useState } from "react";

export default function DropDown({ selected, setSelected }) {
    const options = [
        "LESS THAN $50K",
        "$50K - $150K",
        "$150K - $300K",
        "$300K - $500K"
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col gap-2 relative">
            <label className="text-white/50 text-xs lg:text-base">BUDGET EXPECTATION *</label>
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full text-left border focus:outline-0 rounded-xl p-3 lg:p-5 uppercase font-black text-white/50 text-lg lg:text-2xl ${selected ? "border-accent" : ""} ${selected ? "text-white" : "text-white/50"}`}
                >
                    {/* Wenn keine Auswahl getroffen wurde, zeige 'SELECT ONE' in grau, andernfalls die Auswahl in weiß */}
                    <span className={selected ? "text-white" : "text-white/50"}>
                        {selected ? selected : "SELECT ONE"}
                    </span>
                </button>

                {isOpen && (
                    <ul className="absolute z-10 mt-2 w-full bg-black border border-white/20 rounded-xl">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(option)}
                                className="p-3 lg:p-5 hover:bg-white/10 cursor-pointer font-black uppercase text-white text-lg lg:text-2xl"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
