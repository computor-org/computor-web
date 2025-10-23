'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthUser, AuthResponse } from '../types/auth';
import { SSOAuthService } from '../services/ssoAuthService';
import { AuthService } from '../services/authService';

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<AuthResponse>;
  loginWithSSO: (provider?: string) => void;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth services
  const ssoAuthService = new SSOAuthService();
  const authService = new AuthService();

  // Check for existing session on mount
  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);

      // Try SSO first
      const ssoUser = ssoAuthService.getCurrentUser();
      if (ssoUser) {
        setUser(ssoUser);
        setIsLoading(false);
        return;
      }

      // Fall back to mock auth
      const mockUser = authService.getCurrentUser();
      if (mockUser) {
        setUser(mockUser);
      }

      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (username: string, password: string): Promise<AuthResponse> => {
    setIsLoading(true);
    try {
      const response = await authService.login({ username, password });

      if (response.success && response.user) {
        setUser(response.user);
      }

      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithSSO = (provider: string = 'keycloak') => {
    ssoAuthService.initiateSSO(provider);
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      // Try SSO logout first
      if (ssoAuthService.isAuthenticated()) {
        await ssoAuthService.logout();
      } else if (authService.isAuthenticated()) {
        await authService.logout();
      }

      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshSession = async () => {
    try {
      let response: AuthResponse | null = null;

      if (ssoAuthService.isAuthenticated()) {
        response = await ssoAuthService.refreshSession();
      } else if (authService.isAuthenticated()) {
        response = await authService.refreshSession();
      }

      if (response?.success && response.user) {
        setUser(response.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Session refresh failed:', error);
      setUser(null);
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    loginWithSSO,
    logout,
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
