import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "AI Negotiating Receptionist",

  description:
    "Meet Val — the AI Negotiating Receptionist that answers customers, qualifies leads, books appointments, negotiates, and works 24/7 for modern businesses.",

  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Chain Technologies",
  url: "https://thechain.tech",
  logo: "https://thechain.tech/logo.png",
  description:
    "The Chain Technologies builds AI-powered business automation solutions including Val, the AI Negotiating Receptionist.",
  email: "info@thechain.tech",
  sameAs: [
    "https://www.linkedin.com/company/the-chain-technologies/"
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Val",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  creator: {
    "@type": "Organization",
    name: "The Chain Technologies",
  },
  description:
    "Val is an AI Negotiating Receptionist that answers customers, qualifies leads, negotiates, books appointments, and helps businesses operate 24/7.",
  offers: {
    "@type": "Offer",
    price: "50",
    priceCurrency: "EUR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />

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
    </>
  );
}