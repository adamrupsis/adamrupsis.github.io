import React from 'react';
import { Icon } from '../components/Icon';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Get in Touch</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 max-w-2xl mx-auto">
        <div className="flex flex-col space-y-6">
          {/* Email */}
          <a 
            href="mailto:arupsis3@gatech.edu" 
            className="flex items-center group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
          >
            <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
              <Icon name="mail" size={24} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Email</p>
              <p className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-primary transition-colors">arupsis3@gatech.edu</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/adam-rupsis/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
          >
            <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
              <Icon name="linkedin" size={24} />
            </div>
             <div className="text-left">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">LinkedIn</p>
              <p className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-primary transition-colors">/in/adam-rupsis</p>
            </div>
          </a>

          {/* Phone */}
          <a 
            href="tel:4066727417" 
            className="flex items-center group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
          >
            <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
              <Icon name="phone" size={24} />
            </div>
             <div className="text-left">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Phone</p>
              <p className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-primary transition-colors">406-672-7417</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};