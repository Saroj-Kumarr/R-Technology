"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  // Optional override so you can force an active item (used in the demo to match screenshot)
  activePath?: string;
};

export function TransparentHeader({ activePath }: Props) {
  const pathname = usePathname();
  const current = activePath ?? pathname ?? "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    // Close mobile menus on route change
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [current]);

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
      className={cn("absolute w-full top-40 md:top-20 z-10")}
      aria-label="Site header"
    >
      <div className="flex h-16 items-center justify-between px-5 md:px-20 lg:px-24">
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

          {/* Services (desktop dropdown) */}
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
                <Link href="/consulting/it-staff-augmentation">Solutions</Link>
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
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/60 text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-nav"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden px-5 mt-2">
          <nav
            id="mobile-nav"
            aria-label="Mobile main"
            className="flex flex-col gap-1 rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 p-2 text-white"
          >
            <Link
              href="/"
              className={cn(
                "rounded px-3 py-2 text-sm hover:bg-white/10",
                current === "/" && "bg-white/10"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "rounded px-3 py-2 text-sm hover:bg-white/10",
                current === "/about" && "bg-white/10"
              )}
            >
              About us
            </Link>

            {/* Services (mobile collapsible) */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className={cn(
                "flex items-center justify-between rounded px-3 py-2 text-sm hover:bg-white/10",
                current.startsWith("/consulting") && "bg-white/10"
              )}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services"
            >
              <span>Services</span>
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  mobileServicesOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {mobileServicesOpen && (
              <div id="mobile-services" className="flex flex-col gap-1 pl-3">
                <Link
                  href="/consulting/it-staff-augmentation"
                  className="rounded px-3 py-2 text-sm hover:bg-white/10"
                >
                  Solutions
                </Link>
                <Link
                  href="/consulting/master-vendor-program"
                  className="rounded px-3 py-2 text-sm hover:bg-white/10"
                >
                  Enterprise Engagement Solutions
                </Link>
                <Link
                  href="/consulting/talent-acquisition"
                  className="rounded px-3 py-2 text-sm hover:bg-white/10"
                >
                  Workforce Development Solutions
                </Link>
              </div>
            )}

            <Link
              href="/career"
              className={cn(
                "rounded px-3 py-2 text-sm hover:bg-white/10",
                current === "/career" && "bg-white/10"
              )}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={cn(
                "rounded px-3 py-2 text-sm hover:bg-white/10",
                current === "/contact" && "bg-white/10"
              )}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default TransparentHeader;
