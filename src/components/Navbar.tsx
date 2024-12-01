'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { User } from 'next-auth';
import Image from 'next/image';
import { Gruppo, Orbitron } from 'next/font/google';
// import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
// import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import '@solana/wallet-adapter-react-ui/styles.css';

const orbitron = Orbitron({
  subsets:['latin'],
  variable: '--font-Orbitron',
  weight: '400',
}) 


const gruppo = Gruppo({
  weight:'400',
  subsets:['latin'],
  variable: '--font-Gruppo',
})

function Navbar() {
  const { data: session } = useSession();
  const user : User = session?.user;

  return (
    <nav className="p-3 md:p-6 z-40 shadow-m text-white bg-gradient-to-r bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div>
          <a href="#" className="text-xl font-bold mb-4 md:mb-0">
            <Image
              className='"py-3'
              src="/music.png"
              alt='logo image'
              width={320}
              height={350}
            />  
          </a>
        </div>

        <div className="flex space-x-7 px-8 font-medium text-[20px] " >
            <button className='font-serif mt-1'>About</button>
            {/* <button className={`${gruppo.variable} font-serif mt-1`}>Artists</button> */}
            <button className={`${gruppo.variable} font-serif mt-1`}>Help</button>
            {session ? (
              <>
                <span className="mt-[5px]">
                  Welcome, {user.username || user.email}
                </span>


                <button onClick={() => signOut()} className="w-full rounded-md px-2 md:w-auto bg-slate-100 text-black">
                  Logout
                </button>
              </>
            ) : (
              <Link className="border rounded-md mt-1 bg-blue-300 font-mono px-2 font-medium text-black" href="/sign-in">
                Login
              </Link>
            )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
