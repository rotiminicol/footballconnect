import api from './config';
import { Player } from '../types';

export const getPlayers = async (): Promise<Player[]> => {
  const response = await api.get('/players');
  return response.data;
};

export const getPlayerById = async (id: string): Promise<Player> => {
  const response = await api.get(`/players/${id}`);
  return response.data;
};

export const addToWatchlist = async (playerId: string): Promise<void> => {
  await api.post(`/players/${playerId}/watchlist`);
};