import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Icon } from '../components/Icon';

const EXPERIENCE = [
  {
    org: 'AIAA Design, Build, Fly Team',
    role: 'Chief Engineer and Pilot',
    dates: 'Aug 2024 – Present',
    bullets: [
      'Spearheading the conceptual design of the 2026-27 competition aircraft, developing a physics-based trajectory simulator of the aircraft carrying a slug payload to find the configuration that maximizes competition score.',
      'Using OpenVSP and AVL to create the outer mold line of the 2026-27 aircraft and ensure stability.',
      'Designed and led the manufacturing of the 2025-26 fuselage, using flight test results to drive subsystem changes over three iterations, contributing to a 7th place finish out of 98 teams.',
      'Created a neural network surrogate model in JMP (R² > 0.99) trained on XRotor sweeps to predict propeller performance, speeding up a high fidelity Python propulsion analysis tool by 1000x.',
      'Assembled a motor and propeller database so the trajectory simulator can iterate over a wide range of propulsion combinations.',
      'Wrote a low fidelity MATLAB tool that predicts propulsion system thrust, efficiency, and current draw across a range of flight speeds in under 0.5 seconds.',
      'Led a 10-member subteam through the design and manufacturing of a mechanism to remotely deploy and release an 8 ft banner.',
      'Lead daily meetings coordinating design, manufacturing, and troubleshooting, and serve as pilot for all flight tests and competition flights with the final go/no-go call.',
    ],
  },
  {
    org: 'FlightHouse Engineering',
    role: 'Mechanical Design Intern',
    dates: 'May 2026 – Aug 2026',
    bullets: [
      'Redesigned and optimized a tilt rotor mechanism for a long-range, high-efficiency VTOL UAV, reducing backlash from 2.5° to 0.5°.',
      'Designed and manufactured test fixtures, analyzed them with FEA, created a test plan, and executed static structural tests of a 55 lb UAV to inform future design iterations.',
      'Manufactured a fiberglass fuselage using a composite wet layup process.',
      'Served as the test pilot for a series of flight tests on a Part 107 multi-copter.',
    ],
  },
  {
    org: 'Solar-Powered Subscale Electric Cargo Aircraft',
    role: 'Undergraduate Research Assistant',
    dates: 'Aug 2026 – Present',
    bullets: [
      'Responsible for landing gear and structural repairs on a 25 lb, 12 ft wingspan solar-powered demonstrator aircraft.',
      'Designed and fabricated a reinforced landing gear brace in OnShape to address a failure from a prior crash.',
    ],
  },
  {
    org: 'Aviation Camp',
    role: 'Leader and Organizer',
    dates: 'Feb 2023 – Jun 2023',
    bullets: [
      'Designed and led a week-long STEM camp for middle school students in Billings, MT, combining local aviation site tours with hands-on RC aircraft building and flight training.',
      'Secured $2k through community outreach to reduce participant costs, so each student could keep a personal RC airplane and radio.',
    ],
  },
];

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
              <p className="text-sm text-slate-700 font-medium">B.S. in Aerospace Engineering,</p>
              <p className="text-sm text-slate-700 font-medium">Minor in Scientific and Engineering Computing</p>
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
            <h2 className="text-xl text-primary font-medium mb-6">Aerospace Engineering BS/MS Student at the Georgia Institute of Technology</h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p className="mb-4 text-lg">
                I am an Aerospace Engineering student at the Georgia Institute of Technology with a strong focus on aircraft design, team leadership, and flight testing. I am passionate about contributing to the development of advanced flight systems, particularly high-efficiency airframes and autonomous control architectures.
              </p>
              <p className="mb-4">
                Currently, I serve as <strong>Chief Engineer and Pilot</strong> for the AIAA Design, Build, Fly Team, where I am leading the conceptual design of the 2026-27 competition aircraft. That work centers on a physics-based trajectory simulator that finds the aircraft configuration that maximizes competition score, backed by propulsion analysis tools I built to select the best motor and propeller combination. Last season, I designed and led the manufacturing of the fuselage for the aircraft that placed 7th out of 98 teams. As the team's pilot, I fly every flight test and competition flight and make the final go/no-go call.
              </p>
              <p className="mb-4">
                In summer 2026, I worked as a <strong>Mechanical Design Intern</strong> at FlightHouse Engineering in Portland, Oregon, where I cut backlash in a VTOL UAV tilt rotor mechanism from 2.5° to 0.5°, ran static structural tests on a 55 lb UAV, and flew multi-copter flight tests. I am also an undergraduate research assistant on a solar-powered subscale electric cargo aircraft.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              Experience
            </h3>
            <div className="relative border-l-2 border-slate-200 pl-6 ml-2 space-y-6">
              {EXPERIENCE.map((job) => (
                <div key={job.org} className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gtgold border-2 border-white shadow-sm"></span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-800">{job.org}</h4>
                    <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded whitespace-nowrap">{job.dates}</span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-3">{job.role}</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['MATLAB', 'Python', 'Java', 'SOLIDWORKS (CSWA Certified)', 'SOLIDWORKS Simulation', 'OnShape', 'Fusion 360', 'JMP', 'OpenVSP', 'AVL', 'XRotor', 'Composite Wet Layups', 'CNC Milling', '3D Printing', 'Wood Working'].map(skill => (
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