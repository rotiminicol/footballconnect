import api from './config';
import { Message, Chat } from '../types';

export const getChats = async (): Promise<Chat[]> => {
  const response = await api.get('/chats');
  return response.data;
};

export const getMessages = async (chatId: string): Promise<Message[]> => {
  const response = await api.get(`/chats/${chatId}/messages`);
  return response.data;
};

export const sendMessage = async (chatId: string, content: string): Promise<Message> => {
  const response = await api.post(`/chats/${chatId}/messages`, { content });
  return response.data;
};