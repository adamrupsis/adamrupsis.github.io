import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { Icon } from './Icon';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link 
      to={`/projects/${project.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1 block text-left"
    >
      <div className="relative overflow-hidden h-48 md:h-64 bg-slate-100 flex items-center justify-center">
        {!imageError ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-slate-400 flex flex-col items-center">
             <Icon name="close" size={32} className="opacity-20 mb-2" />
             <span className="text-xs">Image unavailable</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-slate-600 mb-4 line-clamp-2 text-sm leading-relaxed">
          {project.shortDescription}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-slate-100 text-slate-400 text-xs font-medium rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <span 
            className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-blue-700 transition-colors"
          >
            View Details <Icon name="arrow-right" size={16} className="ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};