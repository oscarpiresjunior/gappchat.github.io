import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-white pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_45rem_at_50%_32rem,#e5e7eb_10%,white_100%)]"></div>
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
                Crie Agentes de IA para o seu Negócio em<span className="text-brand-blue"> Minutos</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600">
                Lance um chatbot com IA 24/7 no seu site com apenas um link. Não é necessário codificar. Aumente as vendas, automatize o suporte e capture leads sem esforço.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    className="rounded-md bg-brand-blue px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-transform transform hover:scale-105"
                >
                    Crie seu Agente de IA
                </a>
                <a href="#features" className="text-lg font-semibold leading-6 text-slate-700 group">
                    Saiba mais <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Comece grátis!</p>
            <div className="mt-16 sm:mt-24">
                <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <img
                        src="https://www.brasix.com.br/wp-content/uploads/2025/06/hpi-webp.webp"
                        alt="Demonstração da interface de chat do GAPPCHAT em um smartphone, mostrando uma conversa interativa com o assistente de IA."
                        width={1200}
                        height={801}
                        className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                </div>
            </div>
      </div>
    </section>
  );
};

export default HeroSection;