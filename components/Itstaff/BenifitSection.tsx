import React from "react";
import {
  LucideLayers,
  LucideCode,
  LucideCloud,
  LucideDatabase,
  LucideCheckCircle,
  LucideTrendingUp,
} from "lucide-react";

const SERVICES = [
  {
    lead: "IT Consulting & Strategy",
    body: "Roadmaps, modernization, architecture, advisory.",
    icon: LucideLayers,
  },
  {
    lead: "Application Development",
    body: "Full-cycle software delivery with Java, Angular, Python, .NET.",
    icon: LucideCode,
  },
  {
    lead: "Cloud & Infrastructure",
    body: "Cloud migrations, DevOps, automation, Kubernetes.",
    icon: LucideCloud,
  },
  {
    lead: "Data & Analytics",
    body: "Data engineering, BI dashboards, predictive analytics.",
    icon: LucideDatabase,
  },
  {
    lead: "Quality Assurance & Testing",
    body: "Manual + automated testing, performance & security.",
    icon: LucideCheckCircle,
  },
  {
    lead: "Training & Upskilling",
    body: "Corporate programs in cloud, DevOps, data engineering.",
    icon: LucideTrendingUp,
  },
];

export default function ServicesBenefitStyle({ brand = "#2B7DA2" }) {
  return (
    <section
      className="my-8 md:mt-20 max-w-7xl mx-auto"
      aria-labelledby="services"
    >
      <h2
        id="services"
        className="text-balance text-center font-semibold tracking-tight text-2xl md:text-3xl"
      >
        Our Services
      </h2>

      <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SERVICES.map(({ lead, body, icon: Icon }) => (
          <article
            key={lead}
            className="rounded-md border bg-white p-6 md:p-7 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
            style={{ borderTop: `4px solid ${brand}` }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-md text-white shrink-0"
                style={{ backgroundColor: brand }}
                aria-hidden="true"
              >
                <Icon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{lead}</h3>
                <p className="mt-1 text-pretty text-slate-600 leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center font-semibold text-lg italic">
        Explore how R Technologies can support your digital journey.
      </div>
    </section>
  );
}
