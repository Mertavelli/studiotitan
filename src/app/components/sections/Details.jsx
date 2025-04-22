import Link from "next/link"
import { MdArrowOutward } from "react-icons/md";
import { mockProjects } from "../mockProjects";
import React, { useState } from "react";
import { LiaExpandSolid } from "react-icons/lia";
import Diashow from "../modals/Diashow";

export default function Details({ projectName }) {
    const project = mockProjects.find(p => p.name === projectName);
    const [infoOpen, setInfoOpen] = useState(false);
    const [openDiashow, setOpenDiashow] = useState(false)

    const handleInfo = () => {
        setInfoOpen(!infoOpen);
    };

    if (!project || !project.images) return null;

    return (
        <>
            {openDiashow && (
                <Diashow project={project} setOpenDiashow={setOpenDiashow}/>
            )}

            <div className="h-full overflow-hidden md:pl-3 lg:pl-5">
                <div className="flex items-center justify-between my-5">
                    <h2 className="mb-8">PROJECT DETAIL</h2>
                    <div className="flex items-center gap-5 text-accent">
                        <button
                            onClick={handleInfo}
                            className="relative cursor-pointer text-accent group"
                        >
                            <label>{infoOpen ? "CLOSE" : "INFO"}</label>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        <Link href="/" className="group relative inline-block text-accent">
                            <div className="flex items-center">
                                <label>SITE</label>
                                <MdArrowOutward size={25} />
                            </div>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>

                <div className="overflow-y-auto h-[calc(100%-3rem)]">
                    {infoOpen && (
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

                    {!infoOpen && (
                        <div className="relative h-full max-h-full overflow-y-auto">
                            <button onClick={() => setOpenDiashow(true)} className="grid grid-cols-2 md:gap-1 lg:gap-4 cursor-pointer">
                                {project.images.map((media, index) => {
                                    const span = media.span === 2 ? "col-span-2" : "col-span-1";
                                    const type = media.type || "image";

                                    return (
                                        <div key={index} className={`${span}`}>
                                            {type === "video" ? (
                                                <video
                                                    src={media.src}
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
                            </button>

                            <div className="sticky bottom-15 w-full text-accent bg-gradient-to-t from-black to-transparent py-5">
                                <button onClick={() => setOpenDiashow(true)} className="flex items-center gap-3 cursor-pointer">
                                    <LiaExpandSolid size={40} />
                                    <p className="text-white">ENLARGE</p>
                                </button>

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>

    );
}
