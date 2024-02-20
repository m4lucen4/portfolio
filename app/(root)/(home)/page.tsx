import SectionHeading from '@/components/SectionHeading';
import { skills } from '@/constants';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <>
      {/* Hero section */}
      <section className="flex item-center max-width flex-col-reverse tablet:flex-row mb-10">
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded">
              ¡Hola!
            </p>
            <h1 className="text-grey">malucena.dev</h1>
            <p className="text-grey-600">
              Soy un desarrollador frontend senior especializado en React,
              Next.js y React Native, con una profunda pasión por crear
              experiencias digitales elegantes y funcionales. Con años de
              experiencia en el desarrollo de aplicaciones web y móviles, me
              dedico a implementar las mejores prácticas y metodologías ágiles
              para entregar proyectos de alta calidad. Mi enfoque está en
              escribir código limpio y mantenible, optimizando la interacción
              del usuario para crear soluciones innovadoras y accesibles.
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
      {/* Skills section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="Habilidades creativas"
          subtitle="Innovando en el Desarrollo Web y Móvil con React, React Native y Next.js"
        />
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]
        gap-3 tablet:gap-6"
        >
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={35}
                  height={35}
                />
              </div>
              <div className="text-center">
                <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                <p className="text-grey-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
