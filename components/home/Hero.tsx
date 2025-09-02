import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function Hero({
  title = "End-to-End Software Development & IT Services",
  subtitle = "From strategy to deployment, we provide application development, cloud engineering, analytics, and QA solutions built for growth",
  ctaLabel = "Get Started",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative isolate min-h-[80vh]  md:min-h-[95vh] w-full overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/master_talent.png"
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
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-20 sm:py-24 text-center">
        <h1 className="text-balance pt-24 sm:pt-28 md:pt-40 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
          {title}
        </h1>

        <p className="mt-4 sm:mt-5 max-w-3xl text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
          {subtitle}
        </p>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3 sm:gap-6">
          <Button asChild className="h-11 w-full sm:w-48 md:w-52 font-normal">
            <Link href={ctaHref} aria-label={ctaLabel}>
              Schedule a Consultation
            </Link>
          </Button>
          <Button
            asChild
            className="h-11 w-full sm:w-48 md:w-52 font-normal bg-transparent border-2 border-white text-white hover:bg-white/10"
          >
            <Link href={ctaHref} aria-label={ctaLabel}>
              Explore Services
            </Link>
          </Button>
        </div>
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
