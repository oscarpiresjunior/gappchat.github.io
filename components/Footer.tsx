import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Logo />
            <p className="mt-4 text-slate-400 max-w-xs">Agentes de IA para Pequenas Empresas.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-slate-200">Produto</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#features" className="text-slate-400 hover:text-white">Funcionalidades</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-white">Preços</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Atualizações</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200">Empresa</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white">Sobre</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Carreiras</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200">Recursos</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Documentação</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white">Privacidade</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Termos</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} GAPPCHAT. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;