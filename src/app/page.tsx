import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Classes from "@/components/Classes";
import Contact from "@/components/Contact";
import Goals from "@/components/Goals";

export default function Home() {
  const date = new Date();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Classes />
        <Goals />
        <Contact />
      </main>
      <footer className="p-8 text-center bg-[#000] text-[#666]">
        <p>&copy; {date.getFullYear()} IronPulse Fitness. All Rights Reserved.</p>
      </footer>
    </>
  );
}
