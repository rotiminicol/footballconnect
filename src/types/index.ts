export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'club' | 'scout' | 'agent';
  organization: string;
  avatar?: string;
  location?: string;
  phone?: string;
  joinedAt: Date;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  role: 'club' | 'scout' | 'agent';
  organization: string;
}

export interface Player {
  _id: string;
  name: string;
  position: string;
  age: number;
  club: string;
  country: string;
  value: string;
  image: string;
  stats: {
    goals?: number;
    assists?: number;
    appearances?: number;
  };
}

export interface Club {
  _id: string;
  name: string;
  country: string;
  league: string;
  players: number;
  trophies: number;
  image: string;
}

export interface Message {
  _id: string;
  chatId: string;
  senderId: string;
  content: string;
  createdAt: Date;
}

export interface Chat {
  _id: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface FeatureType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface StatType {
  id: number;
  value: string;
  label: string;
}