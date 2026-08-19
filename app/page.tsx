import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/dashboard/Hero";
import AITools from "@/components/dashboard/AITools";
import AIWorkspace from "@/components/dashboard/AIWorkspace";
import Projects from "@/components/dashboard/Projects";
import Analytics from "@/components/dashboard/Analytics";
import AIAssistant from "@/components/dashboard/AIAssistant";
import FAQ from "@/components/dashboard/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AITools />
        <AIWorkspace />
        <AIAssistant />
        <Projects />
        <Analytics />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}