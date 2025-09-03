"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Image from "next/image";

type Props = {
  // Optional override so you can force an active item (used in the demo to match screenshot)
  activePath?: string;
};

export function Header({ activePath }: Props) {
  const pathname = usePathname();
  const current = activePath ?? pathname ?? "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active link style: subtle dark bg + inner white underline (matches screenshot)
  const linkClass = (active: boolean) =>
    cn(
      "relative inline-flex items-center rounded px-3 py-2 text-sm font-medium",
      "text-white/90 hover:text-white transition-colors",
      active &&
        "text-white after:absolute after:left-3 after:right-3 after:bottom-1 after:h-0.5 after:bg-white"
    );

  return (
    <header
      className={cn("fixed z-50 w-full bg-[#2B7DA2] text-white")}
      aria-label="Site header"
    >
      <div className="flex h-20 items-center justify-between px-5 md:px-20 lg:px-24">
        {/* Logo area */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo2.png"
            alt="Tech Solutions Logo"
            width={90}
            height={90}
            className="h-[70px] w-[70px] md:h-[90px] md:w-[90px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass(current === "/")}>
            Home
          </Link>

          <Link href="/about" className={linkClass(current === "/about")}>
            About us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  linkClass(current.startsWith("/consulting")),
                  "gap-1"
                )}
                aria-label="Open Consulting Services menu"
              >
                <span>Services</span>
                <ChevronDown className="size-4" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="min-w-64"
            >
              <DropdownMenuItem asChild>
                <Link href="/consulting/solutions">Solutions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/consulting/master-vendor-program">
                  Enterprise Engagement Solutions
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/consulting/talent-acquisition">
                  Workforce Development Solutions
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/career" className={linkClass(current === "/career")}>
            Careers
          </Link>
          <Link href="/contact" className={linkClass(current === "/contact")}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-[#2B7DA2] text-white flex flex-col px-5 pb-4 space-y-3"
          aria-label="Mobile main navigation"
        >
          <Link
            href="/"
            className={linkClass(current === "/")}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={linkClass(current === "/about")}
            onClick={() => setMobileMenuOpen(false)}
          >
            About us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  linkClass(current.startsWith("/consulting")),
                  "gap-1"
                )}
                aria-label="Open Consulting Services menu"
              >
                <span>Services</span>
                <ChevronDown className="size-4" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="min-w-64"
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/consulting/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/consulting/master-vendor-program"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enterprise Engagement Solutions
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/consulting/talent-acquisition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Workforce Development Solutions
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/career"
            className={linkClass(current === "/career")}
            onClick={() => setMobileMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className={linkClass(current === "/contact")}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
