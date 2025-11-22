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
    <>
      <section className="bg-black text-white py-26 px-16">
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
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-400 cursor-pointer"
            >
              View my latest Project
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center p-8">
            <div className="pulse-glow rounded-full border-4 border-white">
              <Image
                src={hero.image}
                alt={hero.name}
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .pulse-glow {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px 6px rgba(255, 255, 255, 0.75);
          }
          100% {
            box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.3);
          }
        }
      `}</style>
    </>
  );
}
