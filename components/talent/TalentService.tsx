export default function TalentService() {
  return (
    <section
      aria-labelledby="it-staff-augmentation-heading"
      className="py-8 md:py-12"
    >
      <div className="grid px-5 md:px-20 lg:px-24 items-center gap-8 md:grid-cols-2">
        {/* Text column */}
        <div>
          {/* <p className="font-medium">TALENT ACQUISITION SERVICES</p> */}

          <h2
            id="talent-acquisition-services-heading"
            className="mt-3 text-pretty font-sans text-3xl font-semibold leading-tight text-[#2B7DA2] md:text-4xl"
          >
            Struggling to find top talent to fill a direct placement?
          </h2>

          <div className="mt-5 space-y-4 text-[#868686]">
            <p className="leading-relaxed">
              In today&apos;s fast-changing digital world, success depends on
              more than hiring—it requires empowering and continuously
              developing people. At R Technologies, our Workforce Development
              Solutions are designed to strengthen your IT capabilities by
              combining expert training, mentorship, and real-world project
              experience.
            </p>
            <p className="leading-relaxed mt-5">
              <p className="leading-relaxed">
                We partner closely with you to understand your business
                objectives and create customized programs that prepare your
                teams with the latest skills, tools, and practices. Whether it’s
                upskilling existing staff or building new capabilities, we
                ensure your workforce is equipped to drive innovation,
                efficiency, and growth.
              </p>
            </p>
          </div>
        </div>

        {/* Image column */}
        <div className="order-first md:order-none ">
          <img
            src="/talent_team.png"
            alt="Team of IT professionals collaborating around laptops in a modern office"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
