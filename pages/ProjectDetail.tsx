import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_PROJECTS } from '../constants';
import { Icon } from '../components/Icon';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = ALL_PROJECTS.find((p) => p.id === id);
  const hasMultipleImages = project?.images && project.images.length > 1;

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
    setImageError(false);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Not Found</h2>
        <p className="text-slate-600 mb-8">The project you are looking for doesn't exist or has been removed.</p>
        <Link 
          to="/projects" 
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const currentImageUrl = (project.images && project.images.length > 0) 
    ? project.images[currentImageIndex] 
    : project.imageUrl;

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
      setImageError(false);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
      setImageError(false);
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* Back Link */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-slate-500 hover:text-primary transition-colors mb-8 group"
      >
        <div className="mr-2 p-1 rounded-full bg-slate-100 group-hover:bg-blue-50 transition-colors">
          <Icon name="arrow-right" size={16} className="transform rotate-180" />
        </div>
        Back
      </button>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
          <span className="flex items-center">
            <Icon name="calendar" size={14} className="mr-1" />
            {project.date}
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
          <span className="font-medium text-gtgold">{project.category}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {project.title}
        </h1>
        
        <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-gtgold pl-6">
          {project.shortDescription}
        </p>
      </header>

      {/* Main Image / Slideshow */}
      <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 bg-slate-100 border border-slate-200 relative group select-none">
        {!imageError ? (
          <img 
            src={currentImageUrl} 
            alt={`${project.title} - View ${currentImageIndex + 1}`}
            className="w-full h-auto block transition-opacity duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 p-8 text-center min-h-[400px]">
            <Icon name="close" size={48} className="mb-4 opacity-20" />
            <p className="text-sm font-medium">Image not found</p>
            <p className="text-xs mt-2 font-mono bg-slate-100 px-2 py-1 rounded break-all max-w-md">{currentImageUrl}</p>
          </div>
        )}

        {/* Slideshow Controls */}
        {hasMultipleImages && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
              aria-label="Previous image"
            >
              <Icon name="chevron-left" size={24} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
              aria-label="Next image"
            >
              <Icon name="chevron-right" size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2 z-10">
              {project.images!.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentImageIndex(idx);
                    setImageError(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm ${
                    idx === currentImageIndex ? 'bg-primary scale-110' : 'bg-white/60 hover:bg-white backdrop-blur-[2px]'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <div className="text-slate-700 leading-relaxed space-y-2">
              {project.fullDescription.split('\n').map((line, index) => {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('-')) {
                  return (
                    <div key={index} className="flex items-start">
                      <span className="mr-3 text-gtgold font-bold">•</span>
                      <span>{trimmedLine.substring(1).trim()}</span>
                    </div>
                  );
                }
                return <p key={index}>{line}</p>;
              })}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-md shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};