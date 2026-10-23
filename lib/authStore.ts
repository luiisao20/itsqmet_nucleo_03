import { User } from "@/interfaces/supabase-models";
import { create } from "zustand";

interface AuthState {
  user?: User;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));
