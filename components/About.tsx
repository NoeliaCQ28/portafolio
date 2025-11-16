import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    year: '2023 - Presente',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovation Co.',
    description: 'Desarrollo de aplicaciones web escalables con React, Node.js y microservicios. Liderazgo de equipo y arquitectura de soluciones.',
  },
  {
    year: '2021 - 2023',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Inc.',
    description: 'Implementación de features complejas, optimización de performance y migración a arquitecturas modernas.',
  },
  {
    year: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'Creative Agency',
    description: 'Desarrollo de interfaces interactivas y responsivas. Colaboración estrecha con diseñadores UX/UI.',
  },
  {
    year: '2018 - 2019',
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    description: 'Inicio de carrera profesional construyendo aplicaciones web y aprendiendo mejores prácticas de desarrollo.',
  },
];

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="about-experience" ref={ref} className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Mi Trayectoria
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Un recorrido de crecimiento constante en el mundo del desarrollo web
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-auto top-6 ${
                    index % 2 === 0 ? 'md:right-0' : 'md:left-0'
                  } transform ${
                    index % 2 === 0 ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'
                  } -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full border-4 border-white dark:border-slate-900 z-10`}
                />

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-10 md:ml-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="mb-2">
                    <span className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {exp.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-500 font-semibold mb-3">
                    {exp.company}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '50+', label: 'Proyectos Completados' },
            { number: '5+', label: 'Años de Experiencia' },
            { number: '20+', label: 'Clientes Satisfechos' },
            { number: '100%', label: 'Compromiso' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
