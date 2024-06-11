'use client'
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/hooks/use-auth"
import { useLikedJobs } from "@/hooks/use-liked-jobs";
import { useEffect } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const { likedJobs } = useLikedJobs();

  const onLogout = () => {
    logout();
    router.push('/jobs');
  }

  useEffect(() => {
    localStorage
  }, [])

  return (
    <header className="bg-gray-800 px-5 flex justify-between items-center h-14">
      <div className="text-white flex items-center space-x-4">
        <Link href="/">
          <p className={`text-white ${pathname === '/' ? 'font-bold text-blue-500' : ''}`}>Home</p>
        </Link>
        {!user && (
          <Link href="/create-profile">
            <p className={`text-white ${pathname === '/create-profile' ? 'font-bold text-blue-500' : ''}`}>
              Create Profile
            </p>
          </Link>
        )}
        {likedJobs.length > 0 && (
          <Link href="/liked">
            <p className={`text-white ${pathname === '/liked' ? 'font-bold text-blue-500' : ''}`}>Liked Jobs</p>
          </Link>
        )}
        <Link href="/jobs">
          <p className={`text-white ${pathname === '/jobs' ? 'font-bold text-blue-500' : ''}`}>Jobs</p>
        </Link>
      </div>
      <div >
        {user &&
          <div className="text-white">
            <span>{user?.name} </span>
            <button
              className="ml-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
              onClick={onLogout}>
              Logout
            </button>
          </div>}
      </div>
    </header>
  );
}