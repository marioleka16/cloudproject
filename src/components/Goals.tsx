"use client";
import React, { useEffect, useState } from 'react';

interface Goal {
  id: string;
  name: string;
  goal: string;
  createdAt: string;
}

export default function Goals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGoals = async () => {
    try {
      const res = await fetch("/api/goals");
      if (res.ok) {
        const data = await res.json();
        setGoals(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoals();
    
    // Listen for new goal additions
    const handleGoalAdded = () => fetchGoals();
    window.addEventListener("goalAdded", handleGoalAdded);
    
    return () => window.removeEventListener("goalAdded", handleGoalAdded);
  }, []);

  return (
    <section id="goals" className="py-24 px-[5%] bg-bg-primary flex flex-col items-center">
       <h2 className="font-heading text-[3.5rem] uppercase mb-12 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-neon after:mx-auto after:mt-2">
        Community Goals
      </h2>
      
      {loading ? (
        <p className="text-text-muted">Loading goals...</p>
      ) : goals.length === 0 ? (
        <p className="text-text-muted">Be the first to set a goal!</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-[800px]">
          {goals.map((g) => (
             <div key={g.id} className="w-full md:w-[calc(50%-1rem)] p-6 bg-[#222] border-l-4 border-neon">
                <p className="text-xl font-bold text-white mb-2">{g.name}</p>
                <p className="text-text-muted italic">"{g.goal}"</p>
             </div>
          ))}
        </div>
      )}
    </section>
  );
}
