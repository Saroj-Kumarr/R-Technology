import WhyWorkWithUs from "@/components/career/AddedWorkWithUs";
import { CareerHero } from "@/components/career/CareerHero";
import JobDetailCard from "@/components/talent/JobDetailCard";
import React from "react";

const page = () => {
  return (
    <div className="pb-20">
      <CareerHero />
      <WhyWorkWithUs />
      <JobDetailCard
        title="Software Developer"
        responsibilities="Build applications with Java, Angular, Spring Boot, SQL."
        requirements="Bachelor’s/Master’s in CS/IT, strong problem-solving skills, flexibility to relocate if needed."
        location="Bangalore"
        note="Apply Now →"
      />
      <JobDetailCard
        title="Project Manager"
        responsibilities="Lead delivery teams, manage timelines, stakeholder reporting."
        requirements="PMP or equivalent, strong communication, prior IT delivery experience."
        location="Hyderabad"
        note="Apply Now →"
      />
      <JobDetailCard
        title="Programmer Analyst"
        responsibilities="Analyze user needs, develop systems, ensure performance."
        requirements="Bachelor’s/Master’s in CS/IT, programming experience, analytical mindset."
        location="Noida" // Add an actual location if desired
        note="Apply Now →"
      />
    </div>
  );
};

export default page;
