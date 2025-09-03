import type React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

// - Centered headline + subheading
// - 3 cards with blue outlined circular icons, bold titles, body copy
// - Centered "Contact Us" CTA in brand blue (#2B7DA2)
// - Uses the user's custom "cs" shadow class if present, with a graceful fallback

const brand = "#2B7DA2";

function IconBrowserGear() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-9 w-9"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="10" width="36" height="28" rx="3" />
      <path d="M6 16h36" />
      <circle cx="15" cy="14" r="1.5" />
      <circle cx="20" cy="14" r="1.5" />
      <path d="M29.5 31a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 29.5 31Zm0-9v3M29.5 31v3M24.5 26.5h3M34.5 26.5h3M26.7 28.7l-2.1 2.1M34.4 21.9l-2.1 2.1" />
    </svg>
  );
}

function IconTeamSprout() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-9 w-9"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="22" r="4" />
      <circle cx="32" cy="22" r="4" />
      <path d="M8 34c0-4.4 3.6-8 8-8" />
      <path d="M40 34c0-4.4-3.6-8-8-8" />
      <path d="M24 16c0-4 3-7 7-7 0 4-3 7-7 7Z" />
      <path d="M24 16v8" />
      <circle cx="24" cy="30" r="4" />
      <path d="M16 38c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

function IconNodes() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-9 w-9"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7" y="7" width="10" height="10" rx="3" />
      <rect x="31" y="7" width="10" height="10" rx="3" />
      <rect x="7" y="31" width="10" height="10" rx="3" />
      <rect x="31" y="31" width="10" height="10" rx="3" />
      <path d="M17 12h14M12 17v14M36 17v14M17 36h14" />
    </svg>
  );
}

type Card = {
  title: string;
  desc: string;
  Icon: React.FC;
};

const cards: Card[] = [
  {
    title: "End-to-End Experties",
    desc: "From consulting and development to testing and training.",
    Icon: IconBrowserGear,
  },
  {
    title: "Agile & Scalable Delivery ",
    desc: "Flexible engagement models designed for growth.",
    Icon: IconTeamSprout,
  },
  {
    title: "Industry Experience ",
    desc: "Serving clients across finance, healthcare, retail, and more.",
    Icon: IconNodes,
  },
  {
    title: "Client-Centric Focus ",
    desc: "Every solution is tailored to the client’s unique needs.",
    Icon: IconNodes,
  },
];

export default function WhyRTechnology() {
  return (
    <section aria-labelledby="why-choose" className="bg-background">
      <div className="px-5 md:px-20 lg:px-24 py-8 md:py-20">
        {/* Title */}
        <h2
          id="why-choose"
          className="text-balance text-center font-semibold tracking-tight text-3xl md:text-4xl"
        >
          Why R Technology
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-4xl text-center text-[#868686] leading-relaxed">
          Leading software development company. With over 15 years of market
          experience. Our development team drives excellence, ensuring we
          deliver exactly what your business needs.
        </p>

        {/* Cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cards.map(({ title, desc, Icon }) => (
            <article
              key={title}
              className="cs rounded-md  border border-gray-200 bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
            >
              <div className="flex flex-col  items-center text-center">
                {/* Icon inside outlined circle */}
                <div
                  className="grid place-items-center rounded-full border-2"
                  style={{
                    width: 84,
                    height: 84,
                    borderColor: brand,
                    color: brand,
                  }}
                >
                  <div
                    className="grid place-items-center rounded-full"
                    style={{ width: 76, height: 76, color: brand }}
                  >
                    <Icon />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-pretty text-slate-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-4xl text-center text-[#868686] leading-relaxed">
          At R Technologies, we believe technology should simplify, empower, and
          accelerate business. We are committed to being more than a vendor—we
          are a trusted partner on your digital journey.
        </p>

        {/* CTA */}
        <div className="mt-10 md:mt-14 flex justify-center">
          <Link href="/contact">
            <Button
              className="inline-flex items-center justify-center rounded-md py-5 w-40 text-white transition-colors"
              style={{ backgroundColor: brand }}
            >
              Work With Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
