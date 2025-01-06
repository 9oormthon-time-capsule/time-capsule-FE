import { create } from "zustand";

interface UserState {
    userId: string;
    nickname: string;
    profileImage: string;
    setUserInfo: (userId: string, nickname: string, profileImage: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
    userId: null,
    nickname: null,
    profileImage: null,
    setUserInfo: (userId, nickname, profileImage) =>
        set({ userId, nickname, profileImage })
}))