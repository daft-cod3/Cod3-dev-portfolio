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
    <section className="pt-20 pb-10 dark:text-white dark:bg-gray-900">
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
              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6m8 0H8" />
                </svg>
                <span>Email</span>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M22.23 0H1.77C.8 0 0 .8 0 1.78v20.44c0 .98.8 1.78 1.78 1.78h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.23 0zM7.06 20.45H3.55v-9.3h3.51v9.3zM5.3 9.98a2.04 2.04 0 110-4.07 2.04 2.04 0 010 4.07zM20.45 20.45h-3.51v-4.93c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.63v5h-3.5v-9.3h3.36v1.27h.05c.47-.89 1.63-1.82 3.35-1.82 3.58 0 4.24 2.36 4.24 5.43v4.42z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" >
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.33-1.76c-1.09-.75.08-.74.08-.74a2.52 2.52 0 011.83 1.23 2.58 2.58 0 003.52 1 2.6 2.6 0 01.77-1.62c-2.66-.3-5.46-1.34-5.46-5.95a4.65 4.65 0 011.25-3.22 4.32 4.32 0 01.12-3.18s1.02-.33 3.34 1.23a11.59 11.59 0 016.08 0c2.31-1.56 3.33-1.23 3.33-1.23a4.32 4.32 0 01.13 3.18 4.64 4.64 0 011.24 3.22c0 4.62-2.8 5.64-5.47 5.94a2.91 2.91 0 01.83 2.27v3.37c0 .32.22.69.83.57A12 12 0 0012 0z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
