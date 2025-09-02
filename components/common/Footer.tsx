"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top area */}
      <div className="w-full bg-[#D2EAF5]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {/* Left column: Logo + copy */}
            <div className="space-y-5">
              {/* If /logo.svg exists, show it; otherwise fall back to text */}
              <div className="h-12 w-auto text-2xl  font-semibold">
                🌐 R Technologies
              </div>
              <p className="text-base leading-relaxed text-black">
                NSM Solutions focuses on delivering quality work with
                maintaining a cordial relationship with its clients. Our
                excellent record of innovative Staffing and Consulting solutions
                make us reliable partners for all your IT needs
              </p>
            </div>

            {/* Middle column: Quick Links */}
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-black">Quick Links</h3>
              <ul className="space-y-4 font-medium">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  {
                    href: "/services/it-staff-augmentation",
                    label: "Consulting Services",
                  },
                  { href: "/career", label: "Career" },
                  { href: "/contact", label: "Contact Us" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-black" aria-hidden />
                    <Link
                      href={item.href}
                      className="text-base text-black transition-colors hover:text-[#2B7DA2]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column: Connect */}
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-black">Connect</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-black" aria-hidden />
                  <p className="text-base text-black font-medium">
                    6834 Loop Rd Dayton,
                    <br /> OH 45459
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-black" aria-hidden />
                  <a
                    href="mailto:rtechnology@gmail.com"
                    className="text-base text-black font-medium hover:text-[#2B7DA2]"
                  >
                    rtechnology@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-black" aria-hidden />
                  <a
                    href="tel:+911234567890"
                    className="text-base text-black font-medium hover:text-[#2B7DA2]"
                  >
                    + 91 12345 67890
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-6">
                <Link
                  aria-label="Facebook"
                  href="#"
                  className="text-black transition-colors hover:text-[#2B7DA2]"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  aria-label="Instagram"
                  href="#"
                  className="text-black transition-colors hover:text-[#2B7DA2]"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  aria-label="LinkedIn"
                  href="#"
                  className="text-black transition-colors hover:text-[#2B7DA2]"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="w-full bg-[#2B7DA2]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="py-4 text-center text-sm text-white">
            Copyright © 2025 NSM Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
