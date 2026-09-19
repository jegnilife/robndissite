import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";


const NavbarItems = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [aboutusToggle, setAboutUsToggle] = useState(false);
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
        setResourcesToggle(false);
        setNdisToggle(false);
        setAgedCareToggle(false);
    }

    const toggleNdisMenu = () => {
      setNdisToggle(!ndisToggle);
      setAgedCareToggle(false);
      setAboutUsToggle(false);
      setResourcesToggle(false);
    }

    const toggleAgedCareMenu = () => {
      setAgedCareToggle((isOpen) => !isOpen);
      setNdisToggle(false);
      setAboutUsToggle(false);
      setResourcesToggle(false);
    }

    const openResourcesPopup = () => {
      setResourcesToggle(!resourcesToggle);
      setAboutUsToggle(false);
      setNdisToggle(false);
      setAgedCareToggle(false);
    }

    return (
        <nav className="bg-[#E5E7EB] border-gray-200 relative sticky top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a onClick={() => navigate('/')} href="" className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-20 mr-3" alt="Flowbite Logo" /> */}
                    <img src="/images/color1_logo_try2.png" className="h-14 mr-3" alt="JEGNI LIFE" />
                    <div className="flex flex-col justify-center">
                        <span className="text-2xl font-montserrat text-3xl font-bold whitespace-nowrap text-[#D6AE38]">JEGNI LIFE</span>
                        <p className="text-xs pt-1 font-bold tracking-wide whitespace-nowrap">
                            <span className="text-[#173F67]">AGED CARE</span>
                            <span className="text-[#612C69]"> &amp; </span>
                            <span className="text-[#612C69]">NDIS SERVICES</span>
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
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#E5E7EB] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#E5E7EB]">
                        <li>
                            <button onClick={() => navigate('/')} className="block py-2 pl-3 pr-4 text-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0" aria-current="page">Home</button>
                        </li>
                        <li>
                          <button onClick={() => navigate('/our-story')} className="block py-2 pl-3 pr-4 text-[#1F2937] rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Our Story</button>
                        </li>
                        <li className="relative">
                            <button onClick={toggleNdisMenu} className="flex items-center py-2 pl-3 pr-4 font-semibold text-[#612C69] rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-[#612C69] md:p-0">
                              NDIS
                              <svg className={`w-2.5 h-2.5 ml-2 transition-transform ${ndisToggle ? 'rotate-180' : ''}`} aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg>
                            </button>
                            {ndisToggle && (
                              <div className="z-50 font-normal bg-[#F8FAFC] divide-y divide-gray-200 rounded-lg shadow absolute mt-1 w-60">
                                <ul className="py-2 text-sm text-[#1F2937]">
                                  <li><Link to="/serviceOne" className="block px-4 py-2 hover:bg-gray-100">Supported Independent Living</Link></li>
                                  <li><Link to="/communitySupport" className="block px-4 py-2 hover:bg-gray-100">Community Support</Link></li>
                                  <li><Link to="/communityNursing" className="block px-4 py-2 hover:bg-gray-100">Community Nursing</Link></li>
                                  <li><Link to="/groupBasedActivities" className="block px-4 py-2 hover:bg-gray-100">Group Based Activities</Link></li>
                                </ul>
                              </div>
                            )}
                        </li>
                        <li className="relative">
                            <div className="flex items-center">
                              <Link to="/aged-care" className="py-2 pl-3 font-semibold uppercase text-[#1D5A84] rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-[#1D5A84] md:p-0">Aged Care</Link>
                              <button onClick={toggleAgedCareMenu} className="py-2 pr-3 pl-2 text-[#1D5A84] rounded hover:bg-gray-200 md:hover:bg-transparent md:p-0" aria-label="Expand Aged Care menu">
                                <svg className={`w-2.5 h-2.5 transition-transform ${agedCareToggle ? 'rotate-180' : ''}`} aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                              </button>
                            </div>
                            {agedCareToggle && (
                              <div className="z-50 font-normal bg-[#F8FAFC] divide-y divide-gray-200 rounded-lg shadow absolute mt-1 w-72">
                                <ul className="py-2 text-sm text-[#1F2937]">
                                  {agedCareCategories.map(([label, slug]) => (
                                    <li key={slug}><Link to={`/aged-care/${slug}`} className="block px-4 py-2 hover:bg-gray-100">{label}</Link></li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </li>
                        
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" onClick={openAboutUsPopup} className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-[#1F2937] rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto">About<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            {aboutusToggle && (
                                <div id="dropdownNavbar" className="z-50 font-normal bg-[#F8FAFC] divide-y divide-gray-200 rounded-lg shadow absolute mt-1 w-36">
                                  <ul className="py-2 text-sm text-[#1F2937]" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <span onClick={() => navigate('/aboutus')} className="block px-4 py-2 text-[#1F2937] hover:bg-gray-100">About Us</span>
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
                            <div className="flex items-center py-2 pl-3 pr-4 text-[#1F2937] rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:p-0">
                              <Link to="/resources" className="md:hover:text-blue-500">Resources</Link>
                              <button type="button" onClick={openResourcesPopup} className="ml-2" aria-label="Expand Resources menu">
                                <svg className={`w-2.5 h-2.5 transition-transform ${resourcesToggle ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                              </button>
                            </div>
                            {resourcesToggle && (
                              <div className="z-50 font-normal bg-[#F8FAFC] divide-y divide-gray-200 rounded-lg shadow absolute mt-1 w-36">
                                <ul className="py-2 text-sm text-[#1F2937]">
                                        <li><Link to="/resources/ndis" className="block px-4 py-2 font-semibold text-[#612C69] hover:bg-[#F3E7F2]">NDIS</Link></li>
                                        <li><Link to="/resources/aged-care" className="block px-4 py-2 font-semibold uppercase text-[#1D5A84] hover:bg-[#E8F3FA]">Aged Care</Link></li>
                                </ul>
                              </div>
                            )}
                        </li>
                        <li>
                            <button onClick={() => navigate('/contact')} className="block py-2 pl-3 pr-4 text-[#1F2937] rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
            {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-4 bg-[#E5E7EB]">
            <Link to="/" className="px-2 block text-[#1F2937]">
              Home
            </Link>
            <Link to="/our-story" className="px-2 block text-[#1F2937] hover:text-gray-600">
              Our Story
            </Link>
            <div className="relative">
              <button onClick={toggleNdisMenu} className="block px-2 font-semibold text-[#612C69] hover:text-[#4A214F]">
                NDIS
              </button>
              {ndisToggle && (
                <div className="py-2 bg-white rounded-lg shadow-lg w-60">
                  <Link to="/serviceOne" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Supported Independent Living</Link>
                  <Link to="/communitySupport" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Community Support</Link>
                  <Link to="/communityNursing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Community Nursing</Link>
                  <Link to="/groupBasedActivities" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Group Based Activities</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <div className="flex items-center px-2">
                <Link to="/aged-care" className="font-semibold uppercase text-[#1D5A84] hover:text-[#17496A]">Aged Care</Link>
                <button onClick={toggleAgedCareMenu} className="ml-2 text-[#1D5A84] hover:text-[#17496A]" aria-label="Expand Aged Care menu">
                  <svg className={`w-4 h-4 transition-transform ${agedCareToggle ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {agedCareToggle && (
                <div className="py-2 bg-white rounded-lg shadow-lg w-72">
                  {agedCareCategories.map(([label, slug]) => (
                    <Link key={slug} to={`/aged-care/${slug}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{label}</Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <div className="flex items-center px-2 text-[#1F2937]">
                <Link to="/resources" className="hover:text-gray-600 focus:outline-none">Resources</Link>
                <button type="button" onClick={openResourcesPopup} className="ml-1 hover:text-gray-600" aria-label="Expand Resources menu">
                  <svg className={`w-4 h-4 transition-transform ${resourcesToggle ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {resourcesToggle && (
                <div className="py-2 bg-white rounded-lg shadow-lg w-40">
                  <Link to="/resources/ndis" className="block px-4 py-2 font-semibold text-[#612C69] hover:bg-[#F3E7F2]">NDIS</Link>
                  <Link to="/resources/aged-care" className="block px-4 py-2 font-semibold uppercase text-[#1D5A84] hover:bg-[#E8F3FA]">Aged Care</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={openAboutUsPopup}
                className="block px-2 text-[#1F2937] hover:text-gray-600 focus:text-gray-600 focus:outline-none"
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
            <div className="block px-2 py-2 text-[#1F2937]">
              <Link to="/contact" className="text-[#1F2937] mt-2 md:mt-4 hover:text-gray-600">
                Contact
              </Link>
            </div>
          </div>
        )}
        </nav>

    );
};

export default NavbarItems;