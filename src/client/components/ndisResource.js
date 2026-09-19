import React from 'react';
import Navbar from './navbarItems';
import Footer from './footer';
import TopSnippet from './topSnippet';

const ndisResources = [
  ['NDIS official website', 'https://www.ndis.gov.au/'],
  ['NDIS Commission', 'https://www.ndiscommission.gov.au/'],
  ['Understanding the NDIS', 'https://www.ndis.gov.au/understanding'],
  ['Accessing the NDIS', 'https://www.ndis.gov.au/applying-access-ndis'],
  ['Participant information', 'https://www.ndis.gov.au/participants'],
  ['Complaints and feedback', 'https://www.ndiscommission.gov.au/participants/complaints'],
];

const NdisResource = () => (
  <div className="flex-wrap relative">
    <TopSnippet />
    <Navbar />
    <main>
      <section className="bg-[#F3E7F2] px-8 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#612C69]">Resources</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-[#612C69] md:text-4xl">NDIS resources</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#612C69]">
              Helpful information for participants, families, and support networks to understand the NDIS and find trusted guidance.
            </p>
          </div>
          <img src="/images/supportIndependentLiving.jpg" alt="Support worker assisting a participant at home" className="aspect-[4/3] w-full rounded-lg object-cover" />
        </div>
      </section>
      <section className="bg-white px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="border-l-4 border-[#612C69] bg-[#FBF7FC] p-7 md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#612C69]">Trusted information</p>
            <h2 className="mt-3 text-3xl font-bold text-[#612C69]">Useful NDIS links</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#612C69]">
              Explore official information about eligibility, participant supports, applications, and your rights.
            </p>
            <ul className="mt-7 grid gap-3 text-[#612C69] sm:grid-cols-2">
              {ndisResources.map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg bg-white px-4 py-3 font-semibold shadow-sm transition hover:bg-[#F3E7F2]">
                    <span>{label}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default NdisResource;
