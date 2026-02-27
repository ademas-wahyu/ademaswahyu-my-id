import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid min-h-[calc(100vh-12rem)] w-full max-w-6xl place-items-center px-4 py-10 sm:px-6">
        <section className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-[#a7c8e396] bg-linear-to-br from-[#e7f2ff] via-[#dcecff] to-[#cfe4fb] p-7 text-center shadow-[0_30px_70px_-45px_rgba(10,51,86,0.7)] sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-16 h-56 w-56 rounded-full bg-white/45 blur-2xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-[#1f6ec8]/20 blur-3xl" />

          <p className="font-mono text-xs tracking-[0.12em] text-[#3f6689]">ERROR 404</p>
          <h1 className="mt-3 text-[clamp(2.2rem,8vw,4.6rem)] leading-[0.95] tracking-[-0.03em] text-[#133b5e]">
            Halaman
            <br />
            Tidak Ditemukan
          </h1>
          <p className="mx-auto mt-4 max-w-[56ch] text-[#486b8b]">
            Sepertinya URL yang kamu tuju tidak tersedia atau sudah dipindahkan.
            Kembali ke halaman utama untuk melanjutkan eksplorasi portofolio.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#2f8cff] px-5 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1f6dd7] sm:w-auto"
            >
              Kembali ke Home
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[#2b5c8452] bg-white/70 px-5 font-semibold text-[#1f4d72] transition duration-200 hover:-translate-y-0.5 hover:border-[#28689b99] sm:w-auto"
            >
              Buka Blog
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
