import React from 'react';
import { PiWaveSineFill } from "react-icons/pi";
import { ImPlay } from "react-icons/im";
import { GiErlenmeyer } from "react-icons/gi";
import { SiDiagramsdotnet } from "react-icons/si";
import { BsBoxFill } from "react-icons/bs";
import ButtonVar1 from '../ui/ButtonVar1';
import ButtonVar2 from '../ui/ButtonVar2';

const Hero = () => {
    return (
        <section id='home' className='bg-white text-center p-4 pb-10 pt-30'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-3 py-6 lg:px-40'>
                    <h1 className='hero-title text-slate-700 font-semibold'>
                        Digital analytics reimagined for an AI-first world
                    </h1>
                    <p className='hero-text text-slate-400 lg:px-30'>
                        Give product, engineering, and growth teams instant answers on what's working and what to build next, with AI that connects across your existing stack.
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-5'>
                    <div className='flex items-center gap-4 py-2 px-4 rounded-lg border border-slate-400 bg-slate-200 card-text text-slate-700 lg:flex-col lg:items-start'>
                        <PiWaveSineFill className='text-4xl' />
                        <p className=''>Understand user behavior</p>
                    </div>
                    <div className='flex items-center gap-4 py-2 px-4 rounded-lg border border-slate-400 bg-slate-200 card-text text-slate-700 lg:flex-col lg:items-start'>
                        <ImPlay className='text-4xl' />
                        <p className='text-left'>Watch users in action</p>
                    </div>
                    <div className='flex items-center gap-4 py-2 px-4 rounded-lg border border-slate-400 bg-slate-200 card-text text-slate-700 lg:flex-col lg:items-start'>
                        <GiErlenmeyer className='text-4xl' />
                        <p className=''>Test & ship experiments</p>
                    </div>
                    <div className='flex items-center gap-4 py-2 px-4 rounded-lg border border-slate-400 bg-slate-200 card-text text-slate-700 lg:flex-col lg:items-start'>
                        <SiDiagramsdotnet className='text-4xl' />
                        <p className=''>Measure what matters</p>
                    </div>
                    <div className='flex items-center gap-4 py-2 px-4 rounded-lg border border-slate-400 bg-slate-200 card-text text-slate-700 lg:flex-col lg:items-start'>
                        <BsBoxFill className='text-4xl' />
                        <p className=''>Unify your data stack</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 lg:flex-row py-8'>
                    <ButtonVar1 label="Watch Demo" />
                    <ButtonVar2 label="Free Trial" />
                </div>
            </div>
        </section>
    )
}

export default Hero