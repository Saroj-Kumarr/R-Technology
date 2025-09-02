import Image from "next/image";
import { Check } from "lucide-react";

const FEATURES = [
  "Cost-Effective Way To Supplement Your Existing IT Staff Without The Need For Additional Full-Time Resources.",
  "Reporting And Forecasting Of IT Staffing Support Costs For Your Project—Helps Strategic Utilization Of Staff.",
  "Pre-Defined Job Roles And Pricing Availability – Helps You Budget Your Project Accurately.",
  "Broad Range Of Technologies.",
  "High Candidate Retention.",
  "24X7 Recruiting Engine For Faster Turnaround Times And Recruiting Candidates Specifically Suitable For The Demand.",
];

export function ItStaffCustomerSection() {
  return (
    <section aria-labelledby="nsm-features-title" className=" bg-[#D2EAF5]">
      <div className="px-5 md:px-20 lg:px-24 py-10 md:py-12">
        <p className="text-lg text-center font-semibold uppercase tracking-wider text-[#2B7DA2] ">
          Special Features
        </p>

        <h2
          id="nsm-features-title"
          className="my-5 text-balance text-center text-3xl font-semibold md:text-4xl"
        >
          Why NSM Solutions?
        </h2>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-4xl relative overflow-hidden">
            <Image
              src="/it_staff_customer.png"
              alt="Team of IT support professionals working at computers"
              width={840}
              height={540}
              className="w-full rounded-xl ring-1 ring-black/5"
              priority
            />
          </div>

          <ul className="space-y-5">
            {FEATURES.map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <Image
                  src="/check.svg"
                  height={32}
                  width={32}
                  alt=""
                  className=" self-start"
                />
                <p className="text-pretty text-base leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ItStaffCustomerSection;
