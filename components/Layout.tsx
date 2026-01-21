import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';
import { Icon } from './Icon';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-gtgold ${
                    isActive ? 'text-primary' : 'text-slate-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 focus:outline-none ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg px-6 py-6 flex flex-col space-y-4 animate-in slide-in-from-top-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-slate-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Adam Rupsis. Built with React & Tailwind.
            </p>
          </div>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label={link.platform}
              >
                <Icon name={link.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};