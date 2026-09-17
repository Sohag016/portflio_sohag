import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <FloatingSocials />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
}
