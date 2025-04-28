import React, { useState } from "react";

export default function Selection({ isActive, setIsActive }) {
    const toggleActive = (key) => {
        setIsActive((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-white/50">PROJECT TYPE *</label>
            <div className="flex flex-wrap justify-start gap-2 lg:gap-5 xl:flex-nowrap">

                <button
                    onClick={() => toggleActive("brand")}
                    className={`p-3 lg:p-5 border rounded-full font-black ${isActive.brand ? "border-accent" : ""}`}
                >
                    BRAND
                </button>
                <button
                    onClick={() => toggleActive("website")}
                    className={`p-3 lg:p-5 border rounded-full font-black ${isActive.website ? "border-accent" : ""}`}
                >
                    WEBSITE
                </button>
                <button
                    onClick={() => toggleActive("artDirection")}
                    className={`p-3 lg:p-5 border rounded-full font-black ${isActive.artDirection ? "border-accent" : ""}`}
                >
                    ART DIRECTION
                </button>
                <button
                    onClick={() => toggleActive("campain")}
                    className={`p-3 lg:p-5 border rounded-full font-black ${isActive.campain ? "border-accent" : ""}`}
                >
                    CAMPAIGN
                </button>
                <button
                    onClick={() => toggleActive("other")}
                    className={`p-3 lg:p-5 border rounded-full font-black ${isActive.other ? "border-accent" : ""}`}
                >
                    OTHER
                </button>
            </div>
        </div>
    );
}
