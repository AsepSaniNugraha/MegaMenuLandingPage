import React from 'react';
import ButtonVar1 from '../ui/ButtonVar1';
import ButtonVar2 from '../ui/ButtonVar2';

const CTA = () => {
    return (
        <section id='home' className='bg-linear-180 from-indigo-50 via-indigo-600 to-white/10 text-center pb-8 lg:py-10 px-4 lg:px-14 text-slate-800 overflow-hidden'>
            <div className='flex flex-col items-center gap-8  p-4'>
                <p className='hero-title font-bold'>DataPanel is for teams that move.<br />Make your move.</p>
                <div className='flex flex-col gap-5 lg:flex-row'>
                    <ButtonVar1 label="Free Trial" />
                    <ButtonVar2 label="Watch Demo" />
                </div>
            </div>
        </section>
    )
}

export default CTA