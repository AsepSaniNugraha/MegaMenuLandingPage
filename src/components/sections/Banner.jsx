import React from 'react';
import pieChart from '../../assets/pieChart.png';
import ButtonVar1 from '../ui/ButtonVar1';
import ButtonVar2 from '../ui/ButtonVar2';

const Banner = () => {
    return (
        <section id='home' className='bg-slate-100 text-center py-10 px-4 lg:px-14 text-slate-300 overflow-hidden'>
            <div className='flex flex-col gap-4 bg-linear-to-b from-orange-600 to-orange-800 p-3 rounded-2xl lg:flex-row lg:items-center lg:p-15'>
                <div className='flex flex-col gap-4 lg:gap-8'>
                    <p className='section-text text-left border border-orange-300 bg-orange-800 py1 px-5 max-w-max'>MCX</p>
                    <p className='cta-title text-left'>
                        DataPanel, wherever you work. Get answers faster.
                    </p>
                    <p className='cta-text text-left'>
                        Ask product questions in AI tools like Claude & ChatGPT. Then turn those answers into dashboards, updates, or next steps, all without leaving your workflow.
                    </p>
                    <div className='flex flex-col gap-2 max-w-max lg:flex-row lg:py-4'>
                        <ButtonVar2 label="Read Blog" />
                        <ButtonVar1 label="Learn How" />
                    </div>
                </div>
                <div className='rounded-2xl p-6 lg:p-4 lg:w-3/4'>
                    <div className='lg:rounded-3xl lg:overflow-hidden'>
                        <img src={pieChart} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner