import { useRef, useState } from "react";
import { LiaExpandSolidIcon } from "../Icons";
import { gsap } from "gsap";

const faqData = [
    {
        question: "JOB INQUIRIES",
        answer: "Send us your portfolio, tell us about yourself, and share why you're interested in Studio Freight at hello@studiofreight.com. Please put \"Job Inquiry: Role\" in the subject line."
    },
    {
        question: "PRESS INQUIRIES",
        answer: "Looking to say bad things about Studio Freight? Go here. Looking to say nice things about Studio Freight? Reach out to press@studiofreight.com."
    },
    {
        question: "COLLABORATOR INQUIRIES",
        answer: "Let’s work together. If you’re a freelancer, studio, or agency wanting to collaborate on projects, hit us with your wild ideas at hello@studiofreight.com."
    },
    {
        question: "FOOD RECOMMENDATIONS",
        answer: "If you’re in Columbus, we recommend Sycamore, The Pearl, and Momo Ghar. In New York City, check out Los Tacos No. 1, Ivan Ramen, and Sarge's. In Mar del Plata, don't miss Sarasanegro or Caldo."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    const iconRefs = useRef([]);

    const toggleFAQ = (index) => {
        // Schliesse alle zuerst
        contentRefs.current.forEach((ref, i) => {
            if (ref) {
                gsap.to(ref, {
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
                gsap.to(iconRefs.current[i], {
                    rotate: 0,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
            }
        });

        // Wenn derselbe Index nochmal geklickt wird → alles bleibt zu
        if (openIndex === index) {
            setOpenIndex(null);
            return;
        }

        // Öffne das gewünschte
        gsap.to(contentRefs.current[index], {
            height: "auto",
            opacity: 1,
            paddingTop: "1rem",
            duration: 0.5,
            ease: "power2.out"
        });
        gsap.to(iconRefs.current[index], {
            rotate: 180,
            duration: 0.5,
            ease: "power2.out"
        });

        setOpenIndex(index);
    };

    return (
        <div>
            <h2 className="subtitle mb-5">FAQ</h2>
            <div className="border-b border-white/50 w-full" />

            {faqData.map((item, index) => (
                <div key={index} className="border-b border-white/50 overflow-hidden">
                    <button
                        className="flex justify-between items-center w-full py-5"
                        onClick={() => toggleFAQ(index)}
                    >
                        <h3 className="text-xl font-black text-left">{item.question}</h3>
                        <div
                            className="text-accent transition-transform"
                            ref={(el) => (iconRefs.current[index] = el)}
                        >
                            <LiaExpandSolidIcon />
                        </div>
                    </button>

                    <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        style={{ height: 0, overflow: "hidden", opacity: 0 }}
                    >
                        <p className="max-w-3xl text-white pb-5">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
