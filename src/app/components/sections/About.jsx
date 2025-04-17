import { IoIosArrowRoundForward } from "react-icons/io";

export default function About() {
    return (
        <div className="flex flex-col gap-5 mr-5">
            <h2 className="subtitle">ABOUT</h2>
            <p className="text-lg">Studio Freight is an independent creative studio building brands, digital experiences, and technology to move missions forward.</p>
            <br />
            <p className="text-lg">Our clients see us as trusted partners who care as much as they do, which is just a ruse because we actually care even more. While our clients work in many industries, they’re all serious about earning a meaningful place in the lives of their audiences and users.</p>
            <br />
            <h2 className="subtitle">SERVICES</h2>
            <div className="flex flex-col text-lg">
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={40} />
                    <p>Brand Strategy</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={40} />
                    <p>Verbal Identity</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={40} />
                    <p>Visual Identity</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={40} />
                    <p>Web Design</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={40} />
                    <p>Development</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForward size={40} />
                    <p>Creative Sprint</p>
                </div>
            </div>
        </div>
    )
}