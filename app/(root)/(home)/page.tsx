import SectionHeading from '@/components/SectionHeading';
import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { benefits } from '@/constants';
import Benefits from './components/Benefits';

const page = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Benefits />
    </>
  );
};

export default page;
