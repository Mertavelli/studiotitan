import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";

export default function About() {
    const [iconSize, setIconSize] = useState(40);

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setIconSize(30); // mobile
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
        <div className="flex flex-col md:gap-2 lg:gap-5 md:m-3 lg:m-5 ml-0 h-full overflow-y-auto pb-10">
            <h2 className="mb-8">ABOUT</h2>
            <p>Studio Freight is an independent creative studio building brands, digital experiences, and technology to move missions forward.</p>
            <br />
            <p>Our clients see us as trusted partners who care as much as they do, which is just a ruse because we actually care even more. While our clients work in many industries, they’re all serious about earning a meaningful place in the lives of their audiences and users.</p>
            <br />
            <h2>SERVICES</h2>
            <div className="flex flex-col text-lg">
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={iconSize} />
                    <p>Brand Strategy</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={iconSize} />
                    <p>Verbal Identity</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={iconSize} />
                    <p>Visual Identity</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={iconSize} />
                    <p>Web Design</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={iconSize} />
                    <p>Development</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={iconSize} />
                    <p>Creative Sprint</p>
                </div>
            </div>
        </div>
    )
}