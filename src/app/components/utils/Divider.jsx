import { TfiPlusIcon } from "../Icons";

export default function Divider({className}) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <TfiPlusIcon  className="text-white/50" customSize={18}/>
            <div className="border-t border-white/50 w-full" />
            <TfiPlusIcon  className="text-white/50" customSize={18}/>
        </div>
    )
}