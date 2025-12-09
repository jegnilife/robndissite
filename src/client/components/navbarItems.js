import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";


const NavbarItems = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [aboutusToggle, setAboutUsToggle] = useState(false);
    const [serviceToggle, setServiceToggle] = useState(false);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

    const openAboutUsPopup = () => {
        setAboutUsToggle(!aboutusToggle);
        setServiceToggle(false);
    }

    const openServicesPopup = () => {
        setServiceToggle(!serviceToggle);
        setAboutUsToggle(false);
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative sticky top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a onClick={() => navigate('/')} href="" className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-20 mr-3" alt="Flowbite Logo" /> */}
                    <img src="images/color1_logo_try2.png" className="h-14 mr-3" alt="JEGNI LIFE" />
                    <span className="self-center text-2xl font-montserrat text-3xl font-bold whitespace-nowrap dark:text-white text-[#D6AE38]">JEGNI LIFE</span>
                      <p className="text-[10px] mt-6 ml-[-121px] text-[#8f8e8b] pt-2"> <br/> DISABILITY SERVICES</p>
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" onClick={toggleMobileMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <button onClick={() => navigate('/')} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</button>
                        </li>

                        <li>
                            <button id="dropdownServicesLink" data-dropdown-toggle="dropdownServicesNavbar" onClick={openServicesPopup} className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Services <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            {serviceToggle && (
                                <div id="dropdownServicesNavbar" className="z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow absolute mt-1 w-55 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <span onClick={() => navigate('/serviceOne')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Supported Independent Living</span>
                                        </li>
                                        <li>
                                            <span onClick={() => navigate('/communitySupport')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Community Support</span>
                                        </li>
                                        <li>
                                            <span onClick={() => navigate('/communityNursing')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Community Nursing</span>
                                        </li>
                                        <li>
                                            <span onClick={() => navigate('/groupBasedActivities')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Group Based Activities</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" onClick={openAboutUsPopup} className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">About<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            {aboutusToggle && (
                                <div id="dropdownNavbar" className="z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow absolute mt-1 w-36 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <span onClick={() => navigate('/aboutus')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Us</span>
                                        </li>
                                        {/* <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mission Statement</a>
                                        </li> */}
                                    </ul>
                                    {/* <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                    </div> */}
                                </div>
                            )}
                        </li>
                        <li>
                            <button onClick={() => navigate('/contact')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Contact</button>
                        </li>
                        <li>
                            <button onClick={() => navigate('/donation')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Donations</button>
                        </li>
                    </ul>
                </div>
            </div>
            {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-4 bg-slate-500">
            <Link to="/" className="px-2 block text-white">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={openServicesPopup}
                className="block px-2 text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
              >
                Services{' '}
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {serviceToggle && (
                <div className="absolute mt-1 py-2 bg-white rounded-lg shadow-lg w-60">
                  <Link
                    to="/serviceOne"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Supported Independent Living
                  </Link>
                  <Link
                    to="/communitySupport"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Community Support
                  </Link>
                  <Link
                    to="/communityNursing"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Community Nursing
                  </Link>
                  <Link
                    to="/groupBasedActivities"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Group Based Activites
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={openAboutUsPopup}
                className="block px-2 text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
              >
                About{' '}
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutusToggle && (
                <div className="absolute mt-1 py-2 bg-white rounded-lg shadow-lg w-40">
                  <Link
                    to="/aboutus"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    About Us
                  </Link>
                </div>
              )}
            </div>
            <div className="block px-2 py-2 text-gray-800">
              <Link to="/contact" className="text-white mt-2 md:mt-4 hover:text-gray-300">
                Contact
              </Link>
            </div>
            <div className="block px-2 py-2 text-gray-800">
              <Link to="/donation" className="text-white mt-2 md:mt-4 hover:text-gray-300">
                Donation
              </Link>
            </div>
          </div>
        )}
        </nav>

    );
};

export default NavbarItems;