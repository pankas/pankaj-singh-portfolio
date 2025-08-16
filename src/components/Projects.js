import React, { useState } from 'react';
import { Globe, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'FanCode',
      company: 'FanCode, Mumbai',
      role: 'SDE-2 Frontend',
      duration: 'Jul 2021 - Present',
      location: 'Mumbai',
      description: 'Contributed to both e-commerce and content platforms at FanCode, driving scalable frontend development across storefronts, CMS systems, and streaming workflows. Designed and implemented features that enhanced user engagement, optimized performance, and supported new revenue models through seamless payment integrations and interactive user experiences.',
      highlights: [
        'Migrated Shopify store to high-performance React.js frontend integrated with Magento backend, enabling richer UI interactions',
        'Designed scalable, themeable architecture using Figma API and Styled Components for white-labeled multi-tenant storefronts (ICC, IPL teams)',
        'Built in-house CMS from scratch using React and Material-UI, supporting large media uploads and complex form workflows',
        'Engineered multi-pane, resizable interfaces using Material-UI layout components for dynamic content areas',
        'Developed Canvas-based jersey personalization tool with drag-and-drop and dynamic positioning',
        'Refactored legacy frontend to Redux Toolkit + React Suspense, optimizing rendering and maintainability',
        'Implemented custom SSR solution, improving SEO and boosting Lighthouse score from 34% to 85%',
        'Integrated AI-driven conversational UIs with LLMs/AI agents for intelligent, interactive experiences',
        'Implemented real-time features using WebSockets for live scoring updates and streaming metadata synchronization',
        'Architected GraphQL schema for unified metadata across React Native, Android TV, and web',
        'Developed payment-related features for subscriptions and in-app purchases to enhance revenue channels',
        'Optimized streaming TV apps reducing frame drops by 90–95% using segment virtualization',
        'Added multi-modal haptic feedback for iOS in Swift to improve interactive engagement'
      ],
      technologies: ['React.js','Kotlin', 'Next.js', 'Redux', 'TypeScript', 'Material-UI', 'GraphQL', 'WebSockets', 'Canvas API', 'Swift'],
      category: 'professional',
      links: {
        company: 'https://fancode.com'
      }
    },
    {
      id: 2,
      title: 'Indoor Navigation Platform',
      company: 'IIT Delhi, Assistech Lab',
      role: 'Project Associate (Full Stack Developer)',
      duration: 'Aug 2019 - Jul 2021',
      location: 'New Delhi',
      description: 'Engineered indoor navigation platform using React.js, Kotlin, Express.js, and Neo4j.',
      highlights: [
        'Migrated tagging UI to HTML5 Canvas with interactive floorplan editing',
        'Built PWA with AR.js for room detection and native Android BLE positioning',
        'Implemented i18n and RTL support for localization and cultural adaptability',
        'Developed multi-modal features (voice commands, audio, video aid) for accessibility',
        'Used Three.js to render 3D GLTF models in real-world mapping context'
      ],
      technologies: ['React.js', 'Kotlin', 'Express.js', 'Neo4j', 'Canvas API', 'AR.js', 'Three.js', 'PWA'],
      category: 'research',
      links: {
        company: 'https://assistech.iitd.ac.in'
      }
    },
    {
      id: 3,
      title: 'Trading Algorithm Platform',
      company: 'Kuants, New Delhi',
      role: 'Software Developer Intern',
      duration: 'Jan 2019 - Jun 2019',
      location: 'New Delhi',
      description: 'Migrated Django monolith to React+Django SPA architecture.',
      highlights: [
        'Built reusable UI components and interactive typeahead editor for trading algorithms',
        'Improved user experience with modern React-based interface'
      ],
      technologies: ['React.js', 'Django', 'Python', 'JavaScript'],
      category: 'internship',
      links: {}
    },
    {
      id: 4,
      title: 'CosBazaar Marketplace',
      company: 'Independent Venture',
      role: 'Founder & Developer',
      duration: 'Aug 2018 - Dec 2018',
      location: 'New Delhi',
      description: 'Developed a WooCommerce + React-based product listing platform with order tracking.',
      highlights: [
        'Envisioned marketplace for handcrafted products connecting local retail vendors to consumers',
        'Gained hands-on experience integrating seller portals and APIs, including Amazon FBA and Flipkart Marketplace',
        'Integrated Unicommerce for order management and fulfillment'
      ],
      technologies: ['React.js', 'WooCommerce', 'WordPress', 'PHP', 'JavaScript'],
      category: 'entrepreneurial',
      links: {}
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'professional', label: 'Professional' },
    { id: 'research', label: 'Research' },
    { id: 'entrepreneurial', label: 'Entrepreneurial' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects & Experience
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            A showcase of my professional journey and key projects across different domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700/70 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'professional' ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' :
                      project.category === 'research' ? 'bg-green-600/20 text-green-300 border border-green-500/30' :
                      project.category === 'entrepreneurial' ? 'bg-orange-600/20 text-orange-300 border border-orange-500/30' :
                      'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {project.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {project.location}
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {project.links.company && (
                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <a
                      href={project.links.company}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Globe size={16} />
                      Visit Company
                    </a>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-purple-400 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 