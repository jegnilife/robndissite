import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";


const NavbarItems = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [aboutusToggle, setAboutUsToggle] = useState(false);
    const [serviceToggle, setServiceToggle] = useState(false);
    const [ndisToggle, setNdisToggle] = useState(false);
    const [agedCareToggle, setAgedCareToggle] = useState(false);
    const [resourcesToggle, setResourcesToggle] = useState(false);
    const navigate = useNavigate();

    const agedCareCategories = [
      ['Home & Community Services', 'home-community'],
      ['Assistive Technology & Home Modifications', 'assistive-technology'],
      ['Advisory & Support Services', 'advisory-support'],
      ['Personal Care & Care Management', 'personal-care'],
      ['Nursing & Clinical Care', 'nursing-clinical'],
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

    const openAboutUsPopup = () => {
        setAboutUsToggle(!aboutusToggle);
        setServiceToggle(false);
      setResourcesToggle(false);
    }

    const openServicesPopup = () => {
        setServiceToggle(!serviceToggle);
        setAboutUsToggle(false);
        setResourcesToggle(false);
    }

    const toggleNdisMenu = () => {
      setNdisToggle(!ndisToggle);
    }

    const toggleAgedCareMenu = () => {
      setAgedCareToggle((isOpen) => !isOpen);
    }

    const openResourcesPopup = () => {
      setResourcesToggle(!resourcesToggle);
      setAboutUsToggle(false);
      setServiceToggle(false);
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative sticky top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a onClick={() => navigate('/')} href="" className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-20 mr-3" alt="Flowbite Logo" /> */}
                    <img src="/images/color1_logo_try2.png" className="h-14 mr-3" alt="JEGNI LIFE" />
                    <div className="flex flex-col justify-center">
                        <span className="text-2xl font-montserrat text-3xl font-bold whitespace-nowrap dark:text-white text-[#D6AE38]">JEGNI LIFE</span>
                        <p className="text-xs pt-1 font-bold tracking-wide whitespace-nowrap">
                            <span className="text-[#173F67]">AGED CARE</span>
                            <span className="text-[#8f8e8b]"> &amp; </span>
                            <span className="text-[#51247A]">NDIS SERVICES</span>
                        </p>
                    </div>
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
                          <button onClick={() => navigate('/our-story')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:text-white md:dark:hover:text-blue-500">Our Story</button>
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
                                        <button onClick={toggleNdisMenu} className="flex w-full items-center justify-between px-4 py-2 text-left font-semibold text-[#51247A] hover:bg-[#f4eef8] dark:hover:bg-gray-600 dark:hover:text-white">
                                          NDIS
                                          <svg className={`h-3 w-3 transition-transform ${ndisToggle ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                          </svg>
                                        </button>
                                        {ndisToggle && (
                                          <ul className="border-t border-gray-100 pl-3 dark:border-gray-600">
                                            <li>
                                              <button onClick={() => navigate('/serviceOne')} className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Supported Independent Living</button>
                                            </li>
                                            <li>
                                              <button onClick={() => navigate('/communitySupport')} className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Community Support</button>
                                            </li>
                                            <li>
                                              <button onClick={() => navigate('/communityNursing')} className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Community Nursing</button>
                                            </li>
                                            <li>
                                              <button onClick={() => navigate('/groupBasedActivities')} className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Group Based Activities</button>
                                            </li>
                                          </ul>
                                        )}
                                        </li>
                                        <li>
                                        <div className="flex items-center justify-between px-4 py-2 font-semibold text-[#173F67] hover:bg-[#eef1f5] dark:hover:bg-gray-600 dark:hover:text-white">
                                          <Link to="/aged-care">Aged Care</Link>
                                          <button type="button" onClick={toggleAgedCareMenu} aria-label="Expand Aged Care categories">
                                            <svg className={`h-3 w-3 transition-transform ${agedCareToggle ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                          </button>
                                        </div>
                                        {agedCareToggle && (
                                          <ul className="border-t border-gray-100 pl-3 dark:border-gray-600">
                                            {agedCareCategories.map(([label, slug]) => (
                                              <li key={slug}>
                                                <button onClick={() => navigate(slug === 'assistive-technology' ? '/assistive-technology' : `/aged-care/${slug}`)} className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{label}</button>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
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
                            <div className="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white">
                              <Link to="/resources" className="md:hover:text-blue-700 md:dark:hover:text-blue-500">Resources</Link>
                              <button type="button" onClick={openResourcesPopup} className="ml-2" aria-label="Expand Resources menu">
                                <svg className={`w-2.5 h-2.5 transition-transform ${resourcesToggle ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                              </button>
                            </div>
                            {resourcesToggle && (
                              <div className="z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow absolute mt-1 w-36 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                        <li><Link to="/serviceOne" className="block px-4 py-2 font-semibold text-[#51247A] hover:bg-[#f4eef8] dark:hover:bg-gray-600 dark:hover:text-white">NDIS</Link></li>
                                        <li><Link to="/aged-care" className="block px-4 py-2 font-semibold text-[#173F67] hover:bg-[#eef1f5] dark:hover:bg-gray-600 dark:hover:text-white">Aged Care</Link></li>
                                </ul>
                              </div>
                            )}
                        </li>
                        <li>
                            <button onClick={() => navigate('/contact')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
            {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-4 bg-slate-500">
            <Link to="/" className="px-2 block text-white">
              Home
            </Link>
            <Link to="/our-story" className="px-2 block text-white hover:text-gray-300">
              Our Story
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
                  <button
                    onClick={toggleNdisMenu}
                    className="flex w-full items-center justify-between px-4 py-2 text-left font-semibold text-[#51247A] hover:bg-[#f4eef8]"
                  >
                    NDIS
                    <svg className={`h-3 w-3 transition-transform ${ndisToggle ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  {ndisToggle && (
                    <div className="border-t border-gray-200 pl-2">
                  <Link
                    to="/serviceOne"
                    className="block px-4 py-2 font-semibold text-[#173F67] hover:bg-[#eef1f5]"
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
                    Group Based Activities
                  </Link>
                    </div>
                  )}
                  <div className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <Link to="/aged-care">Aged Care</Link>
                    <button type="button" onClick={toggleAgedCareMenu} aria-label="Expand Aged Care categories">
                      <svg className={`h-3 w-3 transition-transform ${agedCareToggle ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                  </div>
                  {agedCareToggle && (
                    <div className="border-t border-gray-200 pl-2">
                      {agedCareCategories.map(([label, slug]) => (
                        <Link key={slug} to={slug === 'assistive-technology' ? '/assistive-technology' : `/aged-care/${slug}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="relative">
              <div className="flex items-center px-2 text-white">
                <Link to="/resources" className="hover:text-gray-300 focus:outline-none">Resources</Link>
                <button type="button" onClick={openResourcesPopup} className="ml-1 hover:text-gray-300" aria-label="Expand Resources menu">
                  <svg className={`w-4 h-4 transition-transform ${resourcesToggle ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {resourcesToggle && (
                <div className="py-2 bg-white rounded-lg shadow-lg w-40">
                  <Link to="/serviceOne" className="block px-4 py-2 font-semibold text-[#51247A] hover:bg-[#f4eef8]">NDIS</Link>
                  <Link to="/aged-care" className="block px-4 py-2 font-semibold text-[#173F67] hover:bg-[#eef1f5]">Aged Care</Link>
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
          </div>
        )}
        </nav>

    );
};

export default NavbarItems;