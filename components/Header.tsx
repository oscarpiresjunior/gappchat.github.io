import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-brand-blue transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-slate-600 hover:text-brand-blue transition-colors">Preços</a>
            <a href="#contact" className="text-slate-600 hover:text-brand-blue transition-colors">Contato</a>
          </nav>
          <div className="flex items-center space-x-4">
             <button className="hidden sm:block text-slate-600 hover:text-brand-blue transition-colors font-medium">Entrar</button>
             <button className="bg-brand-blue hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg">
                Começar Agora
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;