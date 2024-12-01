'use client';

import React from "react";

import { WavyBackground } from '@/components/ui/wavy-background';

export default function Home() {
  return (
    <>
      {/* Main content */}
      <WavyBackground className="fixed max-w-4xl mx-auto pb-40">
      <div className="max-w-7xl mt-9 relative mx-auto px-4 w-full left-0 top-0">
        <h1 className={'py-3 font-serif text-2xl md:text-6xl font-bold text-white'}>
        "Stream Independently,<br /> Discover Limitlessly."
        </h1>
        <p className={`font-serif max-w-2xl text-base md:text-3xl mt-8 text-neutral-200`}>
          The ultimate one stop music streaming platform where souls connect through the world of MUSIC.
        </p>
      </div>

      {/* <div className="py-20 text-white mx-auto px-2">
        <h3 className={`font-serif py-5 font-semibold text-[40px]`}> How does it work? </h3>
        <h2 className={`font-serif py-5 font-semibold text-[30px]`}> Technology </h2>
        <p className={`font-serif max-w-2xl text-base md:text-2xl mt-4 dark:text-neutral-200`}>
          By basing the AURAMUSIC Player with the solana blockchain and storing all the tracks on IPFS, there is no central server and so the storage costs are drastically reduced.
          This allows for more of the revenue to go directly to the artist, in a more secure, transparent way than ever before.
        </p>
      </div> */}
      </WavyBackground>

      {/* Footer */}
      <footer className="text-center p-4 md:p-6 z-30 bg-black text-white">
        © 2024 AURAMUSIC. All rights reserved.
      </footer>
    </>
  );
}
