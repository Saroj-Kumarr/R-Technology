"use client";

import type React from "react";

import Image from "next/image";

function CheckCircle() {
  return (
    <svg
      className="h-6 w-6 text-white"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" className="fill-blue-600" />
      <path
        d="M16.5 9.5l-4.25 4.25L9 10.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2">
      <Image
        src="/check.svg"
        height={32}
        width={32}
        alt=""
        className=" self-start"
      />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold leading-7 text-[#2B7DA2]">
          {title}
        </h3>
        <p className="text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function WhatWeDoSection() {
  return (
    <section className="bg-[#F4F4F4] py-8 md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left image */}
        <figure className="relative md:w-[450px] lg:w-[500px] md:h-full md:min-h-[530px]">
          <Image
            src="/about_girl.png"
            alt="People collaborating in a lobby setting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/20" aria-hidden="true" />
        </figure>

        {/* Right content */}
        <div className="col-span-2 px-5 md:px-12 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2B7DA2]">
            WHAT WE DO
          </p>

          <h1 className="mt-3 text-pretty text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Our solutions span the entire IT lifecycle:
          </h1>

          <div className="mt-8 space-y-10">
            <FeatureItem title="IT Consulting & Advisory ">
              Technology roadmaps, digital strategy, and modernization planning.
            </FeatureItem>

            <FeatureItem title="Application Development ">
              Custom web, mobile, and enterprise applications built on modern
              frameworks.
            </FeatureItem>
            <FeatureItem title="Data & Analytics ">
              Data engineering, BI dashboards, and predictive analytics.
            </FeatureItem>
            <FeatureItem title="QA & Testing ">
              Manual and automated testing, performance, and security
              validation.
            </FeatureItem>

            <FeatureItem title="Training & Upskilling ">
              Workforce development programs in cloud, DevOps, and next-gen
              technologies.
            </FeatureItem>
          </div>
        </div>
      </div>
    </section>
  );
}
