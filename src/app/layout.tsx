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
  title: "DIVa Tech | Професійна розробка сайтів та веб-додатків",
  description: "Професійний сайт — сильний бізнес. DIVa Tech створює сучасні сайти та веб-додатки, що працюють на результат вашого бізнесу. Швидкість, якість та індивідуальний підхід.",
  keywords: "розробка сайтів, створення сайтів, веб-розробка, веб-додатки, Full Stack Developer, React, Next.js, TypeScript, JavaScript, UI/UX, адаптивний дизайн, SEO, сайт для бізнесу, корпоративний сайт, landing page, інтернет-магазин",
  openGraph: {
    title: "DIVa Tech | Професійна розробка сайтів та веб-додатків",
    description: "Професійний сайт — сильний бізнес. DIVa Tech створює сучасні сайти та веб-додатки, що працюють на результат вашого бізнесу. Швидкість, якість та індивідуальний підхід.",
    url: "https://divatech.studio",
    siteName: "DIVa Tech",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIVa Tech | Професійна розробка сайтів та веб-додатків",
    description: "Професійний сайт — сильний бізнес. DIVa Tech створює сучасні сайти та веб-додатки, що працюють на результат вашого бізнесу.",
  },
};

import CursorGlow from "../components/CursorGlow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
