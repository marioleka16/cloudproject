import React from 'react';

const features = [
  { icon: "⚡", title: "Top Equipment", desc: "Train with industry-leading machines and free weights designed for serious results." },
  { icon: "🦾", title: "Expert Trainers", desc: "Our certified coaches are here to push your limits and guide your journey." },
  { icon: "🕒", title: "24/7 Access", desc: "Your goals don't sleep. Neither do we. Train whenever the urge strikes." },
];

export default function Features() {
  return (
    <section id="about" className="py-24 px-[5%] bg-bg-secondary text-center flex flex-col items-center">
      <h2 className="font-heading text-[3.5rem] uppercase mb-12 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-neon after:mx-auto after:mt-2">
        Why IronPulse
      </h2>
      <div className="flex flex-wrap justify-center gap-12 mt-8 w-full">
        {features.map((f, i) => (
          <div key={i} className="flex-1 min-w-[300px] max-w-[400px] p-8 border border-[#333] transition-transform duration-300 hover:-translate-y-2 hover:border-neon">
            <div className="text-[3rem] text-neon mb-6 select-none">{f.icon}</div>
            <h3 className="text-xl font-bold mb-4 uppercase">{f.title}</h3>
            <p className="text-text-muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
