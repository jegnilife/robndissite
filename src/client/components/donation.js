import React, { useState } from 'react';
import Navbar from './navbarItems';
import TopSnippet from './topSnippet';
import DialogForm from './dialogForm';
import Footer from './footer';
import Map from './map';

const Donation = () => {
    return (
        <div className="flex-wrap relative">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4 text-slate-600">Support Our Cause</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    Your generous donations help us provide better services and support to those in need.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700">
                    Donate Now
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Donation;