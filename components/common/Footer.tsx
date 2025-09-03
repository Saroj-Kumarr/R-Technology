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
  ChevronDown,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top area */}
      <div className="w-full bg-[#D2EAF5]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {/* Left column: Logo + copy */}
            <div className="space-y-5">
              <Image
                src="/logo2.png"
                alt="Tech Solutions Logo"
                width={100}
                height={100}
              />
              <p className="text-sm leading-relaxed text-black">
                R Technologies is dedicated to providing innovative IT
                consulting and technology solutions while building lasting
                relationships with our clients. Our proven expertise in
                delivering reliable, customized services makes us a trusted
                partner for all your IT and business needs.
              </p>
            </div>
            {/* Middle column: Quick Links */}
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-black">Quick Links</h3>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-black" aria-hidden />
                  <Link
                    href="/"
                    className="text-base text-black transition-colors hover:text-[#2B7DA2]"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-black" aria-hidden />
                  <Link
                    href="/about"
                    className="text-base text-black transition-colors hover:text-[#2B7DA2]"
                  >
                    About Us
                  </Link>
                </li>

                {/* Services dropdown using shadcn/ui */}
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 text-base font-medium text-black hover:text-[#2B7DA2]">
                        <ChevronRight
                          className="h-5 w-5 text-black"
                          aria-hidden
                        />
                        Services
                        <ChevronDown className="h-4 w-4" aria-hidden />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white p-0 rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                      <DropdownMenuItem asChild>
                        <Link
                          href="/consulting/solutions"
                          className="block w-full px-4 py-2 text-gray-800 hover:bg-[#D2EAF5] hover:text-[#2B7DA2]"
                        >
                          Solutions
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/consulting/master-vendor-program"
                          className="block w-full px-4 py-2 text-gray-800 hover:bg-[#D2EAF5] hover:text-[#2B7DA2]"
                        >
                          Enterprise Engagement Solutions
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/consulting/talent-acquisition"
                          className="block w-full px-4 py-2 text-gray-800 hover:bg-[#D2EAF5] hover:text-[#2B7DA2]"
                        >
                          Workforce Development Solutions
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-black" aria-hidden />
                  <Link
                    href="/career"
                    className="text-base text-black transition-colors hover:text-[#2B7DA2]"
                  >
                    Career
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-black" aria-hidden />
                  <Link
                    href="/contact"
                    className="text-base text-black transition-colors hover:text-[#2B7DA2]"
                  >
                    Contact Us
                  </Link>
                </li>
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
                    href="mailto:nagayerrabothula@gmail.com"
                    className="text-base text-black font-medium hover:text-[#2B7DA2]"
                  >
                    nagayerrabothula@gmail.com
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
            Copyright © {new Date().getFullYear()} R Technologies LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
