import { Button } from "../ui/button";

export default function Vision() {
  return (
    <section aria-labelledby="vision-title" className="w-full bg-[#D2EAF5]">
      <div className="px-5 md:px-20 lg:px-24 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left image */}
          <div className="rounded-4xl relative overflow-hidden">
            <img
              src="/about_hand.png"
              alt="Team members fist-bumping, symbolizing partnership and collaboration"
              className="w-full rounded-2xl object-cover shadow-sm ring-1 ring-black/5"
            />
          </div>

          {/* Right content */}
          <div className="text-left">
            <p className="text-lg font-semibold uppercase tracking-wider text-[#2B7DA2]">
              Our Vision
            </p>

            <h2
              id="vision-title"
              className="mt-3 text-pretty text-2xl font-semibold leading-snug text-slate-900 md:text-4xl"
            >
              Solution Partner For Your Business
            </h2>

            <p className="mt-4 max-w-prose text-base leading-relaxed">
              To be a global technology partner known for excellence in
              consulting, software delivery, and digital transformation.
            </p>

            <div className="mt-6">
              <Button className="py-5 w-36">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
