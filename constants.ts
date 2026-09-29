import { Project, NavItem, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/adam-rupsis/', icon: 'linkedin' },
  { platform: 'Email', url: 'mailto:arupsis3@gatech.edu', icon: 'mail' },
];

const FLIGHTHOUSE_PROJECTS: Project[] = [
  {
    id: 'flighthouse-tilt-rotor',
    title: 'Tilt Rotor Mechanism Redesign',
    category: 'FlightHouse Engineering Internship',
    shortDescription: 'Redesigned the tilt rotor mechanism for a long-range, high-efficiency VTOL UAV, cutting backlash from 2.5° to 0.5°.',
    fullDescription: `- Redesigned and optimized the tilt rotor mechanism for a long-range, high-efficiency VTOL UAV
- Reduced backlash in the tilt system from 2.5° to 0.5°, an 80% reduction from the previous design`,
    imageUrl: '/images/flighthouse-tilt-rotor-cad.jpg',
    images: [
      '/images/flighthouse-tilt-rotor-cad.jpg',
      '/images/flighthouse-tilt-rotor.jpg'
    ],
    technologies: ['Mechanism Design', 'VTOL', 'UAV', 'Backlash Reduction'],
    link: '#',
    github: '#',
    date: 'Summer 2026'
  },
  {
    id: 'flighthouse-other-projects',
    title: 'Other Projects',
    category: 'FlightHouse Engineering Internship',
    shortDescription: 'Structural testing, composite manufacturing, and multi-copter flight testing during my summer 2026 internship.',
    fullDescription: `- Designed and manufactured test fixtures for static structural testing of a 55 lb UAV
- Analyzed the test fixtures with FEA prior to testing
- Created the test plan and executed static structural tests, with results used to inform future design iterations
- Manufactured a fiberglass fuselage using a composite wet layup process
- Served as the test pilot for a series of flight tests on a Part 107 multi-copter
Due to the nature of FlightHouse's work, I am unable to show media from many of the projects I worked on.`,
    imageUrl: '/images/flighthouse-other-projects.jpg',
    technologies: ['Structural Testing', 'FEA', 'Test Fixtures', 'Composites', 'Wet Layup', 'Flight Testing', 'Part 107'],
    link: '#',
    github: '#',
    date: 'Summer 2026'
  }
];

