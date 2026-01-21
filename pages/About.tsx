import React from 'react';
import { ABOUT_TEXT, SOCIAL_LINKS } from '../constants';
import { Icon } from '../components/Icon';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Profile Image Column */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start">
          <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-8">
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Adam Rupsis" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex space-x-4 justify-center md:justify-start">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
                aria-label={link.platform}
              >
                <Icon name={link.icon} size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Content Column */}
        <div className="md:col-span-7 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About Me</h1>
            <h2 className="text-xl text-primary font-medium mb-6">Aerospace Engineering Student & Researcher</h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p className="mb-4 text-lg">
                {ABOUT_TEXT}
              </p>
              <p className="mb-4">
               (Update this section with your personal bio details)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Engineering</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Aircraft Design</li>
                <li>Flight Testing</li>
                <li>Aerodynamics</li>
                <li>Systems Engineering</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Tools & Skills</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>MATLAB / Simulink</li>
                <li>CAD (SolidWorks)</li>
                <li>Python</li>
                <li>Team Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};