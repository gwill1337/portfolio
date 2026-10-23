import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Inter, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { Background } from "@/components/Background";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const instrument_serif = Instrument_Serif({
  weight: "400",
  style: "italic",
  variable: "--font-instrument_serif",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "700",
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elisey ar — Backend & Frontend Developer",
  description: "Portfolio of Elisey ar: backend and frontend developer. Creator of Severus (P2P encrypted messenger) and MONA (self-hosted monitoring with ML).",
  metadataBase: new URL("https://eliseyar.vercel.app"),

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "yWfmJFF-8Q8Id4lXFXfH2d_vEMZ10owh7bYGAeQdimk"
  },

  openGraph: {
    title: "Elisey ar — Portfolio",
    description: "Backend & Frontend developer. Rust, Python, FastAPI, Next.js.",
    url: "https://gwill1337.vercel.app",
    siteName: "Elisey ar Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elisey ar — Portfolio",
    description: "Backend & Frontend developer.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${instrument_serif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Elisey ar",
              jobTitle: "Backend & Frontend Developer",
              url: "https://eliseyar.vercel.app",
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
