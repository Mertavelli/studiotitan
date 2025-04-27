import { LiaExpandSolid } from "react-icons/lia";
import { TfiPlus } from "react-icons/tfi";
import useWindowSize from "./hooks/useWindowSize";
import { MdArrowOutward } from "react-icons/md";

function ResponsiveIcon({
    Icon,
    sizeDesktop = 40,
    sizeMobile = 24,
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
