import React from 'react';
import { ALL_PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

export const Projects: React.FC = () => {
  // Get unique categories
  const categories = Array.from(new Set(ALL_PROJECTS.map(p => p.category)));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Projects</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          A showcase of my engineering projects, competition entries, and technical work.
        </p>
      </div>
      
      <div className="space-y-20">
        {categories.map(category => (
          <div key={category}>
            <h2 className="text-2xl font-bold text-primary mb-8 border-b border-slate-200 pb-2 inline-block pr-8">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ALL_PROJECTS.filter(p => p.category === category).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};