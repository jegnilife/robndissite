import React from 'react';
import Navbar from './navbarItems';
import Footer from './footer';
import TopSnippet from './topSnippet';

const healthyAgeingCommitments = [
  'Live safely, comfortably, and confidently in the home they love.',
  'Maintain their independence, health, wellbeing, and quality of life.',
  'Stay connected with family, friends, and their community.',
  'Feel heard, respected, valued, and in control of how they receive support.',
  'Make their own choices and continue living life on their own terms.',
  'Stay active and engaged through meaningful activities and experiences.',
  'Access the health, wellbeing, and community services they need.',
  'Receive compassionate, professional care tailored to their individual needs, goals, and preferences.',
  'Maintain the relationships, routines, cultural connections, and lifestyle that are important to them.',
  'Work towards personal goals, build confidence, strengthen connections, and maintain a sense of purpose.',
  'Enjoy greater dignity, independence, connection, and overall wellbeing.',
];

const careCategories = [
  {
    title: 'Home & Community Services',
    description: 'Supporting everyday living through domestic assistance, meal preparation, transport services, and home maintenance.',
  },
  {
    title: 'Assistive Technology & Home Modifications',
    description: 'Helping older Australians stay safe and independent through home modifications, mobility equipment, and assistive technology.',
  },
  {
    title: 'Advisory & Support Services',
    description: 'Supporting social connection, community participation, wellbeing, and meaningful relationships.',
  },
  {
    title: 'Personal Care & Care Management',
    description: 'Personalised support that respects independence, dignity, and wellbeing, including respite and care management.',
  },
  {
    title: 'Nursing & Clinical Care',
    description: 'Professional care delivered at home, including nursing services, medication management, wound care, and chronic disease management.',
  },
];

const AgedCare = () => (
  <div className="flex-wrap relative">
    <TopSnippet />
    <Navbar />
    <main>
      <section className="h-auto min-h-96 bg-[#C9DDF2] px-6 py-12 md:min-h-[480px] md:px-16 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">Aged care</p>
            <h1 className="mt-4 whitespace-nowrap text-2xl font-bold leading-tight text-[#173F67] md:text-3xl">Care that starts with you.</h1>
            <p className="mt-5 max-w-lg leading-8 text-[#173F67]">
              Personalised aged care and community support to help you live safely, independently, and on your own terms.
            </p>
            <a href="tel:1800800124" className="mt-8 inline-flex items-center rounded-full bg-amber-950 px-8 py-3 font-bold text-white hover:bg-blue-700">
              Call 1800 800 124
              <svg className="ml-3 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
              </svg>
            </a>
          </div>
          <div className="relative max-w-lg justify-self-end overflow-hidden rounded-lg">
            <img src="images/supportIndependentLiving.jpg" alt="Support worker assisting an older person at home" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#173F67]/25">
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">AGED CARE</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E8F2FF] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">Aged care at JEGNI LIFE</p>
          <h2 className="mt-3 text-3xl font-bold text-[#173F67] md:text-4xl">Living with dignity, respect, choice, and independence.</h2>
          <p className="mt-6 leading-8 text-[#173F67]">
            At JEGNI LIFE, we believe every Australian deserves to live with dignity, respect, choice, and independence in the comfort of their own home.
          </p>
          <p className="mt-4 leading-8 text-[#173F67]">
            We provide personalised aged care and community support tailored to each person&apos;s individual needs, goals, preferences, and lifestyle. Our compassionate team works alongside you, your family, and those who are important to you to promote safety, wellbeing, connection, and quality of life.
          </p>
          <p className="mt-4 leading-8 text-[#173F67]">
            Whether you need personal care, assistance with daily living, domestic support, transport, community participation, or clinical nursing care, we are here to support you in living safely, independently, and on your own terms.
          </p>
            </div>
            <div className="flex justify-center rounded-lg bg-[#E8F2FF] p-4 lg:pt-10">
              <img src="images/careEmp.png" alt="Compassionate care and support" className="h-40 w-40 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-14 rounded-lg bg-[#F5FAFF] p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">Our commitment</p>
              <h2 className="mt-3 text-3xl font-bold text-[#173F67]">JEGNI LIFE&apos;s Commitment to Healthy Ageing</h2>
              <p className="mt-5 text-xl font-semibold text-[#173F67]">We support people to:</p>
            </div>
            <div className="flex justify-center">
              <img src="images/commNursing4.jpg" alt="Nurse supporting an older person" className="h-44 w-44 rounded-lg object-cover" />
            </div>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {healthyAgeingCommitments.map((commitment) => (
              <li key={commitment} className="flex items-start gap-3 border-l-2 border-[#173F67] px-4 py-2 text-[#173F67]">
                <span className="font-bold text-[#173F67]">✓</span>{commitment}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 bg-[#C9DDF2] px-7 py-10 text-[#173F67] md:px-12 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">Support when you need it</p>
              <h2 className="mt-3 text-3xl font-bold">We&apos;re Here to Support You</h2>
              <p className="mt-3 max-w-3xl leading-7 text-[#173F67]">
                Taking the first step towards support can feel overwhelming, but you don&apos;t have to do it alone. At JEGNI LIFE, we take the time to listen, understand your individual circumstances, and work alongside you to find support that is right for you and your loved ones. Contact us today for a friendly, no-obligation conversation about how we can support you. Because every person deserves to feel heard, respected, and supported throughout their journey.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="images/empathy.png" alt="Compassionate support conversation" className="h-44 w-44 rounded-lg object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-16 rounded-lg bg-white p-6 md:p-8">
          <h2 className="text-3xl font-bold text-[#173F67]">Categories</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {careCategories.map((category, index) => (
              <article key={category.title} className={`border-t-4 border-[#D6AE38] bg-[#f2faeb] p-6 ${index === careCategories.length - 1 ? 'md:col-span-2 md:w-1/2 md:justify-self-center' : ''}`}>
                <h3 className="text-xl font-bold text-[#173F67]">{category.title}</h3>
                <p className="mt-3 leading-7 text-[#173F67]">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AgedCare;