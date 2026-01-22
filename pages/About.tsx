import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Icon } from '../components/Icon';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Profile Image Column */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start">
          <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-8 border-4 border-white bg-slate-100">
            <img 
              src="https://github.com/adamrupsis/Portfolio_Website/blob/main/georgia-tech-joins-cumu.png?raw=true" 
              alt="Adam Rupsis" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex space-x-4 justify-center md:justify-start w-full">
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

          {/* Education Box */}
          <div className="mt-8 w-full bg-white rounded-xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
              Education
            </h3>
            <div className="mb-4">
              <p className="font-bold text-primary">Georgia Institute of Technology</p>
              <p className="text-sm text-slate-700 font-medium">B.S. in Aerospace Engineering</p>
              <div className="flex items-center text-sm text-slate-500 mt-2">
                <Icon name="calendar" size={14} className="mr-2" />
                May 2028
              </div>
              <p className="text-sm text-slate-500 mt-1 pl-6 border-l-2 border-gtgold/50 ml-1">GPA: 4.0</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-50">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Honors</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Charles H Grant Scholarship</li>
                <li>• AP Scholar with Distinction</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="md:col-span-7 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About Me</h1>
            <h2 className="text-xl text-primary font-medium mb-6">Aerospace Engineering BS/MS Student & Researcher</h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p className="mb-4 text-lg">
                I am an Aerospace Engineering student at the Georgia Institute of Technology with a strong focus on aircraft design, team leadership, and flight testing. I am passionate about contributing to the development of advanced flight systems, particularly high-efficiency airframes and autonomous control architectures.
              </p>
              <p className="mb-4">
                Currently, I serve as a <strong>Sub-team Lead and Test Pilot</strong> for the AIAA Design, Build, Fly Team. As a sub-team lead, I lead weekly build sessions coordianating manufacturing, troubleshooting, and quality assurance to keep the project on schedule. My role as the pilot involves developing and executing test routines, calibrating control surfaces, collecting in-flight data, and providing instant feedback to improve the aircraft design.              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              Current Leadership
            </h3>
            <div className="relative border-l-2 border-slate-200 pl-6 ml-2 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gtgold border-2 border-white shadow-sm"></span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h4 className="font-bold text-slate-800">AIAA Design, Build, Fly Team</h4>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">Aug 2024 – Present</span>
                </div>
                <p className="text-primary font-medium text-sm mb-3">Sub-team Lead and Pilot</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                    <span>Designed and led the manufacturing of the 2025-26 competition airplane fuselage, using flight test results to inform design changes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                    <span>Led a 10-member sub-team in designing a mechanism to remotely deploy and release a 6-foot banner.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                    <span>Serve as flight‑test pilot, developing test routines, calibrating control surfaces, and providing in‑flight feedback.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['MATLAB', 'SolidWorks (CSWA Certified)', 'OpenVSP', 'Fusion 360', 'AVL', 'Java'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white text-slate-700 text-xs font-medium rounded-md border border-slate-200 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Interests</h3>
              <ul className="grid grid-cols-1 gap-2">
                {['Rock Climbing', 'FPV Drones', 'Model Aeronautics', 'Saxophone'].map((interest) => (
                  <li key={interest} className="flex items-center text-sm text-slate-700 bg-white px-3 py-2 rounded-md border border-slate-100">
                    <Icon name="arrow-right" size={14} className="mr-2 text-gtgold" /> 
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};