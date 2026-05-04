import React from 'react';
import { FaChevronRight, FaHandshake } from "react-icons/fa";
import { BsToggles } from "react-icons/bs";
import { RiUserCommunityFill } from "react-icons/ri";

const Support = () => {
    return (
        <section id='home' className='bg-slate-100 text-center pb-8 lg:py-10 px-4 lg:px-14 text-slate-800 overflow-hidden'>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-4 text-left lg:w-1/3 py-6'>
                    <p className='section-title'>
                        Support for every step of the journey
                    </p>
                    <p className='section-text'>
                        Whether you're moving fast on your own or need hands-on help, DataPanel has you covered.
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-10 lg:gap-6 lg:grid-cols-3'>
                    <div className='flex flex-col justify-between gap-4 max-w-max'>
                        <div className='flex items-center justify-center p-5 bg-slate-300 text-8xl rounded-xl'>
                            <FaHandshake />
                        </div>
                        <div className='flex flex-col gap-1 items-start x text-left'>
                            <p className='card-title'>
                                Partner with experts
                            </p>
                            <p className='card-text'>
                                Get strategic guidance and premium support from our enterprise team.
                            </p>
                        </div>
                        <button className='mt-auto flex gap-2 items-center font-bold hover:gap-4 hover:text-slate-400 transition-all duration-300 ease'>
                            <p>Explore Support</p>
                            <FaChevronRight />
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 max-w-max'>
                        <div className='flex items-center justify-center p-5 bg-slate-300 text-8xl rounded-xl'>
                            <BsToggles />
                        </div>
                        <div className='flex flex-col gap-1 items-start text-left'>
                            <p className='card-title'>
                                Learn on your own terms
                            </p>
                            <p className='card-text'>
                                Explore docs, tutorials, and free courses at your own pace.
                            </p>
                        </div>
                        <button className='mt-auto flex gap-2 items-center font-bold hover:gap-4 hover:text-slate-400 transition-all duration-300 ease'>
                            <p>Explore Docs</p>
                            <FaChevronRight />
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 max-w-max'>
                        <div className='flex items-center justify-center p-5 bg-slate-300 text-8xl rounded-xl'>
                            <RiUserCommunityFill />
                        </div>
                        <div className='flex flex-col gap-1 items-start text-left'>
                            <p className='card-title'>
                                Tap into fellow pros
                            </p>
                            <p className='card-text'>
                                Join 12,000+ peers in the largest analytics community.
                            </p>
                        </div>
                        <button className='mt-auto flex gap-2 items-center font-bold hover:gap-4 hover:text-slate-400 transition-all duration-300 ease'>
                            <p>Explore Community</p>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support