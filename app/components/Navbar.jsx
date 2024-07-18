'use client'
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="FinAdvise Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">FinAdvise</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="#feature1">Personalized Recommendations</Link>
          <Link href="#feature2">Expense Tracker</Link>
          <Link href="#feature3">Finance News</Link>
          <Link href="#feature4">Reminders</Link>
        </div>
        {!session ? (
          <div className="hidden md:flex space-x-4">
            <Link href="/login">
              <button className="bg-purple-700 font-semibold px-4 py-2 rounded">Login</button>
            </Link>
            <Link href="/signup">
              <button className="bg-purple-700 font-semibold px-4 py-2 rounded">Sign Up</button>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex space-x-4 items-center">
            <span>{session.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="bg-purple-700 font-semibold px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        )}
        <button onClick={toggleMenu} className="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-4">
          <Link href="#feature1">Personalized Recommendations</Link>
          <Link href="#feature2">Expense Tracker</Link>
          <Link href="#feature3">Finance News</Link>
          <Link href="#feature4">Reminders</Link>
          {!session ? (
            <>
              <Link href="/login">
                <button className="bg-purple-700 font-semibold px-4 py-2 rounded">Login</button>
              </Link>
              <Link href="/signup">
                <button className="bg-purple-700 font-semibold px-4 py-2 rounded">Sign Up</button>
              </Link>
            </>
          ) : (
            <>
              <span>{session.user?.email}</span>
              <button onClick={() => signOut()} className="bg-purple-700 font-semibold px-4 py-2 rounded">Logout</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
