import React, { useState, useMemo } from 'react';
import { mockCustomers } from '../../constants';
import { Customer } from '../../types';

const ToggleSwitch: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
    );
};

const CustomerManagement: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const filteredCustomers = useMemo(() =>
        customers.filter(customer =>
            customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchTerm.toLowerCase())
        ), [customers, searchTerm]);

    const paginatedCustomers = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredCustomers.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredCustomers, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

    const handleStatusToggle = (customerId: string) => {
        setCustomers(prev =>
            prev.map(c =>
                c.id === customerId ? { ...c, status: c.status === 'Ativo' ? 'Inativo' : 'Ativo' } : c
            )
        );
    };
    
    const StatusBadge: React.FC<{ status: Customer['status'] }> = ({ status }) => {
        const baseClasses = "px-2.5 py-0.5 text-xs font-medium rounded-full inline-block";
        const statusMap = {
            Ativo: "bg-green-100 text-green-800",
            Inativo: "bg-yellow-100 text-yellow-800",
            Cancelado: "bg-red-100 text-red-800",
        };
        return <span className={`${baseClasses} ${statusMap[status]}`}>{status}</span>;
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestão de Clientes</h1>
            <p className="mt-1 text-gray-600">Visualize e gerencie todos os usuários da plataforma.</p>

            <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
                     <input
                        type="text"
                        placeholder="Pesquisar por nome ou email..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>
                
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plano</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agentes</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {paginatedCustomers.map(customer => (
                                <tr key={customer.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img className="h-10 w-10 rounded-full" src={customer.avatar} alt="" />
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                                                <div className="text-sm text-gray-500">{customer.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.plan}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{`${customer.agentCount.used} / ${customer.agentCount.allowed}`}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <StatusBadge status={customer.status} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center gap-4">
                                            <ToggleSwitch checked={customer.status === 'Ativo'} onChange={() => handleStatusToggle(customer.id)} />
                                            <button className="text-blue-600 hover:text-blue-900">Detalhes</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-between items-center mt-4">
                         <span className="text-sm text-gray-700">
                            Página {currentPage} de {totalPages}
                        </span>
                        <div className="flex gap-2">
                             <button onClick={() => setCurrentPage(p => Math.max(1, p-1))} disabled={currentPage === 1} className="px-3 py-1 border rounded-md bg-white hover:bg-gray-50 disabled:opacity-50">Anterior</button>
                             <button onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded-md bg-white hover:bg-gray-50 disabled:opacity-50">Próximo</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomerManagement;