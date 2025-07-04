import React, { useState, useEffect, useRef } from 'react';
import { mockConversations } from '../../constants';
import { Conversation, Message } from '../../types';

const ConversationsList: React.FC<{
    conversations: Conversation[];
    selectedConversationId: string | null;
    onSelect: (id: string) => void;
}> = ({ conversations, selectedConversationId, onSelect }) => (
    <div className="border-r border-gray-200 flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Conversas</h2>
            <input type="text" placeholder="Pesquisar conversas..." className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div className="overflow-y-auto flex-1">
            {conversations.map(conv => (
                <div
                    key={conv.id}
                    className={`flex items-center p-4 cursor-pointer border-l-4 ${selectedConversationId === conv.id ? 'bg-blue-50 border-blue-500' : 'border-transparent hover:bg-gray-50'}`}
                    onClick={() => onSelect(conv.id)}
                >
                    <img className="h-12 w-12 rounded-full" src={conv.avatar} alt={conv.leadName} />
                    <div className="ml-4 flex-1 overflow-hidden">
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-semibold text-gray-800">{conv.leadName}</p>
                            <p className="text-xs text-gray-500">{conv.timestamp}</p>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ChatWindow: React.FC<{ conversation: Conversation | null }> = ({ conversation }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isAiPaused, setAiPaused] = useState(false);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        if (conversation) {
            setMessages(conversation.messages);
            // Example: check if last message was from human to set initial state
            const lastMessage = conversation.messages[conversation.messages.length - 1];
            setAiPaused(lastMessage?.sender === 'human');
        }
    }, [conversation]);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if(!newMessage.trim() || !conversation) return;

        const message: Message = {
            id: `m${Date.now()}`,
            text: newMessage,
            sender: 'human',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, message]);
        setNewMessage('');
    };

    if (!conversation) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Selecione uma conversa</h3>
                    <p className="mt-1 text-sm text-gray-500">Escolha uma conversa da lista para ver as mensagens.</p>
                </div>
            </div>
        );
    }
    
    const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
        const isLead = message.sender === 'lead';
        const isAi = message.sender === 'ai';
        const isHuman = message.sender === 'human';

        const alignment = isLead ? 'items-start' : 'items-end';
        const bubbleColor = isLead ? 'bg-gray-200 text-gray-800' : (isAi ? 'bg-blue-100 text-blue-900' : 'bg-green-500 text-white');
        const bubbleRadius = isLead ? 'rounded-r-xl rounded-tl-xl' : 'rounded-l-xl rounded-tr-xl';

        return (
            <div className={`flex flex-col ${alignment}`}>
                <div className={`px-4 py-2 rounded-lg max-w-sm ${bubbleColor} ${bubbleRadius}`}>
                    <p className="text-sm">{message.text}</p>
                </div>
                <span className={`text-xs text-gray-400 mt-1 ${isLead ? 'ml-1' : 'mr-1'}`}>
                    {isHuman && 'Você - '}
                    {isAi && 'Agente IA - '}
                    {message.timestamp}
                </span>
            </div>
        )
    };

    return (
        <div className="flex flex-col h-full">
            <header className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg">{conversation.leadName}</h3>
                    <p className="text-xs text-green-600 font-semibold">Conversa Ativa</p>
                </div>
                <button
                    onClick={() => setAiPaused(!isAiPaused)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${isAiPaused ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'}`}
                >
                    {isAiPaused ? 'Retomar Atendimento com IA' : 'Pausar IA e Assumir'}
                </button>
            </header>

            <main className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
                {messages.map(msg => <MessageBubble key={msg.id} message={msg} />)}
                <div ref={messagesEndRef} />
            </main>

            <footer className="p-4 bg-white border-t border-gray-200">
                {isAiPaused ? (
                     <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Digite sua mensagem como humano..."
                            className="flex-1 px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                         <button type="submit" className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                         </button>
                     </form>
                ) : (
                    <div className="text-center text-sm text-gray-500 p-2 bg-yellow-50 rounded-lg">
                        O agente de IA está respondendo. Pause para assumir o controle.
                    </div>
                )}
            </footer>
        </div>
    );
};

const Conversations: React.FC = () => {
    const [conversations] = useState<Conversation[]>(mockConversations);
    const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);

    const selectedConversation = conversations.find(c => c.id === selectedConversationId) || null;

    return (
        <div className="h-[calc(100vh-8rem)] bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full">
                <div className="md:col-span-1 lg:col-span-1 h-full hidden md:block">
                    <ConversationsList
                        conversations={conversations}
                        selectedConversationId={selectedConversationId}
                        onSelect={setSelectedConversationId}
                    />
                </div>
                <div className="md:col-span-2 lg:col-span-3 h-full">
                     <ChatWindow conversation={selectedConversation} />
                </div>
            </div>
        </div>
    );
};

export default Conversations;
