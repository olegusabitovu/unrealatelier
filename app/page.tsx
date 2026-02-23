import { Cases } from "@/components/sections/Cases";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { VideoSection } from "@/components/sections/VideoSection";
import { Workflow } from "@/components/sections/Workflow";

export default function Home() {
  return (
    <div className="bg-[#0B0B0B] text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Workflow />
        <VideoSection />
        <Cases />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
