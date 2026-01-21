export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  github?: string;
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail';
}