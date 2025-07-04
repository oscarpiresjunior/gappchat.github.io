import React, { useState } from 'react';
import { mockAgents, mockPlans } from '../../constants';
import { Agent, AgentStatus } from '../../types';

const ToggleSwitch: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
    );
};

const StatusIndicator: React.FC<{ status: AgentStatus }> = ({ status }) => (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
    }`}>
        <span className={`mr-1.5 h-2 w-2 rounded-full ${status === 'Ativo' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
        {status}
    </span>
);


const AgentCard: React.FC<{ agent: Agent, onStatusChange: (id: string) => void }> = ({ agent, onStatusChange }) => {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                    <StatusIndicator status={agent.status} />
                </div>
                <p className="text-sm text-blue-500 font-medium mt-2 hover:underline cursor-pointer">{agent.url}</p>
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-600">Status</span>
                 <ToggleSwitch checked={agent.status === 'Ativo'} onChange={() => onStatusChange(agent.id)} />
            </div>
        </div>
    );
}

const MyAgents: React.FC = () => {
    // Assuming client is on 'Pro' plan
    const clientPlan = mockPlans.find(p => p.id === 'plan_pro');
    const [agents, setAgents] = useState<Agent[]>(mockAgents);

    const agentLimit = clientPlan?.agentLimit ?? 0;
    const agentsUsed = agents.length;
    const canAddAgent = agentsUsed < agentLimit;

    const handleStatusChange = (agentId: string) => {
        setAgents(prev => prev.map(a => 
            a.id === agentId ? {...a, status: a.status === 'Ativo' ? 'Inativo' : 'Ativo'} : a
        ));
    };

    return (
        <div>
             <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Meus Agentes</h1>
                    <p className="mt-1 text-gray-600">Crie e gerencie seus agentes de IA.</p>
                </div>
                <button
                    disabled={!canAddAgent}
                    className="bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm whitespace-nowrap disabled:bg-gray-300 disabled:cursor-not-allowed"
                    title={!canAddAgent ? "Limite de agentes do plano atingido." : "Criar um novo agente de IA"}
                >
                    + Adicionar Novo Agente
                </button>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
                <p className="text-sm text-blue-800 font-medium">
                    Você está usando <span className="font-bold">{agentsUsed}</span> de <span className="font-bold">{agentLimit}</span> agentes disponíveis no seu plano <span className="font-bold">{clientPlan?.name}</span>.
                    {!canAddAgent && <a href="#/client/plans" className="ml-2 font-semibold underline">Faça upgrade para adicionar mais.</a>}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {agents.map(agent => (
                    <AgentCard key={agent.id} agent={agent} onStatusChange={handleStatusChange} />
                ))}
            </div>

        </div>
    );
};

export default MyAgents;
