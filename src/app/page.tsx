import Landscape from "@/components/landscape";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landscape />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </main>
  );
}
