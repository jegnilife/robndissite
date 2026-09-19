import React, { useState } from 'react';
import Navbar from './navbarItems';
import TopSnippet from './topSnippet';
import DialogForm from './dialogForm';
import Footer from './footer';
import Map from './map';


const Contact = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [rating, setRating] = useState('');

    const openDialogForm = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const submitFeedback = (event) => {
        event.preventDefault();
        setFeedbackSubmitted(true);
        setRating('');
        event.target.reset();
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
            <section className="bg-[#C9DDF2] px-8 py-12 md:px-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-slate-600">Feedback &amp; Complaints</h2>
                    <p className="mt-4 max-w-3xl leading-8 text-gray-700">
                        We value client feedback and encourage open communication. We are committed to addressing concerns fairly, respectfully, and promptly.
                    </p>
                    <form onSubmit={submitFeedback} className="mt-8 max-w-4xl rounded-2xl border border-[#D6AE38]/40 bg-white p-6 shadow-sm md:p-8">
                        <div className="flex items-start gap-4">
                            <img src="/images/empathy.png" alt="" className="h-14 w-14 rounded-full bg-[#f2faeb] object-contain p-2" />
                            <div>
                                <h3 className="text-2xl font-bold text-slate-600">Share your feedback</h3>
                                <p className="mt-2 text-gray-700">Tell us about your experience so we can listen, respond, and improve.</p>
                            </div>
                        </div>
                        <div className="mt-6 grid gap-5 md:grid-cols-2">
                            <label className="text-sm font-semibold text-slate-600">
                                Your name
                                <input type="text" name="name" required className="mt-2 block w-full rounded-lg border border-gray-300 p-3 font-normal focus:border-[#173F67] focus:outline-none focus:ring-2 focus:ring-[#D6AE38]/30" />
                            </label>
                            <label className="text-sm font-semibold text-slate-600">
                                Email address
                                <input type="email" name="email" required className="mt-2 block w-full rounded-lg border border-gray-300 p-3 font-normal focus:border-[#173F67] focus:outline-none focus:ring-2 focus:ring-[#D6AE38]/30" />
                            </label>
                            <label className="text-sm font-semibold text-slate-600 md:col-span-2">
                                Feedback type
                                <select name="feedbackType" required defaultValue="" className="mt-2 block w-full rounded-lg border border-gray-300 bg-white p-3 font-normal focus:border-[#173F67] focus:outline-none focus:ring-2 focus:ring-[#D6AE38]/30">
                                    <option value="" disabled>Select an option</option>
                                    <option value="feedback">General feedback</option>
                                    <option value="complaint">Complaint or concern</option>
                                    <option value="compliment">Compliment</option>
                                </select>
                            </label>
                            <fieldset className="md:col-span-2">
                                <legend className="text-sm font-semibold text-slate-600">Your rating</legend>
                                <div className="mt-2 flex gap-1" aria-label="Rate your experience from one to five stars">
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className="cursor-pointer rounded-lg p-1 focus-within:ring-2 focus-within:ring-[#D6AE38]/50">
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={value}
                                                required
                                                checked={rating === String(value)}
                                                onChange={(event) => setRating(event.target.value)}
                                                className="sr-only"
                                            />
                                            <span className={`text-3xl transition ${Number(rating) >= value ? 'text-[#D6AE38]' : 'text-gray-300'}`} aria-hidden="true">★</span>
                                            <span className="sr-only">{value} {value === 1 ? 'star' : 'stars'}</span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                            <label className="text-sm font-semibold text-slate-600 md:col-span-2">
                                Your message
                                <textarea name="message" required rows="5" className="mt-2 block w-full rounded-lg border border-gray-300 p-3 font-normal focus:border-[#173F67] focus:outline-none focus:ring-2 focus:ring-[#D6AE38]/30" />
                            </label>
                        </div>
                        <button type="submit" className="mt-6 rounded-full bg-[#F27267] px-7 py-3 font-bold text-white shadow-sm transition hover:bg-blue-700">Submit feedback</button>
                        {feedbackSubmitted && (
                            <p className="mt-4 font-semibold text-[#173F67]" role="status">Thank you for sharing your feedback. We will review it carefully.</p>
                        )}
                    </form>
                </div>
            </section>
            <Map />
            {isDialogOpen && <DialogForm isOpen={isDialogOpen} onClose={closeDialog} />}
            <Footer />
        </div>
    );
};

export default Contact;