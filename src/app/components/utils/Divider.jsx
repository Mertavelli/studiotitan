import { FaPlus } from "react-icons/fa6";

export default function Divider() {
    return (
        <div className="flex items-center gap-2">
            <FaPlus  className="text-white/50" size={18}/>
            <div className="border-t border-white/50 w-full" />
            <FaPlus  className="text-white/50" size={18}/>
        </div>
    )
}