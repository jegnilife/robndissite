import React from 'react';
import { Link } from 'react-router-dom';
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
    items: [
      ['Home Modifications', 'home-modifications'],
      ['Assistive Technology - Mobility and Assistive Equipment', 'assistive-technology'],
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
    items: [
      ['Nursing Services', 'nursing-services'],
      ['Medication Management', 'medication-management'],
      ['Wound Care', 'wound-care'],
      ['Chronic Disease Management', 'chronic-disease-management'],
    ],
  },
];

const Categories = () => (
  <div className="flex-wrap relative">
    <TopSnippet />
    <Navbar />
    <main>
      <section className="bg-[#E8F2FF] px-8 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">Categories</p>
          <h1 className="mt-3 text-4xl font-bold text-[#173F67] md:text-5xl">Support for everyday living.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#173F67]">
            Explore the home, community, personal care, and clinical support services available through JEGNI LIFE.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <article id={category.id} key={category.id} className="border-t-4 border-[#173F67] bg-[#f2faeb] p-7 scroll-mt-24">
              <h2 className="text-2xl font-bold text-[#173F67]">{category.title}</h2>
              <h3 className="mt-4 text-lg font-semibold text-[#173F67]">{category.subtitle}</h3>
              <p className="mt-3 leading-7 text-[#173F67]">{category.description}</p>
              <ul className="mt-5 space-y-2">
                {category.items.map(([item, slug]) => (
                  <li key={slug} className="flex items-start gap-3 text-[#173F67]">
                    <span className="font-bold">✓</span>
                    <Link to={`/categories/${slug}`} className="font-semibold underline-offset-4 hover:underline">{item}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Categories;