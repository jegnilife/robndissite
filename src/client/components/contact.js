import React, { useState } from 'react';
import Navbar from './navbarItems';
import TopSnippet from './topSnippet';
import DialogForm from './dialogForm';
import Footer from './footer';
import Map from './map';


const Contact = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialogForm = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    return (
        <div className="flex-wrap relative">
            <TopSnippet />
            <Navbar />
            <div className="flex flex-col md:flex-row md:mb-2">
                <div className="h-[400px] md:w-1/2 bg-[#E8F2FF] p-8 border border-[#e3edfa]">
                    <div className="flex flex-col md:flex-row">
                        <img src="images/phone1.png" className="w-[80px] md:h-20 md:mt-2 mr-30" alt="Call" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-slate-600 md:ml-1">Call us</h1>
                    <a href="tel:1800800124" className='text-white text-sm py-2 md:py-0'><h3 className="text-2xl mb-4 text-slate-600 md:ml-2"> &#10230; 1800 800 124</h3></a>
                    <p className="text-2xl text-stone-600 mb-4 md:ml-2">
                        Monday - Friday <br /> &#10230; 9:00am-5:30pm AEST
                    </p>
                </div>
                <div className="md:w-1/2 bg-sky-50 p-8">
                    <div className="text-sm font-normal font-bold mb-2 text-gray-600">
                        <span>Home </span>
                        <span> &#10230;</span>
                        <span> Contact</span>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <img src="images/mail-icon_b.png" className="w-[80px] h-20 md:mt-2 mr-30" alt="Call" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-slate-600">Send us a message</h1>
                    <p className="text-gray-700 mb-4 text-gray-600">
                        Please click the below button to send us a message. We will respond to your <br /> queries as soon as we can !
                    </p>
                    <button onClick={openDialogForm} className="w-full md:w-50 h-12 bg-[#F27267] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Send Message
                    </button>
                </div>
            </div>
            {/* <div className="flex items-center justify-center">
                <div className="mt-4 w-auto md:h-40 md:w-40">
                    <QRCode value={websiteUrl} />
                </div>
            </div> */}
            <section className="bg-[#f2faeb] px-8 py-12 md:px-16">
                <div className="mx-auto max-w-5xl border-l-4 border-[#D6AE38] bg-white p-7">
                    <h2 className="text-3xl font-bold text-[#173F67]">Feedback &amp; Complaints</h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                        We value client feedback and encourage open communication. We are committed to addressing concerns fairly, respectfully, and promptly.
                    </p>
                </div>
            </section>
            <Map />
            {isDialogOpen && <DialogForm isOpen={isDialogOpen} onClose={closeDialog} />}
            <Footer />
        </div>
    );
};

export default Contact;