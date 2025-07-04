import React from 'react';
import { adminStats } from '../../constants';
import { AdminStat } from '../../types';

const StatCard: React.FC<{ stat: AdminStat }> = ({ stat }) => {
    const changeColor = stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500';
    const changeIcon = stat.changeType === 'increase' ? '↑' : '↓';
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <h3 className="text-base font-medium text-gray-500">{stat.title}</h3>
                {stat.icon}
            </div>
            <div>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                {stat.change && (
                    <p className={`text-sm mt-1 ${changeColor}`}>
                        <span className="font-semibold">{changeIcon} {stat.change}</span> vs. mês anterior
                    </p>
                )}
            </div>
        </div>
    );
};

const ChartPlaceholder: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="mt-4 flex items-center justify-center h-64 bg-gray-50 rounded-lg">
            <p className="text-gray-400">Chart data will be here</p>
        </div>
    </div>
);


const AdminDashboard: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-gray-600">Visão geral da saúde do seu negócio.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {adminStats.map(stat => <StatCard key={stat.id} stat={stat} />)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8">
                <div className="lg:col-span-3">
                     <ChartPlaceholder title="Evolução da Receita Mensal (MRR)" />
                </div>
                <div className="lg:col-span-2">
                    <ChartPlaceholder title="Clientes Ativos vs. Inativos" />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;