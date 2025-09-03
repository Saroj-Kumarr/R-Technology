import Image from "next/image";
import { Button } from "../ui/button";

const BRAND = "#2B7DA2";

export function About() {
  return (
    <section aria-labelledby="about-heading" className="w-full">
      <div className="px-5 md:px-20 lg:px-24 pt-10 md:py-12 pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: media with oval crop and badge */}

          {/* Right: content */}
          <div>
            <p className="text-sm font-medium text-slate-900">About Us</p>

            <h2
              id="about-heading"
              className="mt-3 text-pretty text-3xl sm:text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
            >
              Empowering Business Success
              <br className="hidden md:block" /> With Cutting-Edge{" "}
              <span style={{ color: BRAND }}>IT Solution</span>
            </h2>

            <p className="mt-5 max-w-prose text-base leading-relaxed text-[#868686]">
              R Technologies was founded with a clear mission: to help
              businesses embrace digital transformation with confidence. We
              bring together a team of consultants, engineers, developers, and
              analysts who are passionate about solving complex challenges with
              innovative technology. <br /> <br /> With expertise across
              application development, cloud, data, QA, and training, we deliver
              secure, scalable, and future-ready solutions for enterprises and
              growing businesses alike. Our approach blends technical excellence
              with industry knowledge—ensuring every project creates measurable
              value.
            </p>

            {/* <div className="mt-8 flex flex-col gap-10 sm:flex-row sm:items-center">
                   <div className="flex items-center gap-4">
                <Image
                  src="/phone.svg"
                  alt=""
                  width={0}
                  height={0}
                  aria-hidden="true"
                  className="h-8 w-8"
                />

                <div className="leading-tight">
                  <div className="text-xs text-slate-500">Contact Us</div>
                  <a
                    href="tel:+912333494833"
                    className="text-sm font-medium text-slate-900"
                  >
                    +91 23334 94833
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="relative h-[400px] overflow-hidden">
              {/* Use the provided image path */}
              <Image
                src="/talent_team_2.png"
                alt="Our team collaborating around a workspace"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Experience badge */}
            <div
              className="absolute bottom-6 right-6 md:-bottom-8 md:right-10"
              aria-hidden="true"
            >
              <div className="flex items-center justify-center rounded-full bg-white shadow-sm">
                <div
                  className="flex size-32 md:size-40 flex-col items-center justify-center rounded-full"
                  style={{ border: `10px solid ${BRAND}` }}
                >
                  <div className="text-4xl md:text-5xl font-semibold text-slate-900">
                    15+
                  </div>
                  <div className="mt-1 text-[11px] md:text-xs font-medium text-slate-700">
                    Year Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 md:py-14">
        {/* Eyebrow */}
        <p className="text-center text-3xl md:text-4xl font-semibold tracking-widest text-slate-900">
          Who We Are
        </p>

        {/* Intro */}
        <p className="mx-auto mt-3 max-w-6xl text-center leading-relaxed text-[#868686]">
          At our core, we are more than a technology provider—we are partners in
          progress. Our teams work side by side with clients, combining
          consulting expertise with delivery capability. Whether it’s
          modernizing infrastructure, building enterprise applications, or
          enabling data-driven decisions, we act as an extension of your team to
          achieve business outcomes.
        </p>
      </div>
    </section>
  );
}

export default About;
