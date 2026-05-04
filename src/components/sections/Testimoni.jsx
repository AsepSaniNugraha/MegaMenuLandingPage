import React, { useState } from 'react';
import ButtonVar1 from '../ui/ButtonVar1';
import { Si1Dot1Dot1Dot1, SiAccusoft, SiAirtel, SiBittorrent } from "react-icons/si";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Testimoni = () => {
    const dataTesti = [
        {
            name: "Dot4",
            content: "“DataPanel is a tool that we can put into everyone's hands at Dot4. It's powerful, yet very easy to use. There's no need to wait for an analyst or data scientist to design and run a query; everyone can get fast answers and agree on a way forward.”",
            icon: Si1Dot1Dot1Dot1
        },
        {
            name: "Accusoft",
            content: "“DataPanel helps us enable our customers for success. What started as a need for simple marketing metrics turned into custom product metrics for more than  100 different stakeholders across the company.”",
            icon: SiAccusoft
        },
        {
            name: "AirTel",
            content: "“I love DataPanel because it gives our team a clear and immediate window into how a newly released feature operates in the real world.”",
            icon: SiAirtel
        },
        {
            name: "Torrent+",
            content: "“Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, dolorum! Voluptates velit excepturi libero quia ratione non, repudiandae maiores explicabo omnis quidem, facilis cum amet magni hic? Quo, cumque necessitatibus.”",
            icon: SiBittorrent
        }
    ]
    const [activeTesti, setActiveTesti] = useState(0)

    const handleActiveTesti = (value) => {
        setActiveTesti((prev) => {
            const next = prev + value;
            const length = dataTesti.length;
            if (next < 0) return length - 1;
            if (next === length) return 0;

            return next;
        });
    };
    return (
        <section id='home' className='bg-slate-800 text-center py-8 lg:py-10 px-4 lg:px-14 text-slate-300 overflow-hidden'>
            <div className='flex flex-col gap-8'>
                <p className='hero-title font-bold'>
                    Our users experience
                </p>
                <div className='overflow-hidden'>
                    <div
                        className="flex max-w-full transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeTesti * 100}%)` }}>
                        {dataTesti.map((item, index) => (
                            <div
                                key={index}
                                className='flex flex-col gap-6 min-w-full'>
                                <div className='flex items-center gap-5'>
                                    <item.icon className='text-5xl' />
                                    <p className='section-title'>{item.name}</p>
                                </div>
                                <div>
                                    <p className='section-title text-left'>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex gap-1 justify-center'>
                    <button
                        onClick={() => handleActiveTesti(-1)}
                        className='bg-slate-700 text-slate-200 p-5 max-w-max rounded-l-full hover:bg-slate-500'>
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={() => handleActiveTesti(1)}
                        className='bg-slate-700 text-slate-200 p-5 max-w-max rounded-r-full hover:bg-slate-500'>
                        <FaChevronRight />
                    </button>
                </div>
                <div className='mx-auto'>
                    <ButtonVar1 label="Read Case Study" />
                </div>
            </div>
        </section>
    )
}

export default Testimoni