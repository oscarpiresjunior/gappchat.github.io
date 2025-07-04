import React from 'react';
import { NavLink, Stat, Feature, Feedback, Client, FooterLink, SocialMedia, AdminStat, Customer, Plan, Agent, Conversation } from './types';

// Icons
export const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-blue-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);
export const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
export const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-blue-500"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);
export const InstagramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
export const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);
export const TwitterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>);
export const LinkedinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
export const DollarSignIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
export const UsersIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
export const UserPlusIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="17" y1="11" x2="23" y2="11"></line></svg>;
export const SmileIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>;

// Landing Page Data
export const navLinks: NavLink[] = [
  { id: "funcionalidades", title: "Funcionalidades" },
  { id: "precos", title: "Preços" },
  { id: "contato", title: "Contato" },
];

export const stats: Stat[] = [
  { id: "stats-1", title: "Usuários Ativos", value: "3800+", },
  { id: "stats-2", title: "Empresas Confiando", value: "230+", },
  { id: "stats-3", title: "Transações", value: "$230M+", },
];

export const features: Feature[] = [
  { id: "feature-1", icon: <StarIcon />, title: "Recompensas", content: "Os melhores cartões de crédito oferecem combinações tentadoras de promoções e prêmios.", },
  { id: "feature-2", icon: <ShieldIcon />, title: "100% Seguro", content: "Tomamos medidas proativas para garantir que suas informações e transações estejam seguras.", },
  { id: "feature-3", icon: <SendIcon />, title: "Transferência de Saldo", content: "Um cartão de crédito com transferência de saldo pode economizar muito dinheiro em juros.", },
];

export const feedback: Feedback[] = [
  { id: "feedback-1", content: "O dinheiro é apenas uma ferramenta. Ele o levará aonde desejar, mas não o substituirá como motorista.", name: "Herman Jensen", title: "Fundador e Líder", img: "https://i.pravatar.cc/48?u=1", },
  { id: "feedback-2", content: "O dinheiro torna sua vida mais fácil. Se você tiver sorte de tê-lo, você tem sorte.", name: "Steve Mark", title: "Fundador e Líder", img: "https://i.pravatar.cc/48?u=2", },
  { id: "feedback-3", content: "Geralmente, são as pessoas do ramo de dinheiro, finanças e comércio internacional que são realmente ricas.", name: "Kenn Gallagher", title: "Fundador e Líder", img: "https://i.pravatar.cc/48?u=3", },
];

export const clients: Client[] = [
  { id: "client-1", logo: "https://storage.googleapis.com/gweb-aip.appspot.com/dev-assets/airbnb.png", },
  { id: "client-2", logo: "https://storage.googleapis.com/gweb-aip.appspot.com/dev-assets/binance.png", },
  { id: "client-3", logo: "https://storage.googleapis.com/gweb-aip.appspot.com/dev-assets/coinbase.png", },
  { id: "client-4", logo: "https://storage.googleapis.com/gweb-aip.appspot.com/dev-assets/dropbox.png", },
];

export const footerLinks: FooterLink[] = [
  { title: "Links Úteis", links: [ { name: "Conteúdo", link: "#" }, { name: "Como Funciona", link: "#" }, { name: "Criar", link: "#" }, { name: "Explorar", link: "#" }, { name: "Termos e Serviços", link: "#" }, ], },
  { title: "Comunidade", links: [ { name: "Central de Ajuda", link: "#" }, { name: "Parceiros", link: "#" }, { name: "Sugestões", link: "#" }, { name: "Blog", link: "#" }, { name: "Newsletters", link: "#" }, ], },
  { title: "Parceiro", links: [ { name: "Nossos Parceiros", link: "#" }, { name: "Torne-se um Parceiro", link: "#" }, ], },
];

export const socialMedia: SocialMedia[] = [
  { id: "social-media-1", icon: <InstagramIcon />, link: "https://www.instagram.com/", },
  { id: "social-media-2", icon: <FacebookIcon />, link: "https://www.facebook.com/", },
  { id: "social-media-3", icon: <TwitterIcon />, link: "https://www.twitter.com/", },
  { id: "social-media-4", icon: <LinkedinIcon />, link: "https://www.linkedin.com/", },
];

// MOCK DATA FOR DASHBOARDS

export const adminStats: AdminStat[] = [
    { id: '1', title: 'Receita Mensal (MRR)', value: 'R$ 45.897', change: '+20.1%', changeType: 'increase', icon: <DollarSignIcon className="w-6 h-6 text-gray-500" /> },
    { id: '2', title: 'Clientes Ativos', value: '232', change: '+2', changeType: 'increase', icon: <UsersIcon className="w-6 h-6 text-gray-500" /> },
    { id: '3', title: 'Novos Clientes (30d)', value: '18', change: '-5.2%', changeType: 'decrease', icon: <UserPlusIcon className="w-6 h-6 text-gray-500" /> },
    { id: '4', title: 'NPS', value: '4.8/5', change: '+0.1', changeType: 'increase', icon: <SmileIcon className="w-6 h-6 text-gray-500" /> },
];

