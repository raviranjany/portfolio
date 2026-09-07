import Hero from "@/components/Hero";
import About from "@/components/About";
// import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import TechStackPreview from "@/components/TechStackPreview";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <TechStack /> */}
      <TechStackPreview />
      <Projects />
      <Experience />

    </main>
  );
}