const brand = "#2B7DA2";

const FEATURES: { lead: string; body: string }[] = [
  {
    lead: "Centralized Oversight & Governance",
    body: "One trusted partner to manage all IT engagements.",
  },
  {
    lead: "Transparent Reporting & Dashboards",
    body: "Real-time visibility into performance and outcomes.",
  },
  {
    lead: "Simplified Operations & Billing",
    body: "Consolidated invoicing and streamlined processes.",
  },
  {
    lead: "SLA-Driven Accountability",
    body: "Service levels tracked and enforced consistently.",
  },
  {
    lead: "Scalable Framework",
    body: "Designed to grow with your organization.",
  },
];

const BENEFITS: { lead: string; body: string }[] = [
  {
    lead: "Reduced Complexity",
    body: "Eliminate duplicate processes and fragmented communication.",
  },
  {
    lead: "Improved Efficiency",
    body: "Faster delivery through standardized practices.",
  },
  {
    lead: "Cost Control",
    body: "Optimized operations and streamlined financials.",
  },
  {
    lead: "Better Collaboration",
    body: "Stronger alignment between your business and technology providers.",
  },
];

export default function WhyFeaturesBenefits() {
  return (
    <section aria-label="Key Features and Benefits" className="bg-background">
      <div className="px-5 md:px-20 lg:px-24 py-16 md:py-20">
        {/* Key Features — Design A: Brand rail + bullet list */}
        <div aria-labelledby="key-features">
          <h2
            id="key-features"
            className="text-balance text-center font-semibold tracking-tight text-2xl md:text-3xl"
          >
            Key Features
          </h2>

          <div className="mt-6 md:mt-8">
            {/* cs class is optional; shadow fallback via inline utility */}
            <div
              className="rounded-md border bg-white p-6 md:p-8 cs shadow-[0_10px_30px_rgba(2,6,23,0.04)]"
              style={{ borderColor: "rgb(229 231 235)" }}
            >
              <div className="relative pl-6 md:pl-8">
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full"
                  style={{ width: 4, backgroundColor: brand }}
                />
                <ul className="space-y-5 md:space-y-6">
                  {FEATURES.map((item) => (
                    <li key={item.lead} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: brand }}
                      />
                      <p className="text-pretty leading-relaxed text-slate-700">
                        <strong className="font-semibold text-slate-900">
                          {item.lead}
                        </strong>{" "}
                        {"— "}
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits — Design B: Brand-accented cards grid */}
        <div className="mt-16 md:mt-20" aria-labelledby="benefits">
          <h2
            id="benefits"
            className="text-balance text-center font-semibold tracking-tight text-2xl md:text-3xl"
          >
            Benefits
          </h2>

          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {BENEFITS.map((item) => (
              <article
                key={item.lead}
                className="rounded-md border bg-white p-6 md:p-7 cs shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
                style={{ borderTop: `4px solid ${brand}` }}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white"
                    style={{ backgroundColor: brand }}
                    title="benefit"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M5 10l3 3 7-7" />
                    </svg>
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.lead}
                    </h3>
                    <p className="mt-1 text-pretty text-slate-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
