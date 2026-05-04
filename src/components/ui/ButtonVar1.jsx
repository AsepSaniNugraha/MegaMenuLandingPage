import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const ButtonVar1 = ({ label }) => {
    return (
        <>
            <button className='linkButton-label flex gap-4 items-center py-2 px-8 bg-orange-500 text-white border border-orange-500 rounded-full transition-all duration-300 ease hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50'>
                {label}
                <FaChevronRight />
            </button>
        </>
    )
}

export default ButtonVar1