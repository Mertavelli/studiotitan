"use client"; // falls du Next.js App Router nutzt

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// --- horizontalLoop Funktion ---
function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;

    gsap.set(items, {
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    gsap.set(items, { x: 0 });
    totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

        tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
            .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);

        times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }

    tl.next = vars => toIndex(curIndex + 1, vars);
    tl.previous = vars => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }

    return tl;
}

// --- InfinityMarquee Komponente ---
const InfinityMarquee = () => {
    const marqueeRef = useRef(null);

    const texts = [
        "01 Design Everything",
        "//",
        "02 adopt new realities",
        "//",
        "03 use your headlights",
        "//",
        "04 make it matter",
        "//",
        "05 rally others on",
        "//",
        "06 choose the future",
        "//",
        "07 seek out shadows",
        "//",
    ];

    useEffect(() => {
        const boxes = marqueeRef.current.querySelectorAll(".box");

        const loop = horizontalLoop(boxes, {
            paused: false,
            repeat: -1,
            speed: 1.5, // Geschwindigkeit anpassbar
        });

        return () => loop.kill();
    }, []);

    return (
        <div className="overflow-hidden w-full">
            <div ref={marqueeRef} className="flex">
                {texts.map((text, index) => (
                    <div key={index} className="box whitespace-nowrap text-xl font-bold text-white px-5">
                        <h2>{text}</h2>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default InfinityMarquee;
