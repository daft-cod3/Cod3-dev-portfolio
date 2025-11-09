'use client';

import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 dark:text-white dark:bg-gray-900">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center my-12 p-6">
          Contact Me
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-black dark:text-white p-8 rounded-lg shadow-lg">
            <div className="mb-4 text-black dark:text-white ">
              <label htmlFor="name" className="block text-black  dark:text-white font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black  dark:text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-black 
               dark:text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black
                 focus:outline-none focus:ring-2 focus:ring-blue-600  dark:text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg
               hover:bg-blue-700 font-semibold4 transition duration-300"
            >
              Send Message
            </button>
            {isSubmitted && (
              <p className="mt-4 text-green-600 text-center">
                Message sent successfully!
              </p>
            )}
          </form>
          <div className="mt-8 text-center">
            <p className="text-black dark:text-white mb-4 font-bold">
              Or reach out directly:
            </p>
            <div className="flex justify-center space-x-4 font-semibold p-6 mb-8">
              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800">
                Email
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
