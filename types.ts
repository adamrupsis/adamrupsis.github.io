export interface Project {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  coverFit?: 'cover' | 'contain';
  images?: string[];
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