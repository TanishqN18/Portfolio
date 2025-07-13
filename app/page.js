import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AcheivementsSection from "./components/AcheivementsSection";

export default function Home() {
  return (
    
      <main className="flex min-h-screen flex-col bg-black ">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4  ">
          <HeroSection />
          <AcheivementsSection />
          <AboutSection />
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
  );
};
