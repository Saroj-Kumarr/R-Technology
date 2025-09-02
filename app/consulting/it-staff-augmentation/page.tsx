import ItStaffAugmentationSection from "@/components/Itstaff/ItStaffAugumentation";
import { ItStaffHero } from "@/components/Itstaff/ItStaffHero";
import ItStaffCustomerSection from "@/components/Itstaff/StaffFeature";
import TechnologyWeSupport from "@/components/Itstaff/TechnologyWeSupport";
import React from "react";

const page = () => {
  return (
    <div>
      <ItStaffHero />
      <ItStaffAugmentationSection />
      <ItStaffCustomerSection />
      <TechnologyWeSupport />
    </div>
  );
};

export default page;
