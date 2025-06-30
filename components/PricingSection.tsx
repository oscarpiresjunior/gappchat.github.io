import React from 'react';

const CheckIcon: React.FC = () => (
    <svg className="h-6 w-5 flex-none text-brand-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 16.5L4.5 11.25L5.55 10.2L9.75 14.4L18.45 5.7L19.5 6.75L9.75 16.5Z" fill="currentColor" />
    </svg>
);

const tiers = [
  {
    name: 'Iniciante',
    price: 'Grátis',
    description: 'Perfeito para experimentar o básico.',
    features: ['1 Agente de IA', '50 conversas/mês', 'Personalização Básica', 'Suporte da Comunidade'],
    mostPopular: false,
  },
  {
    name: 'Profissional',
    price: 'R$29',
    description: 'Para empresas em crescimento que precisam de mais poder.',
    features: ['5 Agentes de IA', '1.000 conversas/mês', 'Personalização Avançada', 'Formulários de Captura de Leads', 'Suporte por E-mail'],
    mostPopular: true,
  },
  {
    name: 'Empresarial',
    price: 'R$99',
    description: 'A solução definitiva para empresas em expansão.',
    features: ['Agentes de IA Ilimitados', '10.000 conversas/mês', 'Controle Total da Marca', 'Acesso à API', 'Suporte Prioritário'],
    mostPopular: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Preços Simples e Transparentes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Escolha o plano ideal para o seu negócio. Sem taxas ocultas.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative flex flex-col rounded-3xl p-8 shadow-xl ring-1 ring-slate-200 ${tier.mostPopular ? 'ring-2 ring-brand-blue' : ''}`}>
              {tier.mostPopular && <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-3 py-1 text-sm font-semibold text-white">Mais Popular</p>}
              <h3 className="text-2xl font-semibold leading-8 text-slate-900">{tier.name}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">{tier.price}</span>
                {tier.price !== 'Grátis' && <span className="text-sm font-semibold leading-6 text-slate-600">/mês</span>}
              </p>
              <a href="#" className={`mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 ${tier.mostPopular ? 'bg-brand-blue text-white hover:bg-opacity-90' : 'bg-white text-brand-blue ring-1 ring-inset ring-brand-blue hover:ring-brand-blue/70'}`}>
                Começar agora
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;