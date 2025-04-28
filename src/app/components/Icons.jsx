import { LiaExpandSolid } from "react-icons/lia";
import { TfiPlus } from "react-icons/tfi";
import useWindowSize from "./hooks/useWindowSize";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiAbstract086, GiAbstract049, GiAbstract080 } from "react-icons/gi";

function ResponsiveIcon({
    Icon,
    sizeDesktop = 40,
    sizeMobile = 20,
    customSize,
    className,
    style,
    ...props
}) {
    const width = useWindowSize();
    const size = customSize || (width >= 1024 ? sizeDesktop : sizeMobile);

    return <Icon size={size} className={className} style={style} {...props} />;
}
export function LiaExpandSolidIcon(props) {
    return <ResponsiveIcon Icon={LiaExpandSolid} {...props} />;
}

export function TfiPlusIcon(props) {
    return <ResponsiveIcon Icon={TfiPlus} {...props} />;
}

export function MdArrowOutwardIcon(props) {
    return <ResponsiveIcon Icon={MdArrowOutward} {...props} />;
}

export function IoIosArrowRoundDownIcon(props) {
    return <ResponsiveIcon Icon={IoIosArrowRoundDown} {...props} />;
}

export function IoIosArrowRoundForwardIcon(props) {
    return <ResponsiveIcon Icon={IoIosArrowRoundForward} {...props} />;
}

export function GiAbstract086Icon(props) {
    return <ResponsiveIcon Icon={GiAbstract086} {...props} />;
}

export function GiAbstract049Icon(props) {
    return <ResponsiveIcon Icon={GiAbstract049} {...props} />;
}

export function GiAbstract080Icon(props) {
    return <ResponsiveIcon Icon={GiAbstract080} {...props} />;
}