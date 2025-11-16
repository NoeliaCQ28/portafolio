import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: '#about', text: 'Sobre Mí' },
    { href: '#projects', text: 'Proyectos' },
    { href: '#contact', text: 'Contacto' },
  ];

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-900 dark:text-white tracking-wider">
          Tu Nombre
        </a>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-8 mr-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-500 focus:outline-none rounded-full p-2 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
          </button>

          <div className="md:hidden ml-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 dark:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;