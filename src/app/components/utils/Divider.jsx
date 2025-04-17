import { AiOutlinePlus } from "react-icons/ai";

export default function Divider() {
    return (
        <div className="flex items-center gap-2">
            <AiOutlinePlus className="text-white/50" size={28} />
            <div className="border-t border-white/50 w-full" />
            <AiOutlinePlus className="text-white/50" size={28} />
        </div>
    )
}