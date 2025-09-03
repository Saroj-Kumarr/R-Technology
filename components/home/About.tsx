import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const BRAND = "#2B7DA2";

export function About() {
  return (
    <section aria-labelledby="about-heading" className="w-full">
      <div className="px-5 md:px-20 lg:px-24 py-12 pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: media with oval crop and badge */}
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

          {/* Right: content */}
          <div>
            <p className="text-sm font-medium text-slate-900">About Us</p>

            <h2
              id="about-heading"
              className="mt-3 text-pretty text-2x sm:text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
            >
              Empowering Business Success
              <br className="hidden md:block" /> With Cutting-Edge{" "}
              <span style={{ color: BRAND }}>IT Solution</span>
            </h2>

            <p className="mt-5 max-w-prose text-base leading-relaxed text-[#868686]">
              R Technologies is a software and IT services company helping
              businesses build the future. We design and deliver applications,
              cloud platforms, data solutions, and QA services with one
              goal—enabling our clients to innovate faster, operate smarter, and
              scale with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-10 sm:flex-row sm:items-center">
              <Link href="/about">
                <Button className="">Learn More About Us </Button>
              </Link>

              {/* Contact block */}
              {/* <div className="flex items-center gap-4">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
