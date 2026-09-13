import React from 'react';
import Navbar from './navbarItems';
import Footer from './footer';
import TopSnippet from './topSnippet';

const whyChooseJegniLife = [
  'Registered Nurse-led services',
  'Mental health-experienced team',
  'Qualified and compassionate professionals',
  'Tailored support and services',
  'Flexible support options',
  'Culturally inclusive care',
  'Safe and reliable services',
  'Transparent communication',
  'Commitment to quality care',
  'Respect for privacy, choice and independence',
  'Collaborative and family-centred approach',
];

const OurStory = () => (
  <div className="flex-wrap relative">
    <TopSnippet />
    <Navbar />
    <main className="mx-auto max-w-6xl bg-white px-6 py-16 md:px-16 md:py-20">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6e12]">Our story</p>
        <h1 className="mt-3 text-3xl font-bold text-[#372540] md:text-4xl">Every person has a story. Every story is a life.</h1>
        <p className="mt-6 leading-8 text-slate-700">
          At JEGNI LIFE, we believe every person deserves to be treated with compassion, dignity, respect, and genuine care. Our journey began with a simple desire to help others and make a meaningful difference in people&apos;s lives.
        </p>
        <p className="mt-4 leading-8 text-slate-700">
          We provide person-centred support that respects individuality, promotes independence, and empowers people to live with choice and control. Support begins with the person, not the service.
        </p>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6e12]">Why choose JEGNI LIFE?</p>
          <h2 className="mt-3 text-3xl font-bold text-[#372540]">Professional care with genuine human connection.</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {whyChooseJegniLife.map((reason) => (
            <li key={reason} className="flex items-start gap-3 border-l-2 border-[#D6AE38] px-4 py-2 text-slate-700">
              <span className="font-bold text-red-500">✓</span>{reason}
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

export default OurStory;