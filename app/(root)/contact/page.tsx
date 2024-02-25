import { socialLinks } from '@/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contacto - Miguel Ángel Lucena',
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
          <h2 className="text-grey-700">Contacto</h2>
          <p className="text-grey-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            commodi iure, mollitia beatae nisi quasi ullam architecto, aut
            accusantium ea vero ipsum sed fuga repudiandae doloribus quam modi
            voluptate! Maxime.
          </p>
        </div>
      </section>
      <section className="max-width section-padding flex max-tablet:flex-col gap-16">
        <div className="tablet:max-w-md w-full">
          <div className="space-y-4">
            <div className="box !p-6">
              <p className="text-grey-600">You can emil me here</p>
              <h6 className="text-grey-700">email@gmail.com</h6>
            </div>
            <div className="box !p-6">
              <p className="text-grey-600">Phone</p>
              <h6 className="text-grey-700">email@gmail.com</h6>
            </div>
            <div className="box !p-6">
              <p className="text-grey-600">Location</p>
              <h6 className="text-grey-700">email@gmail.com</h6>
            </div>
            <h6 className="mt-10 mb-3 text-grey-700 max-tablet:text-center">
              Mis redes
            </h6>
            <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="w-10 h-10 bg-purple text-peach flex items-center justify-center rounded"
                >
                  <link.icon strokeWidth={0} fill="currentColor" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="box w-full">
          <form action="" className="space-y-5">
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Apellido" />
            </div>
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Teléfono" />
            </div>
            <textarea
              placeholder="Mensaje"
              className="min-h-[200px]"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;
