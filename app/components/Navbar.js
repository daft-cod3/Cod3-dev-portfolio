'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50 dark:text-white dark:bg-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Cod3-dev
        </h1>
        <div className="hidden md:flex space-x-6 font-bold">
          <button onClick={() => scrollToSection('hero')} className="hover:text-blue-600 transition duration-500 cursor-pointer">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition duration-500 cursor-pointer">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition duration-500 cursor-pointer">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition duration-500 cursor-pointer">
            Skills
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition duration-500 cursor-pointer">
            Contact
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
             d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t dark:text-white dark:bg-black">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('hero')} className="text-left hover:text-blue-600 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600 transition">
              About
            r</button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-600 transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-blue-600 transition">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 transition">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
