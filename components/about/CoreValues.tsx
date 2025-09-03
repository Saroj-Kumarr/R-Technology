"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function CoreValues() {
  const brandBlue = "#2B7DA2";
  const haloBlue = "#E6F3F8";

  const items = [
    {
      title: "Integrity",
      description: "We build trust through transparency and ethical practices.",
    },
    {
      title: "Excellence ",
      description:
        "We strive for quality in every project and every interaction.",
    },
    {
      title: "Innovation ",
      description:
        "We embrace change and harness technology to create new opportunities.",
    },
    {
      title: "Collaboration ",
      description:
        "We work as partners—with our clients, our people, and our communities.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // optional: lightweight swipe support
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 32) return; // small threshold
    if (dx > 0) prev();
    else next();
  };

  const prev = () => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i - 1 + items.length) % items.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const next = () => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % items.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const active = items[index];

  return (
    <section
      aria-labelledby="core-values-heading"
      role="region"
      aria-roledescription="carousel"
      aria-label="Core values"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-14">
        {/* Eyebrow */}
        <p className="text-center text-xs font-semibold tracking-widest text-slate-700">
          CORE VALUES
        </p>

        {/* Title */}
        <h2
          id="core-values-heading"
          className="text-balance text-center mt-5 text-2xl sm:text-3xl font-semibold leading-tight"
          style={{ color: brandBlue }}
        >
          Our Values That Drives Best Solutions
        </h2>

        {/* Intro */}
        <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-base leading-relaxed text-slate-700">
          Core values form the integral part of R Technologies daily endeavors
          and reflects well in the delivering of service to our clients. We
          constantly reinforce and continually align our organization around
          these fundamental principles.
        </p>

        {/* Card with navigation */}
        <div className="relative mt-6 md:mt-8">
          {/* Card with overflow hidden for animation */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
            <div
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              tabIndex={0}
              aria-live="polite"
              className={[
                "flex gap-3 sm:gap-4 items-start py-5 sm:py-6 md:py-8 px-4 md:px-6",
                "transition-transform duration-300 ease-in-out will-change-transform",
                "motion-reduce:transition-none motion-reduce:translate-x-0",
                isAnimating
                  ? direction === "next"
                    ? "transform -translate-x-full"
                    : "transform translate-x-full"
                  : "transform translate-x-0",
              ].join(" ")}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") prev();
                if (e.key === "ArrowRight") next();
              }}
            >
              {/* Medallion */}
              <div className="flex items-start">
                <div
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: haloBlue }}
                >
                  <div
                    className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full"
                    style={{ backgroundColor: brandBlue }}
                  >
                    {/* Minimal team/stars icon */}
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
                      <path d="M7 13a3 3 0 1 0-2.999-3A3 3 0 0 0 7 13Z" />
                      <path d="M6 16c-2 0-4 1-4 3v1h8v-1c0-2-2-3-4-3Z" />
                      <path d="M15 14c-2.67 0-5 1.34-5 4v2h10v-2c0-2.66-2.33-4-5-4Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text block */}
              <div className="min-w-0">
                <h3
                  className="text-pretty text-lg sm:text-xl md:text-2xl font-semibold"
                  style={{ color: brandBlue }}
                >
                  {active.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-slate-700">
                  {active.description}
                </p>
              </div>
            </div>
          </div>

          {/* Prev / Next controls (desktop only, outside card edges) */}
          <button
            type="button"
            aria-label="Previous value"
            onClick={prev}
            disabled={isAnimating}
            className="hidden md:block group absolute -left-14 top-1/2 -translate-y-1/2 rounded-full hover:scale-110 transition-transform duration-200 disabled:opacity-50"
            title="Previous"
          >
            <Image src="/left.svg" alt="Left" height={40} width={40} />
          </button>
          <button
            type="button"
            aria-label="Next value"
            onClick={next}
            disabled={isAnimating}
            className="hidden md:block group absolute -right-14 top-1/2 -translate-y-1/2 rounded-full hover:scale-110 transition-transform duration-200 disabled:opacity-50"
            title="Next"
          >
            <Image src="/right.svg" alt="Right" height={40} width={40} />
          </button>

          {/* Mobile controls (shown below card) */}
          <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
            <button
              type="button"
              aria-label="Previous value"
              onClick={prev}
              disabled={isAnimating}
              className="rounded-full hover:scale-110 transition-transform duration-200 disabled:opacity-50"
              title="Previous"
            >
              <Image src="/left.svg" alt="Left" height={40} width={40} />
            </button>
            <button
              type="button"
              aria-label="Next value"
              onClick={next}
              disabled={isAnimating}
              className="rounded-full hover:scale-110 transition-transform duration-200 disabled:opacity-50"
              title="Next"
            >
              <Image src="/right.svg" alt="Right" height={40} width={40} />
            </button>
          </div>
        </div>

        {/* Dots indicator */}
        <div
          className="flex justify-center gap-2 mt-6"
          role="tablist"
          aria-label="Core values slides"
        >
          {items.map((_, i) => {
            const selected = i === index;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={selected}
                aria-controls={`core-slide-${i}`}
                onClick={() => {
                  if (isAnimating) return;
                  setDirection(i > index ? "next" : "prev");
                  setIsAnimating(true);
                  setTimeout(() => {
                    setIndex(i);
                    setTimeout(() => setIsAnimating(false), 50);
                  }, 150);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  selected ? "w-6" : "hover:scale-125"
                }`}
                style={{
                  backgroundColor: selected ? brandBlue : "#cbd5e1",
                }}
                aria-label={`Go to value ${i + 1}`}
                id={`core-tab-${i}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
