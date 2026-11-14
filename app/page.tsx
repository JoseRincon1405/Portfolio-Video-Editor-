import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VideoGrid from "@/components/VideoGrid";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProject =
    projects.find((project) => project.featured) ?? projects[0];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <Navbar />
      <main>
        <Hero featuredProject={featuredProject} />
        <VideoGrid projects={projects} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
