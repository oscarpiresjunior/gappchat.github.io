import React from 'react';

const FeatureIcon: React.FC<{ path: string }> = ({ path }) => (
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
        </svg>
    </div>
);

const features = [
  {
    name: 'Configuração Instantânea',
    description: 'Coloque seu agente de IA para funcionar em menos de 5 minutos. Apenas descreva seu negócio e nós cuidamos do resto.',
    iconPath: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3',
  },
  {
    name: 'Disponibilidade 24/7',
    description: 'Seu chatbot de IA trabalha o tempo todo, respondendo a perguntas de clientes e capturando leads mesmo quando você está dormindo.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    name: 'Integração Fácil',
    description: 'Sem código complexo. Basta adicionar um único link ao seu site para lançar seu ChatBotWeb totalmente independente.',
    iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  },
  {
    name: 'Geração de Leads',
    description: 'Qualifique visitantes automaticamente e colete informações de contato, transformando o tráfego do seu site em leads valiosos.',
    iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue">Tudo que Você Precisa</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">O Futuro da Interação com o Cliente</p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            O GAPPCHAT oferece ferramentas poderosas para automatizar e aprimorar a comunicação do seu negócio.
          </p>
        </div>
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white sm:shrink-0">
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                    </svg>
                 </div>
                 <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;