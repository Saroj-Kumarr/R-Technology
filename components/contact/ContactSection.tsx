"use client";

import type * as React from "react";

type Props = {
  heading?: string;
  subheading?: string;
  addressLabel?: string;
  address?: string;
  phoneLabel?: string;
  phone?: string;
  emailLabel?: string;
  email?: string;
  linkedinLabel?: string;
  linkedin?: string;
};

const BLUE = "#2B7DA2";
const LIGHT_BLUE = "#E6F1F6";

export default function ContactSection({
  heading = "Get in Touch",
  subheading = "Contact Details",
  addressLabel = "R Tech Addresses.",
  address = "31 Hibberd Dr, Dayton, OH 45458",
  phoneLabel = "Phone Number",
  phone = "+1 937-581-4542",
  emailLabel = "Email",
  email = "info@RTechOH.com",
  linkedinLabel = "LinkedIn",
  linkedin = "https://www.linkedin.com",
}: Props) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Message submitted. (Demo)");
  }

  return (
    <section className="w-full px-4 py-12 md:py-16">
      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-xl font-semibold text-balance">{heading}</h2>
        <p
          className="mt-1 text-3xl md:text-4xl font-semibold text-balance"
          style={{ color: BLUE }}
        >
          {subheading}
        </p>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto mt-10 grid max-w-5xl gap-10 md:mt-12 md:grid-cols-2 md:gap-12">
        {/* Left: contact details (side panel) with relatable icons */}
        <div className="flex flex-col justify-center rounded-md border p-6 md:p-8">
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <PinIcon
                className="mt-0.5 h-6 w-6"
                style={{ color: BLUE }}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium" style={{ color: BLUE }}>
                  {addressLabel}
                </p>
                <p className="text-base">{address}</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <PhoneIcon
                className="mt-0.5 h-6 w-6"
                style={{ color: BLUE }}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium" style={{ color: BLUE }}>
                  {phoneLabel}
                </p>
                <a href={`tel:${phone}`} className="text-base hover:underline">
                  {phone}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <MailIcon
                className="mt-0.5 h-6 w-6"
                style={{ color: BLUE }}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium" style={{ color: BLUE }}>
                  {emailLabel}
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-base hover:underline"
                >
                  {email}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <LinkedInIcon
                className="mt-0.5 h-6 w-6"
                style={{ color: BLUE }}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium" style={{ color: BLUE }}>
                  {linkedinLabel}
                </p>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:underline"
                >
                  {linkedin.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: contact form with ALL requested fields */}
        <div>
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name */}
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Name"
              className="w-full rounded-md border p-3 text-base outline-none"
              style={{ backgroundColor: LIGHT_BLUE, borderColor: BLUE }}
            />

            {/* Company */}
            <label htmlFor="company" className="sr-only">
              Company
            </label>
            <input
              id="company"
              name="company"
              placeholder="Company"
              className="w-full rounded-md border p-3 text-base outline-none"
              style={{ backgroundColor: LIGHT_BLUE, borderColor: BLUE }}
            />

            {/* Email */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full rounded-md border p-3 text-base outline-none"
              style={{ backgroundColor: LIGHT_BLUE, borderColor: BLUE }}
            />

            {/* Phone (optional) */}
            <label htmlFor="phone" className="sr-only">
              Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full rounded-md border p-3 text-base outline-none"
              style={{ backgroundColor: LIGHT_BLUE, borderColor: BLUE }}
            />

            {/* Service Interested In (dropdown) */}
            <label htmlFor="service" className="sr-only">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              className="w-full rounded-md border p-3 text-base outline-none"
              style={{ backgroundColor: LIGHT_BLUE, borderColor: BLUE }}
              defaultValue=""
            >
              <option value="" disabled>
                Service Interested In
              </option>

              <option value="devops">DevOps</option>
              <option value="cloud">Cloud (AWS / Azure)</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>

            {/* Message */}
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Message"
              rows={5}
              className="w-full rounded-md border p-3 text-base outline-none"
              style={{ backgroundColor: LIGHT_BLUE, borderColor: BLUE }}
            />

            {/* CTA submit */}
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="rounded-md px-6 py-3 font-medium text-white transition-colors"
                style={{ backgroundColor: BLUE }}
              >
                Talk to an Expert Today →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Relatable icons */
function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 0 1 1 1v3.29a1 1 0 0 1-1 1C11.3 21.81 2.19 12.7 2.19 2.99a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.27.2 2.47.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.21Z" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm3 0 7 5 7-5H5Zm14 14V8.24l-7 5-7-5V19h14Z" />
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.09.88 1.98 1.98 1.98a1.98 1.98 0 1 0 0-3.96ZM3.5 8.75h3v11.75h-3V8.75Zm6 0h2.88v1.6h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.57 1.99 3.57 4.57v7.14h-3V14.1c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.99v6.49h-3V8.75Z" />
    </svg>
  );
}
