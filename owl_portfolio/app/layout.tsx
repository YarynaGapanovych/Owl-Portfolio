import GlowingParticlesBackground from "@/components/GlowingParticlesBackground";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owl Portfolio - Independent Development Team",
  description:
    "We build scalable web & mobile applications. A senior development team helping startups and businesses turn ideas into production-ready products.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="fixed inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: -1 }}
        >
          <GlowingParticlesBackground />
        </div>
        {children}
      </body>
    </html>
  );
}
