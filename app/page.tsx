import DodecahedronScene from "@/components/DodecahedronScene";
import ComputerModel from "@/components/Computer";
import CameraModel from "@/components/Camera";
import KeyboardModel from "@/components/Keyboard";
import Cube from "@/components/cube";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
import GithubModel from "@/components/Github";

export default function Home() {
  return (
    <main className="text-white font-sans scroll-smooth">
      {/* INTRO SECTION */}
      <div className="relative w-full h-[300px] scale-120">
        {/* Overlay Text */}
        <h1 className="pt-90 absolute inset-0 flex items-center justify-center text-white text-6xl md:text-6xl font-extrabold tracking-tight z-10 pointer-events-none">
          Pentgon.Dev
        </h1>

        {/* 3D Model */}
        <div>
          <GithubModel />
        </div>
        
      </div>

      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-15 py-24 pt-280">
        <div className="pl-8 space-y-6 max-w-xl">
          <h1 className="text-6xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text">
            Hi, I&apos;m Luca McAtarsney
          </h1>
          <p className="text-lg md:text-2xl text-gray-400">
            I like making stuff.
          </p>
        </div>
        <div className="pr-70 scale-160 pb-15">
          <Cube />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 pt-40 ">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold ">A LITTLE ABOUT ME</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I’m a developer/artist passionate about building things that feel
            great to use. With over 3 years of experience, I’ve worked on
            projects ranging from scrapers to simulators.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 px-6 pt-40">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          SKILLS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {["Programming", "Design", "Music", "Photography"].map((title, i) => (
            <Link href={slugify(title)} key={i}>
              <div className="relative bg-white/10  backdrop-blur-md text-white rounded-xl p-10 h-40 flex items-center justify-center text-xl font-medium shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                {title}
                {title === "Programming" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-70 pl-15">
                    <ComputerModel />
                  </div>
                )}
                {title === "Design" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-100 pb-45">
                    <DodecahedronScene />
                  </div>
                )}
                {title === "Music" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 pl-12">
                    <KeyboardModel />
                  </div>
                )}
                {title === "Photography" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 pl-10">
                    <CameraModel />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 px-6 pt-40">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "TUI File Explorer",
            "Aldi Webscraper",
            "Music Visualiser",
            "Graphics Library",
            "Mycelium",
            "Fishland Saga",
          ].map((title, i) => (
            <Link href={slugify(title)} key={i}>
              <div className="bg-white/10  backdrop-blur-md text-white rounded-xl p-6 h-40 flex items-center justify-center text-xl font-medium shadow-md hover:scale-105 hover:shadow-xl transition duration-300 hover:bg-white hover:text-black ease-in-out">
                {title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6 text-center pt-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">CONTACT INFO</h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <p className="text-sm tracking-wide text-gray-500">PHONE</p>
            <a href="tel:+11234567890" className="text-xl hover:underline">
              (123) 456-7890
            </a>
          </div>
          <div>
            <p className="text-sm tracking-wide text-gray-500">EMAIL</p>
            <a href="mailto:luca@dev.com" className="text-xl">
              luca@dev.co
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
