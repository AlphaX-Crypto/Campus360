import { useState, useEffect } from 'react';
import { authService } from '../services/authService';

export function useAuth() {
  const [user, setUser] = useState(() => authService.getCurrentUser());
  const [loading, setLoading] = useState(false);

  const loginAs = async (roleKey) => {
    setLoading(true);
    try {
      const loggedUser = await authService.login(roleKey);
      setUser(loggedUser);
      return loggedUser;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return {
    user,
    role: user?.role || 'STUDENT',
    isAuthenticated: Boolean(user),
    loading,
    loginAs,
    logout,
  };
}
