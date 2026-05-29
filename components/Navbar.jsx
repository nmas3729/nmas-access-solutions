'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black-main/95 backdrop-blur-sm border-b border-grey-metal/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image src="/images/nmasaccesslogo.png" alt="NMAS Access Solutions Logo" width={48} height={48} className="w-12 h-12 object-contain" />
          <div className="flex flex-col justify-center">
            <span className="text-xl font-heading font-bold leading-none mb-1">
              <span className="text-white-clean">NMAS </span>
              <span className="text-gold-primary">Access Solutions</span>
            </span>
            <span className="text-[0.6rem] text-grey-metal tracking-[0.15em] uppercase font-semibold">Division of NMAS Innovations</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-grey-metal hover:text-gold-primary transition-all duration-300 font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+27674877278"
            className="btn-primary text-sm"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white-clean p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-black-main/98 backdrop-blur-md z-40 transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto translate-x-0'
            : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-6 pt-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-grey-metal hover:text-gold-primary transition-all duration-300 font-medium text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+27674877278"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
