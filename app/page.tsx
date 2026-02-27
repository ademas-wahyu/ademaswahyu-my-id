import type { CSSProperties } from "react";
import ScrollReveal from "./components/ScrollReveal";
import SmoothScroll from "./components/SmoothScroll";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const services = [
  {
    title: "Startup Founder",
    description: "MVP web app cepat dengan arsitektur siap scale untuk validasi produk.",
  },
  {
    title: "UMKM & Business",
    description: "Website dan dashboard internal yang lebih rapi, aman, dan mudah dikelola.",
  },
  {
    title: "Agency Partner",
    description: "Kolaborasi white-label untuk delivery frontend/backend tepat waktu.",
  },
];

const capabilities = [
  "Send & Receive Data Fast",
  "Secure API Architecture",
  "Scalable Full Stack Delivery",
  "Performance First Frontend",
];

const revealStyle = (delayMs: number): CSSProperties => ({
  ["--reveal-delay" as string]: `${delayMs}ms`,
});

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <SmoothScroll />
      <SiteHeader />

      <main className="mx-auto grid w-full max-w-6xl gap-9 px-4 py-8 sm:px-6 sm:py-10">
        <section
          className="relative grid min-h-[420px] items-center gap-5 overflow-hidden rounded-[26px] bg-linear-to-br from-[#d6e4f4] via-[#bdd3ea] to-[#a7c7e9] p-5 sm:p-6 md:grid-cols-[1.1fr_0.9fr] md:rounded-[30px] md:p-12"
          data-reveal
          style={revealStyle(60)}
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-white/40 blur-2xl" />

          <div className="relative z-10" data-reveal style={revealStyle(140)}>
            <p className="font-mono text-[11px] tracking-[0.11em] text-[#325b7f]">ADE MAS WAHYU / FULL STACK WEB DEVELOPER</p>
            <h1 className="mt-3 max-w-[13ch] text-[clamp(1.9rem,5vw,3.8rem)] leading-[1.03] tracking-[-0.03em] text-[#0f2c45]">
              Build modern web products with clean architecture and bold UI.
            </h1>
            <p className="mt-3 max-w-[52ch] text-[#355b7d]">
              Saya merancang dan membangun aplikasi web dari konsep sampai production: cepat, minimalis, dan siap dipakai user nyata.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#showcase" className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#2f8cff] px-5 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1f6dd7] sm:w-auto">
                Explore Work
              </a>
              <a
                href="https://github.com/ademas-wahyu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[#2b5c8452] bg-[#ffffff75] px-5 font-semibold text-[#1f4d72] transition duration-200 hover:-translate-y-0.5 hover:border-[#28689b99] sm:w-auto"
              >
                GitHub / ademas-wahyu
              </a>
            </div>
          </div>

          <aside
            className="animate-float-card relative z-10 ml-auto w-full max-w-sm rounded-3xl border border-[#4277a14d] bg-linear-to-br from-white/95 to-[#e0edfabf] p-5 text-[#36597a] shadow-[0_36px_70px_-40px_rgba(10,51,86,0.55)]"
            data-reveal
            style={revealStyle(220)}
            aria-label="Portfolio highlight"
          >
            <p className="font-mono text-xs text-[#3e6e97]">Latest Build</p>
            <h2 className="mt-2 text-lg font-semibold text-[#173f61]">Digital Product Platform</h2>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>Next.js + Node.js</li>
              <li>Realtime Dashboard</li>
              <li>Payment + Auth Ready</li>
            </ul>
          </aside>
        </section>

        <section
          id="showcase"
          className="rounded-[26px] bg-[#0f3556] p-3 sm:p-4 md:rounded-[30px]"
          data-reveal
          style={revealStyle(70)}
        >
          <article className="rounded-3xl border border-[#cae2f7a6] bg-linear-to-br from-[#dbe8f5] via-[#cddff0] to-[#bed4ea] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-45px_rgba(15,54,89,0.65)] sm:p-5 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-3.5 w-3.5 rounded-full bg-linear-to-b from-[#4ca8ff] to-[#196bc5]" />
              <p className="text-sm font-semibold text-[#315c81]">AdeMas Studio</p>
              <nav className="ml-auto flex flex-wrap gap-4 text-xs text-[#507394]">
                <a href="#services">Services</a>
                <a href="#showcase">Projects</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <p className="mt-3 text-[clamp(2.4rem,10vw,8rem)] leading-[0.95] font-bold tracking-[0.04em] text-[#f5f9ffe6]">
              ADEMAS
            </p>

            <div className="-mt-2 grid items-end gap-4 md:grid-cols-[0.8fr_1.2fr_0.8fr]">
              <div className="animate-orb mx-auto aspect-square w-36 rounded-full bg-[radial-gradient(circle_at_28%_28%,#7ed0ff_0%,#2d8de6_35%,#0f3763_70%,#082746_100%)] shadow-[0_30px_40px_-30px_rgba(8,41,74,0.8)] sm:w-40" />

              <div className="rounded-2xl border border-[#5280a63b] bg-[#e8f3ffa1] p-4">
                <h2 className="text-[clamp(1.2rem,2.6vw,2.1rem)] leading-[1.08] font-semibold text-[#173f61]">Fast Build, Fast Receive</h2>
                <p className="mt-2 text-[#3b6386]">
                  Frontend dan backend yang terhubung rapi untuk experience user yang halus dan performa tinggi.
                </p>
                <a href="#contact" className="mt-3 inline-flex border-b border-[#2d699d] font-semibold text-[#1f598d]">
                  Explore More
                </a>
              </div>

              <div className="rounded-xl bg-[#123e61f2] p-4 text-[#e4f2ff] transition duration-200 hover:-translate-y-1">
                <p className="text-4xl font-bold leading-none">90M+</p>
                <span className="mt-1 inline-block text-sm text-[#9ec6ee]">Data processed across integrated modules</span>
              </div>
            </div>

            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4" aria-label="Capabilities">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#5580a440] bg-[#edf6ff94] px-3 py-1.5 text-center font-mono text-[11px] text-[#3f6587]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section
          id="services"
          className="grid items-center gap-4 rounded-[22px] border border-[#b5cee7a6] bg-linear-to-br from-[#f8fbff] to-[#edf4fd] p-5 transition duration-300 hover:-translate-y-1 md:grid-cols-[1.2fr_0.8fr] md:p-8"
          data-reveal
          style={revealStyle(90)}
        >
          <article>
            <p className="font-mono text-xs tracking-[0.09em] text-[#4e7698]">Hire and Build Globally</p>
            <h2 className="mt-2 max-w-[18ch] text-[clamp(1.4rem,3vw,2.35rem)] leading-[1.08] font-semibold text-[#163f61]">
              Web solutions crafted for growth-focused teams.
            </h2>
            <p className="mt-2 text-[#527392]">
              Mulai dari landing page, dashboard internal, sampai web platform kompleks, saya bantu delivery dengan pendekatan pragmatic engineering.
            </p>
          </article>

          <div className="rounded-3xl bg-linear-to-br from-[#1f6ec8] to-[#49a2ff] p-4 text-[#f7fcff] shadow-[0_32px_45px_-35px_rgba(9,51,91,0.88)] transition duration-200 hover:-translate-y-1">
            <div className="inline-flex rounded-full border border-white/45 px-3 py-1 text-xs">Available for freelance</div>
            <h3 className="mt-3 text-xl font-semibold">Ade Mas Wahyu</h3>
            <p className="text-[#dbecff]">Full Stack Engineer</p>
          </div>
        </section>

        <section
          id="contact"
          className="grid justify-items-center gap-3 overflow-hidden rounded-[22px] bg-linear-to-b from-[#123f67] to-[#102f4d] p-6 text-center text-[#eaf5ff] sm:p-7 md:p-10"
          data-reveal
          style={revealStyle(100)}
        >
          <div className="animate-orb aspect-square w-40 rounded-full bg-[radial-gradient(circle_at_28%_28%,#7ed0ff_0%,#2d8de6_35%,#0f3763_70%,#082746_100%)] shadow-[0_30px_40px_-30px_rgba(8,41,74,0.8)] sm:w-45" />
          <h2 className="max-w-[22ch] text-[clamp(1.4rem,2.8vw,2.35rem)] leading-[1.07] font-semibold">
            Grow beyond borders with resilient web engineering.
          </h2>
          <p className="max-w-[64ch] text-[#9ec3e5]">
            Fokus pada product quality, architecture clarity, dan maintainability agar tim kamu bisa bergerak cepat tanpa technical debt berlebihan.
          </p>
          <a href="mailto:ademaswahyubusiness@gmail.com" className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#2f8cff] px-5 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1f6dd7] sm:w-auto">
            Start Collaboration
          </a>
        </section>

        <section
          className="rounded-[22px] border border-[#b8d0e6b3] bg-[#f2f7fd] p-5 md:p-8"
          data-reveal
          style={revealStyle(120)}
        >
          <h2 className="text-center text-[clamp(1.35rem,2.4vw,2rem)] font-semibold text-[#163f61]">Who We Serve</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#a5c3de8c] bg-white/80 p-4 transition duration-200 hover:-translate-y-1 hover:border-[#5a91bfb3]"
                data-reveal
                style={revealStyle(160 + index * 110)}
              >
                <h3 className="text-base font-semibold text-[#1b4a71]">{service.title}</h3>
                <p className="mt-2 text-[#537594]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter revealStyle={revealStyle(80)} />
    </>
  );
}
