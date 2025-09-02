import {
  Briefcase,
  GraduationCap,
  Users2,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhyWorkWithUs() {
  const items = [
    {
      icon: Briefcase,
      title: "Projects with Fortune 500 & Startups",
      desc: "Contribute to high-impact products across industries and company sizes.",
    },
    {
      icon: GraduationCap,
      title: "Mentorship & Training",
      desc: "Grow through guided learning paths, reviews, and hands-on workshops.",
    },
    {
      icon: Users2,
      title: "Supportive, Inclusive Culture",
      desc: "Collaborate in a team that values diversity, openness, and trust.",
    },
    {
      icon: BadgeCheck,
      title: "Certification Assistance (AWS, Azure, DevOps)",
      desc: "Get sponsorship and resources to achieve in-demand certifications.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Compensation & Growth",
      desc: "Earn well today while building long-term career momentum.",
    },

    {
      icon: Briefcase,
      title: "Projects with Fortune 500 & Startups",
      desc: "Contribute to high-impact products across industries and company sizes.",
    },
  ];

  return (
    <section aria-labelledby="why-work-with-us" className="md:py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2
          id="why-work-with-us"
          className="text-balance text-3xl md:text-4xl font-semibold"
        >
          Why Work With Us
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Join a team that invests in your growth and places you on meaningful
          projects.
        </p>

        <div className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className={cn(
                "cs w-full max-w-sm rounded-xl border bg-card p-6 text-left"
              )}
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex min-h-16 min-w-16 items-center justify-center rounded-full bg-[#2B7DA2] text-primary"
                >
                  <Icon className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="font-medium leading-6">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
