import api from './config';
import { Club } from '../types';

export const getClubs = async (): Promise<Club[]> => {
  const response = await api.get('/clubs');
  return response.data;
};

export const getClubById = async (id: string): Promise<Club> => {
  const response = await api.get(`/clubs/${id}`);
  return response.data;
};

export const connectWithClub = async (clubId: string): Promise<void> => {
  await api.post(`/clubs/${clubId}/connect`);
};