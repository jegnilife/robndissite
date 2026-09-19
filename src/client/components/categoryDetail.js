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

const categoryImages = {
  'home-community': ['/images/supportIndependentLiving.jpg', 'Support worker assisting an older person at home'],
  'assistive-technology': ['/images/supportIndependentLiving.jpg', 'Support worker helping an older person at home'],
  'advisory-support': ['/images/communitysupport.jpg', 'People connecting through community support'],
  'personal-care': ['/images/commNursing4.jpg', 'Nurse supporting an older person'],
  'nursing-clinical': ['/images/commNursing4.jpg', 'Nurse providing clinical care'],
};

const getCategoryPath = (categoryId) => `/aged-care/${categoryId}`;

const CategoryDetail = () => {
  const { itemId } = useParams();
  const category = categories.find((entry) => entry.id === itemId);
  const parentCategory = categories.find((category) => category.items.some(([, slug]) => slug === itemId));
  const item = parentCategory?.items.find(([, slug]) => slug === itemId);
  const pageCategory = category || parentCategory;
  const [categoryImage, categoryImageAlt] = categoryImages[pageCategory?.id] || [];

  if (category) {
    return (
      <div className="flex-wrap relative">
        <TopSnippet />
        <Navbar />
        <main>
          <section className="bg-[#E8F2FF] px-6 py-12 md:px-16 md:py-16">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="border-l-4 border-[#D6AE38] pl-6 md:pl-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">Aged Care</p>
                <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#173F67] md:text-4xl">{category.title}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#173F67]">{category.subtitle}</p>
              </div>
              <img src={categoryImage} alt={categoryImageAlt} className="aspect-[4/3] w-full rounded-lg object-cover" />
            </div>
          </section>
          <section className="bg-white px-6 py-16 md:px-16">
            <div className="mx-auto max-w-6xl">
            <p className="max-w-3xl text-lg leading-8 text-[#173F67]">{category.description}</p>
            {category.detail && (
              <p className="mt-5 max-w-3xl leading-8 text-[#173F67]">{category.detail}</p>
            )}
            <h2 className="mt-10 text-3xl font-bold text-[#173F67]">Services</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {category.items.map(([label, slug]) => (
                <li key={slug} className="border-l-2 border-[#173F67] px-4 py-2">
                  <Link to={`${getCategoryPath(category.id)}/${slug}`} className="font-semibold text-[#173F67] underline-offset-4 hover:underline">{label}</Link>
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
            <Link to="/aged-care" className="mt-8 inline-block font-semibold text-[#173F67] underline underline-offset-4">Back to Aged Care</Link>
            </div>
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
        <section className="bg-[#E8F2FF] px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="border-l-4 border-[#D6AE38] pl-6 md:pl-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F67]">{parentCategory.title}</p>
              <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#173F67] md:text-4xl">{item[0]}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#173F67]">{itemContent[itemId]}</p>
            </div>
            <img src={categoryImage} alt={categoryImageAlt} className="aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
        </section>
        <section className="bg-white px-6 py-16 md:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#173F67]">{parentCategory.subtitle}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#173F67]">{parentCategory.description}</p>
            <Link to="/aged-care" className="mt-8 inline-block font-semibold text-[#173F67] underline underline-offset-4">Back to Aged Care</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;