import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Pentgon",
  description: "My Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white font-sans`}>
        <header className="flex justify-center space-x-30 py-6 text-white-300 ">
          <a href="#bio">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/test">Test</a>
        </header>
        {children}
        <footer className="text-center py-6 text-sm text-white-400">© 2025 Luca McAtarsney</footer>
      </body>
    </html>
  );
}