export const mockCustomers: Customer[] = [
    { id: '1', name: 'Ana Silva', email: 'ana.silva@example.com', plan: 'Pro', agentCount: { used: 2, allowed: 3 }, status: 'Ativo', avatar: 'https://i.pravatar.cc/48?u=11' },
    { id: '2', name: 'Bruno Costa', email: 'bruno.costa@example.com', plan: 'Business', agentCount: { used: 8, allowed: 10 }, status: 'Ativo', avatar: 'https://i.pravatar.cc/48?u=12' },
    { id: '3', name: 'Carla Dias', email: 'carla.dias@example.com', plan: 'Pro', agentCount: { used: 1, allowed: 3 }, status: 'Inativo', avatar: 'https://i.pravatar.cc/48?u=13' },
    { id: '4', name: 'Daniel Alves', email: 'daniel.alves@example.com', plan: 'Starter', agentCount: { used: 1, allowed: 1 }, status: 'Ativo', avatar: 'https://i.pravatar.cc/48?u=14' },
    { id: '5', name: 'Eduarda Lima', email: 'eduarda.lima@example.com', plan: 'Business', agentCount: { used: 5, allowed: 10 }, status: 'Cancelado', avatar: 'https://i.pravatar.cc/48?u=15' },
    { id: '6', name: 'Fábio Martins', email: 'fabio.martins@example.com', plan: 'Pro', agentCount: { used: 3, allowed: 3 }, status: 'Ativo', avatar: 'https://i.pravatar.cc/48?u=16' },
];


export const mockPlans: Plan[] = [
    {
        id: 'plan_starter',
        name: 'Starter',
        price: 49,
        stripePriceId: 'price_123starter',
        agentLimit: 1,
        conversationLimit: '1,000 / mês',
        features: ['1 Agente de IA', 'Base de Conhecimento Simples', 'Suporte por Email']
    },
    {
        id: 'plan_pro',
        name: 'Pro',
        price: 99,
        stripePriceId: 'price_123pro',
        agentLimit: 3,
        conversationLimit: '5,000 / mês',
        features: ['3 Agentes de IA', 'Múltiplas Bases de Conhecimento', 'Integração com WhatsApp', 'Suporte Prioritário']
    },
    {
        id: 'plan_business',
        name: 'Business',
        price: 249,
        stripePriceId: 'price_123business',
        agentLimit: 10,
        conversationLimit: 'Ilimitado',
        features: ['Agentes Ilimitados', 'API de Acesso', 'Gerente de Conta Dedicado', 'Analytics Avançado']
    }
];

export const mockAgents: Agent[] = [
    { id: 'agent1', name: 'Agente de Vendas', url: 'gapp.chat/vendas-acme', status: 'Ativo' },
    { id: 'agent2', name: 'Suporte Técnico N1', url: 'gapp.chat/suporte-acme', status: 'Ativo' },
    { id: 'agent3', name: 'Qualificação de Leads', url: 'gapp.chat/leads-acme', status: 'Inativo' },
];

export const mockConversations: Conversation[] = [
    {
        id: 'conv1',
        leadName: 'Juliana Paes',
        lastMessage: 'Ok, obrigada! Vou analisar a proposta.',
        timestamp: '10:45 AM',
        avatar: 'https://i.pravatar.cc/48?u=21',
        messages: [
            { id: 'm1', sender: 'lead', text: 'Olá, gostaria de saber mais sobre o plano Business.', timestamp: '10:40 AM' },
            { id: 'm2', sender: 'ai', text: 'Olá, Juliana! O plano Business oferece agentes ilimitados, acesso à API e um gerente de conta dedicado. Posso ajudar com mais alguma dúvida?', timestamp: '10:41 AM' },
            { id: 'm3', sender: 'lead', text: 'Qual o valor?', timestamp: '10:42 AM' },
            { id: 'm4', sender: 'human', text: 'Juliana, aqui é o Marcos. O valor é R$249/mês. Estou enviando uma proposta detalhada para seu email.', timestamp: '10:44 AM' },
            { id: 'm5', sender: 'lead', text: 'Ok, obrigada! Vou analisar a proposta.', timestamp: '10:45 AM' },
        ]
    },
    {
        id: 'conv2',
        leadName: 'Ricardo Souza',
        lastMessage: 'Como faço para integrar com meu site?',
        timestamp: '9:30 AM',
        avatar: 'https://i.pravatar.cc/48?u=22',
        messages: [
            { id: 'm1', sender: 'lead', text: 'Como faço para integrar com meu site?', timestamp: '9:30 AM' },
        ]
    }
];