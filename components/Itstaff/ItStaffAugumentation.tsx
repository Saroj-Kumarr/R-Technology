export default function ItStaffAugmentationSection() {
  return (
    <section
      aria-labelledby="it-staff-augmentation-heading"
      className="py-8 md:py-12"
    >
      <div className="grid px-5 md:px-20 lg:px-24 items-center gap-8 md:grid-cols-2">
        {/* Text column */}
        <div>
          <p className="font-medium">IT STAFF AUGMENTATION</p>

          <h2
            id="it-staff-augmentation-heading"
            className="mt-3 text-pretty font-sans text-3xl font-semibold leading-tight text-[#2B7DA2] md:text-4xl"
          >
            New Skills Continuously Added!
          </h2>

          <div className="mt-5 space-y-4 text-[#868686]">
            <p className="leading-relaxed">
              Embarking on to new markets or new platforms to remain competitive
              requires managing a stable IT team and environment without losing
              focus on core competencies. Maintaining reliable IT environment,
              sourcing right IT talent and maintaining them can be particularly
              challenging and absolutely imperative.
            </p>
            <p className="leading-relaxed">
              NSM Solution’s Staff Augmentation services gives your organization
              access to the myriad of IT skills that match your business
              requirements. It is a simplified and quickest way to gain control
              over your technical staff while sizing up without the hassle of
              maintaining good resources in-house. Our skilled application
              professionals can develop and maintain all applications according
              to your workflow while meeting aggressive project timelines.
            </p>
          </div>
        </div>

        {/* Image column */}
        <div className="order-first md:order-none ">
          <img
            src="/it_staff_people.png"
            alt="Team of IT professionals collaborating around laptops in a modern office"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
