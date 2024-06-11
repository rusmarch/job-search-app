'use client'
import { useEffect, useState } from "react";
import type { UserProfileData } from "@/types/user";

type ReturnType = {
 user: UserProfileData | null;
 createProfile: (user: UserProfileData) => void;
 logout: VoidFunction;
}

export const useAuth = (): ReturnType => {
    const [user, setUser] = useState<UserProfileData | null>(null);
  
  useEffect(() => {
    const checkLocalStorage = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }       
    };
    checkLocalStorage();
  }, []);

  const createProfile = (user: UserProfileData) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return {
    user,
    createProfile,
    logout,
  };
}
