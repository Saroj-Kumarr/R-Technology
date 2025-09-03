// "use client" is required for drag interactions
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  FiUsers,
  FiMonitor,
  FiCloud,
  FiBarChart2,
  FiCheckCircle,
  FiBookOpen,
} from "react-icons/fi";
import Link from "next/link";

type ServiceItem = {
  title: string;
  description: string;
  // optional React node for an icon inside the outlined circle
  icon?: React.ReactNode;
};

const BRAND = "#2B7DA2";

// Simple outline icons to match the reference look
function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke={BRAND}
        strokeWidth="1.6"
      />
      <path
        d="M3 12h2.2M18.8 12H21M12 3v2.2M12 18.8V21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.6 16.8l-1.6 1.6"
        stroke={BRAND}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3" stroke={BRAND} strokeWidth="1.6" />
      <path
        d="M5 19a7 7 0 0 1 14 0"
        stroke={BRAND}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="5.5" cy="9" r="2" stroke={BRAND} strokeWidth="1.2" />
      <circle cx="18.5" cy="9" r="2" stroke={BRAND} strokeWidth="1.2" />
    </svg>
  );
}

function NetworkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="6" r="2.5" stroke={BRAND} strokeWidth="1.6" />
      <circle cx="6" cy="18" r="2.5" stroke={BRAND} strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.5" stroke={BRAND} strokeWidth="1.6" />
      <path
        d="M12 9v3M8 16l4-4M16 16l-4-4"
        stroke={BRAND}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const defaultItems: ServiceItem[] = [
  {
    title: "IT Consulting & Strategy",
    description: "Align technology with business goals.",
    icon: <FiUsers size={56} color={BRAND} />, // Users/community theme
  },
  {
    title: "Application Development",
    description: "Modern software built for growth.",
    icon: <FiMonitor size={56} color={BRAND} />, // Software/monitor
  },
  {
    title: "Cloud & Infrastructure",
    description: "Scale with robust cloud systems.",
    icon: <FiCloud size={56} color={BRAND} />, // Cloud/server
  },
  {
    title: "Data & Analytics",
    description: "Unlock insights and predictive power.",
    icon: <FiBarChart2 size={56} color={BRAND} />, // Chart/data
  },
  {
    title: "Quality Assurance & Testing",
    description: "Ensure reliability and security.",
    icon: <FiCheckCircle size={56} color={BRAND} />, // Check/tested
  },
  {
    title: "Training & Upskilling",
    description: "Empower teams with new skills.",
    icon: <FiBookOpen size={56} color={BRAND} />, // Book/learning
  },
];

export default function ServicesSlider({
  items = defaultItems,
  className,
}: {
  items?: ServiceItem[];
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState(0);
  const [dragOffset, setDragOffset] = React.useState(0);
  const [perView, setPerView] = React.useState(3);
  const [slideWidth, setSlideWidth] = React.useState(0);

  // Handle responsive breakpoints
  React.useEffect(() => {
    const updatePerView = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  // Calculate slide width
  React.useEffect(() => {
    const updateSlideWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setSlideWidth(containerWidth / perView);
      }
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, [perView]);

  const maxIndex = Math.max(0, items.length - perView);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const diff = e.clientX - dragStart;
      setDragOffset(diff);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - dragStart;
      setDragOffset(diff);
    };

    const handleEnd = () => {
      if (!isDragging) return;

      const threshold = slideWidth * 0.3;

      if (dragOffset > threshold && currentIndex > 0) {
        // Dragged right - go to previous
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < -threshold && currentIndex < maxIndex) {
        // Dragged left - go to next
        setCurrentIndex(currentIndex + 1);
      }

      setIsDragging(false);
      setDragOffset(0);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchend", handleEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, dragStart, dragOffset, currentIndex, maxIndex, slideWidth]);

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const translateX = -currentIndex * slideWidth + (isDragging ? dragOffset : 0);

  return (
    <section className={cn("w-full bg-[#D2EAF5] py-12 sm:py-16", className)}>
      <div className="px-5 md:px-20 lg:px-24">
        <p className="text-center font-medium text-slate-900">
          What we Provide
        </p>
        <h2 className="mt-2 text-pretty text-center text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
          We Offer Professional{" "}
          <span style={{ color: BRAND }}>IT Solutions</span> For Business
        </h2>
      </div>

      <div className="relative mt-8 px-5 md:px-20">
        {/* Prev Button */}
        <button
          type="button"
          aria-label="Previous"
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="absolute left-5 top-1/2 z-[2] -translate-y-1/2 rounded-full cs"
          style={{ backgroundColor: BRAND }}
        >
          <Image src="/left.svg" alt="" width={40} height={40} priority />
        </button>

        {/* Next Button */}
        <button
          type="button"
          aria-label="Next"
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-5 top-1/2 z-[2] -translate-y-1/2 rounded-full cs "
          style={{ backgroundColor: BRAND }}
        >
          <Image src="/right.svg" alt="" width={40} height={40} priority />
        </button>

        {/* Slider Container */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="flex gap-6 select-none"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? "none" : "transform 0.3s ease-out",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onDragStart={(e) => e.preventDefault()}
          >
            {items.map((item, i) => (
              <article
                key={i}
                className="flex-shrink-0 cs my-2 rounded-md max-w-80 border border-slate-200 bg-white p-8 text-center"
                style={{
                  width: `${100 / perView}%`,
                }}
              >
                <div
                  className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full border-2"
                  style={{ borderColor: BRAND }}
                >
                  {item.icon ?? <GearIcon className="h-14 w-14" />}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm min-h-28 leading-6 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-6 flex justify-center">
                  <Link
                    href="/consulting/solutions"
                    className="rounded-md px-5 py-2 text-sm font-medium text-white hover:opacity-90"
                    style={{ backgroundColor: BRAND }}
                  >
                    Explore Solutions
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === currentIndex ? "bg-[color:var(--brand)]" : "bg-slate-300"
              )}
              style={{
                backgroundColor: i === currentIndex ? BRAND : undefined,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
