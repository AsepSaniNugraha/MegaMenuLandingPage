import React from 'react';
import featureBG from '../../assets/featureBG.png';
import featureChat from '../../assets/featureChat.png';
import featureMobile from '../../assets/featureMobile.png';
import { Si1Dot1Dot1Dot1, SiAccusoft, SiAirtel, SiBittorrent, SiDbt, SiFluentd, SiGurobi, SiIstio } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa";
import { PiWaveSineFill, PiDesktopBold, PiMonitorPlay, PiPintGlass, PiTreeStructureDuotone, PiStack } from "react-icons/pi";

const Feature = () => {
    const dataClient = [
        {
            name: "Dot4",
            icon: Si1Dot1Dot1Dot1
        },
        {
            name: "Accusoft",
            icon: SiAccusoft
        },
        {
            name: "AirTel",
            icon: SiAirtel
        },
        {
            name: "Torrent+",
            icon: SiBittorrent
        },
        {
            name: "DBt",
            icon: SiDbt
        },
        {
            name: "FluentD",
            icon: SiFluentd
        },
        {
            name: "Ghuroby",
            icon: SiGurobi
        },
        {
            name: "Sicillia",
            icon: SiIstio
        },

    ]

    const dataCard = [
        {
            icon: PiWaveSineFill,
            title: "Product Analytics",
            content:
                "Learn what your users actually do. Track events, build funnels, analyze  retention, and segment any way you want. DataPanel AI surfaces the 'why' behind the numbers before you even think to ask."
        },
        {
            icon: PiDesktopBold,
            title: "Web Analytics",
            content:
                "Go beyond pageviews to understand real user behavior on your site. Ask questions in plain language and get answers your whole team can act on."
        },
        {
            icon: PiMonitorPlay,
            title: "Session Replay & Heatmaps",
            content:
                "Watch the sessions behind your numbers. Replays are tied directly to your analytics, so  you can go from 'drop-off at step 3' to watching it happen in seconds."
        },
        {
            icon: PiPintGlass,
            title: "Experiments & Feature Flags",
            content:
                "Ship with confidence, not crossed fingers. A/B test against real product metrics and manage feature flags from the same place. No more disconnected tools or inconclusive results."
        },
        {
            icon: PiTreeStructureDuotone,
            title: "Metric Trees",
            content:
                "Build a living map of your KPIs and the drivers beneath them. Map how your key metrics relate to each other, so every team knows which levers to pull, and whether pulling them is actually working."
        },
        {
            icon: PiStack,
            title: "Data Warehouse Connectors",
            content:
                "Your warehouse data, finally in your hands.Sync from Snowflake, BigQuery, Redshift, and more.Analyze all of your unified product and backend data in perfect sync."
        }
    ]
    return (
        <section id='home' className='bg-slate-800 text-center py-0 text-slate-300 overflow-hidden'>
            <div className='relative'>
                <img src={featureBG} alt="" className='w-full' />
                <img src={featureChat} alt="" className='absolute top-10 -left-1/20 w-1/2' />
                <img src={featureMobile} alt="" className='absolute top-10 right-10 w-1/4' />
            </div>
            <div className="relative overflow-hidden border-y border-slate-700">
                <div className="flex w-max animate-marquee py-6 hover:[animation-play-state:paused]">
                    {[...dataClient, ...dataClient].map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 mx-10 whitespace-nowrap" >
                            <p className="text-xl">
                                {client.name}
                            </p>
                            <client.icon />
                        </div>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-1 py-10 lg:grid-cols-3 p-4 text-slate-300'>
                {dataCard.map((card, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-4 justify-between p-0 py-8 lg:px-10 lg:py-10 lg:pe-5 ${index === 1 || index === 4 ? "lg:border-x border-x-slate-600" : "lg:border-none"}`}>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-2 items-center'>
                                <card.icon className='text-3xl text-orange-600' />
                                <p className='card-title font-bold'>
                                    {card.title}
                                </p>
                            </div>
                            <p className='card-text text-left text-slate-400'>
                                {card.content}
                            </p>
                        </div>
                        <button className='flex gap-2 items-center font-bold hover:gap-4 hover:text-slate-400 transition-all duration-300 ease'>
                            <p>Explore {card.title}</p>
                            <FaChevronRight />
                        </button>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Feature