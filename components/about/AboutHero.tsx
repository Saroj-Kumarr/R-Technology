import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function AboutHero({
  title = "Data Warehousing & Business Intelligence Experts",
  subtitle = "To make better business decisions, challenge your assumptions. Turn information into insight with the help of latest cloud, big data and predictive analytics team.",
  ctaLabel = "Get Started",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative isolate min-h-[60vh] md:min-h-[95vh] w-full overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/about_hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
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
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <h1 className="text-balance pt-24 sm:pt-28 md:pt-36 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
          About R Technologies
        </h1>

        <p className="mt-4 sm:mt-5 max-w-3xl text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
          Your trusted partner for software development and IT services.
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
