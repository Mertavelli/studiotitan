export default function Textarea({ label, placeholder = "TYPE HERE", value, setValue }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-white/50">{label + " *"}</label>
            <textarea
                className={`border focus:outline-0 rounded-xl placeholder:text-white/50 p-5 min-h-[15rem] ${value ? "border-blue" : ""}`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
            />
        </div>
    );
}
