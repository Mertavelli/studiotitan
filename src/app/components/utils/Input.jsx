

export default function Input({ label, type, placeholder = "TYPE HERE", value, setValue, disabled = false }) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-white/50 text-xs lg:text-base">{label + " *"}</label>
            )}
            <input
                className={`border focus:outline-0 rounded-xl placeholder:font-black placeholder:text-white/50 placeholder:text-lg lg:placeholder:text-2xl p-3 lg:p-5 font-black ${value ? "border-accent" : ""} uppercase`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                disabled={disabled}
            />
        </div>
    )
}