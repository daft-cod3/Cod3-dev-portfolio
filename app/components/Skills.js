import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  return (
    <section className="py-20 bg-gray-100 dark:text-white dark:bg-black cursor-default">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:text-white dark:bg-black p-6 
            rounded-lg shadow-lg dark:shadow-blue-500">
              <h3 className="text-lg font-semibold mb-4">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
