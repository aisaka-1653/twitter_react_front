import { User } from "@/types/user";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserState = {
  userId: number | null;
  setUser: (user: User) => void;
  removeUser: () => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      userId: null,
      setUser: (user: User) => set({ userId: user.id }),
      removeUser: () => set({ userId: null }),
    }),
    {
      name: "user-id",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
