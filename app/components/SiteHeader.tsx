import type { CSSProperties } from "react";
import Link from "next/link";

type SiteHeaderProps = {
  revealStyle?: CSSProperties;
};

export default function SiteHeader({ revealStyle }: SiteHeaderProps) {
  return (
    <header
      className="sticky top-3 z-30 mx-auto w-full max-w-6xl px-4 pt-4"
      data-reveal
      style={revealStyle}
    >
      <div className="grid items-center gap-3 rounded-2xl border border-sky-200/60 bg-sky-50/70 p-2 shadow-lg backdrop-blur-md md:grid-cols-3 md:rounded-full">
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-sky-900">
          <span className="h-3 w-3 rounded-full bg-linear-to-b from-sky-400 to-blue-700 ring-4 ring-sky-300/30" />
          <span>AdeMas.dev</span>
        </Link>

        <nav className="flex flex-wrap gap-4 text-sm font-semibold text-sky-800 md:justify-center">
          <Link href="/#showcase" className="transition-colors hover:text-blue-700">
            Showcase
          </Link>
          <Link href="/#services" className="transition-colors hover:text-blue-700">
            Services
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-blue-700">
            Contact
          </Link>
          <Link href="/blog" className="transition-colors hover:text-blue-700">
            Blog
          </Link>
        </nav>

        <a
          href="https://github.com/ademas-wahyu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-full border border-sky-700/30 bg-white/70 px-4 font-semibold text-sky-900 transition duration-200 hover:-translate-y-0.5 hover:border-sky-700/60"
        >
          Follow GitHub
        </a>
      </div>
    </header>
  );
}
