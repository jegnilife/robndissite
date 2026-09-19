import React, { useState } from 'react';
import DialogForm from './dialogForm';

const TopSnippet = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialogForm = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="portrait:hidden w-full md:w-1/3 bg-[#2e2657] flex items-center justify-center md:justify-start">
                <img src="/images/phone.png" className="w-[60px] h-[60px] md:h-10 md:mb-2 md:mr-2 md:ml-28 ml-[10px] md:ml-0 md:mt-2" alt="Call" />
                <a href="tel:1800800124" className='text-white text-sm py-2 md:py-0'>Call 1800 800 124</a>
                <span className="text-white px-2 py-2 md:hidden">|</span>
            </div>

            <div className="landscape:hidden w-full md:w-1/3 bg-[#2e2657] flex items-center justify-center md:justify-start">
                <img src="/images/phone.png" className="w-[25px] h-[60px] md:h-10 md:mb-2 md:mr-2 md:ml-28 ml-[-10px] md:ml-0 md:mt-2" alt="Call" />
                <a href="tel:1800800124" className='text-white text-sm py-2 md:py-0'>Call 1800 800 124</a>
                <span className="text-white px-2 py-2 md:hidden">|</span>
            </div>

            <div className="portrait:hidden w-full md:w-1/3 bg-[#2e2657] md:flex items-center justify-center md:justify-start">
                <img src="/images/email-50.png" className="hidden md:block h-6 md:mt-2 md:mr-2 md:ml-[10px]" alt="Email" />
                <span className="hidden md:block text-white md:ml-1 text-sm py-2 ml-5">contact@jegnilife.com.au</span>
            </div>

            <div className="landscape:hidden w-full md:w-1/3 bg-[#2e2657] md:flex items-center justify-center md:justify-start">
                <img src="/images/email-50.png" className="hidden md:block h-6 md:mt-2 md:mr-2 ml-10 md:ml-[10px]" alt="Email" />
                <span className="hidden md:block text-white md:ml-1 text-sm py-2 ml-5">contact@jegnilife.com.au</span>
            </div>
        
            <div className="w-full md:w-1/3 bg-[#2e2657] p-2 md:pr-10 flex items-center justify-center md:justify-end">
                <button onClick={openDialogForm} className="transform transition-transform duration-300 hover:scale-105 w-[180px] md:w-[220px] h-[30px] flex justify-center items-center select-none bg-[#fafafa] text-blue-900 py-2 px-4 md:px-6 rounded-full">
                    Get Support Now
                </button>
            </div>

            {isDialogOpen && <DialogForm isOpen={isDialogOpen} onClose={closeDialog} />}
        </div>
    );
};

export default TopSnippet;