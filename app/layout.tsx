import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Точка роста — маркетинговое агентство",
    template: "%s — Точка роста",
  },
  description: siteConfig.description,
  keywords: [
    "маркетинговое агентство",
    "digital-маркетинг",
    "удалённая работа",
    "копирайтинг",
    "маркетплейсы",
    "SMM",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: "Точка роста — маркетинговое агентство",
    description:
      "Закрываем регулярные digital-задачи бизнеса: тексты, соцсети, маркетплейсы, репутация.",
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Точка роста — маркетинговое агентство",
    description:
      "Закрываем регулярные digital-задачи бизнеса: тексты, соцсети, маркетплейсы, репутация.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="font-sans bg-brand-bg text-brand-text min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
