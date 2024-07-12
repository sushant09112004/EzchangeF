// components/Navbar.js
'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

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
        <button onClick={toggleDialog} className="hidden md:block bg-purple-700 font-semibold px-4 py-2 rounded">Login/Register</button>
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
          <button onClick={toggleDialog} className="bg-purple-700 font-semibold px-4 py-2 rounded">Login/Register</button>
        </div>
      )}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-gray-800 p-6 rounded shadow-lg max-w-2xl w-full">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <img src="/pattern-img.svg" alt="Features" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-xl text-center mb-5">Welcome to FinAdvise</h2>
              <form className="space-y-4">
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
                <button type="submit" className="bg-purple-600 font-semibold w-full py-2 justify-items-center rounded text-white">Continue</button>
              </form>
              <p className='text-center mt-4'> Or </p>
              <div className="mt-4">
                <button className="bg-white  text-base w-full rounded text-black flex items-center justify-center gap-2 ">
                <img src="/google-icon.svg" alt="Google" className="w-8 h-8 mt-2 pb-2 " />
                <span className=' font-medium text-center'>Continue with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
