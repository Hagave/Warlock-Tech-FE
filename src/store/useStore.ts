import { User } from "@/interface/userInterface";
import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";

interface AuthStore {
  user: User | null;
  setUser: (user: User) => void;
  signOut: () => void;
}

export const useUserStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      signOut: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
      storage: {
        getItem: (key): StorageValue<AuthStore> | null => {
          const value = sessionStorage.getItem(key);
          return value ? JSON.parse(value) : null; // Corrige o erro de tipagem
        },
        setItem: (key, value) => {
          sessionStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: (key) => {
          sessionStorage.removeItem(key);
        },
      },
    }
  )
);
