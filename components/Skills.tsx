import React, { forwardRef } from 'react';

const skillsData = {
  frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Figma'],
  backend: ['Node.js', 'Express', 'Python', 'Flask', 'REST APIs', 'GraphQL'],
  databaseAndOthers: ['MongoDB', 'PostgreSQL', 'Firebase', 'Docker', 'Git & GitHub', 'CI/CD', 'Jest'],
};

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-500 mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-slate-600 dark:text-slate-300">{skill}</li>
      ))}
    </ul>
  </div>
);


const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Mi caja de herramientas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={skillsData.frontend} />
          <SkillCategory title="Backend" skills={skillsData.backend} />
          <SkillCategory title="Bases de Datos y Otros" skills={skillsData.databaseAndOthers} />
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;