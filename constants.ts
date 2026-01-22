import { Project, NavItem, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/adam-rupsis/', icon: 'linkedin' },
  { platform: 'Email', url: 'mailto:arupsis3@gatech.edu', icon: 'mail' },
];

const AIAA_PROJECTS: Project[] = [
  {
    id: 'open-vehicle-sketch-pad',
    title: 'Open Vehicle Sketch Pad (VSP)',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Preliminary modeling and drag analysis of the 2025-26 competition aircraft using NASA\'s OpenVSP software.',
    fullDescription: `- Created a preliminary model of the 2025-26 competition aircraft in NASA's software
- Determined fuselage sizing based on passenger and cargo subsystem considerations and center of gravity calculations
- Validated preliminary parasitic drag estimates using OpenVSP's drag analysis tool`,
    imageUrl: 'https://github.com/adamrupsis/Portfolio_Website/blob/main/Screenshot%202025-10-28%20202618.png?raw=true',
    technologies: ['NASA OpenVSP', 'Aerodynamics', 'Drag Analysis'],
    link: '#',
    github: '#',
    date: '2025'
  },
  {
    id: 'aircraft-fuselage-2026',
    title: '2025-26 Competition Aircraft Fuselage',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Design and structural implementation of the fuselage for the 2025-26 competition aircraft.',
    fullDescription: `- Created the fuselage for the 2025-26 competition aircraft in SolidWorks
- Created mechanisms to restrain cargo and passengers and still allow for quick and easy loading
- Ensured structural integrity through local reinforcements in the banner, wing, and tail attachment points
- Minimized weight to maximize aircraft performance`,
    imageUrl: 'https://github.com/PinapplePizzaaa/Portfolio_Website/blob/main/fuselage_structure.png?raw=true',
    technologies: ['SolidWorks', 'Structural Analysis', 'Mechanism Design'],
    link: '#',
    github: '#',
    date: '2025'
  },
  {
    id: 'wind-tunnel-testing',
    title: 'Wind Tunnel Testing',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Conducted low speed wind tunnel testing to analyze banner drag and validate design parameters.',
    fullDescription: `- Conducted tests in Georgia Tech's low speed wind tunnel to obtain a preliminary drag estimate for banners of various sizes and materials to feed into scoring analysis and fuselage design
- Designed a testing mount and release system to attach to a load cell and obtain drag measurements
- Analyzed data and interpolated results to get a rough estimate for banner drag at higher speeds to feed the design of the deployment and release mechanism`,
    imageUrl: 'https://picsum.photos/800/600?random=11',
    images: [
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20251019_161026408.jpg?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20251019_170751047_exported_8611.jpg?raw=true'
    ],
    technologies: ['Wind Tunnel', 'Load Cell', 'Data Analysis'],
    link: '#',
    github: '#',
    date: '2025'
  },
  {
    id: 'banner-deployment',
    title: 'Banner Deployment Mechanism',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Co-led the design and testing of a remote system to deploy and release a 6-foot banner in flight.',
    fullDescription: `- Co-led a team of ~10 members in the design of a system to reliably deploy and release a 6 foot long banner remotely
- Tested the system statically under expected loads based on wind tunnel testing
- Attached the banner to a test-bed airplane and verified reliable operation in-flight`,
    imageUrl: 'https://picsum.photos/800/600?random=12',
    technologies: ['Mechanical Design', 'Team Leadership', 'Rapid Prototyping'],
    link: '#',
    github: '#',
    date: '2025'
  },
  {
    id: 'flight-testing',
    title: 'Flight Testing',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Flight test pilot and safety lead for the 2025-26 competition season.',
    fullDescription: `- Serve as the flight test pilot for the 2025-26 competition season for AIAA Design, Build, Fly and SAE aero design advanced teams
- Lead final safety and controls checks before every flight to minimize accidents and failed tests
- Provide instant feedback to the team based on aircraft behaviors in-flight
- Manage the process of aircraft assembly upon arrival to ensure the safe, reliable, and efficient setup of the aircraft`,
    imageUrl: 'https://github.com/adamrupsis/Portfolio_Website/blob/main/11_23_2025_AIAA_banner_3%20-%20frame%20at%200m0s.jpg?raw=true',
    images: [
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/11_23_2025_AIAA_banner_3%20-%20frame%20at%200m0s.jpg?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/11_23_2025_AIAA_banner_6_big%20-%20frame%20at%201m4s.jpg?raw=true',
      'https://github.com/adamrupsis/Portfolio_Website/blob/main/11_23_2025_SAE_Adv_autoland_6_finally%20-%20frame%20at%200m27s.jpg?raw=true'
    ],
    technologies: ['Flight Testing', 'Test Pilot', 'Safety Management'],
    link: '#',
    github: '#',
    date: '2025'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    category: 'AIAA Design, Build, Fly Club',
    shortDescription: 'Advanced manufacturing using composite materials, laser cutters, and 3D printing for aircraft production.',
    fullDescription: `- Used laser cutters, waterjets, and 3D printers to facilitate the manufacturing of balsa and ply wood, carbon fiber, and plastics
- Strengthened joints using wet layups of carbon fiber and epoxy
- Led a team through the manufacturing of multiple aircraft using wood and composite techniques`,
    imageUrl: 'https://github.com/adamrupsis/Portfolio_Website/blob/main/PXL_20250412_100154749.jpg?raw=true',
    technologies: ['Composites', 'Laser Cutting', '3D Printing', 'Manufacturing'],
    link: '#',
    github: '#',
    date: '2025'
  }
];

export const ALL_PROJECTS: Project[] = [
  ...AIAA_PROJECTS
];

export const FEATURED_PROJECTS: Project[] = [
  AIAA_PROJECTS[1], // Fuselage
  AIAA_PROJECTS[4], // Flight Testing
  AIAA_PROJECTS[5]  // Manufacturing
];

export const ABOUT_TEXT = `Aerospace engineering BS/MS student at the Georgia Institute of Technology with experience in aircraft design, team leadership, and flight testing. Passionate about contributing to the development of advanced flight systems, particularly high-efficiency airframes and autonomous control architectures.`;