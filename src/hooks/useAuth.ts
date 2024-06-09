'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useBoolean } from "./useBoolean";
import type { UserProfileData } from "@/types/user";

type ReturnType = {
 user: UserProfileData | null;
 login: (user: UserProfileData) => void;
 logout: VoidFunction;
 isLoading: boolean;
};

export const useAuth = (userData?: UserProfileData): ReturnType => {
  const [user, setUser] = useState<UserProfileData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const checkLocalStorage = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    setIsLoading(false);
    checkLocalStorage();
  }, []);

  const login = (user: UserProfileData) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return {
    user,
    login,
    logout,
    isLoading,
  };
}
