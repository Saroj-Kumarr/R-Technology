import Image from "next/image";

export default function VendorWeSupport() {
  const left = [
    "We Consolidate All Your Suppliers Onto One Platform To Help You Manage Better", // [attached_image:1]
    "Clear Visibility To The Quality And Performance Of Each Individual Supplier Through Analytics And Reports", // [attached_image:1]
    "Single Point Of Contact For Managing All Your Vendors", // [attached_image:1]
    "SLA Driven Execution", // [attached_image:1]
    "Advanced VMS - Robust Framework, Fully Standardized, To Summon And Manage Contractors", // [attached_image:1]
  ];

  const right = [
    "We Bring About Much Better Experience For The Candidates And Suppliers", // [attached_image:1]
    "Vacancies Are Filled Better – Management Gets Important And Useful Information On The Recruitment Process", // [attached_image:1]
    "Simplified Billing, Payment And Administration", // [attached_image:1]
    "We Stick To An Optimized List Of Preferred Suppliers", // [attached_image:1]
    "We Act As A ‘One Stop Shop’ To Simplify The Recruitment Process", // [attached_image:1]
  ];

  return (
    <section className="w-full bg-[#F4F4F4]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wide">
            SPECIAL FEATURES
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
            America&apos;s Master Vendor Program:
          </h2>
        </div>

        {/* Two-column lists */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <ul className="space-y-6">
            {left.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Image
                  src="/check.svg"
                  alt=""
                  aria-hidden
                  width={32}
                  height={32}
                  className="mt-0.5 h-6 w-6 flex-none"
                />
                <p className="text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <ul className="space-y-6">
            {right.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Image
                  src="/check.svg"
                  alt=""
                  aria-hidden
                  width={32}
                  height={32}
                  className="mt-0.5 h-6 w-6 flex-none"
                />
                <p className="text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
