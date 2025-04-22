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
            <div className="flex flex-wrap justify-start gap-5 xl:flex-nowrap">

                <button
                    onClick={() => toggleActive("brand")}
                    className={`p-5 border rounded-full font-black ${isActive.brand ? "border-blue-500" : ""}`}
                >
                    BRAND
                </button>
                <button
                    onClick={() => toggleActive("website")}
                    className={`p-5 border rounded-full font-black ${isActive.website ? "border-blue-500" : ""}`}
                >
                    WEBSITE
                </button>
                <button
                    onClick={() => toggleActive("artDirection")}
                    className={`p-5 border rounded-full font-black ${isActive.artDirection ? "border-blue-500" : ""}`}
                >
                    ART DIRECTION
                </button>
                <button
                    onClick={() => toggleActive("campain")}
                    className={`p-5 border rounded-full font-black ${isActive.campain ? "border-blue-500" : ""}`}
                >
                    CAMPAIGN
                </button>
                <button
                    onClick={() => toggleActive("other")}
                    className={`p-5 border rounded-full font-black ${isActive.other ? "border-blue-500" : ""}`}
                >
                    OTHER
                </button>
            </div>
        </div>
    );
}
