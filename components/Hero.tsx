import React from 'react';

const Hero: React.FC = () => (
  <section className="text-center py-20 sm:py-28">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 tracking-tight">
        Crie Agentes de IA para o seu <br className="hidden sm:block" />
        Negócio em <span style={{ color: '#4285F4' }}>Minutos</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-8">
        Lance um chatbot com IA 24/7 no seu site com apenas um link. Não é necessário codificar. Aumente as vendas, automatize o suporte e capture leads sem esforço.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#" className="bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-md w-full sm:w-auto">
          Crie seu Agente de IA
        </a>
        <a href="#" className="font-semibold text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center py-3.5">
          Saiba mais <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
       <p className="mt-5 text-sm text-gray-500">
        Comece grátis!
      </p>
    </div>
  </section>
);

export default Hero;
