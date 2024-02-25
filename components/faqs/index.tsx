import React from 'react';
import SectionHeading from '../SectionHeading';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { faqs } from '@/constants';
import Accordion from './Accordion';

const Faqs = () => {
  return (
    <section className="max-width section-padding overflow-hidden">
      <SectionHeading title="Preguntas frecuentes" subtitle="" />
      <div className="flex flex-col tablet:flex-row gap-5 items-start">
        <div className="box">
          <Accordion data={faqs} />
        </div>
        <div className="box flex flex-col gap-5 tablet:max-w-md">
          <div className="w-16 h-16 rounded bg-purple text-peach-100 flex items-center justify-center flex-shrink-0 mb-2">
            <Star size={30} fill="currentColor" />
          </div>
          <div>
            <h5 className="text-grey-700 mb-2">¿Tienes alguna pregunta?</h5>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            </p>
          </div>
          <Link href={'/contact'} className="btn btn-primary w-max">
            Contactar <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
