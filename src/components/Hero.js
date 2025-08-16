import React from 'react';
import { Download, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const contactInfo = [
    { icon: Phone, text: '+91-8130985022', href: 'tel:+918130985022' },
    { icon: Mail, text: 'pspankajsingh395@gmail.com', href: 'mailto:pspankajsingh395@gmail.com' },
    { icon: Linkedin, text: '/in/pankaj-s-9012b0104', href: 'https://linkedin.com/in/pankaj-s-9012b0104' },
    { icon: Github, text: '/pankas', href: 'https://github.com/pankas' },
    { icon: MapPin, text: 'New Delhi, India', href: null },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Pankaj Singh
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-4">
            Frontend Experience Engineer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Creative, Immersive UI Development with React.js / Next.js
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Frontend Specialist with 6+ years designing and engineering scalable, high-performance 
            and immersive web applications. Expert in React.js, Next.js, Redux, TypeScript, 
            and modern frontend architecture.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = process.env.PUBLIC_URL + '/Pankaj_Singh_Updated.pdf';
              link.download = 'Pankaj_Singh_Resume.pdf';
              link.target = '_blank';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
              <contact.icon className="text-purple-400 mb-2" size={24} />
              {contact.href ? (
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-gray-300 hover:text-white text-sm text-center transition-colors duration-200"
                >
                  {contact.text}
                </a>
              ) : (
                <span className="text-gray-300 text-sm text-center">
                  {contact.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 