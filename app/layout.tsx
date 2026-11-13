import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { CookieNotice } from "@/components/CookieNotice";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "FΛRGE STUDIO® — Digital agency in Campania",
    template: "%s — FΛRGE STUDIO®",
  },
  description: site.descrizione,
  applicationName: "FARGE STUDIO",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "FΛRGE STUDIO®",
    url: "/",
    title: "FΛRGE STUDIO® — Digital agency in Campania",
    description: site.descrizione,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* L'intro della home si vede una sola volta per sessione */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('farge-intro'))document.documentElement.setAttribute('data-intro-seen','');sessionStorage.setItem('farge-intro','1')}catch(e){}",
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <div className="scroll-progress" aria-hidden="true" />
        <Cursor />
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2"
        >
          Vai al contenuto
        </a>
        <Header />
        <main id="contenuto" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
