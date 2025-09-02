import Image from "next/image";

export default function TechnologyWeSupport() {
  const left = [
    "Business Intelligence: Oracle Hyperion Suite, OBIEE, SAP BO, QlikView, Tableau, MicroStrategy.",
    "ETL And Datawarehousing : Informatica, IBM Infosphere Datastage, SSIS.",
    "Big Data Tools: Hadoop, Pig, Hive, Spark",
  ];

  const right = [
    "Blockchain Technology, AI/IoT",
    "Infrastructure/DevOps (UNIX, Windows)",
    "Mobile App Development",
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wide">
            TRUSTED TECHNOLOGY
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
            Technologies We Support
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
