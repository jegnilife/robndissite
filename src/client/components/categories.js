import React from 'react';
import Navbar from './navbarItems';
import Footer from './footer';
import TopSnippet from './topSnippet';

export const categories = [
  {
    id: 'home-community',
    title: 'HOME & COMMUNITY SERVICES',
    subtitle: 'Supporting Everyday Living',
    description: 'Our Home and Community Services help older Australians maintain their independence, comfort, and confidence in their own homes.',
    items: [
      ['Domestic Assistance', 'domestic-assistance'],
      ['Meal Preparation', 'meal-preparation'],
      ['Transport Services', 'transport-services'],
      ['Home Maintenance', 'home-maintenance'],
    ],
  },
  {
    id: 'assistive-technology',
    title: 'ASSISTIVE TECHNOLOGY & HOME MODIFICATIONS',
    subtitle: 'Making Homes Safer and More Accessible',
    description: 'We help older Australians stay safe and independent through equipment and home modification solutions.',
    detail: 'Our team can assist with arranging assessments, coordinating equipment needs, and recommending suitable solutions to help improve independence, comfort, and safety.',
    items: [
      ['Home Modifications', 'home-modifications'],
      ['Assistive Technology- Mobility and Assistive Equipment', 'assistive-technology'],
    ],
  },
  {
    id: 'advisory-support',
    title: 'ADVISORY & SUPPORT SERVICES',
    subtitle: 'Social Support and Community Connection',
    description: 'We recognise the importance of meaningful relationships, staying connected with others, and participating in the community to support overall health and wellbeing.',
    items: [
      ['Social Support', 'social-support'],
      ['Community Connection', 'community-connection'],
      ['Wellbeing Support', 'wellbeing-support'],
    ],
  },
  {
    id: 'personal-care',
    title: 'PERSONAL CARE & CARE MANAGEMENT',
    subtitle: 'Personalised Care That Respects Your Independence',
    description: 'Our personalised care services are tailored to support your independence, dignity, and wellbeing at home.',
    items: [
      ['Allied Health Coordination', 'allied-health-coordination'],
      ['Respite Care', 'respite-care'],
      ['Care Management', 'care-management'],
    ],
  },
  {
    id: 'nursing-clinical',
    title: 'NURSING & CLINICAL CARE',
    subtitle: 'Professional Clinical Care Delivered at Home',
    description: 'Our Registered Nurses deliver high-quality nursing services to support health, recovery, and wellbeing.',
    steps: [
      ['Step 1 – Consultation', 'Understanding your needs and goals.'],
      ['Step 2 – Assessment', 'Identifying the most suitable supports.'],
      ['Step 3 – Care Planning', 'Developing a personalised service plan.'],
      ['Step 4 – Service Delivery', 'Providing quality care and support.'],
      ['Step 5 – Ongoing Reviews', 'Regular monitoring and plan updates.'],
    ],
    items: [
      ['Nursing Services', 'nursing-services'],
      ['Medication Management', 'medication-management'],
      ['Wound Care', 'wound-care'],
      ['Chronic Disease Management', 'chronic-disease-management'],
    ],
  },
];

const myAgedCareResources = [
  ['What is Support at Home?', 'https://www.myagedcare.gov.au/understanding-support-home'],
  ['My Aged Care', 'https://www.myagedcare.gov.au/'],
  ['Eligibility checker', 'https://www.myagedcare.gov.au/am-i-eligible'],
  ['Fee estimator', 'https://www.myagedcare.gov.au/how-much-will-it-cost'],
  ['Apply for an assessment', 'https://www.myagedcare.gov.au/apply-online'],
];

const Categories = () => (
  <div className="flex-wrap relative">
    <TopSnippet />
    <Navbar />
    <main>
      <section className="bg-[#E8F2FF] px-8 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">Resources</p>
            <h1 className="mt-3 whitespace-nowrap text-2xl font-bold leading-tight text-[#173F67] md:text-4xl">Support for everyday living</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#173F67]">
              Explore helpful My Aged Care information and resources to understand available support and take the next step with confidence.
            </p>
          </div>
          <img src="/images/communitysupport.jpg" alt="People connecting through community support" className="aspect-[4/3] w-full rounded-lg object-cover" />
        </div>
      </section>
      <section className="bg-white px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="border-l-4 border-[#D6AE38] bg-[#F5FAFF] p-7 md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">Helpful information</p>
            <h2 className="mt-3 text-3xl font-bold text-[#173F67]">My Aged Care resources</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#173F67]">Use these resources to learn about Support at Home, check eligibility, estimate fees, or apply for an assessment.</p>
            <ul className="mt-7 grid gap-3 text-[#173F67] sm:grid-cols-2">
            {myAgedCareResources.map(([label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg bg-white px-4 py-3 font-semibold shadow-sm transition hover:bg-[#E8F2FF]">
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

export default Categories;