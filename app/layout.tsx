import type { Metadata } from "next";
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
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Ade Mas Wahyu | Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ade Mas Wahyu | Full Stack Web Developer",
    description:
      "Portofolio Ade Mas Wahyu: Full Stack Web Developer untuk website modern, cepat, scalable, dan user-friendly.",
    images: ["/og-cover.svg"],
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
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
