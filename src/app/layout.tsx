import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to JEBSEN TRAVEL & Tours",
  description: "JEBSEN TRAVEL - The Cruise Specialists. With over 40 years of experience, we provide exceptional cruise vacations and travel services throughout Malaysia and worldwide.",
  keywords: "cruise specialists, luxury cruises, travel agency, JEBSEN TRAVEL, Malaysia travel, cruise vacations",
  authors: [{ name: 'JEBSEN TRAVEL & Tours' }],
  creator: 'JEBSEN TRAVEL & Tours',
  publisher: 'JEBSEN TRAVEL & Tours',
  metadataBase: new URL('https://jebsen.com.my'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
