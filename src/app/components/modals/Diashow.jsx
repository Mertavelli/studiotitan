import { LiaExpandSolid } from "react-icons/lia";

export default function Diashow({ project, openDiashow, setOpenDiashow }) {
    return (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center overflow-auto">

            <div className="relative flex mx-10 gap-2">

                {/* Close Button */}
                <button
                    onClick={() => setOpenDiashow(false)}
                    className="flex flex-col gap-10 items-center text-accent cursor-pointer"
                >
                    <LiaExpandSolid size={40} />
                    <label className="text-white transform -rotate-90 origin-center">
                        CLOSE
                    </label>
                </button>

                {/* Diashow Content */}
                <div className="h-[55rem] max-w-[90rem] overflow-auto rounded-xl grid grid-cols-2 gap-4 pb-10">
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

            </div>
        </div>
    );
}
