import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import * as S from './Styles';

interface ChatbotProps {
  onClose: () => void;
}

interface Message {
  sender: string;
  text: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Oi! Como posso ajudar você?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const systemMessageContent = `
    Você é um chatbot especializado em responder perguntas sobre a Elevaty. 
    A Elevaty é uma processadora de faturas de cartão de crédito e comunicação multicanal com o cliente final. 
    Em operação há 4 anos, a Elevaty possui uma carteira de mais de 30 clientes varejistas. 
    Fornece soluções inovadoras de fatura digital e comunicação multicanal, garantindo canais efetivos para uma comunicação fluida e assertiva. 
    A empresa evita inadimplência por falta de comunicação, gera novas oportunidades de negócios e vendas, além de manter um ótimo relacionamento com os clientes. 
    A Elevaty está sediada em São Paulo, foi fundada em 2020 e tem entre 11 a 50 funcionários. 
    O site da Elevaty é www.instagram.com/elevaty.tech.
  `;

  useEffect(() => {
    if (!localStorage.getItem('systemMessage')) {
      localStorage.setItem('systemMessage', systemMessageContent);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'user', text: input }];
      setMessages(newMessages);
      setInput('');

      const relevance = await checkRelevance(input);
      if (relevance === 'Sim') {
        const response = await getBotResponse(input);
        setMessages([...newMessages, { sender: 'bot', text: response }]);
      } else {
        setMessages([...newMessages, { sender: 'bot', text: 'Desculpe, só posso responder perguntas sobre a Elevaty.' }]);
      }
    }
  };

  const checkRelevance = async (userInput: string): Promise<string> => {
    const API_KEY = import.meta.env.VITE_APP_OPENAI_API_KEY;
    const checkRelevanceMessage = {
      role: 'system',
      content: `
        Você é um chatbot que deve verificar se a pergunta é relevante para a Elevaty. 
        Responda apenas "Sim" se a pergunta for relevante e "Não" se a pergunta não for relevante.
      `
    };

    try {
      const relevanceResponse = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            checkRelevanceMessage,
            { role: 'user', content: userInput }
          ],
          max_tokens: 10
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      );

      return relevanceResponse.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error checking relevance:', error);
      return 'Não';
    }
  };

  const getBotResponse = async (userInput: string): Promise<string> => {
    const API_KEY = import.meta.env.VITE_APP_OPENAI_API_KEY;
    const systemMessage = {
      role: 'system',
      content: localStorage.getItem('systemMessage') || ''
    };

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            systemMessage,
            { role: 'user', content: userInput }
          ],
          max_tokens: 100
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (error: any) {
      console.error('Error fetching the bot response:', error.response ? error.response.data : error.message);
      return 'Desculpe, houve um problema ao obter a resposta. Tente novamente mais tarde.';
    }
  };

  return (
    <S.ChatContainer>
      <S.ChatHeader>
        Elevaty IA
        <button onClick={onClose} style={{ float: 'right', color: 'white', background: 'none', border: 'none' }}>X</button>
      </S.ChatHeader>
      <S.ChatMessages>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.sender === 'bot' ? 'left' : 'right' }}>
            {message.sender === 'bot' ? (
              <div dangerouslySetInnerHTML={{ __html: message.text }} />
            ) : (
              <p>{message.text}</p>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </S.ChatMessages>
      <S.ChatInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        placeholder="Digite sua mensagem..."
      />
    </S.ChatContainer>
  );
};

export default Chatbot;
