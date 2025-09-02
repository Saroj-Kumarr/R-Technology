"use client";

import type React from "react";
import { Users, CalendarCheck2, Award as IdCard } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const steps: Step[] = [
  { title: "Searching For The Right Candidate", icon: Users },
  { title: "Managing Interviews", icon: CalendarCheck2 },
  { title: "Background Verification", icon: IdCard },
];

export function ProcessSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-slate-50", className)}>
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-center font-medium tracking-widest">
          GET THE RIGHT PERSON FOR THE JOB
        </p>

        <h2 className=" text-[#2B7DA2] mx-auto mt-3 max-w-4xl text-center text-2xl font-semibold leading-8 md:text-3xl">
          {"There's A Process For Finding You The Best Direct-Hire Candidates."}
          <br className="hidden sm:block" />
          {" Here's How It Works:"}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2B7DA2]">
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                <span className="sr-only">{title}</span>
              </div>
              <h3 className="text-pretty mt-6 text-center text-lg font-semibold text-slate-900">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
