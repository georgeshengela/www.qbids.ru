import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface User {
  id: string;
  username: string;
  bidBalance: number;
  role: string;
}

interface AuthResponse {
  user: User;
}

let globalUser: User | null = null;
let globalLoading = true;
let authInitPromise: Promise<void> | null = null;
const listeners = new Set<() => void>();

function notifyAuthListeners() {
  listeners.forEach((listener) => listener());
}

export function useAuth() {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(globalUser);
  const [isLoading, setIsLoading] = useState(globalLoading);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  // Keep all useAuth() consumers in sync (Header + AuthModal, etc.)
  useEffect(() => {
    const listener = () => {
      setUser(globalUser);
      setIsLoading(globalLoading);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  // Check localStorage for welcome modal flag
  useEffect(() => {
    const shouldShowWelcome = localStorage.getItem('showWelcomeModal');
    if (shouldShowWelcome === 'true' && user) {
      setShowWelcomeModal(true);
      localStorage.removeItem('showWelcomeModal');
    }
  }, [user]);

  useEffect(() => {
    // If we've already initialized, use the cached result
    if (!globalLoading) {
      setUser(globalUser);
      setIsLoading(false);
      return;
    }

    // Start a single, shared auth initialization if not already started
    if (!authInitPromise) {
      authInitPromise = fetch("/api/auth/me", { credentials: "include" })
        .then((res) => (res.ok ? res.json() : { user: null }))
        .then((data) => {
          globalUser = data.user || null;
        })
        .catch(() => {
          globalUser = null;
        })
        .finally(() => {
          globalLoading = false;
          authInitPromise = null;
          notifyAuthListeners();
        });
    }

    // Subscribe to the shared initialization promise
    authInitPromise.then(() => {
      setUser(globalUser);
      setIsLoading(false);
    });
  }, []);

  const loginMutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const response = await apiRequest("POST", "/api/auth/login", credentials);
      return response.json() as Promise<AuthResponse>;
    },
    onSuccess: (data) => {
      globalUser = data.user;
      setUser(data.user);
      notifyAuthListeners();
      queryClient.invalidateQueries();
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (credentials: { username: string; email: string; password: string }) => {
      const response = await apiRequest("POST", "/api/auth/register", credentials);
      return response.json() as Promise<AuthResponse>;
    },
    onSuccess: (data) => {
      globalUser = data.user;
      setUser(data.user);
      notifyAuthListeners();
      queryClient.invalidateQueries();
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/auth/logout");
    },
    onSuccess: () => {
      globalUser = null;
      setUser(null);
      notifyAuthListeners();
      queryClient.clear();
    },
  });

  const refetch = async () => {
    try {
      const res = await fetch("/api/auth/me", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        globalUser = data.user || null;
      } else {
        globalUser = null;
      }
    } catch {
      globalUser = null;
    }
    setUser(globalUser);
    notifyAuthListeners();
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    loginPending: loginMutation.isPending,
    registerPending: registerMutation.isPending,
    refetch,
    showWelcomeModal,
    setShowWelcomeModal,
  };
}
