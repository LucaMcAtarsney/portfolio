import GithubLogo from "@/components/GithubLogo";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
import LinkedInModel from "@/components/LinkedIn";

export default function CONTACT() {
  return (
    <main>
      <section>
        <div className="text-center max-w-2xl mx-auto p-10">
          <h2 className="text-4xl md:text-7xl font-bold ">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-20 max-w-6xl mx-auto pt-50">
            {["Github", "LinkedIn", "Email"].map(
              (title, i) => (
                <Link href={slugify(title)} key={i}>
                  <div className="relative bg-white/10  backdrop-blur-md text-white rounded-xl p-10 h-40 flex items-center justify-center text-xl font-medium shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                  <p>{title}</p>
                    {title === "Github" && (
                        <GithubLogo />
                    )}
                    {title === "LinkedIn" && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-110 pr-3 pb-12">
                        <LinkedInModel />
                      </div>
                    )}
                    {title === "Email" && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 pl-12">
                      </div>
                    )}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
