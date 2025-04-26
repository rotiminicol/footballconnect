import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthResponse } from '../types';
import { verifyToken, logout as apiLogout } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (auth: AuthResponse) => void;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  setAuth: () => {},
  logout: async () => {},
  isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const isAuthenticated = !!user && !!token;

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const auth = await verifyToken();
          setUser(auth.user);
          setToken(auth.token);
        } catch (error) {
          localStorage.removeItem('token');
          console.error('Token verification failed:', error);
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const setAuth = (auth: AuthResponse) => {
    setUser(auth.user);
    setToken(auth.token);
    localStorage.setItem('token', auth.token);
  };

  const logout = async () => {
    try {
      await apiLogout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setToken(null);
      localStorage.removeItem('token');
      navigate('/login');
      toast.success('Logged out successfully');
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        token, 
        isAuthenticated,
        setAuth, 
        logout, 
        isLoading 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};