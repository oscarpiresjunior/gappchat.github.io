import React from 'react';

const steps = [
  {
    name: 'Passo 1: Descreva seu Negócio',
    description: 'Forneça algumas informações básicas sobre seu negócio, serviços e objetivos. Nossa IA usa isso para criar um agente experiente.',
  },
  {
    name: 'Passo 2: Personalize seu Agente',
    description: 'Ajuste a personalidade, a mensagem de boas-vindas e a aparência do seu chatbot para combinar perfeitamente com a identidade da sua marca.',
  },
  {
    name: 'Passo 3: Pegue seu Link e Comece',
    description: 'Receba um link exclusivo para o seu chatbot. Adicione-o ao seu site, redes sociais ou assinatura de e-mail e comece a interagir com os clientes instantaneamente.',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Comece em 3 Passos Simples</h2>
          <p className="mt-4 text-lg text-slate-600">Da configuração ao chat ao vivo em apenas alguns minutos.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.name} className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center justify-center h-16 w-16 bg-brand-blue text-white rounded-full text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{step.name}</h3>
              <p className="mt-2 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;