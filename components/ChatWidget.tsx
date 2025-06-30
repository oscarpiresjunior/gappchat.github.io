import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getBotResponseStream } from '../services/geminiService';

const ChatBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isBot = message.sender === 'bot';
  return (
    <div className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-xs md:max-w-md rounded-2xl px-4 py-3 ${isBot ? 'bg-slate-200 text-slate-800 rounded-bl-none' : 'bg-brand-blue text-white rounded-br-none'}`}>
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
};


const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', sender: 'bot', text: "Olá! Sou um assistente de IA para o GAPPCHAT. Pergunte-me qualquer coisa sobre como criar agentes de IA para o seu negócio!" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);


    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { id: Date.now().toString(), sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const botMessageId = (Date.now() + 1).toString();
        setMessages(prev => [...prev, { id: botMessageId, sender: 'bot', text: '' }]);

        try {
            const stream = await getBotResponseStream(input, messages.slice(0, -1));

            for await (const chunk of stream) {
                setMessages(prev => prev.map(msg => 
                    msg.id === botMessageId ? { ...msg, text: msg.text + chunk } : msg
                ));
            }
        } catch (error) {
            console.error("Error getting bot response:", error);
            setMessages(prev => prev.map(msg => 
                msg.id === botMessageId ? { ...msg, text: "Desculpe, estou com problemas para me conectar no momento." } : msg
            ));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90 invisible' : 'opacity-100 scale-100 visible'}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-brand-blue text-white rounded-full p-4 shadow-xl hover:bg-opacity-90 transition-all transform hover:scale-110"
                    aria-label="Abrir Chat"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>
            </div>

            <div className={`fixed bottom-0 right-0 sm:bottom-5 sm:right-5 z-50 w-full h-full sm:w-[400px] sm:h-[600px] bg-white rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 bg-slate-100 rounded-t-xl border-b border-slate-200">
                    <div className="flex items-center gap-3">
                         <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg">G</div>
                            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white"></span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800">Assistente GAPPCHAT</h3>
                            <p className="text-xs text-slate-500">Online</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((msg) => <ChatBubble key={msg.id} message={msg} />)}
                     {isLoading && (
                        <div className="flex justify-start">
                             <div className="bg-slate-200 rounded-2xl rounded-bl-none px-4 py-3">
                                 <div className="flex items-center justify-center gap-1">
                                    <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></span>
                                 </div>
                             </div>
                        </div>
                    )}
                    <div ref={chatEndRef}></div>
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-slate-200 rounded-b-xl">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Digite sua mensagem..."
                            className="flex-1 w-full px-4 py-2 bg-slate-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="p-2 bg-brand-blue text-white rounded-full disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ChatWidget;