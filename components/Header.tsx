import React, { useState } from 'react';
import { navLinks } from '../constants';

const Logo = () => (
    <a href="#" className="text-3xl font-bold tracking-tight">
        <span style={{color: '#34A853'}}>G</span>
        <span style={{color: '#FBBC05'}}>A</span>
        <span style={{color: '#FF6D00'}}>P</span>
        <span style={{color: '#EA4335'}}>P</span>
        <span style={{color: '#4285F4'}}>CHAT</span>
    </a>
);

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full flex py-4 justify-between items-center">
      <div className="flex-shrink-0">
        <Logo />
      </div>

      <nav className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            className="font-medium cursor-pointer text-gray-500 hover:text-gray-900 transition-colors mx-4"
          >
            {nav.title}
          </a>
        ))}
      </nav>

      <div className="list-none sm:flex hidden justify-end items-center flex-shrink-0">
         <a href="/#/login" className="font-medium cursor-pointer text-gray-500 hover:text-gray-900 transition-colors mr-6">
            Entrar
          </a>
          <a href="/#/login" className="bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm">
            Começar Agora
          </a>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button onClick={() => setToggle((prev) => !prev)} aria-label="Menu" className="z-50">
            {toggle ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
        </button>
        
        <div
          className={`${toggle ? 'flex' : 'hidden'} flex-col gap-8 p-8 bg-white absolute top-0 right-0 h-screen w-3/4 sidebar shadow-2xl border-l border-gray-100`}
        >
          <div className="list-none flex flex-col items-start flex-1 gap-6 pt-16">
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="font-poppins font-semibold cursor-pointer text-xl text-gray-700 hover:text-gray-900"
                onClick={() => setToggle(false)}
              >
                {nav.title}
              </a>
            ))}
          </div>
          <div className="list-none flex flex-col items-start w-full gap-4">
             <a href="/#/login" className="font-poppins font-semibold cursor-pointer text-xl text-gray-700 hover:text-gray-900">
                Entrar
              </a>
              <a href="/#/login" className="bg-blue-500 w-full text-center text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-base">
                Começar Agora
              </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;