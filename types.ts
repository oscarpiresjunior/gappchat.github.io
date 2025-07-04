import React from 'react';

export interface NavLink {
  id: string;
  title: string;
}

export interface Stat {
  id: string;
  title: string;
  value: string;
}

export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}

export interface Feedback {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
}

export interface Client {
  id: string;
  logo: string;
}

export interface FooterLink {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
}

export interface SocialMedia {
  id: string;
  icon: React.ReactNode;
  link: string;
}

// Admin Panel Types
export interface AdminStat {
  id: string;
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  icon: React.ReactNode;
}

export interface Customer {
    id: string;
    name: string;
    email: string;
    plan: string;
    agentCount: {
        used: number;
        allowed: number;
    };
    status: 'Ativo' | 'Inativo' | 'Cancelado';
    avatar: string;
}

export interface Plan {
    id: string;
    name: string;
    price: number;
    stripePriceId: string;
    agentLimit: number;
    conversationLimit: string;
    features: string[];
}


// Client Panel Types
export type AgentStatus = 'Ativo' | 'Inativo';

export interface Agent {
    id: string;
    name: string;
    url: string;
    status: AgentStatus;
}

export interface Message {
    id: string;
    text: string;
    timestamp: string;
    sender: 'ai' | 'lead' | 'human';
}

export interface Conversation {
    id: string;
    leadName: string;
    lastMessage: string;
    timestamp: string;
    messages: Message[];
    avatar: string;
}