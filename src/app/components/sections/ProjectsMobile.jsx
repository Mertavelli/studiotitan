import { mockProjects } from "../mockProjects";
import React, { useEffect, useState, useRef } from "react";
import Details from "./Details";
import { LiaExpandSolidIcon } from "../Icons";
import gsap from "gsap";

export default function ProjectsMobile({ activeProject, setProject }) {
    const [openProject, setOpenProject] = useState(null); // Speichert das geöffnete Projekt
    const mobileRef = useRef(null);

    useEffect(() => {
        if (openProject && mobileRef.current) {
            // Animation zum Öffnen
            gsap.fromTo(mobileRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        } else if (mobileRef.current) {
            // Animation zum Schließen
            gsap.to(mobileRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    // Verzögert das Zurücksetzen des Projekts, bis die Animation abgeschlossen ist
                    setOpenProject(null);
                    setProject({});
                }
            });
        }
    }, [openProject]);

    const handleClick = (project) => {
        if (openProject && openProject.name === project.name) {
            // Schließen des Projekts
            gsap.to(mobileRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    setOpenProject(null); // Erst nach der Animation den Zustand zurücksetzen
                    setProject({});
                }
            });
        } else {
            // Öffnen des Projekts
            setOpenProject(project);
            setProject(project);
        }
    };

    return (
        <div className="h-full px-4">
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

                        {/* Nur anzeigen, wenn das Projekt geöffnet ist */}
                        {openProject && openProject.name === project.name && (
                            <div ref={mobileRef} className="overflow-hidden">
                                <Details project={project} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
