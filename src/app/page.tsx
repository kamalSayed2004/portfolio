import Landscape from "@/components/landscape";
import About from "@/components/about";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landscape />
      <About />
      <Skills />
    </main>
  );
}
