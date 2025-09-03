import { ContactHero } from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <div className="mt-8 grid grid-cols-1 gap-4 md:gap-8">
        {/* Map */}
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps?q=31+Hibberd+Dr,+Dayton,+OH+45458&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
