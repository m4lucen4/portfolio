import SectionHeading from '@/components/SectionHeading';
import { portfolios } from '@/constants';
import React from 'react';
import PortfolioItem from './PortfolioItem';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <section className="section-padding max-width">
      <SectionHeading
        title="Mis trabajos"
        subtitle="Estos son algunos de los proyectos en los que he trabajado."
      />
      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,
          1fr))] gap-3 tablet:gap-6"
      >
        {portfolios.slice(0, 3).map((portfolio, index) => (
          <PortfolioItem key={index} portfolio={portfolio} />
        ))}
      </div>
      <Link href={'/portfolio'} className="btn btn-primary mt-10 mx-auto w-max">
        Ver todos los trabajos
      </Link>
    </section>
  );
};

export default Portfolio;
