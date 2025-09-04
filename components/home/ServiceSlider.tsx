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
  icon?: React.ReactNode;
};

const BRAND = "#2B7DA2";

const defaultItems: ServiceItem[] = [
  {
    title: "IT Consulting & Strategy",
    description: "Align technology with business goals.",
    icon: <FiUsers size={56} color={BRAND} />,
  },
  {
    title: "Application Development",
    description: "Modern software built for growth.",
    icon: <FiMonitor size={56} color={BRAND} />,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Scale with robust cloud systems.",
    icon: <FiCloud size={56} color={BRAND} />,
  },
  {
    title: "Data & Analytics",
    description: "Unlock insights and predictive power.",
    icon: <FiBarChart2 size={56} color={BRAND} />,
  },
  {
    title: "Quality Assurance & Testing",
    description: "Ensure reliability and security.",
    icon: <FiCheckCircle size={56} color={BRAND} />,
  },
  {
    title: "Training & Upskilling",
    description: "Empower teams with new skills.",
    icon: <FiBookOpen size={56} color={BRAND} />,
  },
];

export default function ServicesGrid({
  items = defaultItems,
  className,
}: {
  items?: ServiceItem[];
  className?: string;
}) {
  return (
    <section className={cn("w-full bg-[#D2EAF5] py-12 sm:py-16", className)}>
      <div className="px-5 md:px-20">
        <p className="text-center font-medium text-slate-900">
          What we Provide
        </p>
        <h2 className="mt-2 text-pretty text-center text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
          We Offer Professional{" "}
          <span style={{ color: BRAND }}>IT Solutions</span> For Business
        </h2>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={i}
              className="mx-auto w-full max-w-sm rounded-md border border-slate-200 bg-white p-8 text-center"
            >
              <div
                className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full border-2"
                style={{ borderColor: BRAND }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 min-h-28 text-sm leading-6 text-slate-600">
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
    </section>
  );
}
