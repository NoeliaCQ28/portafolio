import React, { forwardRef } from 'react';

const Hero = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="about" ref={ref} className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
        ¡Hola! Soy Tu Nombre.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-orange-600 dark:text-orange-500 leading-tight mb-8">
        Convierto ideas creativas en soluciones eficientes.
      </h2>
      <p className="max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10">
        Soy Desarrollador Full-Stack con una pasión por la analítica de datos y un enfoque en crear experiencias de usuario memorables. Me encanta desenredar problemas complejos y construir software que realmente ayude a las personas. Mi enfoque combina el análisis meticuloso con una ejecución creativa para entregar resultados que importan.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="#projects" className="bg-orange-600 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
          Ver mis proyectos
        </a>
        <a href="#contact" className="bg-transparent border-2 border-slate-400 dark:border-slate-500 text-slate-600 dark:text-slate-300 font-bold py-3 px-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-100 dark:hover:border-slate-700 transition-all duration-300 transform hover:scale-105">
          Hablemos
        </a>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;