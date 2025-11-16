import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-slate-900 py-6 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <p>Diseñado y construido por Tu Nombre &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;