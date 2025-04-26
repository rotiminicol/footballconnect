import api from './config';
import { LoginCredentials, RegisterCredentials, AuthResponse } from '../types';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  const response = await api.post('/auth/register', credentials);
  return response.data;
};

export const verifyToken = async (): Promise<AuthResponse> => {
  const response = await api.get('/auth/verify');
  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
  localStorage.removeItem('token');
};