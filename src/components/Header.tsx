'use client'
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth"

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const onLogout = () => {
    logout();
    router.push('/');
  }

  return (
    <header>
      <div>
        <span>User: {user?.name} </span>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  )
}