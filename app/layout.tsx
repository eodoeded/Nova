import "@/styles/main.css";

import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";

import clsx from "clsx";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { getOG } from "@/lib/og";

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
  openGraph: getOG(),
  twitter: {
    card: "summary_large_image",
    title: "Max McIsted",
    description: "Max McIsted's personal website",
    images: [getOG().images[0]],
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.className)} suppressHydrationWarning>
      <body>
        <Providers>
          <ViewTransitions>
            <main className="mx-auto max-w-screen-sm overflow-x-hidden px-6 py-24 md:overflow-x-visible ">
              <article className="article">{children}</article>
            </main>
          </ViewTransitions>
        </Providers>
      </body>
    </html>
  );
}
