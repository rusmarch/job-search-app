'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex flex-col items-center  min-h-screen bg-gray-100">
      <>
        <Link href="/create-profile">Create profile</Link>
        <p>or</p>
        <Link href="/jobs" >Search a job</Link>
      </>
    </main>
  );
}
