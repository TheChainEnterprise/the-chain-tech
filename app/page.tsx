import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Products from "@/components/Products";
import Roadmap from "@/components/Roadmap";
import About from "@/components/About";
import TalkToVal from "@/components/TalkToVal";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#05070A] text-white">
      <Navbar />

      <Hero />

      <Technologies />

      <Products />

      <Roadmap />

      <About />

      <TalkToVal />

      <Benefits />

      <CTA />

      <Footer />
    </main>
  );
}