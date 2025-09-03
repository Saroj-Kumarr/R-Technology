export default function VendorProgram() {
  return (
    <section
      aria-labelledby="it-staff-augmentation-heading"
      className="py-8 md:py-12"
    >
      <div className="grid px-5 md:px-20 lg:px-24 items-center gap-8 md:grid-cols-2">
        {/* Text column */}
        <div>
          {/* <p className="font-medium">Master Vendor Program</p> */}

          <h2
            id="it-staff-augmentation-heading"
            className="mt-3 text-pretty font-sans text-3xl font-semibold leading-tight text-[#2B7DA2] md:text-4xl"
          >
            Managing Multiple Vendors Becomes Easy!
          </h2>

          <div className="mt-5 space-y-4 text-[#868686]">
            <p className="leading-relaxed">
              Managing multiple IT vendors can be challenging—different
              contracts, scattered reporting, and inconsistent delivery often
              lead to higher costs and reduced efficiency. R Technologies’
              Enterprise Engagement Solutions provide a single framework to
              bring structure, transparency, and consistency to your IT
              ecosystem.
            </p>
          </div>
        </div>

        {/* Image column */}
        <div className="order-first md:order-none ">
          <img
            src="/multi_vendor.png"
            alt="Team of IT professionals collaborating around laptops in a modern office"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
