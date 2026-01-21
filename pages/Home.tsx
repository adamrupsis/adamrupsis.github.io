import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { Icon } from '../components/Icon';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Adam Rupsis
          </h1>
          <p className="text-lg text-slate-700 max-w-lg leading-relaxed border-l-4 border-gtgold pl-4">
            Aerospace engineering BS/MS student at the Georgia Institute of Technology with experience in aircraft design, team leadership, and flight testing. Passionate about contributing to the development of advanced flight systems, particularly high-efficiency airframes and autonomous control architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/projects"
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors shadow-lg shadow-primary/20 text-center"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 bg-white text-primary border border-primary/20 rounded-lg font-medium hover:bg-slate-50 transition-colors text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-gtgold/30 rounded-full blur-3xl -z-10 transform scale-90 translate-y-10"></div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Adam Rupsis" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Work</h2>
              <p className="text-slate-600 max-w-xl">
                A selection of my recent projects.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="hidden md:flex items-center text-primary font-medium hover:text-gtgold transition-colors"
            >
              View all projects <Icon name="arrow-right" size={20} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary font-medium hover:text-gtgold transition-colors"
            >
              View all projects <Icon name="arrow-right" size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};