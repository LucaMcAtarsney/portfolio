import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Link from "next/link";
import DotBackground from "@/components/ui/dot-background"; // your renamed file

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Pentgon",
  description: "My Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white font-sans relative overflow-x-hidden`}>
        <DotBackground />

        <div className="relative z-10 min-h-screen flex flex-col">
          <header className="flex justify-center space-x-6 py-6 text-white">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/cv">CV</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="text-center py-6 text-sm text-white/60">
            © 2025 Luca McAtarsney
          </footer>
        </div>
      </body>
    </html>
  );
}
