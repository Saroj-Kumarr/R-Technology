import { Check } from "lucide-react";

// Brand accent (same theme as your Why section)
const BRAND = "#2B7DA2";

type Item = { title: string; desc: string };

const items: Item[] = [
  {
    title: "Customized Training Programs",
    desc: "Tailored learning paths in cloud, DevOps, data, and application development.",
  },
  {
    title: "Skill Gap Analysis",
    desc: "Identify and address critical areas to future-proof your workforce.",
  },
  {
    title: "Hands-On Experience",
    desc: "Real-world projects and case studies to ensure practical application.",
  },
  {
    title: "Knowledge Transfer",
    desc: "Empower teams with ongoing mentorship and structured upskilling.",
  },
  {
    title: "Compliance & Certification Support",
    desc: "Preparation for industry-recognized certifications (AWS, Azure, Scrum, etc.).",
  },
  {
    title: "Long-Term Value",
    desc: "Reduce reliance on external vendors by developing in-house talent.",
  },
];

export default function WhyWorkforceCentered() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <h2
            className="text-3xl font-semibold tracking-tight text-balance"
            style={{ color: BRAND }}
          >
            Why Choose R Technologies Workforce Development Solutions
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Future-proof your business by investing in people. Build skilled,
            motivated teams ready to take on tomorrow&apos;s challenges.
          </p>
        </header>

        {/* Centered grid list */}
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {items.map((it) => (
            <li
              key={it.title}
              className="w-full max-w-xl rounded-lg border bg-card"
              style={{ borderColor: `${BRAND}20` }}
            >
              <div className="flex items-start gap-4 p-5">
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                  style={{
                    background: `${BRAND}12`,
                    color: BRAND,
                    border: `1px solid ${BRAND}30`,
                  }}
                  aria-hidden="true"
                >
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Closing CTA */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <blockquote className="text-muted-foreground leading-relaxed">
            “Future-proof your business by investing in people. With R
            Technologies’ Workforce Development Solutions, you’ll build agile,
            skilled, and motivated teams ready to take on tomorrow’s
            challenges.”
          </blockquote>
          <div className="mt-6">
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium text-white"
              style={{ backgroundColor: BRAND }}
            >
              Explore Workforce Programs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
