import React from 'react';
import { Code, Database, Cloud, TestTube, Users, Shield, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Styled Components', 'Material-UI (MUI)', 'Tailwind CSS', 'Canvas API', 'Bootstrap', 'Webpack', 'React Native', 'Kotlin', 'Swift', 'Three.js', 'AR.js', 'RsPack', 'Web Security']
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Neo4j', 'Redis']
    },
    {
      icon: Cloud,
      title: 'CI/CD & DevOps',
      skills: ['Git', 'GitHub Actions', 'Jenkins', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      icon: TestTube,
      title: 'Testing',
      skills: ['Jest', 'Mocha']
    },
    {
      icon: Users,
      title: 'Practices',
      skills: ['SOLID', 'TDD', 'Agile (SCRUM/Kanban)', 'Trunk-based Dev', 'A/B Testing']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Comprehensive expertise across frontend, backend, and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-600 rounded-lg mr-4">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Frontend Development</h4>
              <p className="text-gray-300 text-sm">React.js, Next.js, TypeScript</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">UI/UX Design</h4>
              <p className="text-gray-300 text-sm">Immersive, Multi-modal Experiences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Performance</h4>
              <p className="text-gray-300 text-sm">SSR, Optimization, Lighthouse</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Best Practices</h4>
              <p className="text-gray-300 text-sm">SOLID, TDD, Agile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 