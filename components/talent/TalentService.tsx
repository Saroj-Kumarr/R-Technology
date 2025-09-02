export default function TalentService() {
  return (
    <section
      aria-labelledby="it-staff-augmentation-heading"
      className="py-8 md:py-12"
    >
      <div className="grid px-5 md:px-20 lg:px-24 items-center gap-8 md:grid-cols-2">
        {/* Text column */}
        <div>
          <p className="font-medium">TALENT ACQUISITION SERVICES</p>

          <h2
            id="talent-acquisition-services-heading"
            className="mt-3 text-pretty font-sans text-3xl font-semibold leading-tight text-[#2B7DA2] md:text-4xl"
          >
            Struggling to find top talent to fill a direct placement?
          </h2>

          <div className="mt-5 space-y-4 text-[#868686]">
            <p className="leading-relaxed">
              Keeping up with the pace of digital transformation requires more
              than just hiring—it requires continuously developing people. Our
              Workforce Development Solutions focus on strengthening IT
              capabilities within your organization by combining training,
              mentorship, and hands-on project experience. We work closely with
              you to understand your goals and design programs that ensure your
              teams are equipped with the right skills to thrive.
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
