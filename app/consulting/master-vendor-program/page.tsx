import { VendorHero } from "@/components/multivendor/VendorHero";
import VendorProgram from "@/components/multivendor/VendorProgram";
import VendorWeSupport from "@/components/multivendor/VendorWeSupport";
import WhyFeaturesBenefits from "@/components/multivendor/WhyFeatureBenifits";
import React from "react";

const page = () => {
  return (
    <div>
      <VendorHero />
      <VendorProgram />
      {/* <VendorWeSupport /> */}
      <WhyFeaturesBenefits />
    </div>
  );
};

export default page;
