import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Розробка сайтів та веб-додатків для бізнесу | DIVa Tech",
  description:
    "Розробка сучасних сайтів та веб-додатків для вашого бізнесу під ключ. Швидкість, адаптивний дизайн та SEO-оптимізація. Замовляйте консультацію!",
  keywords:
    "розробка сайтів, створення сайтів, веб-розробка, веб-додатки, Full Stack Developer, React, Next.js, TypeScript, JavaScript, UI/UX, адаптивний дизайн, SEO, сайт для бізнесу, корпоративний сайт, landing page, інтернет-магазин",
  openGraph: {
    title: "Розробка сайтів та веб-додатків для бізнесу | DIVa Tech",
    description:
      "Розробка сучасних сайтів та веб-додатків для вашого бізнесу під ключ. Швидкість, адаптивний дизайн та SEO-оптимізація. Замовляйте консультацію!",
    url: "https://divatech.studio",
    siteName: "DIVa Tech",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Розробка сайтів та веб-додатків для бізнесу | DIVa Tech",
    description:
      "Розробка сучасних сайтів та веб-додатків для вашого бізнесу під ключ. Швидкість, адаптивний дизайн та SEO-оптимізація. Замовляйте консультацію!",
  },
};

import CursorGlow from "../components/CursorGlow";
import ScrollObserver from "../components/ScrollObserver";
import { LanguageProvider } from "../context/LanguageContext";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <LanguageProvider>
          <CursorGlow />
          <ScrollObserver />
          {children}
        </LanguageProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
