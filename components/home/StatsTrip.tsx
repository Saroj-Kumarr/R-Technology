"use client";

import type React from "react";
import { cn } from "@/lib/utils";

type Stat = {
  icon: React.ReactNode;
  value: string;
  label: string;
  featured?: boolean;
};

const BrandCircle = ({
  children,
  featured,
}: {
  children: React.ReactNode;
  featured?: boolean;
}) => {
  return (
    <div
      className={cn(
        // base disc
        "relative grid size-20 place-items-center rounded-full bg-[#2B7DA2] text-white",
        // soft offset light-blue disc behind
        "after:content-[''] after:absolute after:-z-10 after:size-20 after:rounded-full after:bg-[#D9E8F2] after:translate-x-2 after:translate-y-2",
        // subtle extra highlight ring for featured (middle) disc
        featured ? "ring-4 ring-[#9CC9E2]" : "ring-0"
      )}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

const Icons = {
  // simple inline outline icons to match the look
  Docs: (
    <svg
      className="size-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </svg>
  ),
  PeopleStars: (
    <svg
      className="size-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3l1.2 2.8 3 .3-2.3 2 0.7 2.9-2.6-1.5-2.6 1.5 0.7-2.9-2.3-2 3-.3L12 3Z" />
      <circle cx="7" cy="14" r="2" />
      <circle cx="17" cy="14" r="2" />
      <path d="M3.5 20a4.5 4.5 0 0 1 7 0M13.5 20a4.5 4.5 0 0 1 7 0" />
    </svg>
  ),
  Team: (
    <svg
      className="size-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="8" cy="10" r="3" />
      <circle cx="16" cy="10" r="3" />
      <path d="M2 20a6 6 0 0 1 12 0M10 20a6 6 0 0 1 12 0" />
    </svg>
  ),
};

export function StatsStrip({ className }: { className?: string }) {
  const stats: Stat[] = [
    { icon: Icons.Docs, value: "20+", label: "Successful Projects" },
    {
      icon: Icons.PeopleStars,
      value: "28+",
      label: "Happy Clients",
      featured: true,
    },
    { icon: Icons.Team, value: "60+", label: "Skilled Experts" },
  ];

  return (
    <section className={cn("relative w-full", "", className)}>
      {/* center white card */}
      <div className="container mx-auto px-4 ">
        <div
          className={cn(
            "mx-auto max-w-6xl cs bg-white -mt-8 border border-gray-100 mb-1 rounded-md",
            "cs shadow-xl",
            "ring-1 ring-black/5",
            "px-6 py-6 md:px-10 md:py-8"
          )}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center gap-5 md:gap-6",
                  "justify-start"
                )}
              >
                <BrandCircle featured={s.featured}>{s.icon}</BrandCircle>
                <div className="flex flex-col">
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-extrabold tracking-tight md:text-5xl">
                      {s.value}
                    </span>
                  </div>
                  <span className="mt-1 text-sm font-semibold text-black/80">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;
