import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  userId: string | null;
  nickname: string | null;
  profileImage: string | null;
  setUserInfo: (userId: string, nickname: string, profileImage: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userId: null,
      nickname: null,
      profileImage: null,
      setUserInfo: (userId, nickname, profileImage) =>
        set({ userId, nickname, profileImage }),
    }),
    {
      name: "user-info",
    }
  )
);
