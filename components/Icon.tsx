import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code2, Menu, X, ArrowRight, Calendar, Phone } from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  switch (name) {
    case 'github': return <Github size={size} className={className} />;
    case 'linkedin': return <Linkedin size={size} className={className} />;
    case 'twitter': return <Twitter size={size} className={className} />;
    case 'mail': return <Mail size={size} className={className} />;
    case 'external': return <ExternalLink size={size} className={className} />;
    case 'code': return <Code2 size={size} className={className} />;
    case 'menu': return <Menu size={size} className={className} />;
    case 'close': return <X size={size} className={className} />;
    case 'arrow-right': return <ArrowRight size={size} className={className} />;
    case 'calendar': return <Calendar size={size} className={className} />;
    case 'phone': return <Phone size={size} className={className} />;
    default: return null;
  }
};