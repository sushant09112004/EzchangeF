"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, getSession } from 'next-auth/react';

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push('/');
      }
    };
    checkSession();
  }, [router]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      // Handle signup logic, e.g., create user in database
      // For demo purposes, we're using sign in after signup for simplicity
      await signIn('credentials', { email, password, redirect: false });
      router.push('/');
    } catch (error) {
      console.error('Sign up error:', error);
      // Handle sign-up error (display message, etc.)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-6 rounded shadow-lg max-w-2xl w-full relative">
        <button
          onClick={() => router.push('/')}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 flex items-center justify-center">
            <img src="/pattern-img.svg" alt="Features" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl text-center mb-5">Create an Account</h2>
            <form onSubmit={handleSignUp} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-2 border rounded text-black"
              />
              <button type="submit" className="bg-purple-600 font-semibold w-full py-2 rounded text-white">
                Register
              </button>
            </form>
            <p className="text-center mt-4"> Or </p>
            <div className="mt-4">
              <button onClick={() => signIn('google')} className="bg-white text-base w-full rounded text-black flex items-center justify-center gap-2">
                <img src="/google-icon.svg" alt="Google" className="w-8 h-8 mt-2 pb-2" />
                <span className='font-medium text-center'>Continue with Google</span>
              </button>
            </div>
            <p className="text-center text-lg mt-4">
              Already have an account? <a href="/login" className="text-purple-400">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
