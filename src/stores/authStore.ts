import { create } from 'zustand';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
}

// Mock user for V1.0
const mockUser: User = {
  id: '1',
  email: 'creator@instagen.studio',
  name: 'Alex Chen',
  tier: 'pro',
  creditsRemaining: 450,
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
};

export const useAuthStore = create<AuthState>((set) => ({
  user: mockUser,
  isAuthenticated: true,
  login: async (email: string, password: string) => {
    // Mock login
    await new Promise((resolve) => setTimeout(resolve, 800));
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  signup: async (email: string, password: string, name: string) => {
    // Mock signup
    await new Promise((resolve) => setTimeout(resolve, 800));
    set({
      user: { ...mockUser, email, name },
      isAuthenticated: true,
    });
  },
}));
