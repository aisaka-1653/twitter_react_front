import { create } from "zustand";

type User = {
  id: number;
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
};

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user: User) => set({ user: { id: user.id } }),
  removeUser: () => set({ user: null }),
}));
