"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteHeaderProps = {
  revealStyle?: CSSProperties;
};

const sectionLinks = [
  { id: "showcase", label: "Showcase" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function SiteHeader({ revealStyle }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  const closeMenu = () => setIsOpen(false);

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-3 z-30 mx-auto w-full max-w-6xl px-4 pt-4" style={revealStyle}>
      <div className="rounded-2xl border border-sky-200/60 bg-sky-50/70 p-2 shadow-lg backdrop-blur-md md:rounded-full">
        <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-3">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-sky-900">
            <span className="h-3 w-3 rounded-full bg-linear-to-b from-sky-400 to-blue-700 ring-4 ring-sky-300/30" />
            <span>AdeMas.dev</span>
          </Link>

          <nav className="hidden flex-wrap gap-4 text-sm font-semibold text-sky-800 md:flex md:justify-center">
            {sectionLinks.map((item) => (
              <a key={item.id} href={sectionHref(item.id)} className="transition-colors hover:text-blue-700">
                {item.label}
              </a>
            ))}
            <Link href="/blog" className="transition-colors hover:text-blue-700">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:justify-self-end">
            <a
              href="https://github.com/ademas-wahyu"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 items-center justify-center rounded-full border border-sky-700/30 bg-white/70 px-4 font-semibold text-sky-900 transition duration-200 hover:-translate-y-0.5 hover:border-sky-700/60 md:inline-flex"
            >
              Follow GitHub
            </a>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-700/30 bg-white/70 text-sky-900 transition hover:border-sky-700/60 md:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="block h-0.5 w-5 bg-current" />
              <span className="sr-only">Toggle</span>
            </button>
          </div>
        </div>

        {isOpen ? (
          <nav id="mobile-nav" className="mt-3 grid gap-2 rounded-xl border border-sky-200/70 bg-white/75 p-3 text-sm font-semibold text-sky-800 md:hidden">
            {sectionLinks.map((item) => (
              <a
                key={item.id}
                href={sectionHref(item.id)}
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 transition hover:bg-sky-100/70"
              >
                {item.label}
              </a>
            ))}
            <Link href="/blog" onClick={closeMenu} className="rounded-lg px-2 py-2 transition hover:bg-sky-100/70">
              Blog
            </Link>
            <a
              href="https://github.com/ademas-wahyu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-1 inline-flex h-10 items-center justify-center rounded-full border border-sky-700/30 bg-white px-4 text-sky-900 transition hover:border-sky-700/60"
            >
              Follow GitHub
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
