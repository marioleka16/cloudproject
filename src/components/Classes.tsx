import React from 'react';

const classes = [
  { title: "HIIT Blast", desc: "High intensity interval training to shred fat and boost endurance." },
  { title: "Power Lift", desc: "Focus on the big three: Squat, Bench, Deadlift. Pure strength." },
  { title: "Zen Yoga", desc: "Recover and rebuild with our mobility and flexibility sessions." },
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 px-[5%] bg-bg-primary flex flex-col items-center">
       <h2 className="font-heading text-[3.5rem] uppercase mb-12 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-neon after:mx-auto after:mt-2">
        Our Classes
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 w-full">
        {classes.map((c, i) => (
            <div key={i} className="bg-[#222] p-8 text-center border-b-4 border-transparent hover:border-neon transition-colors">
                <h3 className="font-heading text-[2rem] mb-4 uppercase">{c.title}</h3>
                <p className="text-text-muted">{c.desc}</p>
            </div>
        ))}
      </div>
    </section>
  );
}
