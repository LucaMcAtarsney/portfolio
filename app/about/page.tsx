import Cube from "@/components/cube";

export default function ABOUT() {
  return (
    <main className="text-white font-sans scroll-smooth">
      {/* TITLE */}
      <section className="relative w-full h-[100px] flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          About
        </h1>
      </section>

      {/* CONTENT */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-90 py-24 pb-100">
        {/* TEXT */}
        <div className="max-w-xl space-y-6 text-grey-300">
          <p className="text-lg md:text-xl leading-relaxed">
            I write code and make things that work. My focus is on building clean, functional web experiences that don’t get in the way.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            I care about how things feel. That means solid architecture, fast performance, and a UI that doesn’t need explaining.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            I also produce music when I have time — mostly ambient, synth-heavy stuff. And I shoot photos when something catches my eye.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Right now, I’m focused on shipping cool tools and visuals. Always learning, always building.
          </p>
        </div>

        {/* VISUAL ELEMENT */}
        <div className="scale-[1.4]">
          <Cube />
        </div>
      </section>
    </main>
  );
}
