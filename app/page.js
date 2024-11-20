// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[url('/bg.svg')] bg-cover bg-slate-900 min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Head>
        <title>FinAdvise</title>
        <meta name="description" content="AI-based financial advisor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mt-5 mx-auto p-4 flex flex-col items-center relative">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center">Personalized Financial</h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl mb-24 font-bold text-center">Guidance</h1>

        {/* SVG container positioned lower */}
        <div className="absolute inset-x-64 flex justify-between items-center px-4 md:px-8 lg:px-16 top-16 md:top-16 lg:top-16 gap-16"> {/* Adjusted positioning and gap */}
          <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64"> {/* Increased sizes */}
            <Image
              src="/chat-img.svg"
              alt="Chat Image"
              layout="responsive"
              width={256}
              height={256}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64"> {/* Increased sizes */}
            <Image
              src="/graph-icon.svg"
              alt="Graph Icon"
              layout="responsive"
              width={256}
              height={256}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* Responsive paragraph */}
        <p className="text-center items-center text-lg md:text-xl lg:text-2xl mb-5 leading-relaxed md:leading-relaxed lg:leading-relaxed">
          AI-driven insights, real-time advice,<br className="hidden md:block"/> and comprehensive tools tailored to <br className="hidden md:block"/> your unique financial journey.
        </p>

        {/* Responsive input and button */}
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <input
            className="bg-gray-500 text-white opacity-50 rounded-xl p-2 md:p-3 lg:p-4 pl-5 md:pl-6 lg:pl-8 text-sm md:text-base lg:text-lg w-full md:w-auto"
            placeholder="name@email.com"
          />
          <button className="bg-white text-black p-2 md:p-3 lg:p-4 font-semibold rounded-xl text-sm md:text-base lg:text-lg">
            Join Waitlist
          </button>
        </div>
      </main>
      <div className='flex justify-between bg-black pt-4 pl-2 pr-2'>
      <footer className="bg-black text-white p-2 text-center ">
        &copy; 2024 Existence. All rights reserved.
      </footer>
      <footer className="bg-black text-white p-2 text-center">
      <div className='flex gap-2'>
      <Image
              src="/x.svg"
              alt="Graph Icon"
              layout="responsive"
              width={256}
              height={256}
              className="w-full h-full object-contain"
      />
      <Image
              src="/linkedin.svg"
              alt="Graph Icon"
              layout="responsive"
              width={256}
              height={256}
              className="w-full h-full object-contain"
      />
      <Image
              src="/youtube.svg"
              alt="Graph Icon"
              layout="responsive"
              width={256}
              height={256}
              className="w-full h-full object-contain"
      />
      </div>
      </footer>
      </div>
    </div>
  );
}
