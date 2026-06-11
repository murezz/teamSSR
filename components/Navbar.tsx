"use client";

import React from 'react';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 z-[50] w-auto max-w-4xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/40 px-6 py-3 backdrop-blur-md">
        <div className="flex justify-center items-center gap-2 text-white">
          <div className="h-12 w-12">
            <Image src="/logoSsr.png" alt="Logo" width={32} height={32} className="h-full w-full object-contain" />
          </div>
          <span className="text-lg font-semibold tracking-tight hidden md:flex">Street Soul Runners</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;