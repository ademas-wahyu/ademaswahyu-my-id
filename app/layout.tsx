import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ademaswahyu.my.id"),
  title: {
    default: "Ade Mas Wahyu | Full Stack Web Developer",
    template: "%s | Ade Mas Wahyu",
  },
  description:
    "Landing page portofolio Ade Mas Wahyu, Full Stack Web Developer. Fokus pada aplikasi web modern yang cepat, scalable, dan user-friendly.",
  keywords: [
    "Ade Mas Wahyu",
    "Full Stack Web Developer",
    "Jasa Pembuatan Website",
    "Web Developer Indonesia",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Backend Developer",
    "Frontend Developer",
    "Freelance Web Developer",
    "Portofolio Web Developer",
  ],
  alternates: {
    canonical: "https://ademaswahyu.my.id",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ademaswahyu.my.id",
    siteName: "Ade Mas Wahyu",
    title: "Ade Mas Wahyu | Full Stack Web Developer",
    description:
      "Portofolio Ade Mas Wahyu: Full Stack Web Developer untuk website modern, cepat, scalable, dan user-friendly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ade Mas Wahyu | Full Stack Web Developer",
    description:
      "Portofolio Ade Mas Wahyu: Full Stack Web Developer untuk website modern, cepat, scalable, dan user-friendly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
