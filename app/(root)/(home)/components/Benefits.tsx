import SectionHeading from '@/components/SectionHeading';
import { benefits } from '@/constants';
import React from 'react';

const Benefits = () => {
  return (
    <section className="max-width section-padding">
      <SectionHeading
        title="Beneficios"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,
          1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6"
      >
        {benefits.slice(0, 2).map((benefit, index) => (
          <div key={index} className="box">
            <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
            <p className="text-grey-600">{benefit.description}</p>
          </div>
        ))}
      </div>
      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,
          1fr))] gap-3 tablet:gap-6"
      >
        {benefits.slice(2).map((benefit, index) => (
          <div key={index} className="box">
            <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
            <p className="text-grey-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
