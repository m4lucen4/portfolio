import Image from 'next/image';
import React from 'react';
import PortfolioSection from './components/PortfolioSection';
import { portfolios } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Miguel Ángel Lucena',
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image
              src={'/icons/stars.svg'}
              width={35}
              height={35}
              alt="Stars"
            />
          </div>
          <h2 className="text-grey-700">Mis trabajos</h2>
          <p className="text-grey-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            commodi iure, mollitia beatae nisi quasi ullam architecto, aut
            accusantium ea vero ipsum sed fuga repudiandae doloribus quam modi
            voluptate! Maxime.
          </p>
        </div>
      </section>
      <PortfolioSection data={portfolios} title={'Mi trabajos más recientes'} />
      <PortfolioSection
        data={portfolios.slice(3).concat(portfolios.slice(0, 3))}
        title={'Trabajos anteriores'}
      />
    </>
  );
};

export default page;
