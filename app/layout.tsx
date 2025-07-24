import "@/styles/main.css";

import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";

import clsx from "clsx";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import LenisInit from "@/components/LenisInit";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Layout component for the entire application
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Max McIsted",
    template: "%s | Max McIsted",
  },
  description: "Max McIsted's personal website",
  icons: {
    icon: "/circle.svg",
    shortcut: "/circle.svg",
    apple: "/circle.svg",
  },
  openGraph: OpenGraph.openGraph,
  twitter: OpenGraph.twitter,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(inter.className)} suppressHydrationWarning>
      <body>
        <LenisInit />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <main className="relative py-24 md:overflow-x-visible">
              <article className="article mx-auto max-w-screen-sm px-4 md:px-6">{children}</article>
            </main>
          </Providers>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
