import type { Metadata, Viewport } from "next";
import { TikTok_Sans } from "next/font/google";
import "./globals.css";
import { Organization, WithContext } from "schema-dts";

const tiktokSans = TikTok_Sans({
  subsets: ["latin"],
  variable: "--font-tiktok-sans",
});

export const metadata: Metadata = {
  title: "Free, ad-free, customizable, fast, and incredible wiki hosting - WikiBall",
  description:
    "WikiBall is a free, ad-free, customizable, and fast wiki hosting platform. Create your own wiki today!",
  metadataBase: new URL("https://wikiball.org"),
  alternates: {
    canonical: "https://wikiball.org",
  },
  formatDetection: {
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  keywords: [
    "wiki",
    "hosting",
    "free",
    "ad-free",
    "customizable",
    "wiki hosting",
    "wikiball",
  ],
  openGraph: {
    title: "Free, ad-free, customizable, fast, and incredible wiki hosting - WikiBall",
    description:
      "WikiBall is a free, ad-free, customizable, and fast wiki hosting platform. Create your own wiki today!",
    type: "website",
    locale: "en_US",
    siteName: "WikiBall",
    images: [
      {
        url: "/WikiBall.webp",
        width: 1024,
        height: 1024,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: [{ url: "https://wikiball.org/WikiBall.webp" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#1c2a36" },
  ],
  initialScale: 1,
};

const organization: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WikiBall",
  url: "https://wikiball.org",
  logo: "https://wikiball.org/WikiBall.webp",
  alternateName: "Team WikiBall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${tiktokSans.variable} ${notoSerif.variable} font-sans subpixel-antialiased bg-background text-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        {children}
      </body>
    </html>
  );
}
