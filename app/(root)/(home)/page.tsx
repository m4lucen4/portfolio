import SectionHeading from '@/components/SectionHeading';
import React from 'react';
import Hero from '../../../components/hero';
import Skills from '../../../components/skills';
import Benefits from '../../../components/benefits';
import Portfolio from '../../../components/portfolio';
import Testimonials from '../../../components/testimonials';
import Faqs from '@/components/faqs';

const page = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default page;
