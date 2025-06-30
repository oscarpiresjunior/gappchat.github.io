import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Message } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Chatbot will not function.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const chatModelConfig = {
  systemInstruction: `Você é um assistente de vendas amigável e prestativo para o GAPPCHAT.
      GAPPCHAT é um SaaS que permite que pequenas empresas criem seus próprios agentes chatbot de IA através de um link da web independente.
      - **O que faz:** Cria chatbots de IA.
      - **Como funciona:** Os donos de negócios descrevem sua empresa, personalizam o bot e recebem um link para compartilhar.
      - **Principais Funcionalidades:** Suporte 24/7, geração de leads, configuração fácil, sem necessidade de codificação.
      - **Preços:** Existem planos Grátis, Pro (R$29/mês) e Empresarial (R$99/mês).
      Seu objetivo é responder às perguntas dos usuários sobre o GAPPCHAT e incentivá-los a experimentá-lo, clicando nos botões 'Começar Agora' ou 'Crie seu Agente de IA' no site.
      Seja conciso, amigável e prestativo. Mantenha as respostas relativamente curtas. Não invente informações.`,
};

export async function* getBotResponseStream(
  prompt: string,
  history: Message[]
): AsyncGenerator<string> {

  if (!API_KEY) {
    yield "Desculpe, o serviço de chat está indisponível no momento. A chave da API está ausente.";
    return;
  }
  
  try {
    // Note: The current simplified implementation starts a new chat context on each call.
    // For a stateful conversation, you would manage the `chatSession` instance across calls.
    // However, for this demo, we can just send a brief history.
    
    // Convert message history to Gemini format
    const geminiHistory = history.map(msg => ({
        role: msg.sender === 'bot' ? 'model' : 'user',
        parts: [{ text: msg.text }]
    }));
    
    const chatWithHistory = ai.chats.create({
      model: 'gemini-2.5-flash-preview-04-17',
      history: geminiHistory,
      config: chatModelConfig,
    });

    const stream = await chatWithHistory.sendMessageStream({ message: prompt });
    
    for await (const chunk of stream) {
        if (chunk && chunk.text) {
           yield chunk.text;
        }
    }
  } catch (error) {
    console.error("Gemini API error:", error);
    yield "Desculpe, encontrei um erro. Por favor, tente novamente mais tarde.";
  }
}
