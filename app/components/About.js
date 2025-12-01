import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;
  return (
      <section className="text-white py-26 px-16" style={{ backgroundColor: 'black', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}>
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
