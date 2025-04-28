'use client'
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Divider from "../utils/Divider";
import ContactForm from "../utils/ContactForm";
import FAQ from "../utils/FAQ";
import Success from "../utils/Success";
import useIsMobile from "../hooks/useIsMobile";

export default function Inquiry({ isOpen, setIsOpen }) {
    const [isSent, setIsSent] = useState(false);
    const inquiryRef = useRef(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                inquiryRef.current,
                { x: "100%" },
                { x: "0%", duration: 0.6, ease: "power3.out" }
            );
        } else {
            if (inquiryRef.current) {
                gsap.to(inquiryRef.current, {
                    x: "100%",
                    duration: 0.6,
                    ease: "power3.in",
                });
            }
        }
    }, [isOpen]);

    const handleClose = () => {
        gsap.to(inquiryRef.current, {
            x: "100%",
            duration: 0.6,
            ease: "power3.in",
            onComplete: () => {
                setIsOpen(false);
                setIsSent(false);
            }
        });
    };

    return (
        <>
            {!isMobile && (
                <div className="pointer-events-none relative">
                    {/* Wrapper bleibt immer im DOM, ist aber durch GSAP verschiebbar */}
                    <div
                        ref={inquiryRef}
                        className="absolute top-0 right-0 h-screen w-1/2 bg-black px-10 overflow-y-auto z-50 pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-black z-10">
                            <div className="flex justify-between p-4">
                                <div />
                                <button
                                    onClick={handleClose}
                                    className="text-accent border border-accent p-2 font-black rounded-xl text-xl hover:text-black hover:bg-accent transition-all cursor-pointer"
                                >
                                    CLOSE
                                </button>
                            </div>

                            <div className="mb-5">
                                <Divider />
                            </div>
                        </div>

                        {!isSent ? (
                            <div className="flex flex-col gap-5">
                                <h2 className="subtitle">PROJECT INQUIRY</h2>
                                <p>Hey! We’d love to learn about what you're working towards to ensure we're a good fit. As a next step, please review the details below and submit our "Ship It" form.</p>
                                <p><span className="font-bold">Timing.</span> We're an independent creative studio dedicated to top-caliber outcomes...</p>
                                <p><span className="font-bold">Scope.</span> We mostly focus on brand strategy, visual identity...</p>
                                <p><span className="font-bold">Budget.</span> Budgets vary based on deliverables, timelines...</p>
                                <p>If you have questions or are unsure if we're a fit, please don't hesitate to reach out.</p>

                                <div className="mb-10">
                                    <ContactForm setIsSent={setIsSent} />
                                </div>
                                <div className="mb-[8rem]">
                                    <FAQ />
                                </div>
                            </div>
                        ) : (
                            <Success />
                        )}
                    </div>
                </div>
            )}

            {isMobile && (
                <div className="pointer-events-none relative">
                    {/* Wrapper bleibt immer im DOM, ist aber durch GSAP verschiebbar */}
                    <div
                        ref={inquiryRef}
                        className="absolute top-0 right-0 h-screen w-full bg-black overflow-y-auto z-50 pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-black z-10">
                            <div className="flex justify-between p-4">
                                <div />
                                <button
                                    onClick={handleClose}
                                    className="text-accent border border-accent px-2 py-1 font-black rounded-lg text-sm hover:text-black hover:bg-accent transition-all cursor-pointer"
                                >
                                    CLOSE
                                </button>
                            </div>

                            <div className="mb-5">
                                <Divider />
                            </div>
                        </div>

                        {!isSent ? (
                            <div className="flex flex-col gap-5">
                                <h2 className="subtitle">PROJECT INQUIRY</h2>
                                <p>Hey! We’d love to learn about what you're working towards to ensure we're a good fit. As a next step, please review the details below and submit our "Ship It" form.</p>
                                <p><span className="font-bold">Timing.</span> We're an independent creative studio dedicated to top-caliber outcomes...</p>
                                <p><span className="font-bold">Scope.</span> We mostly focus on brand strategy, visual identity...</p>
                                <p><span className="font-bold">Budget.</span> Budgets vary based on deliverables, timelines...</p>
                                <p>If you have questions or are unsure if we're a fit, please don't hesitate to reach out.</p>

                                <div className="mb-10">
                                    <ContactForm setIsSent={setIsSent} />
                                </div>
                                <div className="mb-[8rem]">
                                    <FAQ />
                                </div>
                            </div>
                        ) : (
                            <Success />
                        )}
                    </div>
                </div>
            )}
        </>

    );
}