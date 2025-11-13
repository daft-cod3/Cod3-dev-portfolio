'use client'

import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';
import {useState } from 'react'

export default function Hero() {
  const { hero } = portfolioData;

  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
            {hero.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {hero.title}
          </h2>
          <p className="text-xl mb-8">
            {hero.description}
          </p>
          <button onClick={() => scrollToSection('projects')} 
          className="bg-white text-blue-600 px-6 py-3 rounded-lg 
          font-semibold hover:bg-gray-200 transition duration-400 cursor-pointer">
            View my latest Project
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={hero.image}
            alt={hero.name}
            width={300}
            height={300}
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}
