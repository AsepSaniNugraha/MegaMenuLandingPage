import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const ButtonVar2 = ({ label }) => {
    return (
        <>
            <button className='linkButton-label flex gap-4 items-center py-2 px-8 bg-orange-50 text-orange-500 border border-orange-500 rounded-full transition-all duration-300 ease hover:bg-orange-500 hover:text-orange-100'>
                {label}
                <FaChevronRight />
            </button>
        </>
    )
}

export default ButtonVar2