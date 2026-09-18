import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './navbarItems';
import Footer from './footer';
import TopSnippet from './topSnippet';
import { categories } from './categories';

const itemContent = {
  'domestic-assistance': 'Practical help with household tasks so you can remain comfortable, independent, and confident at home.',
  'meal-preparation': 'Support with planning and preparing meals that suit your preferences, routines, and wellbeing needs.',
  'transport-services': 'Reliable support to attend appointments, access essential services, and stay connected with your community.',
  'home-maintenance': 'Help with everyday home maintenance so your living environment remains safe, comfortable, and accessible.',
  'home-modifications': 'Thoughtful changes to your home that improve safety, accessibility, comfort, and independence.',
  'assistive-technology': 'Guidance with mobility and assistive equipment, including help coordinating assessments and suitable solutions.',
  'social-support': 'Companionship and practical support that help you stay connected, engaged, and involved in daily life.',
  'community-connection': 'Support to participate in community activities and maintain meaningful relationships with others.',
  'wellbeing-support': 'Person-centred support that promotes emotional wellbeing, confidence, connection, and quality of life.',
  'allied-health-coordination': 'Coordination with allied health professionals to help you access the advice and services that support your goals.',
  'respite-care': 'Short-term support that gives families and carers time to rest while providing dependable care and companionship.',
  'care-management': 'Coordinated support that keeps your services organised, responsive, and aligned with your individual plan.',
  'nursing-services': 'Professional nursing care delivered at home to support health, recovery, comfort, and wellbeing.',
  'medication-management': 'Support to help you understand, organise, and safely manage your medications as part of your care.',
  'wound-care': 'Clinical wound care delivered with dignity, attention, and a focus on healing and comfort.',
  'chronic-disease-management': 'Ongoing support for managing chronic health conditions and maintaining your wellbeing at home.',
};

const CategoryDetail = () => {
  const { itemId } = useParams();
  const category = categories.find((entry) => entry.id === itemId);
  const parentCategory = categories.find((category) => category.items.some(([, slug]) => slug === itemId));
  const item = parentCategory?.items.find(([, slug]) => slug === itemId);

  if (category) {
    return (
      <div className="flex-wrap relative">
        <TopSnippet />
        <Navbar />
        <main>
          <section className="bg-[#E8F2FF] px-8 py-20 md:px-16">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">Aged Care</p>
              <h1 className="mt-4 text-4xl font-bold text-[#173F67] md:text-6xl">{category.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#173F67]">{category.subtitle}</p>
            </div>
          </section>
          <section className="mx-auto max-w-5xl px-6 py-16 md:px-16">
            <p className="max-w-3xl text-lg leading-8 text-[#173F67]">{category.description}</p>
            {category.detail && (
              <p className="mt-5 max-w-3xl leading-8 text-[#173F67]">{category.detail}</p>
            )}
            <h2 className="mt-10 text-3xl font-bold text-[#173F67]">Services</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {category.items.map(([label, slug]) => (
                <li key={slug} className="border-l-2 border-[#173F67] px-4 py-2">
                  <Link to={`/resources/${slug}`} className="font-semibold text-[#173F67] underline-offset-4 hover:underline">{label}</Link>
                </li>
              ))}
            </ul>
            {category.steps && (
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-[#173F67]">How We Work</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-5">
                  {category.steps.map(([title, description]) => (
                    <article key={title} className="bg-[#372540] p-5 text-white">
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-4 leading-7">{description}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
            <Link to="/resources" className="mt-8 inline-block font-semibold text-[#173F67] underline underline-offset-4">Back to Resources</Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (!parentCategory || !item) {
    return <p className="p-8 text-[#173F67]">This category service could not be found.</p>;
  }

  return (
    <div className="flex-wrap relative">
      <TopSnippet />
      <Navbar />
      <main>
        <section className="bg-[#E8F2FF] px-8 py-20 md:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">{parentCategory.title}</p>
            <h1 className="mt-4 text-4xl font-bold text-[#173F67] md:text-6xl">{item[0]}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#173F67]">{itemContent[itemId]}</p>
          </div>
        </section>
        <section className="mx-auto max-w-5xl px-6 py-16 md:px-16">
          <h2 className="text-3xl font-bold text-[#173F67]">{parentCategory.subtitle}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#173F67]">{parentCategory.description}</p>
          <Link to="/resources" className="mt-8 inline-block font-semibold text-[#173F67] underline underline-offset-4">Back to Resources</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;