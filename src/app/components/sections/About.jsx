import { IoIosArrowRoundForwardIcon } from "../Icons"

export default function About() {

    return (
        <div className="flex flex-col gap-5 lg:gap-5 lg:m-5 ml-0 h-full overflow-y-auto lg:pb-10 px-4">
            <h2 className="lg:mb-8">ABOUT</h2>
            <p>Studio Freight is an independent creative studio building brands, digital experiences, and technology to move missions forward.</p>
            <br />
            <p>Our clients see us as trusted partners who care as much as they do, which is just a ruse because we actually care even more. While our clients work in many industries, they’re all serious about earning a meaningful place in the lives of their audiences and users.</p>
            <br />
            <h2>SERVICES</h2>
            <div className="flex flex-col text-lg">
                <div className="flex items-center">
                    <IoIosArrowRoundForwardIcon />
                    <p>Brand Strategy</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForwardIcon />
                    <p>Verbal Identity</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForwardIcon />
                    <p>Visual Identity</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForwardIcon />
                    <p>Web Design</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForwardIcon />
                    <p>Development</p>
                </div>
                <div className="flex items-center">
                    <IoIosArrowRoundForwardIcon />
                    <p>Creative Sprint</p>
                </div>
            </div>
        </div>
    )
}