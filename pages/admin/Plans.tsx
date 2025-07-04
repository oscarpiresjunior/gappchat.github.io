import React from 'react';
import { mockPlans } from '../../constants';
import { Plan } from '../../types';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);


const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
    const isPopular = plan.name === 'Pro';

    return (
        <div className={`relative flex flex-col bg-white p-8 rounded-2xl border ${isPopular ? 'border-blue-500' : 'border-gray-200'} shadow-sm`}>
            {isPopular && <div className="absolute top-0 -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">MAIS POPULAR</div>}
            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
            <p className="mt-2 text-gray-600">
                <span className="text-4xl font-extrabold text-gray-900">R${plan.price}</span>
                <span className="text-base font-medium text-gray-500">/mês</span>
            </p>
            <p className="mt-4 text-sm text-gray-500">Stripe ID: {plan.stripePriceId}</p>
            <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map(feature => (
                    <li key={feature} className="flex items-start">
                        <CheckIcon />
                        <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`mt-8 w-full py-3 px-6 rounded-lg font-semibold transition-colors ${isPopular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                Editar Plano
            </button>
        </div>
    );
};

const PlanManagement: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Gestão de Planos</h1>
                    <p className="mt-1 text-gray-600">Crie e edite os planos de assinatura.</p>
                </div>
                <button className="bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm whitespace-nowrap">
                    + Criar Novo Plano
                </button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {mockPlans.map(plan => (
                    <PlanCard key={plan.id} plan={plan} />
                ))}
            </div>
        </div>
    );
};

export default PlanManagement;