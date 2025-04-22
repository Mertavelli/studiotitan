import { LiaExpandSolid } from "react-icons/lia";

export default function Diashow({ project, setOpenDiashow }) {
    return (
        <button onClick={() => setOpenDiashow(false)} className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center overflow-auto p-10 cursor-pointer">

            {/* Close Button – oben links neben dem Content */}
            <div  className="absolute top-32 left-58">
                <div className="flex flex-col gap-5 items-center text-accent">
                    <LiaExpandSolid size={40} />
                    <label className="text-white mt-1 transform -rotate-90 origin-center">CLOSE</label>
                </div>
            </div>

            {/* Diashow */}
            <div className="h-[55rem] w-[90rem] overflow-auto rounded-xl grid grid-cols-2 gap-4 pb-10">
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
            </div>
        </button>
    );
}
