import React, { useEffect, useState } from 'react';
import ButtonVar1 from '../ui/ButtonVar1';
import { FaCircleCheck } from "react-icons/fa6";
import specialties01 from '../../assets/specialties01.png';
import specialties02 from '../../assets/specialties02.png';
import specialties03 from '../../assets/specialties03.png';
import specialties04 from '../../assets/specialties04.png';

const Specialties = () => {
    const dataSpecialties = [
        {
            title: "Built for speed",
            content: "Explore user behavior, conversion trends, and retention patterns in seconds—no data team required.",
            image: specialties01
        },
        {
            title: "AI where it helps most",
            content: "DataPanel applies AI thoughtfully across the platform to reduce manual work and speed up understanding, always grounded in your data and guided by human judgment.",
            image: specialties02
        },
        {
            title: "Flexible by design",
            content: "Connect your tech stack — from BigQuery to Segment to reverse ETL tools — so your data lives where you need it.",
            image: specialties03
        },
        {
            title: "Built to evolve",
            content: "Whether you're scaling fast or maturing your analytics practice, DataPanel grows with your needs.",
            image: specialties04
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % dataSpecialties.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleActiveIndex = (index) => {
        setActiveIndex(index)
    }
    return (
        <section id='home' className='bg-slate-100 text-center py-10 px-4 lg:px-14 text-slate-900 overflow-hidden'>
            <div className='flex flex-col'>
                <div className='flex flex-col text-left items-start gap-10 lg: justify-between lg:flex-row lg:gap-55'>
                    <p className='section-title lg:min-w-max'>Why teams choose DataPanel?</p>
                    <div className=''>
                        <p className='setion-text pt-4 pb-6 lg:pt-0'>We're built to give Product, Engineering, Marketing, and Data teams the confidence to stop guessing and start growing.</p>
                        <ButtonVar1 label="Free Trial" className="w-auto" />
                    </div>
                </div>

                <div className="flex flex-col gap-12 py-10 lg:hidden">
                    {dataSpecialties.map((specialty, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <button className="w-full text-left">
                                <div className="card-title flex gap-4 items-center">
                                    <FaCircleCheck className="text-orange-500" />
                                    <p>{specialty.title}</p>
                                </div>
                                <p className="card-text">{specialty.content}</p>
                            </button>
                            <div className="bg-orange-800 pt-4 pl-4 rounded-3xl overflow-hidden">
                                <img
                                    src={specialty.image}
                                    alt=""
                                    className="w-full object-bottom-right rounded-tl-2xl" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex gap-15 py-10 justify-start ">
                    <div className="relative bg-orange-800 pt-8 pl-8 rounded-3xl flex overflow-hidden w-full">
                        {dataSpecialties.map((image, index) => (
                            <img
                                key={index}
                                src={image.image}
                                alt=""
                                className={`absolute h-full top-8 left-8 rounded-tl-2xl transition-all duration-500 ease-in-out pointer-events-none ${activeIndex === index ? "opacity-100" : "opacity-0"}`} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-8">
                        {dataSpecialties.map((item, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => handleActiveIndex(index)}
                                    className="text-slate-700 text-left transition-all duration-300 ease hover:opacity-50">
                                    <div className="card-title flex gap-4 items-center">
                                        <FaCircleCheck className="text-orange-500" />
                                        <p>{item.title}</p>
                                    </div>
                                    <p className="card-text">{item.content}</p>
                                </button>
                                <div className='w-full h-0.5 bg-slate-300 mt-2s'>
                                    {activeIndex === index && (
                                        <div key={index} className='animate-barLoader h-0.5 bg-orange-500'></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Specialties