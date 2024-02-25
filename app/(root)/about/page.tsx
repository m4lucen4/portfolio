import Milstone from '@/components/milstone';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sobre mi - Miguel Ángel Lucena',
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding flex flex-col tablet:flex-row gap-20 items-center">
        <div className="relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px]">
          <Image
            src={'/images/about.png'}
            fill
            alt="about"
            className="object-cover"
          />
        </div>
        <div className="tablet:w-1/2">
          <div className="space-y-3 max-tablet:text-center flex flex-col">
            <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded tablet:w-max max-tablet:mx-auto">
              Este soy yo!
            </p>
            <h1 className="text-grey-700">Soy Miguel Ángel Lucena</h1>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              est quibusdam numquam quos ex, laboriosam accusamus beatae atque
              reiciendis illum sapiente, accusantium voluptatum ab assumenda
              minus, nam explicabo? Praesentium, sequi.
            </p>
          </div>
          <div
            className="bg-peach-400 rounded-lg tablet:rounded-none tablet:bg-transparent tablet:border-t-2
          tablet:border-b-2 tablet:border-purple w-full py-8 px-10 mt-14 tablet:mt-24 gap-12 flex flex-col tablet:flex-row"
          >
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Proyectos completados</p>
            </div>
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                48 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Clientes satisfechos</p>
            </div>
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                6 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Años de experiencia</p>
            </div>
          </div>
        </div>
      </section>
      <Milstone />
    </>
  );
};

export default page;
