// pages/index.js
import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FinAdvise</title>
        <meta name="description" content="AI-based financial advisor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center md:text-left">Welcome to FinAdvise</h1>
        <p className="mt-4 text-center md:text-left">Your AI-based financial advisor.</p>
        
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 FinAdvise. All rights reserved.
      </footer>
    </div>
  );
}
