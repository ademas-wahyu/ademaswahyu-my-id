import type { CSSProperties } from "react";
import Link from "next/link";

type SiteFooterProps = {
  revealStyle?: CSSProperties;
};

export default function SiteFooter({ revealStyle }: SiteFooterProps) {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6" data-reveal style={revealStyle}>
      <div className="grid gap-4 rounded-[22px] border border-[#b2cde499] bg-gradient-to-br from-[#f0f8ffe6] to-[#dcebf8d9] p-5 shadow-[0_24px_50px_-42px_rgba(8,41,74,0.8)] md:grid-cols-[1.3fr_0.8fr_1fr] md:p-7">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-[#1d486b]">
            <span className="h-3 w-3 rounded-full bg-gradient-to-b from-[#56b3ff] to-[#1f6ecd] shadow-[0_0_0_4px_rgba(95,167,235,0.22)]" />
            <span>Ade Mas Wahyu</span>
          </Link>
          <p className="mt-3 max-w-[42ch] text-[#4d6f8f]">
            Full Stack Web Developer yang fokus pada web product cepat, modern,
            dan maintainable.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[#487196]">Navigate</h3>
          <Link href="/#showcase" className="mt-2 block text-[#1f578a] hover:text-[#194a76]">
            Showcase
          </Link>
          <Link href="/#services" className="mt-2 block text-[#1f578a] hover:text-[#194a76]">
            Services
          </Link>
          <Link href="/#contact" className="mt-2 block text-[#1f578a] hover:text-[#194a76]">
            Contact
          </Link>
          <Link href="/blog" className="mt-2 block text-[#1f578a] hover:text-[#194a76]">
            Blog
          </Link>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[#487196]">Connect</h3>
          <a
            href="https://github.com/ademas-wahyu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-[#1f578a] hover:text-[#194a76]"
          >
            github.com/ademas-wahyu
          </a>
          <a href="mailto:ademaswahyubusiness@gmail.com" className="mt-2 block break-all text-[#1f578a] hover:text-[#194a76]">
            ademaswahyubusiness@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
