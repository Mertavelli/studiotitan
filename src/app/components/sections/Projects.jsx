import { mockProjects } from "../mockProjects";
import React, { useEffect, useState } from "react";
import Details from "./Details";
import { LiaExpandSolidIcon } from "../Icons";

export default function Projects({ activeProject, setProject }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = (project) => {
        if (activeProject.name === project.name) {
            // If the clicked project is already active, close it (set activeProject to null)
            setProject({}); // or setProject(null) if you prefer
        } else {
            setProject(project); // Set the clicked project as active
        }
    };

    return (
        <>
            {!isMobile && (
                <div className="md:m-3 lg:m-5 md:px-3 lg:px-8 h-full overflow-y-auto">
                    <h2 className="mb-8">PROJECTS</h2>
                    {mockProjects.map((project, index) => {
                        const isActive = activeProject.name === project.name;

                        return (
                            <button
                                onClick={() => handleClick(project)}
                                key={index}
                                className={`border-b border-white/50 flex justify-between items-center md:py-2 lg:py-5 w-full transition-all duration-300 ease-in-out transform ${isActive ? "translate-x-1" : "translate-x-0"}`}
                            >
                                {isActive ? (
                                    <div className="flex items-center gap-2">
                                        <div className="bg-accent w-2 h-2 lg:w-5 lg:h-5 rounded-full blur-[2.5px]" />
                                        <h3 className="text-left whitespace-nowrap">{project.name}</h3>
                                    </div>
                                ) : (
                                    <h3 className="text-left whitespace-nowrap">{project.name}</h3>
                                )}
                                <label className={isActive ? "text-accent" : ""}>{project.category}</label>
                            </button>
                        );
                    })}
                </div>
            )}
            {isMobile && (
                <div className="h-full">
                    <h2>PROJECTS</h2>
                    {mockProjects.map((project, index) => {
                        const isActive = activeProject.name === project.name;

                        return (
                            <div key={index}>
                                <button
                                    onClick={() => handleClick(project)}
                                    className="grid grid-cols-4 border-b border-white/50 w-full transition-all duration-300 ease-in-out transform py-5"
                                >
                                    <div className="col-span-2">
                                        {isActive ? (
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-accent text-left whitespace-nowrap">{project.name}</h3>
                                            </div>
                                        ) : (
                                            <h3 className="text-left whitespace-nowrap">{project.name}</h3>
                                        )}
                                    </div>

                                    <label className="text-left">{project.category}</label>

                                    <div className="flex justify-end items-center">
                                        <LiaExpandSolidIcon className="text-accent" />
                                    </div>
                                </button>

                                {isActive && <Details project={project} />}
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