const AIAA_PROJECTS: Project[] = [
  {
    id: 'open-vehicle-sketch-pad',
    title: 'Open Vehicle Sketch Pad (VSP)',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Aircraft modeling, drag estimation, and stability analysis for the 2025-26 and 2026-27 competition aircraft using NASA\'s OpenVSP and AVL.',
    fullDescription: `- Created a preliminary model of the 2025-26 competition aircraft in NASA's OpenVSP
- Determined fuselage sizing based on passenger and cargo subsystem requirements and center of gravity calculations
- Validated preliminary parasitic drag estimates using OpenVSP's drag analysis tool
- Now using OpenVSP and AVL to define the outer mold line (OML) of the 2026-27 competition aircraft and ensure it is stable`,
    imageUrl: 'https://github.com/adamrupsis/Portfolio_Website/blob/main/Screenshot%202025-10-28%20202618.png?raw=true',
    technologies: ['NASA OpenVSP', 'AVL', 'Aerodynamics', 'Drag Analysis', 'Stability'],
    link: '#',
    github: '#',
    date: '2025 – Present'
  },
  {
    id: 'aircraft-fuselage-2026',
    title: '2025-26 Competition Aircraft Fuselage',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Designed and led the manufacturing of the 2025-26 competition fuselage through three iterations, contributing to a 7th place finish out of 98 teams.',
    fullDescription: `- Designed the fuselage for the 2025-26 competition aircraft in SolidWorks and led its manufacturing
- Carried the design through three iterations, using flight test results to drive subsystem design changes
- Created mechanisms to restrain cargo and passengers while still allowing for quick and easy loading
- Ensured structural integrity through local reinforcements at the banner, wing, and tail attachment points
- Minimized weight to maximize aircraft performance
- The aircraft placed 7th out of 98 teams at the 2026 AIAA Design, Build, Fly competition`,
    imageUrl: 'https://github.com/adamrupsis/Portfolio_Website/blob/main/Screenshot%202026-05-18%20115259.png?raw=true',
    images: [
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/Screenshot%202026-05-18%20115259.png?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20260204_022131031.jpg?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/Screenshot%202026-03-27%20101230.png?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20260228_053223223.jpg?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20260419_185806012.jpg?raw=true'
    ],
    technologies: ['SolidWorks', 'Structural Design', 'Mechanism Design', 'Iterative Design', 'Manufacturing'],
    link: '#',
    github: '#',
    date: '2025/26'
  },
  {
    id: 'wind-tunnel-testing',
    title: 'Wind Tunnel Testing',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Conducted low speed wind tunnel testing to measure banner drag and feed the scoring analysis and fuselage design.',
    fullDescription: `- Conducted tests in Georgia Tech's low speed wind tunnel to obtain preliminary drag estimates for banners of various sizes and materials
- Designed a testing mount and release system that attached to a load cell to measure drag
- Analyzed the data and extrapolated the results to estimate banner drag at higher flight speeds
- Fed the drag estimates into the team's scoring analysis, the fuselage design, and the loads used to design the banner deployment and release mechanism`,
    imageUrl: 'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20251019_170751047_exported_8611.jpg?raw=true',
    images: [
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20251019_161026408.jpg?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20251019_170751047_exported_8611.jpg?raw=true'
    ],
    technologies: ['Wind Tunnel', 'Load Cell', 'Data Analysis', 'Test Fixture Design'],
    link: '#',
    github: '#',
    date: '2025'
  },
  {
    id: 'banner-deployment',
    title: 'Banner Deployment Mechanism',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Led a 10-member subteam through the design and manufacturing of a mechanism to remotely deploy and release an 8 ft banner in flight.',
    fullDescription: `- Led a 10-member subteam through the design and manufacturing of a mechanism to remotely deploy and release an 8 ft banner
- Sized the system using banner drag loads measured in wind tunnel testing
- Tested the system statically under the expected flight loads
- Attached the banner to a test-bed airplane and verified reliable deployment and release in flight`,
    imageUrl: 'https://github.com/adamrupsis/Portfolio_Website/blob/main/Picture1.png?raw=true',
    technologies: ['Mechanical Design', 'Team Leadership', 'Rapid Prototyping', 'Static Testing'],
    link: '#',
    github: '#',
    date: '2025'
  },
  {
    id: 'flight-testing',
    title: 'Flight Testing',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Pilot for every flight test and competition flight, with the final go/no-go call on each one.',
    fullDescription: `- Serve as the pilot for all flight tests and competition flights, and as a test pilot for the SAE Aero Design Advanced team
- Make the final go/no-go decision on every flight
- Lead final safety and controls checks before each flight to minimize accidents and failed tests
- Provide instant feedback to the team based on aircraft behavior in flight, feeding design changes between iterations
- Manage aircraft assembly on arrival at the field to ensure a safe, reliable, and efficient setup`,
    imageUrl: 'https://github.com/adamrupsis/Portfolio_Website/blob/main/11_23_2025_AIAA_banner_3%20-%20frame%20at%200m0s.jpg?raw=true',
    images: [
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/11_23_2025_AIAA_banner_3%20-%20frame%20at%200m0s.jpg?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/11_23_2025_AIAA_banner_6_big%20-%20frame%20at%201m4s.jpg?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/11_23_2025_SAE_Adv_autoland_6_finally%20-%20frame%20at%200m27s.jpg?raw=true'
    ],
    technologies: ['Flight Testing', 'Test Pilot', 'Safety Management', 'Go/No-Go Decisions'],
    link: '#',
    github: '#',
    date: '2025 – Present'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Aircraft manufacturing with wood, carbon fiber, and composites using laser cutters, waterjets, and 3D printing.',
    fullDescription: `- Used laser cutters, waterjets, and 3D printers to manufacture parts from balsa and plywood, carbon fiber, and plastics
- Strengthened joints using wet layups of carbon fiber and epoxy
- Led a team through the manufacturing of multiple aircraft using wood and composite techniques
- Lead daily meetings coordinating design, manufacturing, and troubleshooting to keep the project on schedule`,
    imageUrl: 'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20250412_100154749.jpg?raw=true',
    images: [
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20250412_100154749.jpg?raw=true',
      '/images/manufacturing-fuselage-ribs.jpg'
    ],
    technologies: ['Composites', 'Laser Cutting', '3D Printing', 'Waterjet', 'Wood Working', 'Team Leadership'],
    link: '#',
    github: '#',
    date: '2025 – Present'
  }
];

export const ALL_PROJECTS: Project[] = [
  ...FLIGHTHOUSE_PROJECTS,
  ...AIAA_PROJECTS
];

export const FEATURED_PROJECTS: Project[] = [
  FLIGHTHOUSE_PROJECTS[0], // Tilt rotor redesign
  AIAA_PROJECTS[1], // Fuselage
  AIAA_PROJECTS[3]  // Banner Deployment
];

export const ABOUT_TEXT = `Aerospace engineering BS/MS student at the Georgia Institute of Technology with experience in aircraft design, team leadership, and flight testing. Passionate about contributing to the development of advanced flight systems, particularly high-efficiency airframes and autonomous control architectures.`;