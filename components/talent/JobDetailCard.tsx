import Link from "next/link";
import { Button } from "../ui/button";

type JobDetailCardProps = {
  title: string;
  responsibilities: string;
  requirements: string;
  location?: string;
  note?: string;
};

export default function JobDetailCard({
  title,
  responsibilities,
  requirements,
  location,
  note,
}: JobDetailCardProps) {
  return (
    <section
      aria-labelledby="job-title"
      className="cs max-w-7xl mx-auto font-sans p-5 md:p-8 mt-12 rounded-md"
    >
      <header className="mb-4 md:mb-5">
        <h2
          id="job-title"
          className="text-xl md:text-2xl font-semibold"
          style={{ color: "#2B7DA2" }}
        >
          {"Job Title: "}
          {title}
        </h2>
        <hr className="mt-4 border-t border-gray-200" />
      </header>

      <div className="space-y-6">
        <section aria-labelledby="responsibilities-title" className="space-y-2">
          <h3
            id="responsibilities-title"
            className="text-sm md:text-base font-semibold uppercase tracking-wide"
            style={{ color: "#2B7DA2" }}
          >
            Responsibilities
          </h3>
          <p className="text-sm md:text-base leading-relaxed font-semibold">
            {responsibilities}
          </p>
        </section>

        <section aria-labelledby="requirements-title" className="space-y-2">
          <h3
            id="requirements-title"
            className="text-sm md:text-base font-semibold uppercase tracking-wide"
            style={{ color: "#2B7DA2" }}
          >
            Requirements
          </h3>
          <p className="text-sm md:text-base leading-relaxed font-semibold">
            {requirements}
          </p>
        </section>

        <div className="flex items-center gap-2 pt-2">
          {/* location pin icon */}
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12z"
              stroke="#2B7DA2"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="10"
              r="2.5"
              stroke="#2B7DA2"
              strokeWidth="1.8"
            />
          </svg>
          <span className="text-sm md:text-base font-semibold">{location}</span>
        </div>

        <Link href="/contact">
          <Button>{note}</Button>
        </Link>
      </div>
    </section>
  );
}
