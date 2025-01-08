import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  nickname: string | null;
  profileImage: string | null;
  setUserInfo: (nickname: string, profileImage: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      nickname: null,
      profileImage: null,
      setUserInfo: (nickname, profileImage) =>
        set({nickname, profileImage }),
    }),
    {
      name: "user-info",
    }
  )
);
