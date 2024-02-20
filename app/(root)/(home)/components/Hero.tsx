import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="flex item-center max-width flex-col-reverse tablet:flex-row mb-10">
      <div className="tablet:w-2/3 mt-10 tablet:mt-0">
        <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
          <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded">
            ¡Hola!
          </p>
          <h1 className="text-grey">malucena.dev</h1>
          <p className="text-grey-600">
            Soy un desarrollador frontend senior especializado en React, Next.js
            y React Native, con una profunda pasión por crear experiencias
            digitales elegantes y funcionales. Con años de experiencia en el
            desarrollo de aplicaciones web y móviles, me dedico a implementar
            las mejores prácticas y metodologías ágiles para entregar proyectos
            de alta calidad. Mi enfoque está en escribir código limpio y
            mantenible, optimizando la interacción del usuario para crear
            soluciones innovadoras y accesibles.
          </p>
        </div>
        <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
          <Link href={'/contact'} className="btn btn-primary">
            <Phone />
            Contacto
          </Link>
          <Link href={'/portfolio'} className="btn">
            Ver trabajos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[400px] rounded-b-2xl overflow-hidden">
        <Image
          src={'/images/hero.jpg'}
          alt="hero"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
