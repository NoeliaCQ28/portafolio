import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiDocker,
  SiMongodb,
  SiNextdotjs,
  SiFirebase,
  SiGraphql,
  SiPostgresql,
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Technology {
  name: string;
  icon: IconType;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  levelNumber: number;
  years: string;
  description: string;
  projects: string[];
  color: string;
  category: 'frontend' | 'backend' | 'tools';
}

const technologies: Technology[] = [
  {
    name: 'React',
    icon: SiReact,
    level: 'Expert',
    levelNumber: 95,
    years: '3+ años',
    description: 'Desarrollo de SPAs y aplicaciones complejas con hooks, context y arquitecturas escalables',
    projects: ['E-commerce Platform', 'Dashboard Analytics', 'Social Network'],
    color: 'from-cyan-400 to-blue-500',
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    level: 'Advanced',
    levelNumber: 90,
    years: '2+ años',
    description: 'Tipado estático para aplicaciones robustas y mantenibles con tipos avanzados',
    projects: ['API Gateway', 'Admin Panel', 'Mobile App Backend'],
    color: 'from-blue-500 to-blue-600',
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    level: 'Expert',
    levelNumber: 98,
    years: '4+ años',
    description: 'ES6+, async/await, promesas, manipulación del DOM y programación funcional',
    projects: ['Todo App', 'Weather Dashboard', 'Game Engine'],
    color: 'from-yellow-400 to-yellow-500',
    category: 'frontend',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    level: 'Advanced',
    levelNumber: 85,
    years: '2+ años',
    description: 'SSR, SSG, ISR y optimización de performance con React framework',
    projects: ['Corporate Website', 'Blog Platform', 'Landing Pages'],
    color: 'from-slate-700 to-slate-900',
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    level: 'Expert',
    levelNumber: 92,
    years: '2+ años',
    description: 'Utility-first CSS, diseño responsivo y sistemas de diseño personalizados',
    projects: ['Portfolio Sites', 'Design System', 'UI Components'],
    color: 'from-cyan-400 to-teal-500',
    category: 'frontend',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    level: 'Advanced',
    levelNumber: 88,
    years: '3+ años',
    description: 'Backend escalable, APIs RESTful, microservicios y arquitecturas serverless',
    projects: ['REST API', 'Microservices', 'Real-time Chat'],
    color: 'from-green-500 to-green-600',
    category: 'backend',
  },
  {
    name: 'Python',
    icon: SiPython,
    level: 'Advanced',
    levelNumber: 85,
    years: '2+ años',
    description: 'Scripts de automatización, análisis de datos y desarrollo de APIs con Flask/Django',
    projects: ['Data Analysis Tool', 'Automation Scripts', 'ML Model'],
    color: 'from-blue-400 to-yellow-400',
    category: 'backend',
  },
  {
    name: 'GraphQL',
    icon: SiGraphql,
    level: 'Intermediate',
    levelNumber: 80,
    years: '1+ año',
    description: 'APIs flexibles, consultas eficientes y gestión de datos con Apollo',
    projects: ['Social App API', 'E-commerce Backend'],
    color: 'from-pink-500 to-purple-500',
    category: 'backend',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    level: 'Advanced',
    levelNumber: 85,
    years: '2+ años',
    description: 'Bases de datos NoSQL, agregaciones, índices y modelado de datos',
    projects: ['User Management', 'Content Platform', 'Analytics DB'],
    color: 'from-green-600 to-green-700',
    category: 'tools',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    level: 'Advanced',
    levelNumber: 88,
    years: '3+ años',
    description: 'Bases de datos relacionales, queries complejas y optimización',
    projects: ['Financial System', 'ERP System', 'Analytics Platform'],
    color: 'from-blue-600 to-indigo-600',
    category: 'tools',
  },
  {
    name: 'Git',
    icon: SiGit,
    level: 'Expert',
    levelNumber: 93,
    years: '4+ años',
    description: 'Control de versiones, branching strategies, CI/CD y workflows colaborativos',
    projects: ['Todos los proyectos'],
    color: 'from-orange-600 to-red-600',
    category: 'tools',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    level: 'Intermediate',
    levelNumber: 82,
    years: '1+ año',
    description: 'Containerización, Docker Compose y despliegue de aplicaciones',
    projects: ['Microservices Deployment', 'Dev Environment'],
    color: 'from-blue-500 to-blue-600',
    category: 'tools',
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    level: 'Intermediate',
    levelNumber: 80,
    years: '1+ año',
    description: 'Backend as a Service, autenticación, Firestore y hosting',
    projects: ['Real-time App', 'Chat Application'],
    color: 'from-yellow-500 to-orange-500',
    category: 'tools',
  },
];

interface TechCardProps {
  tech: Technology;
  index: number;
}

const TechCard: React.FC<TechCardProps> = ({ tech, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const levelColors = {
    Expert: 'text-green-600 dark:text-green-400',
    Advanced: 'text-blue-600 dark:text-blue-400',
    Intermediate: 'text-yellow-600 dark:text-yellow-400',
    Beginner: 'text-orange-600 dark:text-orange-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-64"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="absolute w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front of card */}
          <div
            className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {/* Icon */}
              <div className={`w-20 h-20 mb-4 bg-gradient-to-r ${tech.color} rounded-2xl p-4 shadow-lg`}>
                <tech.icon className="w-full h-full text-white" />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-center">
                {tech.name}
              </h3>

              {/* Level Badge */}
              <span className={`text-sm font-semibold ${levelColors[tech.level]} mb-2`}>
                {tech.level}
              </span>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.levelNumber}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                  className={`h-full bg-gradient-to-r ${tech.color}`}
                />
              </div>

              {/* Percentage */}
              <span className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {tech.levelNumber}%
              </span>

              {/* Years */}
              <span className="text-xs text-slate-500 dark:text-slate-500">
                {tech.years} de experiencia
              </span>

              {/* Hover hint */}
              <p className="text-xs text-slate-400 dark:text-slate-600 mt-3 text-center">
                Hover para más info
              </p>
            </div>
          </div>

          {/* Back of card */}
          <div
            className={`absolute w-full h-full rounded-2xl bg-gradient-to-br ${tech.color} p-6 shadow-xl`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="flex flex-col h-full text-white">
              <h3 className="text-lg font-bold mb-3">{tech.name}</h3>

              <p className="text-sm mb-4 leading-relaxed opacity-90">
                {tech.description}
              </p>

              <div className="mt-auto">
                <p className="text-xs font-semibold mb-2 opacity-80">Proyectos destacados:</p>
                <ul className="space-y-1">
                  {tech.projects.slice(0, 3).map((project, idx) => (
                    <li key={idx} className="text-xs flex items-start">
                      <span className="mr-1">•</span>
                      <span className="opacity-90">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = forwardRef<HTMLElement>((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const filteredTechs = selectedCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950/50">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 dark:bg-yellow-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Dominio de tecnologías modernas para crear soluciones innovadoras. Haz hover sobre cada tecnología para ver más detalles.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { key: 'all', label: 'Todas', icon: '🚀' },
              { key: 'frontend', label: 'Frontend', icon: '🎨' },
              { key: 'backend', label: 'Backend', icon: '⚙️' },
              { key: 'tools', label: 'Herramientas', icon: '🛠️' },
            ].map((cat) => (
              <motion.button
                key={cat.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.key as any)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat.key
                    ? 'bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-orange-500'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
                <span className="ml-2 text-xs opacity-70">
                  ({cat.key === 'all' ? technologies.length : technologies.filter(t => t.category === cat.key).length})
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tech Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTechs.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
