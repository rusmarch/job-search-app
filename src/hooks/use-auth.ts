'use client'
import type { UserProfileData } from "@/types/user";
import { useLocalStorage } from "./use-local-storage";

type ReturnType = {
 user: UserProfileData | null;
 createProfile: (user: UserProfileData) => void;
 logout: VoidFunction;
}

export const useAuth = (): ReturnType => {
  const [user, setUser] = useLocalStorage<UserProfileData | null>('user', null);

  const createProfile = (user: UserProfileData) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    createProfile,
    logout,
  };
}
