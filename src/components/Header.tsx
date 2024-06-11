'use client'
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth"

export default function Header() {
  const { authState, logout } = useAuth();
  const router = useRouter();

  const onLogout = () => {
    logout();
    router.push('/');
  }

  return (
    <header>
      <div>
        <span>User: {authState.user?.name} </span>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  )
}