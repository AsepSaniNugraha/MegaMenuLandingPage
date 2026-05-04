import React, { use, useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import ButtonVar1 from '../ui/ButtonVar1';
import ButtonVar2 from '../ui/ButtonVar2';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import dataNavbar from '../data/dataNavbar.json';

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);
    const [floatNavbar, setFloatNavbar] = useState(false);
    const [selectLanguange, setSelectLanguange] = useState(false);

    const handleFloatNavbar = () => {
        if (window.scrollY > 200) {
            setFloatNavbar(true);
        } else {
            setFloatNavbar(false)
        }
    }

    window.addEventListener("scroll", handleFloatNavbar)

    const handleNavbar = () => {
        setOpenNavbar((prev) => !prev);
        setOpenSubmenu(null);
    };

    const handleSubmenu = (subMenuTag) => {
        setOpenSubmenu(openSubmenu === subMenuTag ? null : subMenuTag)
    }
    const openSelectLanguange = () => {
        setSelectLanguange((open) => !open);
    }

    return (
        <div className='relative bg-white'>
            <div className={`flex items-center justify-between w-full transition-all duration-300 ease-in-out p-5 border-b-4 border-b-white/10 ${floatNavbar ? "fixed bg-white/70 backdrop-blur-xs z-50 top-0 left-0 translate-y-0" : "absolute -top-full"}`}>
                <p className='section-title italic font-bold text-slate-700'>
                    DataPanel
                </p>
                <div className='linkButton-label flex flex-row-reverse items-center justify-center gap-2 lg:gap-4 lg:flex-row'>
                    <button
                        onClick={() => handleNavbar()}
                        className='section-title lg:hidden'>
                        {openNavbar ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                    <div className={`absolute top-full bg-white left-1/2 -translate-x-1/2 flex flex-col gap-4 lg:flex-row w-full overflow-hidden transition-all duration-500 ease ${openNavbar ? "max-h-2200" : "max-h-0"} lg:relative lg:left-0 lg:translate-x-0 lg:p-0 lg:bg-transparent lg:w-auto lg:gap-15 lg:min-h-max lg:overflow-visible`}>
                        <div className='flex flex-col gap-5 pt-4 lg:flex-row lg:pt-0 lg:items-center lg:bg-slate-200 lg:rounded-full'>
                            {dataNavbar.map((item, i) => (
                                <div
                                    key={i}
                                    className='relative'
                                    onMouseEnter={() => setActiveMenu(i)}
                                    onMouseLeave={() => setActiveMenu(null)}>
                                    <div className='flex flex-col justify-between bg-slate-200 px-4 rounded-lg mx-4 lg:mx-0 lg:bg-transparent'>
                                        <button
                                            onClick={() => handleSubmenu(i)}
                                            className='flex gap-2 items-center justify-between px-4 py-1 hover:text-slate-400 lg:px-2'>
                                            <p>{item.mainLink}</p>
                                            {!openNavbar
                                                ? <FaChevronDown /> // desktop
                                                : (openSubmenu === i ? <FaChevronUp /> : <FaChevronDown />) // mobile
                                            }
                                        </button>
                                        <div className={`flex flex-col gap-4 px-4 overflow-hidden transition-all duration-500 ease ${openSubmenu === i ? "max-h-1000" : "max-h-0"} lg:hidden`}>
                                            {item.sections.map((section, j) => (
                                                <div key={j} className='flex flex-col gap-2'>
                                                    <p className='border-b border-slate-700 mt-2'>
                                                        {section.title}
                                                    </p>
                                                    <div className='flex flex-col gap-2'>
                                                        {section.links.map((link, k) => (
                                                            <a key={k} href="#" className='hover:text-slate-400'>
                                                                {link.label}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {activeMenu === i && (
                                        <div className="hidden lg:block absolute top-full left-0 mt-0 w-175 bg-slate-200 shadow-xl border border-slate-300 rounded-lg p-6 z-50">
                                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                                {item.sections.map((section, j) => (
                                                    <div key={j} className="flex flex-col gap-3">
                                                        <p className="border-b border-slate-300 pb-1 font-medium">
                                                            {section.title}
                                                        </p>
                                                        <div className="flex flex-col gap-2">
                                                            {section.links.map((link, k) => (
                                                                <a
                                                                    key={k}
                                                                    href="#"
                                                                    className="hover:text-slate-500 transition">
                                                                    {link.label}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div
                                className='flex flex-col justify-between bg-slate-200 px-4 rounded-lg mx-4 lg:mx-0 lg:bg-transparent overflow-hidden'>
                                <button
                                    className='flex gap-2 items-center justify-between px-4 py-1 lg:px-2 lg:mx-0 lg:bg-transparent'>
                                    <p>Pricing</p>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center  pb-4 lg:flex-row lg:pb-0'>
                            <button className='hover:underline lg:block'>
                                Log In
                            </button>
                            <div className='lg:block'>
                                <ButtonVar2 label="Contact Sales" />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className=''>
                            <ButtonVar1 label="Free Trial" />
                        </div>
                    </div>
                    <div
                        onMouseEnter={() => setSelectLanguange(true)}
                        onMouseLeave={() => setSelectLanguange(false)}
                        className=''>
                        <button className='card-title relatives hover:text-slate-400'>
                            <TfiWorld />
                        </button>
                        <ul className={`absolute lg:right-5 top-2/3 rounded-lg bg-slate-200  overflow-hidden ${selectLanguange ? "max-h-50 border border-slate-300" : "max-h-0 border-transparent"}`}>
                            <li>
                                <button className='p-1 px-4 text-left w-full hover:text-slate-700'>
                                    English
                                </button>
                            </li>
                            <li>
                                <button className='p-1 px-4 text-left hover:text-slate-700'>
                                    Indonesia
                                </button>
                            </li>
                            <li>
                                <button className='p-1 px-4 text-left hover:text-slate-700'>
                                    Japan
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar