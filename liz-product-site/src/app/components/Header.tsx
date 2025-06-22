// src/components/Header.tsx
'use client'; // This directive is crucial for client-side interactivity like hover effects and mobile menu

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For mobile menu toggle
import LanguageSwitcher from './LanguageSwitcher'; // Import the new LanguageSwitcher

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Explore', href: '/explore' }, // Our Commerce Query product page
    { name: 'Resources', href: '/resources' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-pure-white shadow-smooth">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo (Image only) */}
        <Link href="/" className="flex items-center group"> {/* Removed space-x-3 and span for text */}
          <Image
            src="/logo.svg" // Path to your Embed IQ Inc. logo SVG
            alt="Embed IQ Inc. Logo"
            width={200} // Adjust width as needed for the full logo
            height={50} // Adjust height as needed
            className="transition-transform duration-300 group-hover:scale-105" // Keep hover effect
          />
          {/* Removed: <span className="text-3xl font-extrabold text-dark-charcoal transition-all duration-300 group-hover:text-electric-blue">Embed IQ Inc.</span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative text-dark-charcoal font-semibold text-lg py-2 transition-all duration-300 hover:text-electric-blue group"
                >
                  {link.name}
                  {/* Subtle underline on hover/active */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Right-aligned elements: Language Switcher & Contact Button */}
          <div className="flex items-center space-x-4 ml-8"> {/* Added ml-8 for spacing */}
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="bg-electric-blue text-pure-white px-6 py-2.5 rounded-full font-semibold shadow-smooth hover:bg-amethyst-purple hover:shadow-lg-smooth transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitcher /> {/* Include language switcher in mobile header too */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-dark-charcoal text-3xl focus:outline-none focus:ring-2 focus:ring-electric-blue p-2 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-pure-white shadow-lg-smooth py-6 animate-slideDown">
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-dark-charcoal text-xl font-medium block py-2 hover:text-electric-blue transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-electric-blue text-pure-white px-8 py-3 rounded-full font-semibold shadow-smooth hover:bg-amethyst-purple transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}