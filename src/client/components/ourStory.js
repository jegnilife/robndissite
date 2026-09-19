import React from 'react';
import Navbar from './navbarItems';
import Footer from './footer';
import TopSnippet from './topSnippet';

const whyChooseJegniLife = [
  ['Registered Nurse-Led Services', 'Professional, person-centred support delivered under the clinical oversight of Registered Nurses.'],
  ['Mental Health-Experienced Team', 'Experienced staff who understand and support people living with a wide range of mental health needs and challenges.'],
  ['Qualified and Compassionate Professionals', 'Skilled, experienced, and compassionate professionals who provide support with dignity, empathy, and respect.'],
  ['Tailored Support and Services', 'Support is tailored to each participant\'s individual needs, goals, preferences, circumstances, choice, and control, in accordance with their personalised support plan.'],
  ['Flexible Support Options', 'Flexible services designed to accommodate individual routines, preferences, needs, and changing circumstances.'],
  ['Culturally Inclusive Care', 'Respectful and culturally responsive support that values each person\'s culture, background, beliefs, identity, and lived experience.'],
  ['Safe and Reliable Services', 'A strong commitment to participant safety, wellbeing, dignity, and dependable service delivery.'],
  ['Transparent Communication', 'Clear, respectful, and timely communication with participants, families, carers, and relevant support networks.'],
  ['Commitment to Quality Care', 'Dedicated to delivering high-quality, person-centred support while continuously improving our services and outcomes.'],
  ['Respect for Privacy, Choice and Independence', 'We respect each person\'s privacy, dignity, personal space, independence, preferences, decisions, choice, and control.'],
  ['Collaborative and Family-Centred Approach', 'We work collaboratively with participants, families, carers, and support networks to promote positive outcomes and provide coordinated, holistic support.'],
];

const OurStory = () => (
  <div className="flex-wrap relative">
    <TopSnippet />
    <Navbar />
    <main className="bg-sky-50">
      <section className="w-auto bg-[#E8F2FF] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid w-auto max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="min-w-0 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">Our story</p>
            <h1 className="mt-3 whitespace-nowrap text-lg font-bold text-gray-600 md:text-2xl">Every person has a story. Every story is a life.</h1>
            <div className="mt-8 border-l-4 border-[#D6AE38] pl-5 text-justify text-base leading-8 text-gray-700 md:pl-7">
              <p>
                At JEGNI LIFE, we believe every person deserves to be treated with compassion, dignity, respect, and genuine care.
              </p>
              <p className="mt-4">
                Our journey began in childhood with a simple desire to help others and make a meaningful difference in people&apos;s lives. That passion still guides everything we do today.
              </p>
              <p className="mt-4">
                We understand that every person has a unique story, which is why we provide person-centred support that respects individuality, promotes independence, and empowers people to live with choice and control.
              </p>
              <p className="mt-4 font-semibold text-gray-600">
                Because behind every person is a story. Behind every story is a life.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center">
            <img src="images/aboutus_1.jpg" alt="JEGNI LIFE care team" className="aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
        </div>
      </section>
      <section className="px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">Our approach</p>
            <h2 className="mt-3 whitespace-nowrap text-base font-bold text-gray-600 md:text-3xl">Compassionate care. Genuine support. Your choice. Your control.</h2>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <aside className="border-t-4 border-[#D6AE38] bg-white p-7 lg:sticky lg:top-24">
              <p className="text-xl font-bold text-gray-600">Person-centred support</p>
              <p className="mt-3 leading-7 text-gray-700">Our work begins with listening, understanding, and respecting what matters most to each person.</p>
              <img src="images/clientCen.png" alt="People supporting one another" className="mt-6 h-28 w-28 object-contain" />
            </aside>
            <div className="space-y-6 text-justify leading-8 text-gray-700">
              <p>
                From an early age, we learned that caring for someone is about more than simply providing a service. Often, the greatest difference we can make is simply being there: listening when someone needs to be heard, offering support during life&apos;s challenges, showing kindness when it matters most, and helping people feel valued, respected, and never alone.
              </p>
              <p>
                As that desire grew, so did our vision: to create a care and support organisation where people are never treated as just a number, a diagnosis, or a service.
              </p>
              <p>
                We believe every person has a story. Each story is shaped by unique experiences, strengths, challenges, culture, values, relationships, hopes, and dreams. No two people are the same, and we believe the support they receive should reflect their individuality.
              </p>
              <p>
                That is why, at JEGNI LIFE, support begins with the person, not the service. We take the time to listen, understand what truly matters, and work alongside each individual to provide support that reflects their needs, goals, preferences, circumstances, culture, and right to choice and control.
              </p>
              <p>
                Our approach is person-centred, respectful, and non-judgemental. We strive to create an environment where people feel safe to be themselves, empowered to make their own choices, and supported in ways that respect their privacy, independence, and freedom.
              </p>
              <p>
                Our multidisciplinary team includes Registered Nurses, Occupational Therapists, Physiotherapists, Social Workers, Counsellors, mental health professionals, support workers and other experienced practitioners who bring together professional expertise and genuine compassion. We believe the best support combines professional knowledge with meaningful human connection, recognising the person behind the need and building on their strengths.
              </p>
              <p>
                Whether someone needs everyday assistance, community participation, allied health services, clinical nursing care, mental health support, or specialised services, we are here to make the journey safer, easier, and more empowering.
              </p>
              <p>
                We work alongside individuals, families, carers, and support networks while always respecting each person&apos;s voice, choices, and right to make decisions about their own life. Our role is not to tell people how to live, but to listen, support, encourage, and walk alongside them as they build confidence, maintain independence, pursue their goals, and strengthen their wellbeing.
              </p>
              <p>
                For us, JEGNI LIFE is more than a care provider. It is a commitment to caring with compassion, serving with integrity, and treating every person with the dignity, privacy, freedom, and respect they deserve.
              </p>
              <p>
                Every life deserves to be heard without judgement, respected without conditions, and supported without losing its freedom.
              </p>
              <p className="font-semibold text-gray-600">
                Compassionate Care. Genuine Support. Your Choice. Your Control.<br />
                One Person. One Story. One Life at a Time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 border-t border-[#D6AE38] pt-12">
        <div className="mx-auto max-w-6xl px-6 md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">Why JEGNI LIFE</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-600 md:text-4xl">Why Choose JEGNI LIFE?</h2>
          <img src="images/empathy.png" alt="Compassionate support conversation" className="mt-8 h-64 w-full max-w-3xl rounded-lg object-cover" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {whyChooseJegniLife.map(([title, description], index) => (
              <article key={title} className={`border-l-4 border-[#D6AE38] bg-white p-6 ${index === whyChooseJegniLife.length - 1 ? 'md:col-span-2 md:w-1/2 md:justify-self-center' : ''}`}>
                <h3 className="text-xl font-bold text-gray-600">{title}</h3>
                <p className="mt-3 leading-7 text-gray-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default OurStory;