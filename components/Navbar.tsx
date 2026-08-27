"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download, ArrowUpRight, } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Navbar */}
      <div className="mx-auto mt-4 w-[calc(100%-24px)] max-w-7xl">
        <nav
          className="relative flex h-16 items-center justify-between rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_85%,transparent)] px-4 shadow-lg backdrop-blur-xl transition-colors duration-300 sm:px-6">

          {/* Logo */}
          <Link
            href="/" onClick={closeMenu} className="group flex items-center gap-3">
            {/* Logo Mark */}
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-sm font-bold text-white shadow-lg shadow-[var(--glow-primary)] transition-transform duration-300 group-hover:scale-105"
              >

              RK
            </div>

            {/* Name */}
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Raviranjan Kumar
              </p>

              <p className="text-xs text-[var(--text-muted)]">
                MERN Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-[var(--primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }
                  `}
                >
                  {link.name}

                  {/* Active Indicator */}
                  {active && (
                    <span
                      className="
                        absolute
                        inset-x-3
                        -bottom-0.5
                        h-0.5
                        rounded-full
                        bg-[var(--primary)]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            {/* <a
              href="/resume.pdf"
              download
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-4
                py-2.5
                text-sm
                font-semibold
                text-[var(--text-primary)]
                transition-all
                duration-300
                hover:border-[var(--primary)]
                hover:text-[var(--primary)]
              "
            >
              <Download size={16} />

              Resume
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary-hover)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--glow-primary)]">

              Let's Talk

              <ArrowUpRight size={16} />
            </Link> */}
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                text-[var(--text-primary)]
                transition-all
                duration-300
                hover:border-[var(--primary)]
                hover:text-[var(--primary)]
              "
            >
              {isMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              absolute
              left-0
              right-0
              top-[calc(100%+8px)]
              overflow-hidden
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
              shadow-2xl
              backdrop-blur-xl
              transition-all
              duration-300
              lg:hidden
              ${
                isMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }
            `}
          >
            <div className="p-3">
              {/* Mobile Links */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                        ${
                          active
                            ? "bg-[var(--glow-primary)] text-[var(--primary)]"
                            : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                        }
                      `}
                    >
                      {link.name}

                      {active && (
                        <span
                          className="h-2 w-2 rounded-full bg-[var(--primary)]"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="my-3 h-px bg-[var(--border)]" />

              {/* Mobile Resume *
             {/* <a
                href="/resume.pdf"
                download
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]">
                <Download size={16} />

                Download Resume
              </a>

              {/* Mobile Contact *
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary-hover)]"
              >
                Let's Talk

                <ArrowUpRight size={16} />
              </Link> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}