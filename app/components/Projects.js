import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  return (
    <section className="py-20 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-black dark:text-white ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg 
            overflow-hidden hover:shadow-xl transition duration-300 dark:bg-black dark:text-white">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 dark:text-white text-black">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold hover"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
