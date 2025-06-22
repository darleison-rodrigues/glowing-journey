// src/components/LanguageSwitcher.tsx
'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa'; // Globe for language, Chevron for dropdown

const languages = [
  { code: 'en', name: 'English', href: '/' }, // Assuming root is English
  { code: 'fr', name: 'français', href: '/fr' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLang = 'en'; // You'd likely get this from Next.js i18n config or URL

  const activeLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-medium-gray hover:bg-light-slate-blue transition-colors duration-200"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <FaGlobe className="text-electric-blue text-lg" />
        <span className="font-semibold">{activeLanguage.name}</span>
        <FaChevronDown className={`ml-1 text-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-40 bg-pure-white rounded-lg shadow-lg-smooth z-20 overflow-hidden animate-fadeIn"
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <Link
                href={lang.href}
                className={`block px-4 py-3 text-dark-charcoal hover:bg-light-slate-blue ${lang.code === currentLang ? 'bg-light-slate-blue text-electric-blue font-bold' : ''} transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {lang.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}