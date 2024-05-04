import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoggedInCollegeAdmin, NotRegisteredUser, User } from "./@types";

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    logoutUser: () => void;
}
const initialUserState = { user: null };

export const useUser = create<UserState>()(
    persist<UserState>(
        (set, get) => ({
            ...initialUserState,
            setUser: (user) => {
                set(() => ({ user: user }));
            },
            logoutUser: () => {
                set(() => ({ ...initialUserState }));
            },
        }),
        { name: "userStore" }
    )
);
