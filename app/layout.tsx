import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Unbounded } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { Background } from "@/components/Background";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gwill1337 — Backend & Fullstack Developer",
  description: "Portfolio of Gwill1337: backend and fullstack developer. Creator of Severus (P2P encrypted messenger) and MONA (self-hosted monitoring with ML).",
  metadataBase: new URL("https://gwill1337.vercel.app"),

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "yWfmJFF-8Q8Id4lXFXfH2d_vEMZ10owh7bYGAeQdimk"
  },

  openGraph: {
    title: "Gwill1337 — Portfolio",
    description: "Backend & Fullstack developer. Rust, Python, FastAPI.",
    url: "https://gwill1337.vercel.app",
    siteName: "Gwill1337 Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwill1337 — Portfolio",
    description: "Backend & Fullstack developer.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${unbounded.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gwill1337",
              jobTitle: "Backend & Fullstack Developer",
              url: "https://gwill1337.vercel.app",
              sameAs: ["https://github.com/gwill1337"],
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <Background />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
