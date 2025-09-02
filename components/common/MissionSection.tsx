/* new Mission section component matching the provided design */
import Image from "next/image";

export default function MissionSection() {
  return (
    <section aria-labelledby="mission-title" className="bg-white">
      <div className="px-5 md:px-20 lg:px-24 py-12 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Left: Copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2B7DA2]">
              Our Mission
            </p>

            <h2
              id="mission-title"
              className="mt-3 text-pretty text-3xl font-semibold leading-tight text-foreground md:text-4xl"
            >
              Leveraging Tech To Drive A Better IT Experience
            </h2>

            <ul className="mt-4 space-y-5">
              <li className="flex items-start gap-3">
                {/* Icon */}
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#2B7DA2]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <p className="text-base leading-relaxex">
                  To deliver innovative, cost-effective IT solutions that
                  empower businesses to grow with confidence.
                </p>
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/about_men.png"
                alt="Professional giving thumbs up in a modern tech setting"
                width={640}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
