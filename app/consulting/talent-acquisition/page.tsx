import { ProcessSection } from "@/components/talent/Process";
import { TalentHero } from "@/components/talent/TalentHero";
import TalentService from "@/components/talent/TalentService";
import TalentService2 from "@/components/talent/TalentService2";
import React from "react";
import WhyWorkforceSection from "./WhyWorkForceSection";

const page = () => {
  return (
    <div>
      <TalentHero />
      <TalentService />
      {/* <TalentService2 /> */}
      <ProcessSection />
      <WhyWorkforceSection />
    </div>
  );
};

export default page;
