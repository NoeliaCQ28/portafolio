import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skillsData: Record<string, Skill[]> = {
  frontend: [
    { name: 'React', level: 95, color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-500 to-indigo-500' },
    { name: 'Next.js', level: 85, color: 'from-indigo-500 to-purple-500' },
    { name: 'Tailwind CSS', level: 92, color: 'from-purple-500 to-pink-500' },
    { name: 'HTML5/CSS3', level: 98, color: 'from-pink-500 to-rose-500' },
  ],
  backend: [
    { name: 'Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 85, color: 'from-emerald-500 to-teal-500' },
    { name: 'REST APIs', level: 90, color: 'from-teal-500 to-cyan-500' },
    { name: 'Express', level: 87, color: 'from-cyan-500 to-sky-500' },
    { name: 'GraphQL', level: 80, color: 'from-sky-500 to-blue-500' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 93, color: 'from-orange-500 to-amber-500' },
    { name: 'Docker', level: 82, color: 'from-amber-500 to-yellow-500' },
    { name: 'MongoDB', level: 85, color: 'from-yellow-500 to-lime-500' },
    { name: 'PostgreSQL', level: 88, color: 'from-lime-500 to-green-500' },
    { name: 'Firebase', level: 80, color: 'from-orange-500 to-red-500' },
  ],
};

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="mb-4"
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
      <span className="text-sm font-semibold text-orange-600 dark:text-orange-500">{skill.level}%</span>
    </div>
    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
      >
        <div className="absolute inset-0 bg-white/30 animate-pulse" />
      </motion.div>
    </div>
  </motion.div>
);

const SkillCategory: React.FC<{ title: string; skills: Skill[]; icon: string }> = ({ title, skills, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-shadow duration-300"
  >
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl -z-10" />

    <div className="flex items-center mb-6">
      <span className="text-4xl mr-3">{icon}</span>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  </motion.div>
);

const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-300/20 dark:bg-yellow-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
            Habilidades & Tecnologías
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Dominio constante de las últimas tecnologías para crear soluciones innovadoras y escalables
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={skillsData.frontend} icon="🎨" />
          <SkillCategory title="Backend" skills={skillsData.backend} icon="⚙️" />
          <SkillCategory title="Herramientas" skills={skillsData.tools} icon="🛠️" />
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;