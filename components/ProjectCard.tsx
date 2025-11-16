import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

        {/* Image Section */}
        <div className="relative overflow-hidden h-48">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Floating Action Buttons on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center gap-4 z-20"
          >
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-800 dark:text-white p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-800 dark:text-white p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative z-10">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 text-orange-700 dark:text-orange-400 text-xs font-semibold px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800/50"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;