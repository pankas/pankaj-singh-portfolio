import React from 'react';
import { Award, Users, Code, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Expertise',
      description: 'Expert in React.js, Next.js, Redux, TypeScript, and modern frontend architecture'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Implemented custom SSR solution, improving Lighthouse score from 34% to 85%'
    },
    {
      icon: Users,
      title: 'Immersive UI Development',
      description: 'Crafted fluid, multi-pane, conversational UIs and canvas-based tools'
    },
    {
      icon: Award,
      title: 'AI Integration',
      description: 'Integrated AI-driven conversational UIs with LLMs/AI agents for intelligent experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Professional Summary
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Frontend Specialist with 6+ years designing and engineering scalable, high-performance 
              and immersive web applications. Expert in React.js, Next.js, Redux, TypeScript, 
              and modern frontend architecture.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Proven ability to craft fluid, multi-pane, conversational UIs, canvas-based tools, 
              and multi-modal experiences (voice, audio, haptic) integrated with AI/LLMs. Strong 
              in performance optimization (SSR, Lighthouse), accessibility, and real-time collaboration.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently working as SDE-2 Frontend at FanCode, Mumbai, where I've migrated Shopify 
              stores to high-performance React.js frontends and built scalable, themeable architectures 
              for multi-tenant storefronts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-600 rounded-lg mr-4">
                    <highlight.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {highlight.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-lg border border-purple-500/30">
              <h4 className="text-xl font-semibold text-white mb-2">Performance Boost</h4>
              <p className="text-gray-300">Improved Lighthouse score from 34% to 85%</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-lg border border-purple-500/30">
              <h4 className="text-xl font-semibold text-white mb-2">Streaming Optimization</h4>
              <p className="text-gray-300">Reduced frame drops by 90-95% in TV apps</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-lg border border-purple-500/30">
              <h4 className="text-xl font-semibold text-white mb-2">Multi-Platform</h4>
              <p className="text-gray-300">Architected GraphQL schema for React Native, Android TV, and web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 