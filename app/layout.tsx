import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";

import "./globals.css";

import ChatWidget from "@/components/ChatWidget";
import MetaPixel from "@/components/MetaPixel";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thechain.tech"),

  title: {
    default: "The Chain Technologies | AI Negotiating Receptionist",
    template: "%s | The Chain Technologies",
  },

  description:
    "Val is an AI Negotiating Receptionist that answers customers, qualifies leads, books appointments, and helps businesses operate 24/7.",

  keywords: [
    "AI Receptionist",
    "AI Negotiator",
    "AI Customer Support",
    "AI Sales",
    "Business Automation",
    "Virtual Receptionist",
    "The Chain Technologies",
    "Val AI",
  ],

  authors: [
    {
      name: "The Chain Technologies",
    },
  ],

  creator: "The Chain Technologies",

  publisher: "The Chain Technologies",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://thechain.tech",
    title: "The Chain Technologies | AI Negotiating Receptionist",
    description:
      "Meet Val — the AI Negotiating Receptionist that answers customers, negotiates, books appointments and works 24/7.",
    siteName: "The Chain Technologies",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Chain Technologies - Val AI Receptionist",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Chain Technologies | AI Negotiating Receptionist",
    description:
      "Meet Val — the AI Negotiating Receptionist for modern businesses.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col bg-[#05070A] text-white">
          <GoogleTagManager gtmId="GTM-57RCDD3K" />

          <Suspense fallback={null}>
            <MetaPixel />
          </Suspense>

          {children}

          <ChatWidget />

          <CookieBanner />
        </body>
      </html>
    </ClerkProvider>
  );
}