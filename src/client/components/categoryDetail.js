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
  const parentCategory = categories.find((category) => category.items.some(([, slug]) => slug === itemId));
  const item = parentCategory?.items.find(([, slug]) => slug === itemId);

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
          <Link to="/categories" className="mt-8 inline-block font-semibold text-[#173F67] underline underline-offset-4">Back to Categories</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;