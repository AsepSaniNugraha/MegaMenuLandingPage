import React from 'react';
import ButtonVar1 from '../ui/ButtonVar1';

import { FaCircleCheck } from "react-icons/fa6";

const Enterprise = () => {
    const dataEnterprise = [
        {
            title: "Performance that scales",
            content: "Sub-second query times, even at billions of events per month."
        },
        {
            title: "An open ecosystem",
            content: "DataPanel plays well with everyone. Connect to your existing stack with flexiblity and no vendor lock-in."
        },
        {
            title: "Secure by default",
            content: "SOC 2 Type II, ISO 27001, HIPAA-ready, SSO/SAML, and audit logs."
        },
        {
            title: "Governance made easy",
            content: "Define source-of-truth metrics, manage access, and keep teams aligned with trusted data."
        }
    ]
    return (
        <section id='home' className='bg-slate-100 text-center pb-8 lg:py-10 px-4 lg:px-14 text-slate-300 overflow-hidden'>
            <div className='flex flex-col gap-4 bg-linear-to-b from-purple-800 to-purple-300 p-3 rounded-2xl lg:items-center'>
                <div>
                    <div className='flex flex-col items-center gap-5'>
                        <p className='section-title font-bold'>
                            Enterprise ready.<br />
                            Without the complexity.
                        </p>
                        <p className='section-text'>
                            DataPanel supports the performance, flexibility, and governance modern teams need — with none of the legacy bloat.
                        </p>
                        <ButtonVar1 label="Explore DataPanel for Enterprise" />
                    </div>
                    <div className='grid grid-cols-1 gap-4 py-6 px-4 lg:gap-8 lg:px-8 lg:grid-cols-4'>
                        {dataEnterprise.map((item, index) => (
                            <div
                                key={index}
                                className='flex flex-col gap-4 py-4 px-2 items-center justify-start border border-purple-400 bg-purple-900/70 rounded-2xl'>
                                <div className='p-0.5 bg-purple-100 rounded-full'>
                                    <FaCircleCheck className='text-2xl text-orange-500' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='card-title font-semibold'>
                                        {item.title}
                                    </p>
                                    <p className='card-text'>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Enterprise