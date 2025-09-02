import Image from "next/image";
import { MoveRight } from "lucide-react";

export function ContactHero() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate min-h-[70vh] md:min-h-[95vh] w-full overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/contact_hero.png"
        alt=""
        fill
        priority
        className="object-cover"
        aria-hidden="true"
      />

      {/* Contrast overlays */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-24 text-center">
        <h1 className="text-balance pt-32 text-3xl font-semibold leading-tight text-white md:text-5xl ">
          Let’s Talk About Your Next Project
        </h1>

        <p className="mt-5 flex items-center gap-2 max-w-3xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
          Whether you’re exploring consulting services or looking for a trusted
          IT partner, we’d love to hear from you.
        </p>
      </div>

      {/* Slider dots */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/70" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#2B7DA2]" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
