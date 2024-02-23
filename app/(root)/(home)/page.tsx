import SectionHeading from '@/components/SectionHeading';
import React from 'react';
import Hero from '../../../components/hero';
import Skills from '../../../components/skills';
import Benefits from '../../../components/benefits';
import Portfolio from '../../../components/portfolio';

const page = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Benefits />
      <Portfolio />
    </>
  );
};

export default page;
