import Image from "next/image";
import StatsStrip from "./StatsTrip";
import { Button } from "../ui/button";
import Link from "next/link";

type ExperienceBannerProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  heightClassName?: string;
};

export default function ExperienceBanner({
  title = "Experience and innovation in a single touch.",
  subtitle = "R technologies has structured itself strategically to provide some of the most cutting-edge solutions for its clients.",
  ctaText = "Get In Touch",
  ctaHref = "#contact",
  heightClassName = "min-h-[90vh]",
}: ExperienceBannerProps) {
  return (
    <section
      aria-label="Experience and innovation banner"
      className="relative w-full overflow-hidden top-6"
    >
      {/* Background image */}
      <div className={`relative w-full ${heightClassName}`}>
        <Image
          src="/attitude.png"
          alt="Silhouettes of professionals in front of a glass facade"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      </div>

      {/* Centered content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto mx-auto w-full max-w-5xl px-4 text-center">
          <h2 className="text-pretty text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            {/* Force a natural break close to the reference */}
            <span className="block">Your Success, Powered by Technology</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-white/85 leading-relaxed text-sm sm:text-base">
            {subtitle}
          </p>

          <div className="mt-6">
            <Link href="/contact">
              <Button>Contact Us Today</Button>
            </Link>
          </div>
        </div>
      </div>

      <StatsStrip />
    </section>
  );
}
