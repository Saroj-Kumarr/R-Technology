import type React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

type TopBarProps = {
  address?: string;
  email?: string;
  phone?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
};

export default function TopBar({
  address = "6834 Loop Rd Dayton, OH 45459",
  email = "rtechnology@gmail.com",
  phone = "12345 67890",
  facebookUrl = "#",
  instagramUrl = "#",
  linkedinUrl = "#",
}: TopBarProps) {
  return (
    <div
      aria-label="Site info bar with contact details and social links"
      className="w-full bg-[#2B7DA2] text-white"
    >
      {/* subtle top edge similar to the screenshot */}
      <div className="h-[1px] w-full bg-white/30" />
      <div className="w-full px-4 sm:px-5 md:px-20 lg:px-24 flex flex-col md:flex-row items-center md:justify-between py-3 sm:py-4 gap-3 md:gap-0">
        {/* Left: contact items */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 w-full md:w-auto text-center sm:text-left">
          <ContactItem
            icon={<MapPin className="h-4 w-4" aria-hidden="true" />}
            label={address}
          />
          <ContactItem
            icon={<Mail className="h-4 w-4" aria-hidden="true" />}
            label={email}
            href={`mailto:${email}`}
          />
          <ContactItem
            icon={<Phone className="h-4 w-4" aria-hidden="true" />}
            label={phone}
            href={`tel:${phone.replace(/\s+/g, "")}`}
          />
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-3">
          <SocialIcon href={facebookUrl} label="Facebook">
            <Facebook className="h-5 w-5" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon href={instagramUrl} label="Instagram">
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon href={linkedinUrl} label="LinkedIn">
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </SocialIcon>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-center gap-1 text-sm">
      {/* circular thin outline around icon to match the reference feel */}
      <span className="inline-flex items-center justify-center rounded-full flex-shrink-0">
        {icon}
      </span>
      <span className="break-words">{label}</span>
    </span>
  );
  if (href) {
    return (
      <a
        href={href}
        className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60 rounded-sm"
      >
        {content}
      </a>
    );
  }
  return content;
}

function SocialIcon({
  href,
  label,
  children,
  outlined = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  outlined?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={[
        "inline-flex h-7 w-7 items-center justify-center transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60",
        outlined ? "rounded-md ring-1 ring-white/80" : "",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
