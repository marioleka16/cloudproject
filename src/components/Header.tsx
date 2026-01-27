"use client";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full px-[5%] py-6 flex justify-between items-center z-[1000] border-b-2 border-neon bg-bg-primary/95">
      <div className="font-heading text-[2rem] font-bold uppercase text-text-main">
        Iron<span className="text-neon">Pulse</span>
      </div>
      <nav className="hidden md:flex">
        {["Home", "About", "Classes", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-text-main no-underline ml-8 text-base font-bold uppercase transition-colors hover:text-neon"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}
