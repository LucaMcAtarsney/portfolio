import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Pentgon",
  description: "My Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white font-sans`}>
        <header className="flex justify-center space-x-30 py-6 text-white-500 ">
          <Link href="/">Home</Link>
          <Link href="about">About</Link>
          <Link href="cv">CV</Link>
          <Link href="projects">Projects</Link>
          <Link href="contact">Contact</Link>
        </header>
        {children}
        <footer className="text-center py-6 text-sm text-white-400">© 2025 Luca McAtarsney</footer>
      </body>
    </html>
  );
}
