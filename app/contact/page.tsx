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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.7782053942585!2d-78.80002188472767!3d35.583710280217845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf69c88ebc2cf%3A0x7c3d097e3a72a7b!2sFuquay-Varina%2C%20NC!5e0!3m2!1sen!2sus!4v1692721058994!5m2!1sen!2sus"
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
