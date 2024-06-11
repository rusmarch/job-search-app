'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to JobFinder</h1>
        <p className="text-lg text-gray-700">
          Your go-to platform for finding your next career opportunity.
        </p>
      </section>
      <section className="flex flex-col items-center gap-4">
        <Link href="/create-profile">
          <p className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
            Create Profile
          </p>
        </Link>
        <p className="text-gray-700">or</p>
        <Link href="/jobs">
          <p className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
            Search Jobs
          </p>
        </Link>
      </section>
      <section className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 max-w-md">
          We offer a wide range of job listings from reputable companies, a simple profile creation process, and personalized job recommendations to help you find the perfect match.
        </p>
      </section>
    </main>
  );
}
