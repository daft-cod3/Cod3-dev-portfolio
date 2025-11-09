import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;
  return (
    <section className="py-20 bg-gray-100 dark:bg-black dark:text-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            {about.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {about.skills.map((skill, index) => (
              <span key={index} className="bg-blue-700 text-white px-4 p-4 font-semibold
               rounded-lg   hover:scale-105 cursor-default transition-all duration-500">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
