import React, { forwardRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = forwardRef<HTMLElement>((props, ref) => {
  const [text, setText] = useState('');
  const fullText = 'Desarrollador Full-Stack';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
          ¡Hola! Soy <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Tu Nombre</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="min-h-[80px] md:min-h-[100px]"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-orange-600 dark:text-orange-500 leading-tight mb-8">
          {text}
          {showCursor && <span className="border-r-4 border-orange-600 dark:border-orange-500 animate-pulse">|</span>}
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
      >
        Especializado en crear <span className="font-semibold text-orange-600 dark:text-orange-500">experiencias web excepcionales</span> combinando
        diseño creativo con código limpio y eficiente. Apasionado por transformar ideas en soluciones digitales que marcan la diferencia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <a
          href="#projects"
          className="group relative bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <span className="relative z-10">Ver mis proyectos</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        <a
          href="#contact"
          className="group relative bg-transparent border-2 border-slate-400 dark:border-slate-500 text-slate-600 dark:text-slate-300 font-bold py-4 px-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-100 dark:hover:border-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <span className="group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors duration-300">Hablemos</span>
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-500 rounded-full mt-2"
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;