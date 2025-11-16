import React, { forwardRef } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    image: 'https://picsum.photos/seed/project1/600/400',
    title: 'Análisis de Mercado con IA',
    description: 'Plataforma que utiliza IA para analizar tendencias de mercado y generar informes visuales interactivos.',
    tags: ['Python', 'Streamlit', 'IA', 'Pandas'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    image: 'https://picsum.photos/seed/project2/600/400',
    title: 'E-commerce Creativo',
    description: 'Una tienda online moderna con un enfoque en la experiencia de usuario, construida con React y Node.js.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    image: 'https://picsum.photos/seed/project3/600/400',
    title: 'Dashboard de Métricas',
    description: 'Dashboard personalizable para visualizar métricas de negocio en tiempo real, con una API eficiente.',
    tags: ['Vue.js', 'D3.js', 'Firebase', 'API Rest'],
    demoUrl: '#',
    sourceUrl: '#',
  },
];

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="projects" ref={ref} className="bg-slate-50 dark:bg-slate-950/50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Proyectos que he construido
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;