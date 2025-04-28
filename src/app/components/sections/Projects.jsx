import { mockProjects } from "../mockProjects";
import React, { useEffect, useState, useRef } from "react";
import Details from "./Details";
import { LiaExpandSolidIcon } from "../Icons";
import gsap from "gsap";
import useIsMobile from "../hooks/useIsMobile";

export default function Projects({ activeProject, setProject }) {
    const isMobile = useIsMobile();
    const [openProject, setOpenProject] = useState(null); // ⬅️ Speichert das geöffnete Projekt
    const mobileRef = useRef(null);

    useEffect(() => {
        if (openProject && mobileRef.current) {
            gsap.fromTo(mobileRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        } else if (mobileRef.current) {
            gsap.to(mobileRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => setOpenProject(null) // ⬅️ Erst nach der Animation entfernen
            });
        }
    }, [openProject]);

    const handleClick = (project) => {
        if (openProject && openProject.name === project.name) {
            // Schließen
            setOpenProject(null);
            setProject({});
        } else {
            // Öffnen
            setOpenProject(project);
            setProject(project);
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
                                    className={`grid grid-cols-4 ${isActive ? "" : "border-b border-white/50"} w-full transition-all duration-300 ease-in-out transform py-5`}
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

                                {/* Jetzt wird das Div nicht sofort entfernt */}
                                {openProject && openProject.name === project.name && (
                                    <div ref={mobileRef} className="overflow-hidden">
                                        <Details project={project} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
