import React, { forwardRef } from 'react';
import { MailIcon, LinkedinIcon, GithubIcon } from './Icons';

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="contact" ref={ref} className="bg-slate-50 dark:bg-slate-950/50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          ¿Listo para crear algo increíble?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10">
          Estoy disponible para nuevos proyectos o una charla sobre tecnología. ¡Envíame un mensaje!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:tu.email@example.com"
            className="w-full md:w-auto flex items-center justify-center bg-orange-600 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            <MailIcon className="w-6 h-6 mr-3" />
            Enviar un Email
          </a>
          <a 
            href="#"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center bg-sky-600 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-700 transition-all duration-300 transform hover:scale-105"
          >
            <LinkedinIcon className="w-6 h-6 mr-3" />
            Mi LinkedIn
          </a>
          <a 
            href="#"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center bg-slate-700 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
          >
            <GithubIcon className="w-6 h-6 mr-3" />
            Mi GitHub
          </a>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;