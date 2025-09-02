import Footer from "@/components/common/Footer";
import About from "@/components/home/About";
import ExperienceBanner from "@/components/home/ExperienceBanner";
import { Hero } from "@/components/home/Hero";
import ServicesSlider from "@/components/home/ServiceSlider";
import WhyChooseSection from "@/components/home/WhyChoose";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <ServicesSlider />
      <WhyChooseSection />
      <ExperienceBanner />
    </div>
  );
};

export default page;
