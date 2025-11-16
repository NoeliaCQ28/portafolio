import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GithubIcon, href: '#', label: 'GitHub', color: 'hover:text-slate-600 dark:hover:text-slate-400' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { icon: MailIcon, href: 'mailto:tu.email@example.com', label: 'Email', color: 'hover:text-orange-600 dark:hover:text-orange-400' },
  ];

  const quickLinks = [
    { text: 'Sobre Mí', href: '#about' },
    { text: 'Proyectos', href: '#projects' },
    { text: 'Habilidades', href: '#skills' },
    { text: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Tu Nombre
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Desarrollador Full-Stack apasionado por crear experiencias web excepcionales que combinan creatividad con tecnología de vanguardia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-slate-400 transition-colors duration-300 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MailIcon className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:tu.email@example.com" className="text-slate-400 hover:text-orange-500 transition-colors duration-300">
                  tu.email@example.com
                </a>
              </li>
              <li className="text-slate-400">
                <span className="block mb-1">Disponible para proyectos freelance</span>
                <span className="text-xs text-slate-500">Respondo en 24-48 horas</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-0"
            >
              Diseñado y construido con{' '}
              <span className="text-orange-500 animate-pulse">❤️</span> por Tu Nombre
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              &copy; {currentYear} Todos los derechos reservados
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;