import React, { useState, useRef } from 'react';
import { FaChevronRight } from "react-icons/fa";
import dataNavbar from '../data/dataNavbar.json';
import dataFooter from '../data/dataFooter.json';

const Footer = () => {
    const allSections = dataNavbar.flatMap(item =>
        item.sections.map(section => ({
            mainLink: item.mainLink,
            ...section
        }))
    );

    const [indicator, setIndicator] = useState({
        x: 0,
        y: 0,
        width: 0,
        opacity: 0,
    });

    const handleHover = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const parentRect = containerRef.current.getBoundingClientRect();

        const padding = 30;
        const height = 24; // h-6 = 24px

        setIndicator({
            x: rect.left - parentRect.left - padding / 2,
            y: rect.top - parentRect.top + rect.height / 2 - height / 2, // ✅ FIX
            width: rect.width + padding,
            opacity: 1,
        });
    };

    const containerRef = useRef(null);
    return (
        <section id='home' className='bg-linear-180 from-white/10 to-indigo-800 text-center pb-8 lg:py-10 px-4 lg:px-14 text-slate-300 overflow-hidden'>
            <div className='p-4 bg-slate-900 rounded-2xl'>
                <div
                    ref={containerRef}
                    className="relative grid grid-cols-1 px-4 lg:grid-cols-4 gap-6 py-6">
                    <div
                        className="absolute h-6 border border-slate-400/60 rounded-md bg-slate-700/60 pointer-events-none transition-all duration-500 ease-in-out" style={{
                            transform: `translate(${indicator.x}px, ${indicator.y}px)`,
                            width: indicator.width,
                            opacity: indicator.opacity,
                            transitionDelay: "120ms", // 👈 delay
                        }}></div>
                    {allSections.map((section, i) => (
                        <div
                            key={i}
                            className="break-inside-avoid linkButton-label text-left space-y-4 z-50" >
                            <p className="font-bold uppercase">
                                {section.mainLink} / {section.title}
                            </p>
                            <ul className="space-y-2">
                                {section.links.map((link, k) => (
                                    <li key={k}>
                                        <button
                                            onMouseEnter={handleHover}
                                            className="flex gap-2 items-center font-extralight hover:gap-4 transition-all duration-300 ease">
                                            <p>{link.label}</p>
                                            <FaChevronRight />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="px-4 py-6 columns-1 lg:columns-2 gap-6 space-y-6 border-t border-t-slate-400">
                    <div className='flex flex-col gap-6 lg:gap-40 lg:flex-row'>
                        {dataFooter.map((item, q) => (
                            <div key={q} className="break-inside-avoid linkButton-label text-left space-y-4 w-1/2">

                                {/* Title */}
                                <p className="font-bold uppercase">{item.title}</p>

                                {/* Links */}
                                <ul className="space-y-2">
                                    {item.links.map((link, s) => (
                                        <li key={s}>
                                            <button
                                                onMouseEnter={handleHover}
                                                className="flex gap-2 items-center font-extralight hover:gap-4 transition-all duration-300 ease">
                                                <p>{link.label}</p>
                                                <FaChevronRight />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col items-center lg:items-end lg:justify-center w-full'>
                        <p className='section-title text-right'>DataPanel</p>
                        <p className='section-text'>©2026 DataPanel. All rights reserved </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Footer