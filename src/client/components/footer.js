import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import QRCode from './QRCode'

const Footer = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    const websiteUrl = "http://jegnilife.com.au/";

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 100);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#2e2657]">
            {/* #372540 */}
            <div className="p-4">
                <h3 className="text-3xl text-[#e6e4f0] font-bold ml-4 mb-4">About Us</h3>
                <p className="text-sm md:text-left p-4 sans-serif text-white">
                    Jegnilife, is an organisation with qualified and experienced
                    <br className="hidden md:block" /> staff dedicated to provide
                    high quality client support in the
                    <br className="hidden md:block" /> Healthcare sector.
                    At Jegnilife, we pride ourselves
                    <br className="hidden md:block" /> of our client centric approach towards care and recovery.
                    Our focus is to put plans in place that will make our clients independent while they
                    participate in their own progression plans.
                </p>
            </div>
            <div className="p-4 text-white">
                <h3 className="text-3xl text-[#e6e4f0] font-bold mb-4">Contact Us</h3>
                <ul>
                    <li className="text-sm font-bold mb-2"><a href="tel:1800800124" className='mt-1'>1800 800 124</a></li>
                    <li className="text-sm font-bold mb-2">contact@jegnilife.com.au</li>
                    {/* <li className="text-sm font-bold mb-2">NDIS Provider Registration ID: 00-ABCD12345</li>
                    <li className="text-sm font-bold mb-2">ABN 00 123 000 111</li>  */}
                    {/* <span>
                        <img src="/images/modernmap.png" className="h-[130px] md:h-[150px] ml-[-30px] md:ml-[-30px]" alt="AUS"/>
                        <img src="/images/modernmap.png" className="h-[130px] md:h-[150px] ml-[-30px] md:ml-[-30px]" alt="AUS"/>
                    </span> */}

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4">
                        <img
                            src="/images/modernmap.png"
                            className="h-[130px] md:h-[150px] ml-[-30px] md:ml-[-30px]"
                            alt="AUS"
                        />
                        <img
                            src="/images/registered-ndis-provider-transparent-300x139.png"
                            className="h-[100px] md:h-[80px] pl-[4px] mb-[20px] md:pl-0 md:mb-0 rounded-[10px]"
                            alt="AUS"
                        />
                    </div>
                    <span className="mt-2 w-auto md:h-40 md:w-40">
                        <QRCode value={websiteUrl} />
                    </span>
                </ul>
            </div>

            <div className="p-4 text-white">
                <h3 className="text-3xl text-[#e6e4f0] font-bold mb-4">Quick Links</h3>
                <ul>
                    <li><span onClick={() => navigate('/')} className="text-sm font-bold mb-2 block pl-5 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500">Home</span></li>
                    <li><span onClick={() => navigate('/aboutus')} className="text-sm font-bold mb-2 block pl-5 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500">About Us</span></li>
                    <li><span onClick={() => navigate('/serviceOne')} className="text-sm font-bold mb-2 block pl-5 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Supported Independent Living</span></li>
                    <li><span onClick={() => navigate('/communitySupport')} className="text-sm font-bold mb-2 block pl-5 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Community Support</span></li>
                    <li><span onClick={() => navigate('/communityNursing')} className="text-sm font-bold mb-2 block pl-5 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Community Nursing</span></li>
                    <li><span onClick={() => navigate('/groupBasedActivities')} className="text-sm font-bold mb-2 block pl-5 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Group Based Activities</span></li>
                    {/* <li className="text-sm font-bold mb-2 block pl-5 pr-4 text-white md:p-0 ">Our People</li>
                    <li className="text-sm font-bold mb-2 block pl-5 pr-4 text-white md:p-0 ">Careers</li> */}
                    <li><span onClick={() => navigate('/contact')} className="text-sm font-bold block pl-5 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</span></li>
                    {/* <li><button onClick={() => navigate('/login')} className="text-sm font-bold block mb-2 pl-5 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</button></li> */}
                </ul>
                <div className="portrait:hidden flex flex-wrap mt-4">
                    <div className="md:w-1/3 py-4 ml-4 md:ml-[5px]">
                        <a className="inline-block w-10 h-10 rounded-full bg-white p-2" href="https://www.facebook.com/profile.php?id=100094878867837">
                            <img src="/images/fbicon.png"></img>
                        </a>
                    </div>
                    <div className="md:w-1/3 py-4 ml-4 md:ml-[-70px] ml-[7px]">
                        <a className="inline-block w-10 h-10 rounded-full bg-white p-2" href="https://www.linkedin.com/company/jegnilife/?viewAsMember=true">
                            <img src="/images/linkedinicon.png"></img>
                        </a>
                    </div>
                    <div className="md:w-1/3 p-4 md:ml-[-84px] ml-[-5px]">
                        <a className="inline-block w-10 h-10 rounded-full bg-white p-2" href="https://www.instagram.com/jegnilife/">
                            <img src="/images/instagram.png"></img>
                        </a>
                    </div>
                 </div>
                 <div className="landscape:hidden flex flex-wrap mt-4">
                    <div className="md:w-1/2 py-2 ml-4 md:ml-[5px]">
                        <a className="inline-block w-10 h-10 rounded-full bg-white p-2" href="https://www.facebook.com/profile.php?id=100094878867837">
                            <img src="/images/fbicon.png"></img>
                        </a>
                    </div>
                    <div className="md:w-1/2 py-2 ml-4 md:ml-[-65px] ml-[7px]">
                        <a className="inline-block w-10 h-10 rounded-full bg-white p-2" href="https://www.linkedin.com/company/jegnilife/?viewAsMember=true">
                            <img src="/images/linkedinicon.png"></img>
                        </a>
                    </div>
                    <div className="md:w-1/2 p-2 md:ml-[-74px] ml-[-3px]">
                        <a className="inline-block w-10 h-10 rounded-full bg-white p-2" href="https://www.instagram.com/jegnilife/">
                            <img src="/images/instagram.png"></img>
                        </a>
                    </div>
                 </div>
            </div>
            
            <button className={`fixed bottom-5 right-5 p-3 rounded-full text-white ${isVisible ? 'visible' : 'invisible' }`} onClick={scrollToTop}>
                <img src="/images/scroll.png" className="h-10 md:h-10 rounded-full" alt="Scroll to Top" />
            </button>
            <div className="flex">
                <p className="text-xs text-[#ffffff] ml-8 mb-4 md:mb-2 md:ml-8">© 2023 JEGNI LIFE Pty Ltd</p>
                <p className="text-[8px] text-[#e8f2ff] ml-4 md:mt-1 md:px-8">Designed & Developed by Vinod Mathew</p>
            </div>
        </div>

    );
};

export default Footer;