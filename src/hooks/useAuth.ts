'use client'
import { useEffect, useState } from "react";
import type { UserProfileData } from "@/types/user";

type AuthState = { 
  user: UserProfileData | null;
  isLoading: boolean;
}

type ReturnType = {
 authState: AuthState;
 createProfile: (user: UserProfileData) => void;
 logout: VoidFunction;
}

export const useAuth = (): ReturnType => {
    const [authState, setAuthState] = useState<AuthState>({
      user: null,
      isLoading: true,
    });
  
  useEffect(() => {
    const checkLocalStorage = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setAuthState(prevState => ({
          ...prevState,
          user: JSON.parse(storedUser),
          isLoading: false,
        }));
      } else {
        setAuthState(prevState => ({
          ...prevState,
          isLoading: false,
        }));
      }
    };

    checkLocalStorage();
  }, []);

  const createProfile = (user: UserProfileData) => {
    setAuthState(prevState => ({
      ...prevState,
      user,
    }));
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setAuthState(prevState => ({
      ...prevState,
      user: null,
    }));
    localStorage.removeItem('user');
  };

  return {
    authState,
    createProfile,
    logout,
  };
}
