import Link from "next/link"
import { MdArrowOutward } from "react-icons/md";
import { mockProjects } from "../mockProjects";
import React, { useState } from "react";

export default function Details({ projectName }) {
    const project = mockProjects.find(p => p.name === projectName);
    const [infoOpen, setInfoOpen] = useState(false)

    const handleInfo = () => {
        setInfoOpen(!infoOpen)
    }

    if (!project || !project.images) return null;

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h1 className="subtitle">PROJECT DETAIL</h1>
                <div className="flex items-center gap-5 text-blue">
                    <button
                        onClick={() => handleInfo()}
                        className="relative cursor-pointer text-blue group"
                    >
                        {infoOpen ? "INFO" : "CLOSE"}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    <Link href="/" className="group relative inline-block text-blue">
                        <div className="flex items-center">
                            <p className="mr-1">SITE</p>
                            <MdArrowOutward />
                        </div>
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
            </div>

            {!infoOpen && (
                <div className="max-w-2xl flex flex-col gap-5">
                    <p>{project.description}</p>
                    <h2 className="subtitle">TESTIMONIAL</h2>
                    <p className="font-italic">{project.testimonial}</p>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-5">
                            <h2 className="subtitle">SERVICES</h2>
                            <p>{project.services}</p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h2 className="subtitle">STACK</h2>
                            <p>{project.stack}</p>
                        </div>
                    </div>
                </div>
            )}

            {infoOpen && (
                <div className="grid grid-cols-2 gap-4">
                    {project.images.map((media, index) => {
                        const span = media.span === 2 ? "col-span-2" : "col-span-1";
                        const type = media.type || "image"; // default to image

                        return (
                            <div key={index} className={`${span}`}>
                                {type === "video" ? (
                                    <video
                                        src={media.src}
                                        controls
                                        autoPlay={media.autoPlay ?? false}
                                        muted={media.muted ?? true}
                                        loop={media.loop ?? true}
                                        className="w-full h-auto rounded-xl object-cover"
                                    />
                                ) : (
                                    <img
                                        src={media.src}
                                        alt={`Project media ${index + 1}`}
                                        className="w-full h-auto rounded-xl object-cover"
                                        loading="lazy"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

        </div>

    )
}