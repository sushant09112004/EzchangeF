// components/SignupDialog.js
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SignupDialog({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log('Signing up with:', { email, password, name });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded shadow-lg max-w-2xl w-full relative">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  />
                  <button type="submit" className="bg-purple-600 font-semibold w-full py-2 justify-items-center rounded text-white">Sign Up</button>
                </form>
                <p className='text-center mt-4'> Or </p>
                <div className="mt-4">
                  <button onClick={() => signIn('google')} className="bg-white text-base w-full rounded text-black flex items-center justify-center gap-2">
                    <img src="/google-icon.svg" alt="Google" className="w-8 h-8 mt-2 pb-2" />
                    <span className='font-medium text-center'>Continue with Google</span>
                  </button>
                </div>
                <p className="text-center mt-4">
                  Already have an account? <a href="/login" className="text-purple-400">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
