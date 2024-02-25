import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="max-w-xl mx-auto mt-16 mb-16 text-center">
      <h2 className="text-grey-700 mb-2">{title}</h2>
      <p className="text-grey-600">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
