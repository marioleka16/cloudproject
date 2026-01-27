"use client";
import React, { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        
        setStatus("Sending...");
        
        try {
            const res = await fetch("/api/goals", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
            if (res.ok) {
                setStatus("Message Sent! Goal Recorded.");
                window.dispatchEvent(new Event("goalAdded")); 
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("Error sending message.");
            }
        } catch (err) {
            console.error(err);
            setStatus("Error sending message.");
        }
    }

  return (
    <section id="contact" className="py-24 px-[5%] bg-bg-secondary flex flex-col items-center">
       <h2 className="font-heading text-[3.5rem] uppercase mb-12 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-neon after:mx-auto after:mt-2">
        Join the Corps
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[500px]">
        <input name="name" type="text" placeholder="Name" required className="p-4 bg-[#111] border border-[#333] text-white focus:outline-none focus:border-neon" />
        <input name="email" type="email" placeholder="Email" required className="p-4 bg-[#111] border border-[#333] text-white focus:outline-none focus:border-neon" />
        <textarea name="goal" rows={5} placeholder="Your Goals..." required className="p-4 bg-[#111] border border-[#333] text-white focus:outline-none focus:border-neon"></textarea>
        <button type="submit" className="px-12 py-4 bg-neon text-[#000] font-bold uppercase tracking-widest border-2 border-neon hover:bg-transparent hover:text-neon transition-all cursor-pointer">
            Send Message
        </button>
        {status && <p className="text-neon mt-4 text-center">{status}</p>}
      </form>
    </section>
  );
}
