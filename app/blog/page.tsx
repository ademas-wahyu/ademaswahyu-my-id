import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import SmoothScroll from "../components/SmoothScroll";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog Ade Mas Wahyu tentang full stack web development, Next.js, TypeScript, dan praktik engineering modern.",
  alternates: {
    canonical: "https://ademaswahyu.my.id/blog",
  },
  openGraph: {
    title: "Blog | Ade Mas Wahyu",
    description:
      "Artikel seputar full stack web development, Next.js, TypeScript, dan engineering workflow.",
    url: "https://ademaswahyu.my.id/blog",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Blog Ade Mas Wahyu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Ade Mas Wahyu",
    description:
      "Artikel seputar full stack web development, Next.js, TypeScript, dan engineering workflow.",
    images: ["/og-cover.svg"],
  },
};

export default function BlogPage() {
  return (
    <>
      <ScrollReveal />
      <SmoothScroll />
      <SiteHeader />
      <main className="mx-auto grid w-[min(1060px,92vw)] gap-8 py-10">
        <section
          className="rounded-[30px] border border-[#a7c8e396] bg-linear-to-br from-[#e7f2ff] via-[#dcecff] to-[#cfe4fb] p-7 text-center md:p-12"
          data-reveal
        >
          <p className="font-mono text-xs tracking-[0.11em] text-[#3c6285]">BLOG</p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.8rem)] leading-[1.03] tracking-[-0.03em] text-[#103252]">
            Coming Soon
          </h1>
          <p className="mx-auto mt-3 max-w-[56ch] text-[#3f6384]">
            Halaman blog sedang disiapkan. Nantinya akan berisi artikel seputar
            full stack web development, Next.js, TypeScript, dan engineering
            workflow.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
