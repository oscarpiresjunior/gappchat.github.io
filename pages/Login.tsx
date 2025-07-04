import React from 'react';

const Logo = () => (
    <a href="#" className="text-4xl font-bold tracking-tight">
        <span style={{color: '#34A853'}}>G</span>
        <span style={{color: '#FBBC05'}}>A</span>
        <span style={{color: '#FF6D00'}}>P</span>
        <span style={{color: '#EA4335'}}>P</span>
        <span style={{color: '#4285F4'}}>CHAT</span>
    </a>
);

interface LoginProps {
    onLogin: (role: 'admin' | 'client') => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
        <div className="text-center mb-10">
            <Logo />
            <p className="mt-4 text-lg text-gray-600">Bem-vindo de volta! Faça login na sua conta.</p>
        </div>
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" placeholder="seu@email.com" defaultValue="demo@gappchat.com" />
                </div>
                <div className="mb-8">
                    <label htmlFor="password"className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                    <input type="password" id="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" placeholder="••••••••" defaultValue="demopass" />
                </div>

                <div className="flex flex-col gap-4">
                     <button 
                        onClick={() => onLogin('client')} 
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-md text-base"
                    >
                        Entrar como Cliente
                    </button>
                    <button 
                        onClick={() => onLogin('admin')} 
                        className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-md text-base"
                    >
                        Entrar como Administrador
                    </button>
                </div>
            </form>
            <p className="text-center text-sm text-gray-500 mt-8">
                Não tem uma conta? <a href="#" className="font-medium text-blue-500 hover:underline">Crie uma agora</a>
            </p>
        </div>
         <a href="/#" className="mt-8 text-sm text-gray-600 hover:text-gray-900">&larr; Voltar para a Home</a>
    </div>
  );
};

export default Login;