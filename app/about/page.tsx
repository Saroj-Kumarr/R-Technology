import About from "@/components/about/About";
import { AboutHero } from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import Vision from "@/components/about/Vision";
import WhatWeDoSection from "@/components/about/WhatWeDo";
import WhyRTechnology from "@/components/about/WhyRTechnology";
import MissionSection from "@/components/common/MissionSection";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutHero />
      <About />
      <WhatWeDoSection />
      <MissionSection />
      <Vision />
      <CoreValues />
      <WhyRTechnology />
    </div>
  );
};

export default page;
