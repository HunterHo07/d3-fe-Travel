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
  title: "JEBSEN TRAVEL & Tours | Luxury Cruise Specialists Since 1979",
  description: "Experience the world's most luxurious cruise vacations with JEBSEN TRAVEL. Over 40 years of exceptional service and unforgettable journeys worldwide.",
  keywords: "luxury cruises, cruise vacation, travel agency, JEBSEN TRAVEL, cruise specialists, world cruises",
  authors: [{ name: 'JEBSEN TRAVEL & Tours' }],
  creator: 'JEBSEN TRAVEL & Tours',
  publisher: 'JEBSEN TRAVEL & Tours',
  metadataBase: new URL('https://jebsentravel.com'),
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
