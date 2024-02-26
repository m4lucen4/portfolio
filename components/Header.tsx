import { navLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-peach">
      <Link href="/">
        <h5 className="text-orange text-xl font-semibold">malucena.dev</h5>
      </Link>
      <nav className="flex items-center gap-12 max-tablet:hidden">
        <ul className="flex item-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.url} label={link.label} />
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
