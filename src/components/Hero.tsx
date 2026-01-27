import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen px-[5%] py-[6rem] pb-[4rem] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1540497661846-59016255f0ba?q=80&w=2670&auto=format&fit=crop')",
      }}
    >
      <p className="text-[1.5rem] text-text-muted mb-6">Welcome to the Grind</p>
      <h1 className="font-heading text-[clamp(4rem,12vw,8rem)] font-bold uppercase leading-none mb-6">
        Forge Your <br />
        <span className="text-neon block">Legacy</span>
      </h1>
      <Link
        href="#contact"
        className="inline-block px-12 py-4 bg-neon text-[#000] font-bold uppercase tracking-widest border-2 border-neon transition-all hover:bg-transparent hover:text-neon"
      >
        Start Today
      </Link>
    </section>
  );
}
