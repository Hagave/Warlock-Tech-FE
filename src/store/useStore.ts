import { IUser } from "@/interface/user.interface";
import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";

interface AuthStore {
  user: IUser | null;
  setUser: (user: IUser) => void;
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
          return value ? JSON.parse(value) : null;
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
