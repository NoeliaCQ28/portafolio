import React from 'react';
import { GithubIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  sourceUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, tags, demoUrl, sourceUrl }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg shadow-slate-200/60 dark:shadow-slate-950/30 group transform transition-all duration-500 hover:-translate-y-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-auto">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-500 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-300"
          >
            <ExternalLinkIcon className="w-5 h-5 mr-2" />
            Ver Demo
          </a>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-500 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-300"
          >
            <GithubIcon className="w-5 h-5 mr-2" />
            Código Fuente
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;